
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-hospital-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Medical Assistance?</h2>
          <p className="text-xl text-hospital-100 mb-8">
            Our team of medical professionals is ready to help you. Schedule an appointment today.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-white text-hospital-700 hover:bg-hospital-50 text-lg py-6 px-8">
              <Link to="/appointments">Book an Appointment</Link>
            </Button>
            
            <div className="flex items-center">
              <div className="bg-hospital-600 rounded-full p-3 mr-3">
                <Phone size={24} />
              </div>
              <div className="text-left">
                <p className="text-hospital-200 text-sm">Emergency Hotline</p>
                <p className="text-xl font-bold">(123) 456-7890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
