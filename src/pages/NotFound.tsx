
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Home, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-9xl font-bold text-hospital-700">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">Page Not Found</h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            We're sorry, the page you requested could not be found. Please check the URL or navigate back to the homepage.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-hospital-600 hover:bg-hospital-700 text-white">
              <Home className="mr-2 h-5 w-5" />
              <Link to="/">Return Home</Link>
            </Button>
            
            <Button variant="outline" className="border-hospital-600 text-hospital-600 hover:bg-hospital-50">
              <Search className="mr-2 h-5 w-5" />
              <Link to="/contact-us">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
