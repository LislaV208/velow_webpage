import { motion } from 'framer-motion';
import { Tour } from '../types';
import { Calendar, MapPin, Ticket } from 'lucide-react';

interface TourCardProps {
  tour: Tour;
  index: number;
}

const TourCard = ({ tour, index }: TourCardProps) => {
  const formattedDate = new Date(tour.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-900 rounded-lg p-6 flex flex-col md:flex-row justify-between items-center gap-4"
    >
      <div className="flex-1">
        <div className="flex items-center gap-2 text-gray-400 mb-2">
          <Calendar size={16} />
          <span>{formattedDate}</span>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <MapPin size={16} />
          <span className="font-bold">{tour.venue}, {tour.city}</span>
        </div>
      </div>
      <a
        href={tour.ticketLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors"
      >
        <Ticket size={18} />
        Get Tickets
      </a>
    </motion.div>
  );
};

export default TourCard;