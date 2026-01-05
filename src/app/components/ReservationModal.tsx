import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, Users, User, Check, Heart } from "lucide-react";
import { Button } from "./ui/button";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [step, setStep] = useState<"form" | "loading" | "success">("form");

  // Reset, wenn das Modal geschlossen wird
  useEffect(() => {
    if (!isOpen) setTimeout(() => setStep("form"), 300);
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("loading");
    // Simuliert das Senden an den Server (für den Effekt)
    setTimeout(() => {
      setStep("success");
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 1. Der verschwommene Hintergrund (Backdrop) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-[9999] flex items-center justify-center p-4"
          >
            {/* 2. Die Karte selbst */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Klick auf Karte schließt sie nicht
              className="bg-white rounded-[2rem] shadow-2xl w-full max-w-md overflow-hidden relative"
            >
              
              {/* Schließen Button */}
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-gray-50 hover:bg-pink-50 rounded-full transition-colors text-gray-500 hover:text-pink-500"
              >
                <X size={20} />
              </button>

              {/* INHALT: FORMULAR */}
              {step === "form" && (
                <div className="p-8">
                  <div className="text-center mb-8">
                    <p className="text-pink-400 font-[GreatVibes] text-2xl mb-1">Komm zu uns</p>
                    <h2 className="text-3xl font-serif font-bold text-gray-900">Tisch reservieren</h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <div className="relative">
                        <User className="absolute left-4 top-3.5 text-pink-300" size={18} />
                        <input type="text" placeholder="Dein Name" required className="w-full pl-12 pr-4 py-3 bg-pink-50/30 border border-pink-100 rounded-xl focus:outline-none focus:border-pink-300 focus:ring-1 focus:ring-pink-300 transition-all placeholder:text-gray-400" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative">
                        <Calendar className="absolute left-4 top-3.5 text-pink-300" size={18} />
                        <input type="date" required className="w-full pl-12 pr-4 py-3 bg-pink-50/30 border border-pink-100 rounded-xl focus:outline-none focus:border-pink-300 transition-all text-gray-600" />
                      </div>
                      <div className="relative">
                        <Clock className="absolute left-4 top-3.5 text-pink-300" size={18} />
                        <input type="time" required className="w-full pl-12 pr-4 py-3 bg-pink-50/30 border border-pink-100 rounded-xl focus:outline-none focus:border-pink-300 transition-all text-gray-600" />
                      </div>
                    </div>

                    <div className="relative">
                      <Users className="absolute left-4 top-3.5 text-pink-300" size={18} />
                      <select className="w-full pl-12 pr-4 py-3 bg-pink-50/30 border border-pink-100 rounded-xl focus:outline-none focus:border-pink-300 transition-all text-gray-600 appearance-none">
                        <option>1 Person</option>
                        <option>2 Personen</option>
                        <option>3 Personen</option>
                        <option>4 Personen</option>
                        <option>5+ Personen</option>
                      </select>
                    </div>

                    <Button type="submit" className="w-full bg-pink-400 hover:bg-pink-500 text-white py-6 rounded-xl text-lg font-medium shadow-lg shadow-pink-200 mt-4">
                      Anfrage senden
                    </Button>
                  </form>
                </div>
              )}

              {/* INHALT: LADEN (Herzschlag) */}
              {step === "loading" && (
                <div className="p-16 flex flex-col items-center justify-center text-center">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                  >
                    <Heart size={64} className="text-pink-400 fill-pink-400" />
                  </motion.div>
                  <p className="mt-6 text-gray-500 font-medium">Einen Moment...</p>
                </div>
              )}

              {/* INHALT: ERFOLG */}
              {step === "success" && (
                <div className="p-12 flex flex-col items-center justify-center text-center bg-pink-50/30 h-full">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-500"
                  >
                    <Check size={40} strokeWidth={3} />
                  </motion.div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Anfrage gesendet!</h3>
                  <p className="text-gray-500 mb-8">Wir freuen uns riesig auf dich.<br/>Du erhältst gleich eine E-Mail von uns.</p>
                  <Button onClick={onClose} variant="outline" className="border-2 border-pink-300 text-pink-400 hover:bg-pink-50 px-8">
                    Zurück zur Seite
                  </Button>
                </div>
              )}

              {/* Dekorative Blume im Eck */}
              <div className="absolute -bottom-10 -right-10 text-9xl opacity-10 pointer-events-none select-none">
                🌸
              </div>

            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}