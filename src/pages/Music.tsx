import PageHeader from '../components/PageHeader';
import AlbumCard from '../components/AlbumCard';
import { albums } from '../data/albums';
import { motion } from 'framer-motion';

const Music = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageHeader
        title="Our Music"
        subtitle="Discography"
        image="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold mb-12">Albums</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {albums.map((album, index) => (
              <AlbumCard key={album.title} album={album} index={index} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold mb-8">Latest Reviews</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <blockquote className="bg-gray-900 p-6 rounded-lg">
              <p className="text-lg italic mb-4">
                "Velow can be both powerful (the subversive 'Smutna Piosenka') and 
                reflective ('Mimo Strat', 'Miasto pełne krzyku'). And they look good 
                in every incarnation."
              </p>
              <cite className="text-gray-400">- TerazROCK</cite>
            </blockquote>
            <blockquote className="bg-gray-900 p-6 rounded-lg">
              <p className="text-lg italic mb-4">
                "If these are the 'Visions' of Polish rock's future, then things are 
                looking good, really good!"
              </p>
              <cite className="text-gray-400">- EskaROCK</cite>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Music;