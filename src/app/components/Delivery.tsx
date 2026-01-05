import { Bike, ArrowRight, Star } from 'lucide-react';
import { motion } from "framer-motion";

export function Delivery() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Dekorativer Hintergrund */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-50/30 to-pink-50/30 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl border border-pink-100 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
          
          {/* Orangefarbener Akzent-Kreis im Hintergrund */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50"></div>

          {/* Linker Teil: Text */}
          <div className="md:w-1/2 space-y-8 z-10">
            <div className="inline-flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full text-orange-600 font-bold text-xs uppercase tracking-widest border border-orange-100">
              <Bike size={16} />
              <span>Delivery Service</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight text-gray-900">
              XOXO für <br/>
              <span className="text-[#FF8000] italic">Zuhause</span>
            </h2>
            
            <p className="text-lg text-gray-500 leading-relaxed">
              Keine Lust rauszugehen? Mach es dir auf der Couch gemütlich! 
              Wir bringen dir deine Bowls, Waffeln und Kaffee direkt vor die Haustür. 
              Frisch verpackt und mit Liebe beschriftet.
            </p>
            
            <a 
              href="https://www.lieferando.de/speisekarte/caf-xoxo-hugskisses" 
              target="_blank" 
              rel="noreferrer"
              className="group inline-flex items-center gap-3 bg-[#FF8000] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-orange-200 hover:bg-orange-600 transition-all transform hover:-translate-y-1"
            >
              <span>Jetzt bei Lieferando bestellen</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Rechter Teil: BILD */}
          <div className="md:w-1/2 relative w-full">
            <motion.div 
              className="relative z-10 transform rotate-2 hover:rotate-0 transition duration-500"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* HIER IST DIE ÄNDERUNG: Direkter Pfad zum public Ordner */}
              <img 
                src="/assets/delivery-bags.png" 
                alt="XOXO Lieferung Tüten" 
                className="rounded-2xl shadow-2xl border-4 border-white w-full object-cover h-[400px]"
              />
              
              {/* Kleines "Badge" auf dem Bild */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg border border-white">
                <p className="font-serif text-gray-800 text-sm">💌 Made with love</p>
                <div className="flex text-yellow-400 text-xs mt-1 gap-0.5">
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}