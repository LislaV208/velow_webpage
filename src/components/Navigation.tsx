import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/music', label: 'Music' },
    { path: '/tour', label: 'Tour' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/merch', label: 'Merch' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50 font-mono">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8">
              <img 
                src="/logo_heart.png" 
                alt="Velow Heart" 
                className="w-full h-full object-contain animate-pulse-slow"
              />
            </div>
            <span className="text-2xl font-display tracking-wider">VELOW</span>
          </NavLink>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-white hover:text-gray-300 transition-colors font-mono text-sm uppercase tracking-wider ${
                    isActive ? 'border-b-2' : ''
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black">
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-3 py-2 text-white hover:bg-gray-900 font-mono text-sm uppercase tracking-wider ${
                    isActive ? 'bg-gray-900' : ''
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;