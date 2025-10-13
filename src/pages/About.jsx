import { Award, Users, Clock, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Profissionais Qualificados',
      description:
        'Nossa equipe é formada por barbeiros experientes e certificados, sempre atualizados com as últimas tendências.',
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description:
        'Cada cliente é único. Oferecemos consultas personalizadas para garantir o resultado perfeito.',
    },
    {
      icon: Clock,
      title: 'Pontualidade',
      description:
        'Respeitamos seu tempo. Agendamentos organizados para evitar esperas desnecessárias.',
    },
    {
      icon: Heart,
      title: 'Produtos Premium',
      description:
        'Utilizamos apenas produtos de alta qualidade para garantir os melhores resultados e cuidado com seus cabelos e barba.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
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
            Sobre Nossa Barbearia
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-800 mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Texto Principal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-foreground mb-6 font-['Playfair_Display']">
              Tradição e Modernidade em Perfeita Harmonia
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Fundada com o propósito de oferecer uma experiência única em
                cuidados masculinos, a <strong className="text-foreground">Barbearia Premium</strong> combina
                técnicas tradicionais de barbearia com as tendências mais
                modernas do mercado.
              </p>
              <p>
                Nosso espaço foi cuidadosamente projetado para proporcionar
                conforto e sofisticação, criando um ambiente onde você pode
                relaxar enquanto cuida da sua aparência. Cada detalhe foi
                pensado para garantir uma experiência memorável.
              </p>
              <p>
                Acreditamos que um bom corte de cabelo ou barba vai além da
                estética – é uma questão de autoestima e confiança. Por isso,
                investimos constantemente em capacitação profissional e
                produtos de alta qualidade para entregar sempre o melhor
                resultado.
              </p>
            </div>
          </motion.div>

          {/* Imagem Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-amber-600/20 to-amber-800/20 rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center bg-card/50 backdrop-blur-sm">
                <div className="text-center p-8">
                  <Award className="w-20 h-20 text-amber-600 mx-auto mb-4" />
                  <p className="text-2xl font-bold text-foreground font-['Playfair_Display']">
                    Excelência em
                    <br />
                    Cada Detalhe
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

