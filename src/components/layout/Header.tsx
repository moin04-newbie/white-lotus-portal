
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector';

const Header = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const toggleSubmenu = (menu: string) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  const handleAboutUsNavigation = () => {
    console.log('Navigating to About Us');
    navigate('/about-us');
    setIsMenuOpen(false);
    setActiveSubmenu(null);
  };

  return <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-hospital-700">
            White Lotus Hospital
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-hospital-600 font-medium">
                {t('home')}
              </Link>
              <div className="relative group">
                <button 
                  className="text-gray-700 hover:text-hospital-600 font-medium flex items-center" 
                  onClick={() => toggleSubmenu('about')}
                >
                  {t('aboutUs')}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </button>
                <div className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 ${activeSubmenu === 'about' ? 'block' : 'hidden'}`}>
                  <Link 
                    to="/about-us" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setActiveSubmenu(null)}
                  >
                    {t('ourHistory')}
                  </Link>
                  <Link 
                    to="/about-us" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setActiveSubmenu(null)}
                  >
                    {t('missionVision')}
                  </Link>
                  <Link 
                    to="/about-us" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setActiveSubmenu(null)}
                  >
                    {t('leadership')}
                  </Link>
                </div>
              </div>
              <Link to="/departments" className="text-gray-700 hover:text-hospital-600 font-medium">
                {t('departments')}
              </Link>
              <Link to="/doctors" className="text-gray-700 hover:text-hospital-600 font-medium">
                {t('doctors')}
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-hospital-600 font-medium">
                {t('blog')}
              </Link>
              <Link to="/contact-us" className="text-gray-700 hover:text-hospital-600 font-medium">
                {t('contactUs')}
              </Link>
            </nav>}

          {/* Call Us Button and Language Selector */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <Button className="bg-hospital-600 hover:bg-hospital-700 flex items-center">
              <Phone className="mr-2 h-4 w-4" /> {t('callUs')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          {isMobile && <div className="flex items-center space-x-4">
              <LanguageSelector />
              <button onClick={toggleMenu} className="text-gray-500 hover:text-hospital-600 focus:outline-none">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && <div className="md:hidden bg-white shadow-inner">
          <nav className="flex flex-col py-4 px-4">
            <Link to="/" className="text-gray-700 hover:text-hospital-600 font-medium py-2">
              {t('home')}
            </Link>
            <div>
              <button 
                className="text-gray-700 hover:text-hospital-600 font-medium py-2 w-full text-left flex items-center justify-between" 
                onClick={() => toggleSubmenu('about')}
              >
                {t('aboutUs')}
                <ChevronDown className={`h-4 w-4 transition-transform ${activeSubmenu === 'about' ? 'rotate-180' : ''}`} />
              </button>
              {activeSubmenu === 'about' && <div className="pl-4 border-l-2 border-hospital-100 mt-1 mb-2">
                <Link 
                  to="/about-us" 
                  className="block py-2 text-gray-700 hover:text-hospital-600"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveSubmenu(null);
                  }}
                >
                  {t('ourHistory')}
                </Link>
                <Link 
                  to="/about-us" 
                  className="block py-2 text-gray-700 hover:text-hospital-600"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveSubmenu(null);
                  }}
                >
                  {t('missionVision')}
                </Link>
                <Link 
                  to="/about-us" 
                  className="block py-2 text-gray-700 hover:text-hospital-600"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveSubmenu(null);
                  }}
                >
                  {t('leadership')}
                </Link>
              </div>}
            </div>
            <Link to="/departments" className="text-gray-700 hover:text-hospital-600 font-medium py-2">
              {t('departments')}
            </Link>
            <Link to="/doctors" className="text-gray-700 hover:text-hospital-600 font-medium py-2">
              {t('doctors')}
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-hospital-600 font-medium py-2">
              {t('blog')}
            </Link>
            <Link to="/contact-us" className="text-gray-700 hover:text-hospital-600 font-medium py-2">
              {t('contactUs')}
            </Link>
            <Button className="bg-hospital-600 hover:bg-hospital-700 mt-4 flex items-center justify-center">
              <Phone className="mr-2 h-4 w-4" /> {t('callUs')}
            </Button>
          </nav>
        </div>}
    </header>;
};

export default Header;
