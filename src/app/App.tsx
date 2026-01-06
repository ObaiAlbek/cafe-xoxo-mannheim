import { useState } from 'react';
import { Hero } from './components/Hero';
import { XOXOExperience } from './components/XOXOExperience';
import { AboutUs } from './components/AboutUs';
import { Specialties } from './components/Specialties';
import { Delivery } from './components/Delivery';
import { Footer } from './components/Footer';
import { Menu } from './components/Menu';
import { GlobalBackground } from './components/GlobalBackground';

function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans text-gray-900 relative">

      <GlobalBackground />


      <Hero />
      <AboutUs />
      <XOXOExperience />
      <Specialties />
      <Menu />
      <Delivery />
      <Footer />
    </div>
  );
}

export default App;