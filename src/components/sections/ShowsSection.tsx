import { motion } from 'framer-motion';

type Show = {
  date: string;
  venue: string;
  city: string;
  time: string;
  ticketUrl: string;
  status: 'available' | 'limited' | 'sold out';
};

const shows: Show[] = [
  {
    date: '2024-04-15',
    venue: 'Rock Club Underground',
    city: 'Warsaw',
    time: '20:00',
    ticketUrl: '#',
    status: 'available'
  },
  {
    date: '2024-04-22',
    venue: 'Metal Stage',
    city: 'Krakow',
    time: '21:00',
    ticketUrl: '#',
    status: 'limited'
  },
  {
    date: '2024-05-01',
    venue: 'Alternative Space',
    city: 'Wroclaw',
    time: '19:30',
    ticketUrl: '#',
    status: 'available'
  },
  {
    date: '2024-05-15',
    venue: 'Music Haven',
    city: 'Poznan',
    time: '20:30',
    ticketUrl: '#',
    status: 'sold out'
  }
];

const ShowsSection = () => {
  return (
    <section id="shows" className="min-h-screen bg-black snap-start relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display mb-6">UPCOMING SHOWS</h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-white to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {shows.map((show, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-900/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors">
                <div className="p-6 flex flex-col gap-4">
                  <div>
                    <p className="text-xl font-mono mb-1 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                      {new Date(show.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                    </p>
                    <p className="text-gray-400 font-mono text-sm">{show.time}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-display mb-1">{show.venue}</h3>
                    <p className="text-gray-400 text-sm mb-4">{show.city}</p>
                    <button 
                      className={`w-full px-4 py-2 rounded font-mono text-sm uppercase transition-colors ${
                        show.status === 'sold out'
                          ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                          : show.status === 'limited'
                          ? 'bg-white hover:bg-gray-200 text-black'
                          : 'bg-white hover:bg-gray-200 text-black'
                      }`}
                      disabled={show.status === 'sold out'}
                    >
                      {show.status === 'sold out' ? 'Sold Out' : 'Get Tickets'}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-mono"
          >
            <span>Want to book us?</span>
            <span className="text-lg">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ShowsSection;
