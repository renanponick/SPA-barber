import { Clock, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

export const ServiceCard = ({ service, index }) => {
  const handleSchedule = () => {
    const message = encodeURIComponent(
      `Olá! Gostaria de agendar um horário para ${service.name}.`
    );
    window.open(`https://wa.me/5511987654321?text=${message}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Ícone do Serviço */}
      <div className="mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
          <service.icon className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Nome do Serviço */}
      <h3 className="text-2xl font-bold text-foreground mb-2 font-['Playfair_Display']">
        {service.name}
      </h3>

      {/* Descrição */}
      <p className="text-muted-foreground mb-4 min-h-[60px]">
        {service.description}
      </p>

      {/* Informações de Preço e Duração */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-2 text-amber-600">
          <DollarSign className="w-5 h-5" />
          <span className="font-semibold text-lg">{service.price}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="w-5 h-5" />
          <span className="text-sm">{service.duration}</span>
        </div>
      </div>

      {/* Botão de Agendamento */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleSchedule}
        className="w-full bg-gradient-to-r from-amber-600 to-amber-800 text-white font-semibold py-3 px-6 rounded-lg hover:from-amber-700 hover:to-amber-900 transition-all duration-200 shadow-md hover:shadow-lg"
      >
        Agendar Agora
      </motion.button>
    </motion.div>
  );
};

