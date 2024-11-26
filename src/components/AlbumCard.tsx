import { motion } from 'framer-motion';
import { Album } from '../types';
import { Music } from 'lucide-react';

interface AlbumCardProps {
  album: Album;
  index: number;
}

const AlbumCard = ({ album, index }: AlbumCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-900 rounded-lg overflow-hidden"
    >
      <div className="aspect-square">
        <img
          src={album.coverUrl}
          alt={album.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{album.title}</h3>
        <p className="text-gray-400 mb-4">{album.year}</p>
        {album.spotifyLink && (
          <a
            href={album.spotifyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1DB954] text-white px-4 py-2 rounded-full hover:bg-[#1ed760] transition-colors"
          >
            <Music size={18} />
            Listen on Spotify
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default AlbumCard;