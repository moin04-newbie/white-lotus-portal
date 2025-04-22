
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Mock data for featured doctors
const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiology',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80',
    education: 'MD, Harvard Medical School',
    experience: '15+ years experience',
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Neurology',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80',
    education: 'MD, Johns Hopkins University',
    experience: '12+ years experience',
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrics',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80',
    education: 'MD, Stanford University',
    experience: '10+ years experience',
  },
  {
    id: 4,
    name: 'Dr. James Wilson',
    specialty: 'Orthopedics',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80',
    education: 'MD, Yale University',
    experience: '18+ years experience',
  },
];

const FeaturedDoctors = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-hospital-800 mb-4">Our Expert Doctors</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our team of experienced and compassionate medical professionals dedicated to providing the highest quality care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-hospital-800 to-transparent p-4">
                  <h3 className="text-white text-xl font-bold">{doctor.name}</h3>
                  <p className="text-hospital-100">{doctor.specialty}</p>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-gray-600 mb-1">{doctor.education}</p>
                <p className="text-gray-500 mb-4">{doctor.experience}</p>
                
                <div className="flex space-x-2">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-hospital-600 hover:bg-hospital-700 text-white"
                  >
                    <Link to={`/doctors/${doctor.id}`}>View Profile</Link>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-hospital-600 text-hospital-600 hover:bg-hospital-50"
                  >
                    <Link to={`/appointment-booking?doctor=${doctor.id}`}>Book Appointment</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/doctors" 
            className="bg-hospital-600 hover:bg-hospital-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 inline-flex items-center"
          >
            View All Doctors
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDoctors;
