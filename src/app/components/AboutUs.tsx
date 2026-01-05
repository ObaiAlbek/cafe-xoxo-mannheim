import { motion } from "framer-motion";
import { FadeIn } from './FadeIn';

export function AboutUs() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-pink-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* DER TRICK MIT "ORDER":
             - order-1: Auf Handy an Position 1 (Zuerst)
             - lg:order-2: Auf Desktop an Position 2 (Rechts)
          */}
          <div className="order-1 lg:order-2">
            <FadeIn delay={0.2}>
              <div className="relative overflow-hidden rounded-[2rem] aspect-[3/4] shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-700">
                <img
                  src="https://images.unsplash.com/photo-1497729019230-f30736e9864f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjB0YWJsZSUyMGZvb2R8ZW58MXx8fHwxNzY3NjQwNTA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Beautiful plated food on marble"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                {/* Glanz-Effekt */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
              </div>
            </FadeIn>
          </div>

          {/* TEXT BEREICH:
             - order-2: Auf Handy an Position 2 (Danach)
             - lg:order-1: Auf Desktop an Position 1 (Links)
          */}
          <div className="order-2 lg:order-1 space-y-8">
            <FadeIn delay={0.1}>
              <p 
                className="text-pink-400"
                style={{ fontFamily: "'Great Vibes', cursive", fontSize: '2rem' }}
              >
                Unsere Philosophie
              </p>
              <h2 
                className="text-gray-900 mt-2"
                style={{ 
                  fontFamily: "'Cormorant Garamond', serif", 
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                  lineHeight: '1.2', 
                  fontWeight: '600',
                  letterSpacing: '-0.01em'
                }}
              >
                Wo Schönheit<br />auf Geschmack trifft
              </h2>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div 
                className="text-gray-500 space-y-6"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.125rem', lineHeight: '1.8' }}
              >
                <p>
                  Im Café XOXO Hugs & Kisses glauben wir, dass Frühstück ein Erlebnis sein sollte—ein Moment voller Schönheit, Verbindung und purer Freude.
                </p>
                <p>
                  Jedes Gericht ist so gestaltet, dass es genauso atemberaubend aussieht wie es schmeckt. Von unseren Blumenwänden bis zu unseren Marmortischen ist jedes Detail für perfekte Instagram-Momente entworfen.
                </p>
                <p>
                  Wir verwenden nur die besten Zutaten und kreieren farbenfrohe, lebendige Gerichte, die genauso fantastisch schmecken wie sie aussehen. Denn du verdienst nichts weniger als das Außergewöhnliche.
                </p>
              </div>
            </FadeIn>
          </div>

        </div>

        {/* XOXO TRENNER */}
        <FadeIn delay={0.4}>
          <div className="flex items-center justify-center gap-4 mt-16 lg:mt-24">
            <div className="h-px w-16 bg-pink-200"></div>
            <p 
              className="text-pink-300"
              style={{ fontFamily: "'Great Vibes', cursive", fontSize: '2rem' }}
            >
              xoxo
            </p>
            <div className="h-px w-16 bg-pink-200"></div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}