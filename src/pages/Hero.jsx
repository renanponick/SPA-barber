import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-20 min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-amber-950/10"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-amber-600/5 to-transparent rounded-full blur-3xl"
        />
        <div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-amber-800/5 to-transparent rounded-full blur-3xl"
        />
      </div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-amber-600/10 border border-amber-600/20 rounded-full text-amber-600 dark:text-amber-500 text-sm font-medium">
              ✨ Barbearia Premium
            </span>
          </div>

          {/* Título principal */}
          <h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 font-['Playfair_Display'] leading-tight"
          >
            Estilo e
            <br />
            <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              Sofisticação
            </span>
          </h1>

          {/* Subtítulo */}
          <p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Transforme seu visual com os melhores profissionais. Cortes
            modernos, barba impecável e atendimento personalizado.
          </p>

          {/* Botões de CTA */}
          <div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const message = encodeURIComponent(
                  'Olá! Gostaria de agendar um horário.'
                );
                window.open(
                  `https://wa.me/5511987654321?text=${message}`,
                  '_blank'
                );
              }}
              className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-800 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-amber-900 transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
            >
              Agendar Horário
            </button>
            <button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToServices}
              className="px-8 py-4 bg-card border-2 border-border text-foreground font-semibold rounded-lg hover:bg-accent transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
            >
              Ver Serviços
            </button>
          </div>

          {/* Estatísticas */}
          <div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto"
          >
            {[
              { value: '10+', label: 'Anos de Experiência' },
              { value: '5000+', label: 'Clientes Satisfeitos' },
              { value: '4.9', label: 'Avaliação Média' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2 font-['Playfair_Display']">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-20 lg:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollToServices}
          className="p-2 rounded-full bg-card border border-border hover:bg-accent transition-colors"
          aria-label="Rolar para baixo"
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
};

