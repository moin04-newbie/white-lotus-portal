
import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';

// Mock data for doctors (expanded from FeaturedDoctors)
const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiology',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80',
    education: 'MD, Harvard Medical School',
    experience: '15+ years experience',
    location: 'Main Hospital Campus',
    bio: 'Dr. Johnson is a board-certified cardiologist specializing in preventive cardiology and heart disease management. She has conducted extensive research on cardiovascular health and has published numerous articles in leading medical journals.',
    languages: ['English', 'Spanish'],
    awards: ['American Heart Association Recognition Award', 'Excellence in Patient Care Award'],
    acceptingNewPatients: true,
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Neurology',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80',
    education: 'MD, Johns Hopkins University',
    experience: '12+ years experience',
    location: 'Neuroscience Center',
    bio: 'Dr. Chen is a neurologist with expertise in treating stroke, epilepsy, and neurodegenerative disorders. His approach combines cutting-edge treatments with compassionate patient care. He has pioneered several innovative techniques in neurological treatment.',
    languages: ['English', 'Mandarin', 'Cantonese'],
    awards: ['Neurological Society Young Investigator Award', 'Patient Choice Award'],
    acceptingNewPatients: true,
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrics',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80',
    education: 'MD, Stanford University',
    experience: '10+ years experience',
    location: 'Children\'s Wing',
    bio: 'Dr. Rodriguez is dedicated to providing comprehensive care for children from birth through adolescence. She specializes in developmental pediatrics and childhood asthma management. Her friendly approach helps children feel comfortable during their visits.',
    languages: ['English', 'Spanish'],
    awards: ['Pediatric Society Achievement Award', 'Community Service Excellence Award'],
    acceptingNewPatients: true,
  },
  {
    id: 4,
    name: 'Dr. James Wilson',
    specialty: 'Orthopedics',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80',
    education: 'MD, Yale University',
    experience: '18+ years experience',
    location: 'Orthopedic Center',
    bio: 'Dr. Wilson specializes in sports medicine and joint replacement surgery. He has worked with professional athletes and has developed new techniques for minimally invasive orthopedic procedures. His focus is on helping patients regain mobility and improve quality of life.',
    languages: ['English'],
    awards: ['Orthopedic Innovation Award', 'Sports Medicine Excellence Recognition'],
    acceptingNewPatients: false,
  },
  {
    id: 5,
    name: 'Dr. Priya Sharma',
    specialty: 'Dermatology',
    image: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80',
    education: 'MD, University of Pennsylvania',
    experience: '9+ years experience',
    location: 'Main Hospital Campus',
    bio: 'Dr. Sharma is an expert in medical and cosmetic dermatology, with special interests in skin cancer prevention and treatment of chronic skin conditions. She takes a holistic approach to dermatological care, focusing on both appearance and overall skin health.',
    languages: ['English', 'Hindi', 'Punjabi'],
    awards: ['Dermatology Research Excellence Award', 'Patient Satisfaction Honor'],
    acceptingNewPatients: true,
  },
  {
    id: 6,
    name: 'Dr. Robert Taylor',
    specialty: 'Internal Medicine',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80',
    education: 'MD, Duke University',
    experience: '20+ years experience',
    location: 'Primary Care Center',
    bio: 'Dr. Taylor is a highly experienced internist dedicated to preventive care and management of chronic conditions. His patient-centered approach emphasizes lifestyle modifications alongside medical interventions to achieve optimal health outcomes.',
    languages: ['English', 'French'],
    awards: ['Lifetime Achievement in Primary Care', 'Medical Excellence Recognition'],
    acceptingNewPatients: true,
  },
  {
    id: 7,
    name: 'Dr. Lisa Wong',
    specialty: 'Obstetrics & Gynecology',
    image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80',
    education: 'MD, Columbia University',
    experience: '14+ years experience',
    location: 'Women\'s Health Center',
    bio: 'Dr. Wong provides comprehensive obstetric and gynecological care with a special focus on maternal-fetal medicine and minimally invasive gynecological surgery. She is committed to empowering women through education and personalized healthcare.',
    languages: ['English', 'Cantonese'],
    awards: ['Women\'s Health Champion Award', 'Excellence in Gynecological Surgery'],
    acceptingNewPatients: true,
  },
  {
    id: 8,
    name: 'Dr. Marcus Johnson',
    specialty: 'Psychiatry',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80',
    education: 'MD, University of California, San Francisco',
    experience: '11+ years experience',
    location: 'Behavioral Health Building',
    bio: 'Dr. Johnson specializes in treating mood disorders, anxiety, and PTSD. He combines medication management with therapeutic approaches to provide comprehensive mental health care. He is an advocate for reducing mental health stigma and increasing access to care.',
    languages: ['English'],
    awards: ['Mental Health Advocacy Award', 'Compassionate Care Recognition'],
    acceptingNewPatients: true,
  }
];

// List of specialties for filter
const specialties = [
  { value: 'all', label: 'All Specialties' },
  { value: 'Cardiology', label: 'Cardiology' },
  { value: 'Neurology', label: 'Neurology' },
  { value: 'Pediatrics', label: 'Pediatrics' },
  { value: 'Orthopedics', label: 'Orthopedics' },
  { value: 'Dermatology', label: 'Dermatology' },
  { value: 'Internal Medicine', label: 'Internal Medicine' },
  { value: 'Obstetrics & Gynecology', label: 'Obstetrics & Gynecology' },
  { value: 'Psychiatry', label: 'Psychiatry' },
];

const Doctors = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <section className="bg-gradient-to-b from-hospital-50 to-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-hospital-800 mb-4">Our Expert Doctors</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our team of experienced and compassionate medical professionals dedicated to providing 
              the highest quality care for all your health needs.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                  Search Doctors
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input 
                    id="search" 
                    placeholder="Search by name"
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-1">
                  Specialty
                </label>
                <Select>
                  <select 
                    id="specialty" 
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    {specialties.map((specialty) => (
                      <option key={specialty.value} value={specialty.value}>
                        {specialty.label}
                      </option>
                    ))}
                  </select>
                </Select>
              </div>
              
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input 
                    id="location" 
                    placeholder="All Locations"
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {doctors.map((doctor) => (
              <div 
                key={doctor.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative overflow-hidden h-60">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                  {doctor.acceptingNewPatients && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold py-1 px-2 rounded">
                      Accepting Patients
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h3 className="text-xl font-bold text-hospital-800">{doctor.name}</h3>
                  <p className="text-hospital-600 mb-2">{doctor.specialty}</p>
                  <p className="text-gray-600 text-sm mb-3">{doctor.education}</p>
                  <p className="text-gray-600 text-sm mb-4 flex items-center">
                    <MapPin size={16} className="mr-1 text-gray-400" />
                    {doctor.location}
                  </p>
                  
                  <div className="flex space-x-2">
                    <Button 
                      onClick={() => navigate(`/doctors/${doctor.id}`)}
                      className="flex-1 bg-hospital-600 hover:bg-hospital-700"
                    >
                      View Profile
                    </Button>
                    <Button 
                      onClick={() => navigate(`/appointments?doctor=${doctor.id}`)}
                      variant="outline" 
                      className="flex-1 border-hospital-600 text-hospital-600 hover:bg-hospital-50"
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Doctors;
