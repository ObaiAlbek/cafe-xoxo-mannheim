import { Sparkles, Camera, Heart } from 'lucide-react';
import { motion } from "framer-motion";
import { FadeIn } from './FadeIn';

const experiences = [
  {
    id: 1,
    title: 'Blumenwände',
    description: 'Bildschöne Kulissen für deinen Feed',
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1627932564614-88a499143768?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwZmxvd2VyJTIwd2FsbCUyMHJvc2VzfGVufDF8fHx8MTc2NzY0MDUwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    title: 'Gute Stimmung',
    description: 'Positive Energie in jeder Ecke',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1612452556802-f9e9ab097eaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0ZWwlMjBjYWZlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY3NjQwNTA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    title: 'Ästhetische Momente',
    description: 'Jedes Detail für Erinnerungen gestaltet',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1673646959767-1f87b64baf36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwbGVtb25hZGUlMjBkcmlua3xlbnwxfHx8fDE3Njc1NDA3Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function XOXOExperience() {
  return (
    <section className="py-24 px-6 bg-pink-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-pink-400 mb-3" style={{ fontFamily: "'Great Vibes', cursive", fontSize: '2rem' }}>
              Das Erlebnis
            </p>
            <h2 className="text-gray-900 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 5vw, 5rem)', lineHeight: '1.2', fontWeight: '600' }}>
              Die XOXO Art
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.125rem', lineHeight: '1.7' }}>
              Mehr als ein Café—ein Ort für Schönheit, Verbindung und unvergessliche Momente
            </p>
          </FadeIn>
        </div>

        {/* Instagram-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {experiences.map((experience, index) => (
            <FadeIn key={experience.id} delay={index * 0.2}>
              <motion.div 
                className="group relative overflow-hidden rounded-3xl aspect-square bg-white shadow-md cursor-pointer"
                whileHover={{ y: -10, scale: 1.02 }} // Hover Effekt: Geht hoch und wird größer
                transition={{ duration: 0.4 }}
              >
                {/* Image */}
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-white">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                  >
                    <experience.icon className="w-10 h-10 mb-4 text-pink-300" strokeWidth={1.5} />
                  </motion.div>
                  
                  <h3 className="mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: '600' }}>
                    {experience.title}
                  </h3>
                  <p className="text-white/90 text-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {experience.description}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom Accent */}
        <FadeIn delay={0.6} className="text-center mt-16">
          <p className="text-pink-400" style={{ fontFamily: "'Great Vibes', cursive", fontSize: '1.75rem' }}>
            #CafeXOXO #BrunchGoals
          </p>
        </FadeIn>
      </div>
    </section>
  );
}