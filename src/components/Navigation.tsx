import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'music', label: 'Music' },
    { id: 'shows', label: 'Shows' },
    { id: 'media', label: 'Media' },
    { id: 'merch', label: 'Merch' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Update background opacity based on scroll
      setIsScrolled(window.scrollY > 50);

      // Find the current section
      let maxVisibleRatio = 0;
      let visibleSection = activeSection;

      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate visibility ratio
        const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        const sectionHeight = rect.height;
        const visibilityRatio = visibleHeight / sectionHeight;

        if (visibilityRatio > maxVisibleRatio) {
          maxVisibleRatio = visibilityRatio;
          visibleSection = id;
        }
      });

      if (visibleSection !== activeSection) {
        setActiveSection(visibleSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <ul className="flex justify-center items-center space-x-1 md:space-x-2">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`relative px-3 py-2 text-sm font-mono transition-colors
                  ${activeSection === id ? 'text-white' : 'text-gray-400 hover:text-white'}
                `}
              >
                {label}
                {activeSection === id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Section Markers */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col gap-4">
          {sections.map(({ id, label }) => (
            <motion.button
              key={id}
              onClick={() => scrollToSection(id)}
              className="group relative flex items-center gap-2 p-2 -mr-2"
              whileHover={{ x: -4 }}
              transition={{ duration: 0.2 }}
            >
              <span className="absolute right-full mr-4 py-1 px-2 text-sm font-mono
                           opacity-0 group-hover:opacity-100 transition-opacity
                           bg-black/80 rounded backdrop-blur-sm whitespace-nowrap">
                {label}
              </span>
              <motion.div
                className={`w-2 h-2 rounded-full transition-all duration-300
                  ${activeSection === id 
                    ? 'bg-white scale-125' 
                    : 'bg-gray-600 group-hover:bg-gray-400'
                  }`}
                animate={{
                  scale: activeSection === id ? 1.25 : 1,
                  backgroundColor: activeSection === id ? '#ffffff' : '#4B5563'
                }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;