import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappNumber = '5511987654321';
  const message = encodeURIComponent('Olá! Gostaria de agendar um horário.');

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Tooltip */}
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          className="absolute bottom-full right-0 mb-2 px-4 py-2 bg-foreground text-background rounded-lg shadow-lg whitespace-nowrap text-sm font-medium"
        >
          Agende seu horário!
          <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-foreground"></div>
        </motion.div>
      )}

      {/* Botão */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onHoverStart={() => setShowTooltip(true)}
        onHoverEnd={() => setShowTooltip(false)}
        onClick={handleClick}
        className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center group"
        aria-label="Contato via WhatsApp"
      >
        {/* Animação de pulso */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
        
        {/* Ícone */}
        <MessageCircle className="w-8 h-8 text-white relative z-10" />
      </motion.button>
    </div>
  );
};

