import { motion } from 'framer-motion';
import { useState } from 'react';

// Define a type for media items
type MediaItem = {
  id?: number;
  thumbnailUrl: string;
  imageUrl: string;
  title: string;
  type: 'photo';
  alt: string;
};

// Sample data with contextual images from Unsplash
const mediaContent = {
  images: [
    {
      id: 1,
      thumbnailUrl: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=400&h=300&q=80',
      imageUrl: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=1200&q=80',
      title: 'Live Performance',
      type: 'photo' as const,
      alt: 'Band performing on stage with dramatic lighting'
    },
    {
      id: 2,
      thumbnailUrl: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=400&h=300&q=80',
      imageUrl: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=1200&q=80',
      title: 'Backstage Moments',
      type: 'photo' as const,
      alt: 'Behind the scenes backstage preparation'
    },
    {
      id: 3,
      thumbnailUrl: 'https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?w=400&h=300&q=80',
      imageUrl: 'https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?w=1200&q=80',
      title: 'Recording Session',
      type: 'photo' as const,
      alt: 'Band recording in the studio'
    },
    {
      id: 4,
      thumbnailUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&q=80',
      imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80',
      title: 'Concert Crowd',
      type: 'photo' as const,
      alt: 'Energetic crowd at a concert'
    },
    {
      id: 5,
      thumbnailUrl: 'https://images.unsplash.com/photo-1508973379184-7517410fb0bc?w=400&h=300&q=80',
      imageUrl: 'https://images.unsplash.com/photo-1508973379184-7517410fb0bc?w=1200&q=80',
      title: 'Guitar Close-up',
      type: 'photo' as const,
      alt: 'Close-up shot of electric guitar'
    },
    {
      id: 6,
      thumbnailUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&q=80',
      imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&q=80',
      title: 'Band Portrait',
      type: 'photo' as const,
      alt: 'Artistic band portrait in black and white'
    }
  ]
};

// Comment out original media content
/*
const mediaContent = {
  images: [
    {
      id: 1,
      thumbnailUrl: '/media/band1-thumb.jpg',
      imageUrl: '/media/band1.jpg',
      title: 'Band performing live',
      type: 'photo' as const,
      alt: 'Band performing on stage'
    },
    {
      id: 2,
      thumbnailUrl: '/media/band2-thumb.jpg',
      imageUrl: '/media/band2.jpg',
      title: 'Band backstage',
      type: 'photo' as const,
      alt: 'Band backstage'
    },
    {
      id: 3,
      thumbnailUrl: '/media/band3-thumb.jpg',
      imageUrl: '/media/band3.jpg',
      title: 'Band photoshoot',
      type: 'photo' as const,
      alt: 'Band photoshoot'
    },
  ]
};
*/

const MediaSection = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const closeModal = () => setSelectedMedia(null);

  return (
    <section id="media" className="relative min-h-screen snap-start overflow-hidden bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display mb-6">GALLERY</h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-white to-transparent mx-auto" />
        </motion.div>

        {/* Media Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {mediaContent.images.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedMedia(image)}
              className="aspect-video relative overflow-hidden rounded-lg cursor-pointer group"
            >
              <img
                src={image.imageUrl}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={closeModal}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedMedia.imageUrl}
                alt={selectedMedia.title}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default MediaSection;
