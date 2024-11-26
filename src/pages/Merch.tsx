import PageHeader from '../components/PageHeader';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';

const products = [
  {
    id: '1',
    name: 'Wizje Album T-Shirt',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    description: 'Black cotton t-shirt featuring our debut album artwork'
  },
  {
    id: '2',
    name: 'Classic Logo Hoodie',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    description: 'Comfortable black hoodie with embroidered logo'
  },
  {
    id: '3',
    name: 'Tour Poster 2024',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1515847049296-a281d6401047?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    description: 'Limited edition tour poster, hand-numbered'
  }
];

const Merch = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageHeader
        title="Merch Store"
        subtitle="Official Velow Merchandise"
        image="https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Merch;