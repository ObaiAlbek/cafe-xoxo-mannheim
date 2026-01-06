import { motion } from "framer-motion";

export function AboutUs() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  return (
    // FIX: bg-transparent (statt bg-gradient-to-b)
    <section className="py-24 px-6 bg-transparent overflow-hidden relative">

      {/* Dekoratives Hintergrund-Element (optional behalten für Tiefe) */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-pink-100/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* --- BILD BEREICH --- */}
          <motion.div
            className="order-2 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-pink-200 rounded-[2.5rem] rotate-6 scale-95 group-hover:rotate-3 transition-transform duration-700 ease-out" />

              <div className="relative overflow-hidden rounded-[2.5rem] aspect-[3/4] shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-700 ease-out">
                <img
                  src="/assets/about-foto.jpg"
                  alt="Beautiful plated food on marble"
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60"></div>
              </div>
            </div>
          </motion.div>

          {/* --- TEXT BEREICH --- */}
          <motion.div
            className="order-1 lg:order-1 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.2 }}
          >

            <motion.div variants={fadeUpVariant}>
              <p
                className="text-pink-400 mb-2"
                style={{ fontFamily: "'Great Vibes', cursive", fontSize: '2.5rem' }}
              >
                Unsere Philosophie
              </p>
              <h2
                className="text-gray-900 leading-tight"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                  fontWeight: '600',
                }}
              >
                Wo Schönheit<br />
                <span className="text-pink-300/80">auf Geschmack trifft</span>
              </h2>
            </motion.div>

            <motion.div
              className="text-gray-600 space-y-6 text-lg font-light leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              variants={fadeUpVariant}
            >
              <p>
                Im <span className="font-medium text-pink-400">Café XOXO Hugs & Kisses</span> glauben wir, dass Frühstück ein Erlebnis sein sollte — ein Moment voller Schönheit, Verbindung und purer Freude.
              </p>
              <p>
                Jedes Gericht ist so gestaltet, dass es genauso atemberaubend aussieht wie es schmeckt. Von unseren Blumenwänden bis zu unseren Marmortischen ist jedes Detail für perfekte Instagram-Momente entworfen.
              </p>
              <p>
                Wir verwenden nur die besten Zutaten und kreieren farbenfrohe, lebendige Gerichte. Denn du verdienst nichts weniger als das Außergewöhnliche.
              </p>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="pt-4">
              <span className="text-pink-300 tracking-widest uppercase text-sm font-semibold border-b-2 border-pink-200 pb-1">
                Made with Love
              </span>
            </motion.div>

          </motion.div>

        </div>

        {/* --- XOXO TRENNER --- */}
        <motion.div
          className="flex items-center justify-center gap-6 mt-24 opacity-60"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.6, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="h-px w-12 sm:w-24 bg-gradient-to-r from-transparent to-pink-300"></div>
          <p
            className="text-pink-300 transform -rotate-6"
            style={{ fontFamily: "'Great Vibes', cursive", fontSize: '2.5rem' }}
          >
            xoxo
          </p>
          <div className="h-px w-12 sm:w-24 bg-gradient-to-l from-transparent to-pink-300"></div>
        </motion.div>

      </div>
    </section>
  );
}