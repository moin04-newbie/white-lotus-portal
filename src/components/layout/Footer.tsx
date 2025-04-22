
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-hospital-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">White Lotus Hospital</h3>
            <p className="text-gray-300 mb-4">
              Providing quality healthcare services with compassion and excellence since 1995.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-hospital-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-hospital-300" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-hospital-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-hospital-300" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about-us" className="text-gray-300 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/departments" className="text-gray-300 hover:text-white">Departments</Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-300 hover:text-white">Our Doctors</Link>
              </li>
              <li>
                <Link to="/appointments" className="text-gray-300 hover:text-white">Appointments</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white">Health Blog</Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-300 hover:text-white">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/departments/emergency" className="text-gray-300 hover:text-white">Emergency Care</Link>
              </li>
              <li>
                <Link to="/departments/cardiology" className="text-gray-300 hover:text-white">Cardiology</Link>
              </li>
              <li>
                <Link to="/departments/neurology" className="text-gray-300 hover:text-white">Neurology</Link>
              </li>
              <li>
                <Link to="/departments/orthopedics" className="text-gray-300 hover:text-white">Orthopedics</Link>
              </li>
              <li>
                <Link to="/departments/pediatrics" className="text-gray-300 hover:text-white">Pediatrics</Link>
              </li>
              <li>
                <Link to="/departments/diagnostic" className="text-gray-300 hover:text-white">Diagnostic Services</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="mr-2 h-5 w-5 text-hospital-300" />
                <span className="text-gray-300">123 Medical Center Dr, Healthcare City, HC 12345</span>
              </li>
              <li className="flex">
                <Phone className="mr-2 h-5 w-5 text-hospital-300" />
                <span className="text-gray-300">(123) 456-7890</span>
              </li>
              <li className="flex">
                <Mail className="mr-2 h-5 w-5 text-hospital-300" />
                <span className="text-gray-300">info@whitelotushospital.com</span>
              </li>
              <li className="flex">
                <Clock className="mr-2 h-5 w-5 text-hospital-300" />
                <span className="text-gray-300">
                  Mon-Fri: 8:00 AM - 8:00 PM<br />
                  Sat-Sun: 9:00 AM - 5:00 PM<br />
                  Emergency: 24/7
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-4 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} White Lotus Hospital. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 text-sm hover:text-white">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-400 text-sm hover:text-white">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
