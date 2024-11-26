import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div id="home" className="h-screen relative flex items-center justify-center overflow-hidden snap-start">
      <motion.div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] 
                   bg-cover bg-center"
        style={{ 
          filter: 'brightness(0.3)',
          y: parallaxY 
        }}
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10"
      >
        <motion.div 
          className="mb-8 flex justify-center"
        >
          <img 
            src="/logo_transparent.png" 
            alt="Velow Logo"
            className="max-w-full h-auto"
          />
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl md:text-2xl mb-8 font-mono tracking-wider"
        >
          ALTERNATIVE ROCK / POST GRUNGE
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex justify-center"
        >
          <motion.button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative inline-flex items-center gap-2 px-8 py-3 
                     overflow-hidden rounded-full
                     bg-gradient-to-r from-white via-gray-200 to-white
                     font-mono uppercase tracking-wider text-black
                     transition-all duration-300
                     hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(255,255,255,0.2)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative">
              About Us
            </span>
            <motion.span
              className="relative"
              initial={{ x: -5, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              →
            </motion.span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                          translate-x-[-100%] group-hover:translate-x-[100%] duration-1000" 
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
