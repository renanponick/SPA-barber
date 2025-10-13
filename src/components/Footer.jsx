import { Instagram, Facebook, MapPin, Clock, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Horário de Funcionamento */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-amber-600" />
              <h3 className="text-lg font-semibold text-foreground">
                Horário de Funcionamento
              </h3>
            </div>
            <div className="space-y-2 text-muted-foreground">
              <p>Segunda a Sexta: 9h - 20h</p>
              <p>Sábado: 9h - 18h</p>
              <p>Domingo: Fechado</p>
            </div>
          </motion.div>

          {/* Endereço */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-amber-600" />
              <h3 className="text-lg font-semibold text-foreground">
                Endereço
              </h3>
            </div>
            <p className="text-muted-foreground">
              Rua das Tesouras, 123
              <br />
              Centro, São Paulo - SP
              <br />
              CEP: 01234-567
            </p>
          </motion.div>

          {/* Contato e Redes Sociais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Phone className="w-5 h-5 text-amber-600" />
              <h3 className="text-lg font-semibold text-foreground">
                Contato
              </h3>
            </div>
            <p className="text-muted-foreground mb-4">
              (11) 98765-4321
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-secondary hover:bg-amber-600 hover:text-white transition-all duration-200"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-border text-center text-muted-foreground"
        >
          <p>
            © {currentYear} Barbearia Premium. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

