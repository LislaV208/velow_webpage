import { Facebook, Instagram, Youtube, Music } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">VELOW</h3>
            <p className="text-gray-400">Your new favourite band</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
               className="hover:text-gray-400 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
               className="hover:text-gray-400 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
               className="hover:text-gray-400 transition-colors">
              <Youtube size={24} />
            </a>
            <a href="https://spotify.com" target="_blank" rel="noopener noreferrer"
               className="hover:text-gray-400 transition-colors">
              <Music size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Velow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;