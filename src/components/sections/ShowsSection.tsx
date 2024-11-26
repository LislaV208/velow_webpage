import { motion } from 'framer-motion';

const shows = [
  { date: '2024-04-15', venue: 'Rock Club Underground', city: 'Warsaw' },
  { date: '2024-04-22', venue: 'Metal Stage', city: 'Krakow' },
  { date: '2024-05-01', venue: 'Alternative Space', city: 'Wroclaw' },
];

const ShowsSection = () => {
  return (
    <section id="shows" className="h-screen flex items-center bg-gradient-to-b from-gray-900 to-black snap-start">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 w-full"
      >
        <h2 className="text-4xl md:text-5xl font-display mb-12 text-center">UPCOMING SHOWS</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {shows.map((show, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <p className="text-xl font-mono mb-2">
                {new Date(show.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
              </p>
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
  );
};

export default ShowsSection;
