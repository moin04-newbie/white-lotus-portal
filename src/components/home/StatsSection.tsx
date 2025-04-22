
import { Users, Award, Building, Calendar } from 'lucide-react';

const stats = [
  {
    id: 1,
    title: 'Patients Served',
    value: '50,000+',
    icon: Users,
    color: 'text-blue-500',
    bgColor: 'bg-blue-100',
  },
  {
    id: 2,
    title: 'Medical Experts',
    value: '150+',
    icon: Award,
    color: 'text-green-500',
    bgColor: 'bg-green-100',
  },
  {
    id: 3,
    title: 'Years of Service',
    value: '25+',
    icon: Building,
    color: 'text-purple-500',
    bgColor: 'bg-purple-100',
  },
  {
    id: 4,
    title: 'Appointments',
    value: '1,200+',
    icon: Calendar,
    color: 'text-orange-500',
    bgColor: 'bg-orange-100',
    suffix: 'Monthly',
  },
];

const StatsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="bg-white rounded-lg shadow-md p-6 flex items-start"
            >
              <div className={`${stat.bgColor} ${stat.color} p-3 rounded-full mr-4`}>
                <stat.icon size={24} />
              </div>
              
              <div>
                <p className="text-gray-600 text-sm">{stat.title}</p>
                <div className="flex items-baseline">
                  <h3 className="text-3xl font-bold text-hospital-800 mr-1">{stat.value}</h3>
                  {stat.suffix && (
                    <span className="text-sm text-gray-500">{stat.suffix}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
