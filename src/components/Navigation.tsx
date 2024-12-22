import { motion } from 'framer-motion';
import { useEffect, useState, useMemo, useRef } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shouldStickToTop, setShouldStickToTop] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const sections = useMemo(() => [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'music', label: 'Music' },
    { id: 'shows', label: 'Shows' },
    { id: 'media', label: 'Media' },
    { id: 'merch', label: 'Merch' },
    { id: 'contact', label: 'Contact' },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      // setIsScrolled(window.scrollY > 50);
      
      const heroSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');

      if (heroSection && aboutSection && navRef.current) {
        // const heroRect = heroSection.getBoundingClientRect();
        const aboutRect = aboutSection.getBoundingClientRect();
        const navRect = navRef.current.getBoundingClientRect();

        // Jeśli jesteśmy w Hero i przewinęliśmy do samej góry, resetujemy sticky
        if (aboutRect.top - navRect.height >= 0) {
          setShouldStickToTop(false);
          setIsScrolled(false);
        } 
        // W przeciwnym razie przyklejamy do góry, gdy nawigacja dotknie górnej krawędzi
        else {
          setShouldStickToTop(navRect.top <= 0);
          setIsScrolled(true);
        }
      }

      let maxVisibleRatio = 0;
      let visibleSection = activeSection;

      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
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
        // setIsScrolled(visibleSection !== 'home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav
      ref={navRef}
      initial={false}
      className={`left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
      } ${shouldStickToTop ? 'fixed top-0 w-full' : ''}`}
    >
      {/* Klasy CSS dla nawigacji:
        1. Podstawowe style: 
           - left-0 right-0: rozciągnięcie na całą szerokość
           - z-50: wysoki z-index, aby nav był nad innymi elementami
           - transition-all duration-300: płynne animacje wszystkich zmian

        2. Dynamiczne tło (zależne od przewinięcia lub otwarcia menu):
           - gdy isScrolled lub isMenuOpen jest true:
             * bg-black/80: czarne tło z 80% przezroczystością
             * backdrop-blur-lg: rozmycie tła
           - w przeciwnym razie: bg-transparent (przezroczyste tło)

        3. Pozycjonowanie (zależne od shouldStickToTop):
           - gdy true: fixed top-0 w-full (przyklejenie do góry ekranu)
           - gdy false: normalne pozycjonowanie w dokumencie
      */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden absolute right-4 top-4 z-50 p-2"
        >
          <div className="space-y-2">
            <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
            <span className={`block w-8 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </div>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-center items-center space-x-4">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`relative px-4 py-2 text-2xl font-display uppercase tracking-wider transition-colors
                  ${activeSection === id ? 'text-white' : 'text-gray-400 hover:text-white'}
                `}
              >
                {label}
                {activeSection === id && (
                  <motion.div
                    layoutId="activeSection-desktop"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0,
            y: isMenuOpen ? 0 : -20,
            display: isMenuOpen ? 'block' : 'none'
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden"
        >
          <ul className="pt-16 pb-8 space-y-4">
            {sections.map(({ id, label }) => (
              <li key={id} className="text-center">
                <button
                  onClick={() => scrollToSection(id)}
                  className={`relative px-4 py-2 text-lg font-display uppercase tracking-wider transition-colors
                    ${activeSection === id ? 'text-white' : 'text-gray-400 hover:text-white'}
                  `}
                >
                  {label}
                  {activeSection === id && (
                    <motion.div
                      layoutId="activeSection-mobile"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;