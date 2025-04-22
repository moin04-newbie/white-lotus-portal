
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

// Mock data for hospital locations
const locations = [
  {
    id: 1,
    name: 'Main Hospital Campus',
    address: '123 Medical Center Dr, Healthcare City, HC 12345',
    phone: '(123) 456-7890',
    email: 'info@whitelotushospital.com',
    hours: 'Open 24/7',
    emergency: true,
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425588459418!3d40.74076737932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1586773860418!5m2!1sen!2sin',
  },
  {
    id: 2,
    name: 'Downtown Clinic',
    address: '456 Central Ave, Suite 200, Healthcare City, HC 12345',
    phone: '(123) 456-7891',
    email: 'downtown@whitelotushospital.com',
    hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
    emergency: false,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2469090246766!2d-74.00425588459418!3d40.74076737932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1586773860418!5m2!1sen!2sin',
  },
  {
    id: 3,
    name: 'Westside Medical Center',
    address: '789 West Blvd, Healthcare City, HC 12346',
    phone: '(123) 456-7892',
    email: 'westside@whitelotushospital.com',
    hours: 'Mon-Sat: 7:00 AM - 8:00 PM, Sun: 9:00 AM - 5:00 PM',
    emergency: true,
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2469090246766!2d-74.00425588459418!3d40.74076737932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1586773860418!5m2!1sen!2sin',
  }
];

// Mock data for departments contact info
const departments = [
  {
    id: 1,
    name: 'Patient Services',
    phone: '(123) 456-7893',
    email: 'patient-services@whitelotushospital.com',
    description: 'For admission inquiries, medical records, billing questions, and general patient information.'
  },
  {
    id: 2,
    name: 'Emergency Department',
    phone: '(123) 456-7894',
    email: 'emergency@whitelotushospital.com',
    description: 'For emergency situations requiring immediate medical attention. Available 24/7.'
  },
  {
    id: 3,
    name: 'Appointment Scheduling',
    phone: '(123) 456-7895',
    email: 'appointments@whitelotushospital.com',
    description: 'To schedule, reschedule, or cancel appointments with our physicians and specialists.'
  },
  {
    id: 4,
    name: 'Insurance & Billing',
    phone: '(123) 456-7896',
    email: 'billing@whitelotushospital.com',
    description: 'For questions regarding insurance coverage, payments, and financial assistance.'
  },
  {
    id: 5,
    name: 'Human Resources',
    phone: '(123) 456-7897',
    email: 'careers@whitelotushospital.com',
    description: 'For employment opportunities, volunteer programs, and internship inquiries.'
  },
  {
    id: 6,
    name: 'Media & Public Relations',
    phone: '(123) 456-7898',
    email: 'media@whitelotushospital.com',
    description: 'For press inquiries, partnership opportunities, and community outreach programs.'
  }
];

// Contact form initial state
const initialFormState = {
  name: '',
  email: '',
  phone: '',
  department: '',
  message: ''
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const { toast } = useToast();
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real application, this would send data to a server
    console.log('Form data submitted:', formData);
    
    // Show success message
    toast({
      title: 'Message Sent!',
      description: 'Thank you for contacting White Lotus Hospital. We will get back to you shortly.',
      variant: 'default',
    });
    
    // Reset form
    setFormData(initialFormState);
  };
  
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-hospital-800 to-hospital-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg opacity-90 mb-8">
              We're here to help. Reach out to us with any questions, concerns, or feedback.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center">
                <Phone className="h-10 w-10 mb-4 text-hospital-300" />
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-center">
                  Our patient service representatives are available to assist you.
                </p>
                <a href="tel:+11234567890" className="mt-4 text-hospital-300 hover:text-hospital-200">
                  (123) 456-7890
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center">
                <Mail className="h-10 w-10 mb-4 text-hospital-300" />
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-center">
                  Send us an email and we'll get back to you within 24 hours.
                </p>
                <a href="mailto:info@whitelotushospital.com" className="mt-4 text-hospital-300 hover:text-hospital-200">
                  info@whitelotushospital.com
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center">
                <MapPin className="h-10 w-10 mb-4 text-hospital-300" />
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-center">
                  Come see us at our main campus or at one of our locations.
                </p>
                <span className="mt-4 text-hospital-300">
                  123 Medical Center Dr
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form and Locations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Form */}
            <div className="lg:col-span-3 bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-hospital-800 mb-6">Get in Touch</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                      Department
                    </label>
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select Department</option>
                      {departments.map(dept => (
                        <option key={dept.id} value={dept.name}>
                          {dept.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full md:w-auto bg-hospital-600 hover:bg-hospital-700"
                >
                  <Send className="h-4 w-4 mr-2" /> Send Message
                </Button>
              </form>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-2">
              {/* Location Tabs */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold text-hospital-800 mb-4">Our Locations</h3>
                
                <div className="flex mb-4 border-b">
                  {locations.map(location => (
                    <button
                      key={location.id}
                      className={`py-2 px-4 text-sm font-medium ${
                        selectedLocation.id === location.id 
                          ? 'text-hospital-600 border-b-2 border-hospital-600' 
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                      onClick={() => setSelectedLocation(location)}
                    >
                      {location.name}
                    </button>
                  ))}
                </div>
                
                <div className="mb-4">
                  <img 
                    src={selectedLocation.image} 
                    alt={selectedLocation.name} 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  
                  <h4 className="text-lg font-semibold text-hospital-800 mb-2">
                    {selectedLocation.name}
                  </h4>
                  
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-hospital-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{selectedLocation.address}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-hospital-600 mr-2 flex-shrink-0" />
                      <a href={`tel:${selectedLocation.phone}`} className="hover:text-hospital-600">
                        {selectedLocation.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-hospital-600 mr-2 flex-shrink-0" />
                      <a href={`mailto:${selectedLocation.email}`} className="hover:text-hospital-600">
                        {selectedLocation.email}
                      </a>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-hospital-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{selectedLocation.hours}</span>
                    </div>
                    
                    {selectedLocation.emergency && (
                      <div className="bg-red-50 text-red-700 px-3 py-2 rounded-md text-sm flex items-center">
                        <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        Emergency services available 24/7
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="w-full h-48 rounded-md overflow-hidden">
                  <iframe 
                    src={selectedLocation.map} 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    aria-hidden="false" 
                    tabIndex={0}
                    title={`Map of ${selectedLocation.name}`}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Department Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hospital-800 mb-4">Department Contact Information</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect directly with our specialized departments for specific inquiries and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map(dept => (
              <div 
                key={dept.id} 
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-hospital-800 mb-3">{dept.name}</h3>
                <p className="text-gray-600 mb-4">{dept.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-hospital-600 mr-2" />
                    <a href={`tel:${dept.phone}`} className="text-gray-700 hover:text-hospital-600">
                      {dept.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-hospital-600 mr-2" />
                    <a href={`mailto:${dept.email}`} className="text-gray-700 hover:text-hospital-600">
                      {dept.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hospital-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about contacting and visiting White Lotus Hospital.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "What are the hospital visiting hours?",
                  answer: "General visiting hours are from 10:00 AM to 8:00 PM daily. Specialized units such as ICU, NICU, and Maternity may have different visiting policies. Please contact the specific department for details."
                },
                {
                  question: "How can I request my medical records?",
                  answer: "Medical records can be requested by contacting our Patient Services department at (123) 456-7893 or by emailing patient-services@whitelotushospital.com. You will need to complete an authorization form and provide identification."
                },
                {
                  question: "Is parking available at the hospital?",
                  answer: "Yes, all our locations offer parking facilities. The Main Hospital Campus has a multi-level parking garage with both free and valet parking options. Our satellite clinics offer free parking for patients and visitors."
                },
                {
                  question: "How do I provide feedback about my care experience?",
                  answer: "We value your feedback. You can share your experience by filling out our patient satisfaction survey, contacting Patient Services directly, or using the contact form on this page."
                },
                {
                  question: "Does the hospital offer language interpretation services?",
                  answer: "Yes, White Lotus Hospital provides language interpretation services in over 200 languages at no cost to patients. Please inform our staff if you require language assistance."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-hospital-800 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
