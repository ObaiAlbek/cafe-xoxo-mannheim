import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { MouseEvent } from "react";

export function TiltCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    // Berechnet die Mausposition relativ zur Mitte der Karte
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  // Die Magie: Mausbewegung wird in Rotation umgerechnet
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]); // Neigung oben/unten
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]); // Neigung links/rechts

  return (
    <motion.div
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d", // Wichtig für den 3D-Effekt
      }}
      whileHover={{ scale: 1.05 }}
    >
      <div style={{ transform: "translateZ(50px)" }}> {/* Inhalt schwebt 'über' der Karte */}
        {children}
      </div>
    </motion.div>
  );
}