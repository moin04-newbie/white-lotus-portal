
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { departments } from '@/data/departments';
import { Phone } from 'lucide-react';

const DepartmentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const department = departments.find(dept => dept.id === id);

  if (!department) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Department Not Found</h1>
          <p className="text-gray-600 mb-8">The department you're looking for doesn't exist or has been moved.</p>
          <Link to="/departments">
            <Button className="bg-hospital-600 hover:bg-hospital-700">
              View All Departments
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Department Hero */}
      <div className={`${department.bgColor} py-16`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className={`${department.color} p-6 rounded-full w-24 h-24 flex items-center justify-center mb-6 md:mb-0 md:mr-8`}>
              <department.icon size={48} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-hospital-800 mb-2">{department.name}</h1>
              <p className="text-xl text-gray-700 max-w-3xl">{department.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Department Overview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-hospital-800 mb-6">Overview</h2>
              <p className="text-gray-700 mb-8">
                The {department.name} Department at White Lotus Hospital provides comprehensive care for patients with {department.id === 'cardiology' ? 'heart and cardiovascular' : department.id === 'neurology' ? 'neurological' : department.id === 'internal-medicine' ? 'chronic and acute' : department.id === 'pediatrics' ? 'childhood' : department.id === 'emergency' ? 'emergency and trauma' : 'orthopedic'} conditions. Our team of specialized healthcare professionals works together to deliver personalized treatment plans using the latest medical advances.
              </p>

              <h2 className="text-2xl font-bold text-hospital-800 mb-6">Services Offered</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {department.services.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <svg className={`h-5 w-5 ${department.color} mr-2 mt-1`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-hospital-800 mb-6">Technology & Equipment</h2>
              <p className="text-gray-700 mb-8">
                {department.technology}
              </p>
            </div>

            {/* Sidebar */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-hospital-800 mb-4">Contact Information</h3>
              <div className="flex items-center mb-4">
                <Phone className="h-5 w-5 text-hospital-600 mr-2" />
                <span className="text-gray-700">{department.id === 'emergency' ? '(123) 911-0000' : '(123) 456-7890'}</span>
              </div>
              <p className="text-gray-700 mb-6">
                Email: {department.id}@whitelotushospital.com<br />
                Location: {department.id === 'emergency' ? 'Ground Floor, East Wing' : 'Floor ' + Math.floor(Math.random() * 5 + 2) + ', Main Building'}
              </p>

              <h3 className="text-xl font-bold text-hospital-800 mb-4">Patient Information</h3>
              <p className="text-gray-700 mb-6">
                {department.patientInfo}
              </p>

              <h3 className="text-xl font-bold text-hospital-800 mb-4">Hours</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Day</TableHead>
                    <TableHead>Hours</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Weekdays</TableCell>
                    <TableCell>{department.id === 'emergency' ? '24 hours' : '8:00 AM - 6:00 PM'}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Saturday</TableCell>
                    <TableCell>{department.id === 'emergency' ? '24 hours' : '9:00 AM - 4:00 PM'}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Sunday</TableCell>
                    <TableCell>{department.id === 'emergency' ? '24 hours' : 'Closed (Emergency Only)'}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <div className="mt-8">
                <Button className="w-full bg-hospital-600 hover:bg-hospital-700">
                  <Link to={`/appointments?department=${department.id}`}>Book an Appointment</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DepartmentDetail;
