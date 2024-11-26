import { motion, useScroll, useTransform } from 'framer-motion';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="h-screen relative flex items-center justify-center overflow-hidden">
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
          className="relative text-center px-4 z-10"
        >
          <motion.div 
            className="mb-8 flex justify-center"
          >
            <img 
              src="/logo_transparent.png" 
              alt="Velow Logo"
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
          >
            <a 
              href="#latest-album" 
              className="inline-block bg-white text-black px-8 py-3 
                       hover:bg-gray-200 transition-colors font-mono uppercase tracking-wider
                       hover:scale-105 transform duration-200"
            >
              Latest Album
            </a>
          </motion.div>
        </motion.div>
      </div>

      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display mb-6">WHO WE ARE</h2>
          <p className="text-gray-300 text-lg leading-relaxed font-mono">
            Born in the underground scene, Velow emerged as a force that blends raw energy 
            with intricate melodies. Our sound is a journey through the depths of human emotion, 
            wrapped in powerful riffs and thunderous rhythms.
          </p>
        </motion.div>
      </section>

      <section id="latest-album" className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
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
                className="text-4xl font-display mb-6"
              >
                WIZJE
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-gray-300 mb-8 font-mono"
              >
                Our debut album that combines energetic music with enigmatic lyrics,
                creating an explosive mixture that received great acclaim in the rock community.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <a 
                  href="https://spotify.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-[#1DB954] text-white px-8 py-3 
                           hover:bg-[#1ed760] transition-colors font-mono uppercase tracking-wider
                           hover:scale-105 transform duration-200"
                >
                  Listen on Spotify
                </a>
              </motion.div>
            </div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Album Cover"
                className="rounded-lg shadow-2xl hover:scale-105 transform duration-300"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-display mb-12 text-center">UPCOMING SHOWS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { date: '2024-04-15', venue: 'Rock Club Underground', city: 'Warsaw' },
              { date: '2024-04-22', venue: 'Metal Stage', city: 'Krakow' },
              { date: '2024-05-01', venue: 'Alternative Space', city: 'Wroclaw' },
            ].map((show, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <p className="text-xl font-mono mb-2">{new Date(show.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</p>
                <h3 className="text-2xl font-display mb-2">{show.venue}</h3>
                <p className="text-gray-400 mb-4">{show.city}</p>
                <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition-colors font-mono text-sm uppercase">
                  Get Tickets
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;