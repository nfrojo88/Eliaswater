import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Droplets } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Equipment', path: '/equipment' },
    { name: 'Contact', path: '/contact' }
  ];

  const isHomePage = location.pathname === '/';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || !isHomePage ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
          <div className={`p-2 rounded-full ${isScrolled || !isHomePage ? 'bg-red-50' : 'bg-white/20'}`}>
             <img
             src="https://res.cloudinary.com/dg1ijsqx6/image/upload/v1752054960/logo_1_qyjwit.png"
             alt="Elias Water Well Logo"
             className="h-8 w-8 object-contain"
             />
          </div>            
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-200 hover:text-primary-red ${
                  location.pathname === item.path
                    ? 'text-primary-red'
                    : isScrolled || !isHomePage
                    ? 'text-gray-800'
                    : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-200 bg-white rounded-lg shadow-lg">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left py-3 px-4 transition-colors duration-200 hover:bg-red-50 hover:text-primary-red ${
                  location.pathname === item.path
                    ? 'text-primary-red bg-red-50'
                    : 'text-gray-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;