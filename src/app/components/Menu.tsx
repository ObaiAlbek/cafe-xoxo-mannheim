import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Coffee, Wheat, Star, UtensilsCrossed } from "lucide-react"; 

// --- KATEGORIEN ---
const categories = [
  { id: 'bowls', label: 'Smoothie Bowls', icon: <Leaf size={16} /> },
  { id: 'stullen', label: 'Schlemmer Stullen', icon: <Wheat size={16} /> },
  { id: 'ciabatta', label: 'Röst Ciabatta', icon: <UtensilsCrossed size={16} /> },
  { id: 'waffles', label: 'Traum Waffeln', icon: <Star size={16} /> },
  { id: 'drinks', label: 'Matcha & Drinks', icon: <Coffee size={16} /> },
];

// --- DEINE GERICHTE (Mit korrigierten Pfaden!) ---
const menuItems = [
  // --- SMOOTHIE BOWLS ---
  {
    id: 101, category: 'bowls', name: 'Acai Bowl', price: '11,90€', highlight: true,
    description: 'Mit Acai-Püree, Banane, Beeren, Crunchy Granola und saisonalen Früchten.',
    image: '/assets/Acai Bowl.jpg', // WICHTIG: Kein /public davor!
  },
  {
    id: 102, category: 'bowls', name: 'Ocean Bowl', price: '11,90€',
    description: 'Mit Banane, Heidelbeere, Kokosnussmilch, Spirulina, Crunchy Granola.',
    image: '/assets/Ocean Bowl.jpg',
  },
  {
    id: 103, category: 'bowls', name: 'Dreams Bowl', price: '11,90€',
    description: 'Mit Mango, griechischer Joghurt, Kokosmilch, Hafermilch, Kokosnuss.',
    image: '/assets/Dreem Bowl.jpg',
  },
  {
    id: 104, category: 'bowls', name: 'Greek Bowl', price: '11,90€',
    description: 'Mit Joghurt griechischer Art, Crunchy Granola und saisonalen Früchten.',
    image: '/assets/Greek Bowl.jpg',
  },

  // --- SCHLEMMER STULLEN ---
  {
    id: 201, category: 'stullen', name: 'Guacamole Röstbrot', price: '12,90€', highlight: true,
    description: 'Mit Guacamole Aufstrich, frischer Avocado, Rucola und Kirschtomaten.',
    image: '/assets/Guacamole Röstbrot.jpg',
  },
  {
    id: 202, category: 'stullen', name: 'Caprese Röstbrot', price: '13,90€',
    description: 'Mit Pesto Rosso, Rucola, Büffelmozzarella, Tomaten und Balsamico-Creme.',
    image: '/assets/Caprese Röstbrot.jpg',
  },
  {
    id: 203, category: 'stullen', name: 'Italian Röstbrot', price: '14,90€',
    description: 'Mit Grana Padano-Creme, Serrano Schinken, Rucola und Grana Padano.',
    image: '/assets/Italian Röstbrot.jpg',
  },
  {
    id: 204, category: 'stullen', name: 'Ziegenkäse Röstbrot', price: '14,90€',
    description: 'Mit Grana Padano-Creme, Ziegenkäse, Rucola, Granatapfel, Honig & Walnüssen.',
    image: '/assets/Ziegenkäse Röstbrot.jpg',
  },
  {
    id: 205, category: 'stullen', name: 'Salmone Röstbrot', price: '14,90€',
    description: 'Mit Lachs, Schmand-Dip, Dill und Zitrone.',
    image: '/assets/Salmone Röstbrot.jpg',
  },

  // --- RÖST CIABATTA ---
  {
    id: 301, category: 'ciabatta', name: 'Ciabatta XOXO', price: '11,90€', highlight: true,
    description: 'Mit Kräuter-Rührei, Hirtenkäse und Kirschtomaten.',
    image: '/assets/Ciabatta XOXO.jpg',
  },
  {
    id: 302, category: 'ciabatta', name: 'Ciabatta French Kiss', price: '10,60€',
    description: 'Mit Kräuteröl und Cheddar.',
    image: '/assets/Ciabatta French Kiss.jpg',
  },
  {
    id: 303, category: 'ciabatta', name: 'Ciabatta Orient', price: '10,90€',
    description: 'Mit Chiliöl, Cheddar und gebratenen Sucukscheiben.',
    image: '/assets/Ciabatta Orient.jpg',
  },
  {
    id: 304, category: 'ciabatta', name: 'Ciabatta Parma', price: '10,90€',
    description: 'Mit Cheddar und Serrano Schinken.',
    image: '/assets/Ciabatta Parma.jpg',
  },
  {
    id: 305, category: 'ciabatta', name: 'Ciabatta Quattro Formaggi', price: '10,90€',
    description: 'Mit Cheddar, Hirtenkäse, Grana Padano und Gorgonzola.',
    image: '/assets/Ciabatta Quattro Formaggi.jpg',
  },

  // --- TRAUM WAFFELN ---
  {
    id: 401, category: 'waffles', name: 'Waffel Pistazie', price: '11,90€', highlight: true,
    description: 'Mit italienischer Pistaziencreme, gehackten Pistazien & saisonalen Früchten.',
    image: '/assets/Waffel Pistazie.jpg',
  },
  {
    id: 402, category: 'waffles', name: 'Waffel Lotus-Traum', price: '10,90€',
    description: 'Mit Lotus-Creme, Lotus-Crumble und saisonalen Früchten.',
    image: '/assets/Waffel Lotus-Traum.jpg',
  },
  {
    id: 403, category: 'waffles', name: 'Waffel mit Nutella', price: '9,90€',
    description: 'Klassische Waffel mit Nutella und saisonalen Früchten.',
    image: '/assets/Waffel mit Nutella.jpg',
  },
  {
    id: 404, category: 'waffles', name: 'Waffel mit Apfelmus', price: '9,90€',
    description: 'Mit Apfelmus und saisonalen Früchten.',
    image: '/assets/Waffel mit Apfelmus.jpg',
  },
  {
    id: 405, category: 'waffles', name: 'Waffel mit Puderzucker', price: '6,90€',
    description: 'Der Klassiker.',
    image: '/assets/Waffel mit Puderzucker.jpg',
  },

  // --- MATCHA & DRINKS ---
  {
    id: 501, category: 'drinks', name: 'Iced Strawberry Matcha', price: '6,90€', highlight: true,
    description: 'Premium Matcha mit Erdbeerpüree, Milch nach Wahl auf Eis.',
    image: '/assets/Iced Strawberry Matcha.jpg',
  },
  {
    id: 502, category: 'drinks', name: 'Iced Mango Coconut Matcha', price: '6,90€',
    description: 'Exotischer Mix aus Mango, Kokosnuss und Premium Matcha.',
    image: '/assets/Iced Mango Coconut Matcha.webp',
  },
  {
    id: 503, category: 'drinks', name: 'Iced Matcha Vanille', price: '6,50€',
    description: 'Klassischer Matcha mit einem Hauch Vanille auf Eis.',
    image: '/assets/Iced Matcha Vanille.webp',
  },
  {
    id: 504, category: 'drinks', name: 'Pink Coco', price: '5,90€',
    description: 'Hibiskustee, Kokosnussmilch, Holunderblüte - ein rosa Traum.',
    image: '/assets/Pink Coco.jpg',
  },
  {
    id: 505, category: 'drinks', name: 'Homemade Lemonade', price: '5,90€',
    description: 'Hausgemachte Limetten/Ingwer Limonade.',
    image: '/assets/Homemade Lemonade.jpg',
  },
];


export function Menu() {
  const [activeCategory, setActiveCategory] = useState('bowls');
  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-24 px-4 sm:px-6 bg-pink-50/20 min-h-screen" id="menu-section">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-pink-400 mb-2" 
            style={{ fontFamily: "'Great Vibes', cursive", fontSize: '2rem' }}
          >
            Made with Love
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-900" 
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '3.5rem', fontWeight: '600' }}
          >
            Unsere Speisekarte
          </motion.h2>
        </div>

        {/* TABS */}
        <div className="flex overflow-x-auto pb-4 sm:pb-0 sm:flex-wrap justify-start sm:justify-center gap-3 mb-12 scrollbar-hide px-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="relative px-5 py-3 rounded-full text-base sm:text-lg font-medium transition-colors outline-none whitespace-nowrap flex-shrink-0"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-pink-400 rounded-full shadow-lg shadow-pink-200"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className={`relative z-10 flex items-center gap-2 ${activeCategory === cat.id ? 'text-white' : 'text-gray-500 hover:text-gray-900'}`}>
                {cat.icon}
                {cat.label}
              </span>
            </button>
          ))}
        </div>

        {/* DAS GRID */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row group cursor-pointer"
              >
                {/* DER FIX: 
                   1. 'aspect-[4/3]': Behält das natürliche Foto-Format bei (kein Reinzoomen/Unschärfe).
                   2. 'sm:w-48 sm:h-auto': Auf dem Desktop eine feste Breite, Höhe passt sich an.
                */}
                <div className="w-full aspect-[4/3] sm:aspect-auto sm:w-48 sm:h-auto flex-shrink-0 relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {item.highlight && (
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-pink-500 shadow-sm uppercase tracking-wider">
                      ★ Beliebt
                    </div>
                  )}
                </div>

                {/* Text Bereich (unverändert) */}
                <div className="flex flex-col justify-center flex-grow p-6 sm:py-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-pink-500 transition-colors leading-tight">
                      {item.name}
                    </h3>
                    <span className="text-xl font-bold text-pink-400 font-serif whitespace-nowrap ml-2">
                      {item.price}
                    </span>
                  </div>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 sm:mb-4">
                    {item.description}
                  </p>
                  
                  <div className="mt-auto flex justify-end">
                    <div className="w-10 h-10 rounded-full bg-pink-50 text-pink-300 flex items-center justify-center group-hover:bg-pink-400 group-hover:text-white transition-all transform group-hover:rotate-90">
                      +
                    </div>
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