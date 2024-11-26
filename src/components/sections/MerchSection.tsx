import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'WIZJE T-Shirt',
    price: '€29.99',
    image: '/merch/tshirt.jpg',
    description: 'Limited edition t-shirt featuring our debut album artwork'
  },
  {
    id: 2,
    name: 'Band Hoodie',
    price: '€49.99',
    image: '/merch/hoodie.jpg',
    description: 'Premium quality hoodie with embroidered logo'
  },
  {
    id: 3,
    name: 'Vinyl Record',
    price: '€24.99',
    image: '/merch/vinyl.jpg',
    description: 'WIZJE album on 180g vinyl with exclusive artwork'
  }
];

const MerchSection = () => {
  return (
    <section id="merch" className="min-h-screen snap-start bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display mb-6">MERCH</h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-white to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-900 rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-black px-6 py-2 rounded font-mono text-sm uppercase transform -translate-y-2 group-hover:translate-y-0 transition-transform">
                    Add to Cart
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-display mb-2">{product.name}</h3>
              <p className="text-gray-400 mb-2 font-mono">{product.description}</p>
              <p className="text-xl font-mono">{product.price}</p>
            </motion.div>
          ))}
        </div>

        {/* Shopping Cart Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <button className="bg-purple-600 hover:bg-purple-700 transition-colors px-8 py-4 rounded-lg font-mono uppercase tracking-wider inline-flex items-center gap-2">
            <span>View Cart</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default MerchSection;
