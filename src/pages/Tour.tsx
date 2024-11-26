import PageHeader from '../components/PageHeader';
import TourCard from '../components/TourCard';
import { tours } from '../data/tours';
import { motion } from 'framer-motion';

const Tour = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageHeader
        title="Tour Dates"
        subtitle="Come see us live"
        image="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          {tours.map((tour, index) => (
            <TourCard key={tour.date} tour={tour} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Tour;