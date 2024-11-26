import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image: string;
}

const PageHeader = ({ title, subtitle, image }: PageHeaderProps) => {
  return (
    <div className="relative h-[50vh] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${image})`,
          filter: 'brightness(0.3)'
        }}
      />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center px-4"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-shadow">{title}</h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-gray-200 text-shadow">{subtitle}</p>
        )}
      </motion.div>
    </div>
  );
};

export default PageHeader;