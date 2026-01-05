import { useMemo } from 'react'; 
import { Button } from './ui/button';
import { FadeIn } from './FadeIn';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenReservation: () => void;
}

export function Hero({ onOpenReservation }: HeroProps) {
  
  const petals = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 5,
      size: 10 + Math.random() * 20
    }));
  }, []); 

  return (
    <section className="relative min-h-screen w-full flex items-center bg-white overflow-hidden">
      
      {/* --- HINTERGRUND EFFEKT: BLÜTEN REGEN --- */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {petals.map((petal) => (
          <motion.div
            key={petal.id}
            className="absolute -top-10 text-pink-300/60"
            style={{ 
              left: petal.left, 
              fontSize: `${petal.size}px` 
            }}
            animate={{ 
              y: ['-10vh', '110vh'],
              rotate: [0, 360],
              x: [-20, 20, -20]
            }}
            transition={{ 
              duration: petal.duration, 
              repeat: Infinity, 
              delay: petal.delay,
              ease: "linear"
            }}
          >
            🌸
          </motion.div>
        ))}
      </div>

      <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 min-h-screen relative z-10">
        
        {/* LINKE SEITE - TEXT 
            Mobil: order-2 (Kommt als Zweites, UNTER dem Bild)
            Desktop: lg:order-1 (Kommt als Erstes, LINKS)
        */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 lg:py-0 order-2 lg:order-1">
          
          <FadeIn delay={0.1}>
            <p className="text-pink-400 mb-4" style={{ fontFamily: "'Great Vibes', cursive", fontSize: '1.75rem' }}>
              Willkommen bei
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="text-gray-900 mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3.5rem, 8vw, 7rem)', lineHeight: '1.1', fontWeight: '600', letterSpacing: '-0.02em' }}>
              Frühstück &<br />Brunch Träume
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <h2 className="text-pink-400 mb-8" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '400', fontStyle: 'italic' }}>
              Café XOXO Hugs & Kisses
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <p className="text-gray-500 mb-10 max-w-lg relative z-20" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.125rem', lineHeight: '1.8' }}>
              Wo jeder Moment Instagram-würdig ist und jeder Bissen pure Glückseligkeit.
            </p>
          </FadeIn>
          
          {/* BUTTONS */}
          <FadeIn delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 relative z-20">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={onOpenReservation}
                  size="lg" 
                  className="bg-pink-400 hover:bg-pink-500 text-white px-10 py-6 h-auto rounded-full shadow-lg transition-all" 
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1rem', fontWeight: '600' }}
                >
                  Tisch Reservieren
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-2 border-pink-400 text-pink-400 hover:bg-pink-50 px-10 py-6 h-auto rounded-full transition-all" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1rem', fontWeight: '600' }}>
                  Speisekarte Ansehen
                </Button>
              </motion.div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.6}>
            <p className="text-pink-300 mt-12" style={{ fontFamily: "'Great Vibes', cursive", fontSize: '1.5rem' }}>
              Made With Love✨
            </p>
          </FadeIn>
        </div>

        {/* RECHTE SEITE - BILD 
            Mobil: order-1 (Kommt als Erstes, GANZ OBEN)
            Desktop: lg:order-2 (Kommt als Zweites, RECHTS)
        */}
        <div className="relative h-[50vh] lg:h-auto lg:min-h-screen overflow-hidden order-1 lg:order-2">
          <div className="absolute inset-0 w-full h-full"> 
            
            {/* Dein Hero Bild */}
            <img
               src="https://images.unsplash.com/photo-1749989884588-9311dfe94038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGNvbG9yZnVsJTIwZHJpbmslMjBmbG93ZXIlMjB3YWxsfGVufDF8fHx8MTc2NzY0MDUwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Café XOXO Blumenwand"
              className="w-full h-full object-cover"
            />

          </div>

          {/* Der Verlauf (Fade) */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
}