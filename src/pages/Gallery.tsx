import PageHeader from '../components/PageHeader';
import GalleryImage from '../components/GalleryImage';
import { motion } from 'framer-motion';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    alt: 'Live Performance'
  },
  {
    src: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    alt: 'Backstage'
  },
  {
    src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    alt: 'Concert'
  },
  {
    src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    alt: 'Studio Session'
  },
  {
    src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    alt: 'Band Photo'
  },
  {
    src: 'https://images.unsplash.com/photo-1524230659092-07f99a75c013?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    alt: 'On Stage'
  }
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageHeader
        title="Gallery"
        subtitle="Moments captured in time"
        image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {galleryImages.map((image, index) => (
            <GalleryImage
              key={image.src}
              src={image.src}
              alt={image.alt}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;