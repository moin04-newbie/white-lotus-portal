import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Award, Mail, Phone, Languages, CheckCircle, XCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// This is the same mock data used in the Doctors.tsx page
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
    availability: [
      { day: 'Monday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Wednesday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Friday', hours: '9:00 AM - 1:00 PM' },
    ],
    education_details: [
      { degree: 'Doctor of Medicine', institution: 'Harvard Medical School', year: '2005' },
      { degree: 'Residency in Internal Medicine', institution: 'Massachusetts General Hospital', year: '2008' },
      { degree: 'Fellowship in Cardiology', institution: 'Cleveland Clinic', year: '2011' },
      { degree: 'Bachelor of Science in Biology', institution: 'Stanford University', year: '2001' },
    ],
    specializations: ['Preventive Cardiology', 'Heart Failure Management', 'Cardiac Rehabilitation', 'Echocardiography'],
    publications: [
      { title: 'Advancements in Heart Failure Treatment', journal: 'Journal of Cardiology', year: '2019' },
      { title: 'Prevention Strategies for Coronary Artery Disease', journal: 'American Heart Journal', year: '2017' },
      { title: 'The Impact of Lifestyle Modifications on Cardiovascular Health', journal: 'Preventive Medicine', year: '2015' },
    ],
    insurances: ['Medicare', 'Blue Cross Blue Shield', 'Aetna', 'UnitedHealthcare', 'Cigna'],
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
    availability: [
      { day: 'Tuesday', hours: '8:00 AM - 4:00 PM' },
      { day: 'Thursday', hours: '8:00 AM - 4:00 PM' },
      { day: 'Friday', hours: '10:00 AM - 6:00 PM' },
    ],
    education_details: [
      { degree: 'Doctor of Medicine', institution: 'Johns Hopkins University', year: '2009' },
      { degree: 'Residency in Neurology', institution: 'UCSF Medical Center', year: '2013' },
      { degree: 'Fellowship in Neurophysiology', institution: 'Mayo Clinic', year: '2015' },
      { degree: 'Bachelor of Science in Neuroscience', institution: 'UC Berkeley', year: '2005' },
    ],
    specializations: ['Stroke Treatment', 'Epilepsy Management', 'Neurodegenerative Disorders', 'Neurophysiology'],
    publications: [
      { title: 'Novel Approaches to Stroke Recovery', journal: 'Neurology Today', year: '2020' },
      { title: 'Advances in Epilepsy Treatment', journal: 'Epilepsy Research', year: '2018' },
      { title: 'Early Markers of Neurodegenerative Disease', journal: 'Journal of Neurology', year: '2016' },
    ],
    insurances: ['Medicare', 'Blue Cross Blue Shield', 'Aetna', 'Kaiser Permanente', 'Humana'],
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
    availability: [
      { day: 'Monday', hours: '10:00 AM - 6:00 PM' },
      { day: 'Wednesday', hours: '10:00 AM - 6:00 PM' },
      { day: 'Thursday', hours: '2:00 PM - 8:00 PM' },
    ],
    education_details: [
      { degree: 'Doctor of Medicine', institution: 'Stanford University', year: '2011' },
      { degree: 'Residency in Pediatrics', institution: 'Children\'s Hospital Los Angeles', year: '2014' },
      { degree: 'Fellowship in Developmental Pediatrics', institution: 'Boston Children\'s Hospital', year: '2016' },
      { degree: 'Bachelor of Science in Biology', institution: 'UCLA', year: '2007' },
    ],
    specializations: ['Developmental Pediatrics', 'Childhood Asthma Management', 'Vaccinations', 'Adolescent Health'],
    publications: [
      { title: 'Early Intervention Strategies for Autism Spectrum Disorders', journal: 'Pediatrics', year: '2019' },
      { title: 'Managing Childhood Asthma: A Comprehensive Guide', journal: 'Journal of Pediatric Health', year: '2017' },
      { title: 'The Importance of Vaccinations in Preventing Childhood Diseases', journal: 'Preventive Medicine', year: '2015' },
    ],
    insurances: ['Medicare', 'Blue Cross Blue Shield', 'Aetna', 'UnitedHealthcare', 'Cigna'],
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
    availability: [
      { day: 'Monday', hours: '8:00 AM - 4:00 PM' },
      { day: 'Tuesday', hours: '8:00 AM - 4:00 PM' },
      { day: 'Thursday', hours: '10:00 AM - 6:00 PM' },
    ],
    education_details: [
      { degree: 'Doctor of Medicine', institution: 'Yale University', year: '2003' },
      { degree: 'Residency in Orthopedic Surgery', institution: 'Hospital for Special Surgery', year: '2008' },
      { degree: 'Fellowship in Sports Medicine', institution: 'Kerlan-Jobe Orthopaedic Clinic', year: '2010' },
      { degree: 'Bachelor of Science in Biology', institution: 'Dartmouth College', year: '1999' },
    ],
    specializations: ['Sports Medicine', 'Joint Replacement Surgery', 'Arthroscopic Surgery', 'Knee and Shoulder Injuries'],
    publications: [
      { title: 'Minimally Invasive Techniques in Knee Replacement Surgery', journal: 'Journal of Bone and Joint Surgery', year: '2018' },
      { title: 'Rehabilitation Protocols for ACL Reconstruction', journal: 'American Journal of Sports Medicine', year: '2016' },
      { title: 'The Role of Biologics in Treating Osteoarthritis', journal: 'Arthritis & Rheumatology', year: '2014' },
    ],
    insurances: ['Medicare', 'Blue Cross Blue Shield', 'Aetna', 'UnitedHealthcare', 'Cigna'],
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
    availability: [
      { day: 'Tuesday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Thursday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Friday', hours: '2:00 PM - 6:00 PM' },
    ],
    education_details: [
      { degree: 'Doctor of Medicine', institution: 'University of Pennsylvania', year: '2012' },
      { degree: 'Residency in Dermatology', institution: 'New York University Medical Center', year: '2016' },
      { degree: 'Fellowship in Mohs Surgery', institution: 'University of California, San Francisco', year: '2018' },
      { degree: 'Bachelor of Science in Biology', institution: 'MIT', year: '2008' },
    ],
    specializations: ['Medical Dermatology', 'Cosmetic Dermatology', 'Skin Cancer Surgery', 'Laser Treatments'],
    publications: [
      { title: 'Advances in the Treatment of Melanoma', journal: 'Journal of the American Academy of Dermatology', year: '2020' },
      { title: 'The Role of Sunscreen in Preventing Skin Cancer', journal: 'Dermatologic Surgery', year: '2018' },
      { title: 'New Approaches to Treating Acne', journal: 'Archives of Dermatology', year: '2016' },
    ],
    insurances: ['Medicare', 'Blue Cross Blue Shield', 'Aetna', 'UnitedHealthcare', 'Cigna'],
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
    availability: [
      { day: 'Monday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Tuesday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Wednesday', hours: '9:00 AM - 12:00 PM' },
    ],
    education_details: [
      { degree: 'Doctor of Medicine', institution: 'Duke University', year: '2001' },
      { degree: 'Residency in Internal Medicine', institution: 'Massachusetts General Hospital', year: '2004' },
      { degree: 'Fellowship in General Internal Medicine', institution: 'Johns Hopkins University', year: '2006' },
      { degree: 'Bachelor of Science in Biology', institution: 'UNC Chapel Hill', year: '1997' },
    ],
    specializations: ['Preventive Care', 'Chronic Disease Management', 'Geriatrics', 'Men\'s Health'],
    publications: [
      { title: 'The Role of Lifestyle Modifications in Preventing Chronic Diseases', journal: 'Annals of Internal Medicine', year: '2019' },
      { title: 'Managing Hypertension in the Elderly', journal: 'Journal of the American Geriatrics Society', year: '2017' },
      { title: 'The Importance of Vaccinations for Adults', journal: 'Preventive Medicine', year: '2015' },
    ],
    insurances: ['Medicare', 'Blue Cross Blue Shield', 'Aetna', 'UnitedHealthcare', 'Cigna'],
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
    availability: [
      { day: 'Monday', hours: '8:00 AM - 4:00 PM' },
      { day: 'Wednesday', hours: '8:00 AM - 4:00 PM' },
      { day: 'Friday', hours: '9:00 AM - 12:00 PM' },
    ],
    education_details: [
      { degree: 'Doctor of Medicine', institution: 'Columbia University', year: '2007' },
      { degree: 'Residency in Obstetrics and Gynecology', institution: 'UCSF Medical Center', year: '2011' },
      { degree: 'Fellowship in Maternal-Fetal Medicine', institution: 'Johns Hopkins Hospital', year: '2013' },
      { degree: 'Bachelor of Science in Biology', institution: 'Harvard University', year: '2003' },
    ],
    specializations: ['Maternal-Fetal Medicine', 'Minimally Invasive Gynecological Surgery', 'High-Risk Pregnancies', 'Reproductive Health'],
    publications: [
      { title: 'Advances in the Management of Preeclampsia', journal: 'American Journal of Obstetrics & Gynecology', year: '2019' },
      { title: 'Minimally Invasive Surgical Techniques for Hysterectomy', journal: 'Journal of Minimally Invasive Gynecology', year: '2017' },
      { title: 'The Impact of Prenatal Care on Maternal and Infant Outcomes', journal: 'Obstetrics & Gynecology', year: '2015' },
    ],
    insurances: ['Medicare', 'Blue Cross Blue Shield', 'Aetna', 'UnitedHealthcare', 'Cigna'],
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
    availability: [
      { day: 'Tuesday', hours: '10:00 AM - 6:00 PM' },
      { day: 'Thursday', hours: '10:00 AM - 6:00 PM' },
      { day: 'Friday', hours: '9:00 AM - 12:00 PM' },
    ],
    education_details: [
      { degree: 'Doctor of Medicine', institution: 'University of California, San Francisco', year: '2010' },
      { degree: 'Residency in Psychiatry', institution: 'Harvard Medical School', year: '2014' },
      { degree: 'Fellowship in Cognitive Behavioral Therapy', institution: 'Stanford University', year: '2016' },
      { degree: 'Bachelor of Science in Psychology', institution: 'Yale University', year: '2006' },
    ],
    specializations: ['Mood Disorders', 'Anxiety Disorders', 'Post-Traumatic Stress Disorder', 'Cognitive Behavioral Therapy'],
    publications: [
      { title: 'The Effectiveness of Cognitive Behavioral Therapy for Anxiety Disorders', journal: 'Journal of Clinical Psychiatry', year: '2018' },
      { title: 'New Approaches to Treating Depression', journal: 'American Journal of Psychiatry', year: '2016' },
      { title: 'The Impact of Trauma on Mental Health', journal: 'Psychiatric Clinics of North America', year: '2014' },
    ],
    insurances: ['Medicare', 'Blue Cross Blue Shield', 'Aetna', 'UnitedHealthcare', 'Cigna'],
  }
];

const DoctorDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctorId = parseInt(id || '1');
  
  // Find the doctor with the matching ID
  const doctor = doctors.find(d => d.id === doctorId) || doctors[0];
  
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('');
  };

  return (
    <Layout>
      <section className="py-12 bg-gradient-to-b from-hospital-50 to-white">
        <div className="container mx-auto px-4">
          {/* Doctor Header */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="bg-hospital-800 h-32 md:h-48 relative"></div>
            <div className="px-4 md:px-8 pb-6 pt-0 md:pt-6">
              <div className="flex flex-col md:flex-row items-start md:items-end mt-[-60px] md:mt-[-80px] mb-6">
                <Avatar className="w-32 h-32 md:w-40 md:h-40 rounded-lg border-4 border-white shadow-lg bg-white">
                  <AvatarImage src={doctor.image} alt={doctor.name} />
                  <AvatarFallback className="text-2xl">{getInitials(doctor.name)}</AvatarFallback>
                </Avatar>
                <div className="mt-4 md:mt-0 md:ml-6 md:mb-1">
                  <h1 className="text-2xl md:text-4xl font-bold text-hospital-800">{doctor.name}</h1>
                  <p className="text-hospital-600 text-lg">{doctor.specialty}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="text-gray-700">{doctor.location}</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="text-gray-700">{doctor.experience}</span>
                </div>
                <div className="flex items-center">
                  <Languages className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="text-gray-700">{doctor.languages.join(', ')}</span>
                </div>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-4">
                <Button 
                  onClick={() => navigate(`/appointments?doctor=${doctor.id}`)}
                  className="bg-hospital-600 hover:bg-hospital-700"
                >
                  <Calendar className="mr-2 h-4 w-4" /> Book Appointment
                </Button>
                <Button 
                  variant="outline" 
                  className="border-hospital-600 text-hospital-600 hover:bg-hospital-50"
                >
                  <Phone className="mr-2 h-4 w-4" /> Call
                </Button>
                <Button 
                  variant="outline" 
                  className="border-hospital-600 text-hospital-600 hover:bg-hospital-50"
                >
                  <Mail className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </div>
            </div>
          </div>
          
          {/* Doctor Information Tabs */}
          <Tabs defaultValue="about">
            <TabsList className="bg-white border-b mb-6">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="education">Education & Experience</TabsTrigger>
              <TabsTrigger value="specializations">Specializations</TabsTrigger>
              <TabsTrigger value="publications">Publications</TabsTrigger>
              <TabsTrigger value="insurance">Insurance & Availability</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-hospital-800 mb-4">About Dr. {doctor.name.split(' ')[1]}</h2>
              <p className="text-gray-700 mb-6">{doctor.bio}</p>
              
              <h3 className="text-lg font-semibold text-hospital-700 mb-3">Awards & Recognition</h3>
              <ul className="list-disc pl-5 mb-6">
                {doctor.awards.map((award, index) => (
                  <li key={index} className="text-gray-700 mb-1">{award}</li>
                ))}
              </ul>
              
              <div className="flex items-center mt-4">
                {doctor.acceptingNewPatients ? (
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="font-medium">Currently accepting new patients</span>
                  </div>
                ) : (
                  <div className="flex items-center text-red-600">
                    <XCircle className="h-5 w-5 mr-2" />
                    <span className="font-medium">Not accepting new patients at this time</span>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="education" className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-hospital-800 mb-4">Education & Training</h2>
              <div className="space-y-4">
                {doctor.education_details?.map((edu, index) => (
                  <div key={index} className="border-l-2 border-hospital-300 pl-4 py-1">
                    <p className="text-hospital-700 font-semibold">{edu.degree}</p>
                    <p className="text-gray-700">{edu.institution}, {edu.year}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="specializations" className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-hospital-800 mb-4">Areas of Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {doctor.specializations?.map((spec, index) => (
                  <Card key={index}>
                    <CardContent className="p-4 flex items-center">
                      <div className="bg-hospital-100 rounded-full p-2 mr-3">
                        <CheckCircle className="h-5 w-5 text-hospital-600" />
                      </div>
                      <span>{spec}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="publications" className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-hospital-800 mb-4">Research & Publications</h2>
              <div className="space-y-4">
                {doctor.publications?.map((pub, index) => (
                  <div key={index} className="mb-4">
                    <p className="font-semibold text-hospital-700">"{pub.title}"</p>
                    <p className="text-gray-700">{pub.journal}, {pub.year}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="insurance" className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-bold text-hospital-800 mb-4">Accepted Insurance</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {doctor.insurances?.map((insurance, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-700">{insurance}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-xl font-bold text-hospital-800 mb-4">Office Hours</h2>
                  <div className="space-y-2">
                    {doctor.availability?.map((avail, index) => (
                      <div key={index} className="flex justify-between border-b border-gray-200 py-2">
                        <span className="font-medium">{avail.day}</span>
                        <span className="text-gray-700">{avail.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Similar Doctors Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-hospital-800 mb-6">Other Specialists You May Consider</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {doctors
                .filter(d => d.id !== doctor.id && d.specialty === doctor.specialty)
                .slice(0, 3)
                .map((doc) => (
                  <div 
                    key={doc.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={doc.image} 
                        alt={doc.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-hospital-800 mb-1">{doc.name}</h3>
                      <p className="text-hospital-600 text-sm mb-3">{doc.specialty}</p>
                      
                      <Link to={`/doctors/${doc.id}`}>
                        <Button 
                          variant="outline" 
                          className="w-full border-hospital-600 text-hospital-600 hover:bg-hospital-50"
                        >
                          View Profile
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DoctorDetail;
