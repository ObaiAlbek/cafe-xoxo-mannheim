import { motion } from "framer-motion";
import { TiltCard } from './TiltCard'; 
import { FadeIn } from './FadeIn';

// --- Daten ---
const specialties = [
  {
    id: 1,
    name: 'Dubai Brioche French Toast',
    description: 'Viraler Hit: Fluffiges Brioche mit Pistaziencreme, knusprigem Knafeh, Schokolade & Vanilleeis.',
    image: '/assets/Dubai-Brioch.jpg', 
  },
  {
    id: 2,
    name: 'Guacamole Röstbrot',
    description: 'Mit Guacamole Aufstrich, frischer Avocado, Rucola und Kirschtomaten.',
    image: '/assets/AvocadoToast.jpg'
  },
  {
    id: 3,
    name: 'Dreams Bowl',
    description: 'Mit Mango, griechischer Joghurt, Kokosmilch, Hafermilch, Kokosnuss.',
    image: '/assets/bowls.jpg',
  },
];
// --- Die Karte mit 3D Effekt ---
function SpecialtyCard({ specialty }: { specialty: any }) {
  return (
    <div className="h-full perspective-1000"> {/* Perspektive ist wichtig für 3D */}
      <TiltCard className="group cursor-pointer bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden h-full">
        
        {/* Bild Bereich */}
        <div className="relative overflow-hidden aspect-square rounded-3xl m-4 mb-0 shadow-inner">
          <img
            src={specialty.image}
            alt={specialty.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Glanz-Effekt Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
        </div>

        {/* Text Bereich */}
        <div className="text-center px-4 py-8 bg-white rounded-b-3xl">
          <h3 
            className="text-foreground mb-2"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: '600', letterSpacing: '-0.01em' }}
          >
            {specialty.name}
          </h3>
          <p 
            className="text-muted-foreground mb-4 h-12" // Feste Höhe für Einheitlichkeit
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.95rem', lineHeight: '1.6' }}
          >
            {specialty.description}
          </p>
          <p 
            className="text-pink-500"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: '600' }}
          >
            {specialty.price}
          </p>
        </div>
      </TiltCard>
    </div>
  );
}

// --- Haupt Sektion ---
export function Specialties() {
  return (
    <section className="py-24 px-6 bg-white relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-pink-400 mb-3" style={{ fontFamily: "'Great Vibes', cursive", fontSize: '2rem' }}>
              Signature Gerichte
            </p>
            <h2 className="text-foreground mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 5vw, 5rem)', lineHeight: '1.2', fontWeight: '600' }}>
              Menü Highlights
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.125rem', lineHeight: '1.7' }}>
              Kunstvoll angerichtet, wunderschön köstlich. <br/>
            </p>
          </motion.div>
        </div>

        {/* Grid mit Karten */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }} // Stagger Effekt
            >
              <SpecialtyCard specialty={specialty} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}