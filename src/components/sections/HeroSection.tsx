import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from '../Navigation';

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div id="home" className="h-screen relative flex flex-col justify-between overflow-hidden snap-start">
      <motion.div
        className="absolute inset-0 bg-[url('/home.jpg')] 
                   bg-cover"
        style={{ 
          filter: 'brightness(0.3)',
          y: parallaxY,
          backgroundPosition: 'center 100%',
        }}
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10"
      >
        <motion.div 
          className="mb-20 flex justify-center"
        >
          <img 
            src="/logo_transparent.png" 
            alt="Velow Logo"
            className="mt-[5vh] w-[100%] h-auto mx-auto"
          />
        </motion.div>
      </motion.div>

      <div className="relative z-10">
        <Navigation />
      </div>
    </div>
  );
};

export default HeroSection;
