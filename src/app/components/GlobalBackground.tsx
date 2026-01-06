import { motion } from "framer-motion";
import { Leaf, Coffee, Croissant, Heart, Flower2, Sparkles, CupSoda } from "lucide-react";

const FloatingItem = ({
    delay,
    x,
    y,
    icon,
    scale,
    duration,
    color
}: {
    delay: number, x: string, y: string, icon: any, scale: number, duration: number, color: string
}) => (
    <motion.div
        // WICHTIG: Wieder 'fixed'. Bleibt stehen, egal wie du scrollst.
        className={`fixed pointer-events-none z-[-1] ${color}`}
        style={{ left: x, top: y }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
            y: [-20, 20, -20],       // Nur lokales Schweben
            rotate: [0, 10, -10, 0], // Leichtes Drehen
            scale: [scale, scale * 1.1, scale],
            opacity: [0.4, 0.8, 0.4] // Gut sichtbar
        }}
        transition={{
            duration: duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
        }}
    >
        {icon}
    </motion.div>
);

export function GlobalBackground() {
    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-[-50] bg-white">

            {/* Hintergrund-Verlauf */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-pink-50/30 to-white" />

            {/* --- LINKS --- */}
            <FloatingItem delay={0} x="5%" y="15%" scale={1.5} duration={12} color="text-amber-700/30" icon={<Coffee size={32} />} />
            <FloatingItem delay={2} x="10%" y="45%" scale={0.8} duration={15} color="text-amber-600/30" icon={<CupSoda size={28} />} />
            <FloatingItem delay={5} x="3%" y="75%" scale={1.5} duration={18} color="text-orange-400/30" icon={<Croissant size={30} />} />

            {/* --- MITTE --- */}
            <FloatingItem delay={1} x="35%" y="25%" scale={1.0} duration={14} color="text-yellow-400/40" icon={<Sparkles size={20} />} />
            <FloatingItem delay={4} x="60%" y="60%" scale={0.8} duration={16} color="text-pink-400/30" icon={<Heart size={20} />} />

            {/* --- RECHTS --- */}
            <FloatingItem delay={3} x="85%" y="10%" scale={1.4} duration={13} color="text-green-600/30" icon={<Leaf size={30} />} />
            <FloatingItem delay={6} x="90%" y="50%" scale={1.1} duration={17} color="text-pink-400/30" icon={<Flower2 size={24} />} />
            <FloatingItem delay={2} x="80%" y="85%" scale={0.9} duration={15} color="text-amber-800/30" icon={<Coffee size={24} />} />

            {/* --- EXTRA HANDY --- */}
            <FloatingItem delay={7} x="50%" y="90%" scale={1.2} duration={20} color="text-yellow-400/40" icon={<Sparkles size={22} />} />
            <FloatingItem delay={8} x="20%" y="30%" scale={0.7} duration={19} color="text-orange-300/30" icon={<Croissant size={20} />} />
        </div>
    );
}