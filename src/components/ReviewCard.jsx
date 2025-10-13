import { Star, User } from 'lucide-react';
import { motion } from 'framer-motion';

export const ReviewCard = ({ review, index }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating
            ? 'fill-amber-500 text-amber-500'
            : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card border border-border rounded-xl p-6 shadow-lg min-w-[300px] md:min-w-[350px]"
    >
      {/* Cabeçalho com Avatar e Nome */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center">
          <User className="w-6 h-6 text-white" />
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{review.name}</h4>
          <p className="text-sm text-muted-foreground">{review.date}</p>
        </div>
      </div>

      {/* Estrelas */}
      <div className="flex gap-1 mb-3">{renderStars(review.rating)}</div>

      {/* Comentário */}
      <p className="text-muted-foreground leading-relaxed">
        {review.comment}
      </p>
    </motion.div>
  );
};

