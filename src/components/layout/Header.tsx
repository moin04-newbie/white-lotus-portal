
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Clock, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-hospital-700 text-white py-2">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm">Emergency: (123) 456-7890</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span className="text-sm">24/7 Service</span>
            </div>
          </div>
          <div>
            <Button variant="outline" className="bg-white text-hospital-700 hover:bg-hospital-50 text-sm">
              <Link to="/appointments">Book Appointment</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-hospital-700">White Lotus Hospital</h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <NavLinks />
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-hospital-700"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute z-50 w-full">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <NavLinks mobile={true} setIsMenuOpen={setIsMenuOpen} />
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

// NavLinks Component
const NavLinks = ({ mobile = false, setIsMenuOpen = () => {} }) => {
  const [dropdownOpen, setDropdownOpen] = useState({
    departments: false,
    doctors: false,
  });

  const handleDropdownToggle = (dropdown: string) => {
    if (mobile) {
      setDropdownOpen(prev => ({
        ...prev,
        [dropdown]: !prev[dropdown]
      }));
    }
  };

  const handleLinkClick = () => {
    if (mobile) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <Link 
        to="/" 
        className="text-hospital-800 hover:text-hospital-600 font-medium"
        onClick={handleLinkClick}
      >
        Home
      </Link>
      <Link 
        to="/about-us" 
        className="text-hospital-800 hover:text-hospital-600 font-medium"
        onClick={handleLinkClick}
      >
        About Us
      </Link>
      
      {/* Departments Dropdown */}
      <div className={`relative ${mobile ? 'w-full' : ''}`}>
        <button 
          className="flex items-center text-hospital-800 hover:text-hospital-600 font-medium"
          onClick={() => handleDropdownToggle('departments')}
          onMouseEnter={() => !mobile && setDropdownOpen(prev => ({ ...prev, departments: true }))}
          onMouseLeave={() => !mobile && setDropdownOpen(prev => ({ ...prev, departments: false }))}
        >
          Departments
          <ChevronDown className="ml-1 h-4 w-4" />
        </button>
        
        {dropdownOpen.departments && (
          <div 
            className={`${mobile ? 'relative mt-2' : 'absolute top-full left-0 mt-1'} bg-white shadow-lg rounded-md z-50 min-w-[200px]`}
            onMouseEnter={() => !mobile && setDropdownOpen(prev => ({ ...prev, departments: true }))}
            onMouseLeave={() => !mobile && setDropdownOpen(prev => ({ ...prev, departments: false }))}
          >
            <div className="py-2 px-4">
              <Link 
                to="/departments" 
                className="block py-2 text-hospital-800 hover:text-hospital-600"
                onClick={handleLinkClick}
              >
                All Departments
              </Link>
              <Link 
                to="/departments/cardiology" 
                className="block py-2 text-hospital-800 hover:text-hospital-600"
                onClick={handleLinkClick}
              >
                Cardiology
              </Link>
              <Link 
                to="/departments/neurology" 
                className="block py-2 text-hospital-800 hover:text-hospital-600"
                onClick={handleLinkClick}
              >
                Neurology
              </Link>
              <Link 
                to="/departments/orthopedics" 
                className="block py-2 text-hospital-800 hover:text-hospital-600"
                onClick={handleLinkClick}
              >
                Orthopedics
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Doctors Dropdown */}
      <div className={`relative ${mobile ? 'w-full' : ''}`}>
        <button 
          className="flex items-center text-hospital-800 hover:text-hospital-600 font-medium"
          onClick={() => handleDropdownToggle('doctors')}
          onMouseEnter={() => !mobile && setDropdownOpen(prev => ({ ...prev, doctors: true }))}
          onMouseLeave={() => !mobile && setDropdownOpen(prev => ({ ...prev, doctors: false }))}
        >
          Doctors
          <ChevronDown className="ml-1 h-4 w-4" />
        </button>
        
        {dropdownOpen.doctors && (
          <div 
            className={`${mobile ? 'relative mt-2' : 'absolute top-full left-0 mt-1'} bg-white shadow-lg rounded-md z-50 min-w-[200px]`}
            onMouseEnter={() => !mobile && setDropdownOpen(prev => ({ ...prev, doctors: true }))}
            onMouseLeave={() => !mobile && setDropdownOpen(prev => ({ ...prev, doctors: false }))}
          >
            <div className="py-2 px-4">
              <Link 
                to="/doctors" 
                className="block py-2 text-hospital-800 hover:text-hospital-600"
                onClick={handleLinkClick}
              >
                Find a Doctor
              </Link>
              <Link 
                to="/doctors/specialists" 
                className="block py-2 text-hospital-800 hover:text-hospital-600"
                onClick={handleLinkClick}
              >
                Specialists
              </Link>
            </div>
          </div>
        )}
      </div>

      <Link 
        to="/appointments" 
        className="text-hospital-800 hover:text-hospital-600 font-medium"
        onClick={handleLinkClick}
      >
        Appointments
      </Link>
      <Link 
        to="/blog" 
        className="text-hospital-800 hover:text-hospital-600 font-medium"
        onClick={handleLinkClick}
      >
        Blog
      </Link>
      <Link 
        to="/contact-us" 
        className="text-hospital-800 hover:text-hospital-600 font-medium"
        onClick={handleLinkClick}
      >
        Contact
      </Link>
      
      {mobile && (
        <div className="pt-2 mt-2 border-t border-gray-200">
          <Link 
            to="/emergency" 
            className="block py-2 text-red-600 font-bold"
            onClick={handleLinkClick}
          >
            Emergency
          </Link>
        </div>
      )}
    </>
  );
};

export default Header;
