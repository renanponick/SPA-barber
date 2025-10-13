import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ReviewCard } from '../components/ReviewCard';
import { motion, AnimatePresence } from 'framer-motion';

export const Reviews = () => {
  // Dados de exemplo - em produção, viriam da API do Google Places
  const reviews = [
    {
      name: 'Carlos Silva',
      rating: 5,
      comment:
        'Excelente atendimento! O corte ficou perfeito e o ambiente é muito agradável. Recomendo!',
      date: 'Há 2 semanas',
    },
    {
      name: 'João Pedro',
      rating: 5,
      comment:
        'Melhor barbearia da região! Profissionais qualificados e produtos de primeira qualidade.',
      date: 'Há 1 mês',
    },
    {
      name: 'Rafael Costa',
      rating: 5,
      comment:
        'Sempre saio satisfeito daqui. O barbeiro entende exatamente o que eu quero.',
      date: 'Há 3 semanas',
    },
    {
      name: 'Lucas Mendes',
      rating: 4,
      comment:
        'Ótimo lugar! Ambiente moderno e atendimento de qualidade. Voltarei com certeza.',
      date: 'Há 1 semana',
    },
    {
      name: 'Fernando Alves',
      rating: 5,
      comment:
        'Serviço impecável! A barba ficou perfeita e o preço é justo. Muito satisfeito!',
      date: 'Há 4 dias',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play do carrossel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  // Calcular quantos cards mostrar baseado no tamanho da tela
  const getVisibleReviews = () => {
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    
    if (isMobile) return [reviews[currentIndex]];
    if (isTablet) return [reviews[currentIndex], reviews[(currentIndex + 1) % reviews.length]];
    
    return [
      reviews[currentIndex],
      reviews[(currentIndex + 1) % reviews.length],
      reviews[(currentIndex + 2) % reviews.length],
    ];
  };

  const [visibleReviews, setVisibleReviews] = useState(getVisibleReviews());

  useEffect(() => {
    const handleResize = () => {
      setVisibleReviews(getVisibleReviews());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  useEffect(() => {
    setVisibleReviews(getVisibleReviews());
  }, [currentIndex]);

  return (
    <section id="reviews" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Título da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-['Playfair_Display']">
            O Que Dizem Nossos Clientes
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-800 mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Avaliações reais de clientes satisfeitos com nossos serviços.
          </p>
        </motion.div>

        {/* Carrossel de Avaliações */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex gap-6 justify-center items-stretch">
              <AnimatePresence mode="wait">
                {visibleReviews.map((review, index) => (
                  <ReviewCard key={`${review.name}-${currentIndex}-${index}`} review={review} index={index} />
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Botões de Navegação */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrevious}
              className="p-3 rounded-full bg-card border border-border hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all duration-200 shadow-lg"
              aria-label="Avaliação anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              className="p-3 rounded-full bg-card border border-border hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all duration-200 shadow-lg"
              aria-label="Próxima avaliação"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-amber-600 w-8'
                    : 'bg-border hover:bg-amber-400'
                }`}
                aria-label={`Ir para avaliação ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

