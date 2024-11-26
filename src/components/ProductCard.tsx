import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-900 rounded-lg overflow-hidden"
    >
      <div className="aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <p className="text-gray-400 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">${product.price}</span>
          <button className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;