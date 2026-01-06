import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Coffee, Wheat, Star, UtensilsCrossed, Sparkles } from "lucide-react";

const scrollbarHideStyles = `
  .scrollbar-hide::-webkit-scrollbar { display: none; }
  .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
`;

const categories = [
  { id: 'bowls', label: 'Smoothie Bowls', icon: <Leaf size={16} /> },
  { id: 'stullen', label: 'Schlemmer Stullen', icon: <Wheat size={16} /> },
  { id: 'ciabatta', label: 'Röst Ciabatta', icon: <UtensilsCrossed size={16} /> },
  { id: 'waffles', label: 'Traum Waffeln', icon: <Star size={16} /> },
  { id: 'drinks', label: 'Matcha & Drinks', icon: <Coffee size={16} /> },
];

const menuItems = [
  // --- ITEMS WIE VORHER (hier verkürzt für Übersicht, nutze deine vollen Daten!) ---
  { id: 101, category: 'bowls', name: 'Acai Bowl', price: '11,90€', highlight: true, description: 'Mit Acai-Püree, Banane, Beeren, Crunchy Granola und saisonalen Früchten.', image: '/assets/Acai Bowl.jpg' },
  { id: 102, category: 'bowls', name: 'Ocean Bowl', price: '11,90€', description: 'Mit Banane, Heidelbeere, Kokosnussmilch, Spirulina, Crunchy Granola.', image: '/assets/Ocean Bowl.jpg' },
  { id: 103, category: 'bowls', name: 'Dreams Bowl', price: '11,90€', description: 'Mit Mango, griechischer Joghurt, Kokosmilch, Hafermilch, Kokosnuss.', image: '/assets/Dreem Bowl.jpg' },
  { id: 104, category: 'bowls', name: 'Greek Bowl', price: '11,90€', description: 'Mit Joghurt griechischer Art, Crunchy Granola und saisonalen Früchten.', image: '/assets/Greek Bowl.jpg' },

  { id: 201, category: 'stullen', name: 'Guacamole Röstbrot', price: '12,90€', highlight: true, description: 'Mit Guacamole Aufstrich, frischer Avocado, Rucola und Kirschtomaten.', image: '/assets/Guacamole Röstbrot.jpg' },
  { id: 202, category: 'stullen', name: 'Caprese Röstbrot', price: '13,90€', description: 'Mit Pesto Rosso, Rucola, Büffelmozzarella, Tomaten und Balsamico-Creme.', image: '/assets/Caprese Röstbrot.jpg' },

  { id: 301, category: 'ciabatta', name: 'Ciabatta XOXO', price: '11,90€', highlight: true, description: 'Mit Kräuter-Rührei, Hirtenkäse und Kirschtomaten.', image: '/assets/Ciabatta XOXO.jpg' },

  { id: 401, category: 'waffles', name: 'Waffel Pistazie', price: '11,90€', highlight: true, description: 'Mit italienischer Pistaziencreme, gehackten Pistazien & saisonalen Früchten.', image: '/assets/Waffel Pistazie.jpg' },

  { id: 501, category: 'drinks', name: 'Iced Strawberry Matcha', price: '6,90€', highlight: true, description: 'Premium Matcha mit Erdbeerpüree, Milch nach Wahl auf Eis.', image: '/assets/Iced Strawberry Matcha.jpg' },
  // ... (Füge hier den Rest deiner Items ein wenn nötig)
];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState('bowls');
  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-12 sm:py-24 px-0 bg-transparent min-h-screen relative overflow-hidden" id="menu-section">
      <style>{scrollbarHideStyles}</style>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center mb-10 px-4 relative">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-pink-400 mb-2 text-2xl sm:text-3xl"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Made with Love
          </motion.p>

          <div className="relative inline-block">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-gray-900 leading-tight font-semibold relative z-10"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              <span className="text-4xl sm:text-6xl">Unsere Speisekarte</span>
            </motion.h2>

            <motion.div
              className="absolute -top-4 -right-6 sm:-top-6 sm:-right-8 text-yellow-400"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />
            </motion.div>
          </div>
        </div>

        {/* TABS (Mit Tap Effect!) */}
        <div className="mb-8">
          <div className="flex overflow-x-auto gap-3 px-6 pb-2 scrollbar-hide w-full sm:justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="relative px-5 py-3 rounded-full text-sm sm:text-lg font-medium transition-colors outline-none whitespace-nowrap flex-shrink-0 group"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {/* AKTIVER TAB HINTERGRUND */}
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-pink-400 rounded-full shadow-lg shadow-pink-200"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}

                {/* ICON & TEXT */}
                <span className={`relative z-10 flex items-center gap-2 ${activeCategory === cat.id ? 'text-white' : 'text-gray-500 group-hover:text-pink-400 transition-colors'}`}>
                  <motion.span
                    // WICHTIG: Icon wackelt kurz beim Antippen
                    key={activeCategory === cat.id ? 'active' : 'inactive'}
                    animate={activeCategory === cat.id ? { rotate: [0, -20, 20, 0], scale: 1.2 } : { scale: 1 }}
                  >
                    {cat.icon}
                  </motion.span>
                  {cat.label}
                </span>
              </button>
            ))}
            <div className="w-2 flex-shrink-0 sm:hidden"></div>
          </div>
        </div>

        {/* DAS GRID */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 lg:gap-10 sm:px-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                transition={{ duration: 0.4, type: "spring" }}

                // --- HIER IST DER FIX FÜR HANDY ---
                whileHover={{ y: -5 }} // Desktop
                whileTap={{ scale: 0.97 }} // Handy Feedback: Karte drückt sich rein

                className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(244,114,182,0.25)] transition-shadow duration-300 flex flex-col sm:flex-row group cursor-pointer border border-transparent hover:border-pink-100"
              >
                {/* BILD */}
                <div className="w-full aspect-video sm:w-48 sm:h-auto flex-shrink-0 relative overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  {item.highlight && (
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-pink-500 shadow-sm uppercase tracking-wider flex items-center gap-1"
                    >
                      <Star size={10} fill="currentColor" /> Beliebt
                    </motion.div>
                  )}
                </div>

                {/* TEXT */}
                <div className="flex flex-col justify-center flex-grow p-6 relative">
                  <div className="absolute right-0 bottom-0 w-24 h-24 bg-pink-50 rounded-tl-[3rem] -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="flex justify-between items-start mb-2 relative z-10">
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-gray-900 group-hover:text-pink-500 transition-colors leading-tight">
                      {item.name}
                    </h3>
                    <span className="text-lg sm:text-xl font-bold text-pink-400 font-serif whitespace-nowrap ml-2">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-4 relative z-10">
                    {item.description}
                  </p>

                  <div className="mt-auto flex justify-end relative z-10">
                    <motion.div
                      // BUTTON FEEDBACK
                      whileTap={{ scale: 0.8, rotate: 90 }} // Dreht sich beim Tippen!
                      className="w-10 h-10 rounded-full bg-pink-50 text-pink-300 flex items-center justify-center group-hover:bg-pink-400 group-hover:text-white transition-all shadow-sm group-hover:shadow-lg group-hover:shadow-pink-200"
                    >
                      <span className="text-xl">+</span>
                    </motion.div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}