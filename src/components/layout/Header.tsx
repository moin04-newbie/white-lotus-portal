
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useMobile } from '@/hooks/use-mobile';

const Header = () => {
  const isMobile = useMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubmenu = (menu: string) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-hospital-700">
            White Lotus Hospital
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-hospital-600 font-medium">
                Home
              </Link>
              <div className="relative group">
                <button 
                  className="text-gray-700 hover:text-hospital-600 font-medium flex items-center"
                  onClick={() => toggleSubmenu('about')}
                >
                  About Us
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 ${activeSubmenu === 'about' ? 'block' : 'hidden'}`}>
                  <Link to="/about/history" className="block px-4 py-2 text-gray-700 hover:bg-hospital-50 hover:text-hospital-600">
                    Our History
                  </Link>
                  <Link to="/about/mission" className="block px-4 py-2 text-gray-700 hover:bg-hospital-50 hover:text-hospital-600">
                    Mission & Vision
                  </Link>
                  <Link to="/about/leadership" className="block px-4 py-2 text-gray-700 hover:bg-hospital-50 hover:text-hospital-600">
                    Leadership
                  </Link>
                </div>
              </div>
              <Link to="/departments" className="text-gray-700 hover:text-hospital-600 font-medium">
                Departments
              </Link>
              <Link to="/doctors" className="text-gray-700 hover:text-hospital-600 font-medium">
                Our Doctors
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-hospital-600 font-medium">
                Health Blog
              </Link>
              <Link to="/contact-us" className="text-gray-700 hover:text-hospital-600 font-medium">
                Contact Us
              </Link>
            </nav>
          )}

          {/* Call Us Button */}
          <div className="hidden md:block">
            <Button className="bg-hospital-600 hover:bg-hospital-700 flex items-center">
              <Phone className="mr-2 h-4 w-4" /> Call Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          {isMobile && (
            <button 
              onClick={toggleMenu}
              className="md:hidden text-gray-500 hover:text-hospital-600 focus:outline-none"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden bg-white shadow-inner">
          <nav className="flex flex-col py-4 px-4">
            <Link to="/" className="text-gray-700 hover:text-hospital-600 font-medium py-2">
              Home
            </Link>
            <div>
              <button 
                className="text-gray-700 hover:text-hospital-600 font-medium py-2 w-full text-left flex items-center justify-between"
                onClick={() => toggleSubmenu('about')}
              >
                About Us
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeSubmenu === 'about' && (
                <div className="pl-4 border-l-2 border-hospital-100 mt-1 mb-2">
                  <Link to="/about/history" className="block py-2 text-gray-700 hover:text-hospital-600">
                    Our History
                  </Link>
                  <Link to="/about/mission" className="block py-2 text-gray-700 hover:text-hospital-600">
                    Mission & Vision
                  </Link>
                  <Link to="/about/leadership" className="block py-2 text-gray-700 hover:text-hospital-600">
                    Leadership
                  </Link>
                </div>
              )}
            </div>
            <Link to="/departments" className="text-gray-700 hover:text-hospital-600 font-medium py-2">
              Departments
            </Link>
            <Link to="/doctors" className="text-gray-700 hover:text-hospital-600 font-medium py-2">
              Our Doctors
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-hospital-600 font-medium py-2">
              Health Blog
            </Link>
            <Link to="/contact-us" className="text-gray-700 hover:text-hospital-600 font-medium py-2">
              Contact Us
            </Link>
            <Button className="bg-hospital-600 hover:bg-hospital-700 mt-4 flex items-center justify-center">
              <Phone className="mr-2 h-4 w-4" /> Call Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
