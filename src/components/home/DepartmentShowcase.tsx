
import { Link } from 'react-router-dom';
import { departments } from '@/data/departments';

const DepartmentShowcase = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-hospital-800 mb-4">Our Specialized Departments</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            White Lotus Hospital offers a wide range of specialized departments to provide comprehensive care for all your health needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept) => (
            <Link 
              key={dept.id} 
              to={`/departments/${dept.id}`}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className={`${dept.bgColor} ${dept.color} p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <dept.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-hospital-800 mb-2 group-hover:text-hospital-600 transition-colors duration-300">
                  {dept.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {dept.description}
                </p>
                <span className="text-hospital-600 font-medium inline-flex items-center">
                  Learn More 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:ml-2 transition-all duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/departments" 
            className="bg-hospital-600 hover:bg-hospital-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 inline-flex items-center"
          >
            View All Departments
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DepartmentShowcase;
