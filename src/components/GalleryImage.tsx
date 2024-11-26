import { motion } from 'framer-motion';

interface GalleryImageProps {
  src: string;
  alt: string;
  index: number;
}

const GalleryImage = ({ src, alt, index }: GalleryImageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative aspect-square group cursor-pointer overflow-hidden"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-white text-lg font-bold">{alt}</span>
      </div>
    </motion.div>
  );
};

export default GalleryImage;