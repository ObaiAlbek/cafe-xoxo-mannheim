import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Komponenten
import { Hero } from './components/Hero';
import { XOXOExperience } from './components/XOXOExperience';
import { AboutUs } from './components/AboutUs';
import { Specialties } from './components/Specialties';
import { Delivery } from './components/Delivery';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal'; 
import { Menu } from './components/Menu';

function App() {
  // 1. ZUSTAND FÜR DAS MODAL (Offen oder Geschlossen?)
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  // Maus-Verfolger Logik
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden relative">
      
      {/* MAGISCHER CURSOR */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 bg-pink-400/40 rounded-full pointer-events-none z-[9999] blur-sm mix-blend-multiply"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />

      {/* DAS NEUE MODAL (Liegt über allem) */}
      <ReservationModal 
        isOpen={isReservationOpen} 
        onClose={() => setIsReservationOpen(false)} 
      />

      {/* 1. Hero Sektion - Jetzt geben wir die Funktion weiter! */}
      <Hero onOpenReservation={() => setIsReservationOpen(true)} />
      
      {/* 2. Über uns */}
      <AboutUs />
      
      {/* 3. Das Erlebnis */}
      <XOXOExperience />
      
      {/* 4. Spezialitäten */}
      <Specialties />
      
      <Menu />

      {/* 5. Lieferung */}
      <Delivery />
      
      {/* 6. Footer */}
      <Footer />
    </div>
  );
}

export default App;