import { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { AnimatePresence } from 'framer-motion';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Início', id: 'home' },
    { label: 'Serviços', id: 'services' },
    { label: 'Avaliações', id: 'reviews' },
    { label: 'Sobre', id: 'about' },
    { label: 'Localização', id: 'location' },
  ];

  return (
    <header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-background/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <div className="bg-gradient-to-br from-amber-600 to-amber-800 p-2 rounded-lg">
              <Scissors className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold font-['Playfair_Display'] text-foreground">
              Barbearia Premium
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-amber-600 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle />
            <button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="flex flex-col gap-2 py-4 bg-card rounded-lg shadow-lg">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.id)}
                    className="px-4 py-3 text-left text-foreground hover:bg-accent transition-colors rounded-lg"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

