import { motion } from 'framer-motion';

const MusicSection = () => {
  return (
    <section id="music" className="relative min-h-screen snap-start overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-black" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full h-full flex items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-display mb-8 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent"
            >
              WIZJE
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 mb-8 font-mono text-lg"
            >
              Our debut album that combines energetic music with enigmatic lyrics,
              creating an explosive mixture that received great acclaim in the rock community.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-4"
            >
              <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 transition-colors rounded-lg font-mono uppercase tracking-wider flex items-center gap-2">
                <span>Listen Now</span>
                <span className="text-lg">→</span>
              </button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent rounded-lg transform rotate-6" />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-lg transform -rotate-6" />
            {/* Using a dark, moody concert photo as album cover */}
            <img 
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80" 
              alt="Wizje Album Cover"
              className="relative w-full h-full object-cover rounded-lg shadow-2xl shadow-purple-900/20"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MusicSection;
