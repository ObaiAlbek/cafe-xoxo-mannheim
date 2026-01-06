import { Bike, ArrowRight, Star, Heart } from 'lucide-react';
import { motion } from "framer-motion";

// Wir entfernen die lokale 'FloatingParticle' Komponente, da wir jetzt die globale nutzen!

export function Delivery() {
  return (
    // FIX: bg-transparent
    <section className="py-24 relative overflow-hidden bg-transparent">

      {/* FIX: Den lokalen Hintergrund-Block habe ich hier entfernt, 
          damit der globale Hintergrund durchscheint! */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Die Haupt-Karte */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl shadow-orange-100/50 border border-orange-100 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden"
        >

          {/* Orangefarbener Glow im Hintergrund (nur INNERHALB der Karte) */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-60"></div>

          {/* --- LINKER TEIL: TEXT --- */}
          <div className="md:w-1/2 space-y-8 z-10">

            <div className="inline-flex items-center gap-3 bg-orange-50 px-5 py-2.5 rounded-full text-orange-600 font-bold text-xs uppercase tracking-widest border border-orange-100">
              <motion.div
                animate={{ x: [-2, 10, -2] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Bike size={18} />
              </motion.div>
              <span>Delivery Service</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-serif font-medium leading-tight text-gray-900">
              XOXO für <br />
              <span className="text-[#FF8000] italic relative inline-block">
                Zuhause
                <motion.svg
                  viewBox="0 0 100 20"
                  className="absolute -bottom-2 left-0 w-full h-4 text-orange-300 opacity-60"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                >
                  <motion.path d="M0 10 Q 25 20 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="4" />
                </motion.svg>
              </span>
            </h2>

            <p className="text-lg text-gray-500 leading-relaxed font-light">
              Keine Lust rauszugehen? Mach es dir auf der Couch gemütlich!
              Wir bringen dir deine Bowls, Waffeln und Kaffee direkt vor die Haustür.
              <span className="font-medium text-orange-400"> Frisch verpackt und mit Liebe beschriftet.</span>
            </p>

            <motion.a
              href="https://www.lieferando.de/speisekarte/caf-xoxo-hugskisses"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 bg-[#FF8000] text-white px-8 py-5 rounded-full font-bold text-lg shadow-[0_10px_30px_rgba(255,128,0,0.3)] hover:shadow-[0_20px_40px_rgba(255,128,0,0.5)] transition-all relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute top-0 -left-full w-1/2 h-full bg-white/20 skew-x-[25deg] group-hover:animate-[shine_1s_infinite]" />

              <span className="relative z-10">Jetzt bestellen</span>
              <motion.div
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.a>

          </div>

          {/* --- RECHTER TEIL: BILD --- */}
          <div className="md:w-1/2 relative w-full perspective-1000">
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, rotate: 5, scale: 0.9 }}
              whileInView={{ opacity: 1, rotate: 2, scale: 1 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
            >
              <img
                src="/assets/delivery-bags.png"
                alt="XOXO Lieferung Tüten"
                className="rounded-3xl shadow-2xl border-8 border-white w-full object-cover h-[450px]"
              />

              <motion.div
                className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl shadow-xl border border-white/50"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <p className="font-serif text-gray-800 text-sm font-bold">Gerade verpackt</p>
                </div>
                <div className="flex text-orange-400 text-xs gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" className="drop-shadow-sm" />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

        </motion.div>
      </div>

      <style>{`
        @keyframes shine {
          0% { left: -50%; }
          100% { left: 150%; }
        }
      `}</style>

    </section>
  );
}