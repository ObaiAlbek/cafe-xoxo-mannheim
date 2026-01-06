import { motion } from "framer-motion";

const specialties = [
  {
    id: 1,
    name: 'Dubai Brioche French Toast',
    description: 'Viraler Hit: Fluffiges Brioche mit Pistaziencreme, knusprigem Knafeh, Schokolade & Vanilleeis.',
    image: '/assets/Dubai-Brioch.jpg',
    price: '14,90€'
  },
  {
    id: 2,
    name: 'Guacamole Röstbrot',
    description: 'Mit Guacamole Aufstrich, frischer Avocado, Rucola und Kirschtomaten.',
    image: '/assets/AvocadoToast.jpg',
    price: '12,90€'
  },
  {
    id: 3,
    name: 'Dreams Bowl',
    description: 'Mit Mango, griechischer Joghurt, Kokosmilch, Hafermilch, Kokosnuss.',
    image: '/assets/bowls.jpg',
    price: '11,90€'
  },
];

function SpecialtyCard({ specialty }: { specialty: any }) {
  return (
    <motion.div
      className="h-full bg-white rounded-3xl shadow-lg overflow-hidden border border-pink-50"
      // FIX: "boxShadow" statt "shadow"
      whileHover={{ y: -10, boxShadow: "0px 20px 40px rgba(0,0,0,0.1)" }}
      // HANDY: Zieht sich beim Tippen zusammen (Feedback!)
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.3 }}
    >

      {/* Bild Bereich */}
      <div className="relative overflow-hidden aspect-square rounded-3xl m-4 mb-0 shadow-inner group">
        <motion.img
          src={specialty.image}
          alt={specialty.name}
          className="w-full h-full object-cover"
          whileTap={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
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
          className="text-muted-foreground mb-4 h-12"
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
    </motion.div>
  );
}

export function Specialties() {
  return (
    <section className="py-24 px-6 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
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
            <h2 className="text-gray-900 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 5vw, 5rem)', lineHeight: '1.2', fontWeight: '600' }}>
              Menü Highlights
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.125rem', lineHeight: '1.7' }}>
              Kunstvoll angerichtet, wunderschön köstlich. <br />
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <SpecialtyCard specialty={specialty} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}