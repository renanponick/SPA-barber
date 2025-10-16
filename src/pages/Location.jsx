import { MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export const Location = () => {
  const address = {
    street: 'Rua das Tesouras, 123',
    neighborhood: 'Centro',
    city: 'São Paulo',
    state: 'SP',
    zip: '01234-567',
    coordinates: {
      lat: -23.550520,
      lng: -46.633308,
    },
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${address.coordinates.lat},${address.coordinates.lng}`;
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.633308!3d-23.550520!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjkiUyA0NsKwMzgnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr`;

  return (
    <section id="location" className="py-20 bg-background">
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
            Nossa Localização
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-800 mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Venha nos visitar e conheça nosso espaço moderno e acolhedor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start overflow-hidden">
          {/* Informações de Endereço */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-xl p-8 shadow-lg"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2 font-['Playfair_Display']">
                  Endereço Completo
                </h3>
                <div className="text-muted-foreground space-y-1">
                  <p>{address.street}</p>
                  <p>
                    {address.neighborhood}, {address.city} - {address.state}
                  </p>
                  <p>CEP: {address.zip}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-6 mb-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Horário de Funcionamento
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Segunda a Sexta:</span>
                  <span className="font-medium text-foreground">9h - 20h</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span className="font-medium text-foreground">9h - 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span className="font-medium text-foreground">Fechado</span>
                </div>
              </div>
            </div>

            <motion.a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-amber-600 to-amber-800 text-white font-semibold py-3 px-6 rounded-lg hover:from-amber-700 hover:to-amber-900 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <ExternalLink className="w-5 h-5" />
              Abrir no Google Maps
            </motion.a>
          </motion.div>

          {/* Mapa Integrado */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-xl overflow-hidden shadow-lg h-[500px]"
          >
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Barbearia Premium"
              className="w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

