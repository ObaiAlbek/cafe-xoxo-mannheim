# 🌸 Café XOXO Hugs & Kisses - Website

Eine moderne, High-Fidelity Landing Page für das Café XOXO in Mannheim. Dieses Projekt fokussiert sich auf "Instagram-würdiges" Design, flüssige Animationen und eine erstklassige User Experience (UX) auf Mobile und Desktop.

🔗 **Live Demo:** [Hier klicken](https://cafe-xoxo-mannheim.vercel.app/)
<p>
  <a href="https://www.figma.com/design/bxiFm5CJMY5vDx1PXpqoVL/cafe-xoxo-Hugs---kisses?node-id=0-1&t=UF7cNTnsRB7Y7HDT-1">
    <img src="https://img.shields.io/badge/🎨_Design_in_Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma Design" />
  </a>
</p>

## ✨ Features

* **Immersive Hero Sektion:** Animierter Blütenregen-Hintergrund (Performance-optimiert mit `useMemo`) und Parallax-Effekte.
* **Interaktive Speisekarte:** Filterbare Kategorien (Bowls, Waffeln, Drinks) mit Framer Motion Animationen ("Shared Layout Transitions").
* **Smartes Reservierungssystem:** * Elegantes Modal mit "Glassmorphism"-Effekt (Blur).
    * Integrierte **Netlify Forms** Anbindung (E-Mail-Benachrichtigung bei Reservierung).
    * Visuelles Feedback (Lade-Herzschlag & Erfolgsmeldung).
* **Responsive Design:** Mobile-First Ansatz. Optimierte Bildformate (`aspect-ratio`) für perfekte Darstellung auf iPhones und Smartphones.
* **High-End UI:** Custom Cursor, Hover-Effekte und sanfte Fade-In Animationen beim Scrollen.

## 🛠 Tech Stack

Dieses Projekt wurde mit modernsten Web-Technologien entwickelt:

* **Framework:** [React 18](https://reactjs.org/)
* **Sprache:** [TypeScript](https://www.typescriptlang.org/) (für Typsicherheit und sauberen Code)
* **Build Tool:** [Vite](https://vitejs.dev/) (Blitzschnelles Laden)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animationen:** [Framer Motion](https://www.framer.com/motion/)
* **Icons:** Lucide React
* **Hosting & Forms:** vercel

## 🚀 Installation & Setup

Möchtest du das Projekt lokal auf deinem Rechner starten? Folge diesen Schritten:

1.  **Repository klonen:**
    ```bash
    git clone [https://github.com/ObaiAlbek/cafe-xoxo-mannheim.git](https://github.com/ObaiAlbek/cafe-xoxo-mannheim.git)
    cd cafe-xoxo-mannheim
    ```

2.  **Abhängigkeiten installieren:**
    ```bash
    npm install
    ```

3.  **Entwicklungsserver starten:**
    ```bash
    npm run dev
    ```
    Öffne danach `http://localhost:5173` in deinem Browser.

4.  **Für Produktion bauen:**
    ```bash
    npm run build
    ```

## 📂 Projektstruktur


```

src/
├── app/
│   ├── components/    # Wiederverwendbare UI-Komponenten
│   │   ├── ui/        # Buttons, Inputs etc.
│   │   ├── Hero.tsx   # Startbildschirm mit Animation
│   │   ├── Menu.tsx   # Speisekarte mit Filterlogik
│   │   └── ...
│   └── App.tsx        # Hauptlogik & Layout
├── styles/            # Globale Styles (Tailwind)
└── main.tsx           # Entry Point

```

## 🎨 Design-Philosophie

Das Design spiegelt das Ambiente des Cafés wider:
* **Farben:** Zartrosa, Weiß und Gold-Akzente.
* **Typografie:** Eine Mischung aus eleganten Serifen-Schriften (*Cormorant Garamond*) für Überschriften und modernen Sans-Serif Fonts (*Montserrat*) für Lesbarkeit.
* **Atmosphäre:** Verspielt, romantisch, aber technisch hochperformant.

---

**Made with 💖 by Obai Albek**
