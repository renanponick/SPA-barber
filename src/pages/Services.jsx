import { Scissors, Sparkles, Users, Paintbrush } from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';
import { motion } from 'framer-motion';

export const Services = () => {
  const services = [
    {
      name: 'Corte Masculino',
      description: 'Corte moderno e personalizado de acordo com seu estilo e formato de rosto.',
      price: 'R$ 50,00',
      duration: '45 min',
      icon: Scissors,
    },
    {
      name: 'Barba',
      description: 'Modelagem e finalização de barba com produtos premium e técnicas profissionais.',
      price: 'R$ 35,00',
      duration: '30 min',
      icon: Sparkles,
    },
    {
      name: 'Corte + Barba',
      description: 'Combo completo com corte de cabelo e barba para um visual impecável.',
      price: 'R$ 75,00',
      duration: '1h 15min',
      icon: Users,
    },
    {
      name: 'Pigmentação',
      description: 'Pigmentação de barba e sobrancelha para um visual mais marcante e definido.',
      price: 'R$ 40,00',
      duration: '40 min',
      icon: Paintbrush,
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
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
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-800 mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferecemos serviços de alta qualidade com profissionais experientes
            e produtos premium para garantir o melhor resultado.
          </p>
        </motion.div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.name} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

