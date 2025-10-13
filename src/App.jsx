import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Hero } from './pages/Hero';
import { Services } from './pages/Services';
import { Reviews } from './pages/Reviews';
import { About } from './pages/About';
import { Location } from './pages/Location';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <Services />
          <Reviews />
          <About />
          <Location />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  );
}

export default App;

