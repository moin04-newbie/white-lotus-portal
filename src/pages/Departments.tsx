
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Brain, Stethoscope, Baby, Ambulance, Bone } from 'lucide-react';
import { departments } from '@/data/departments';

const DepartmentsPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-hospital-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Departments</h1>
          <p className="text-xl max-w-3xl">
            White Lotus Hospital offers comprehensive care across multiple specialized departments. 
            Our medical professionals work together to provide integrated treatment using the latest technology.
          </p>
        </div>
      </div>
      
      {/* Departments List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept) => (
              <Link 
                key={dept.id} 
                to={`/departments/${dept.id}`}
                className="group"
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardContent className="p-6">
                    <div className={`${dept.bgColor} ${dept.color} p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <dept.icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-hospital-800 mb-2 group-hover:text-hospital-600 transition-colors duration-300">
                      {dept.name}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {dept.description}
                    </p>
                    <div className="mt-auto">
                      <span className="text-hospital-600 font-medium inline-flex items-center">
                        Learn More 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:ml-2 transition-all duration-300" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-hospital-800 mb-6">Comprehensive Healthcare</h2>
            <p className="text-gray-600 mb-8">
              Our departments work together to provide integrated care tailored to each patient's needs. 
              With state-of-the-art technology and experienced medical professionals, we're committed to 
              delivering the highest quality healthcare services.
            </p>
            <Link 
              to="/appointments" 
              className="bg-hospital-600 hover:bg-hospital-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 inline-flex items-center"
            >
              Book an Appointment
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DepartmentsPage;
