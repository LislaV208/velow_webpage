import { motion } from 'framer-motion';
import { BandMember } from '../types';

interface MemberCardProps {
  member: BandMember;
  index: number;
}

const MemberCard = ({ member, index }: MemberCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-gray-900/70 transition-colors"
    >
      <div className="aspect-[4/3] bg-gray-800">
        <img
          src={member.image || `https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80`}
          alt={member.name}
          className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-1">{member.name}</h3>
        <p className="text-gray-400 text-sm">{member.role}</p>
      </div>
    </motion.div>
  );
};

export default MemberCard;