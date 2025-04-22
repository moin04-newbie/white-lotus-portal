
import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

// Mock data for testimonials
const testimonials = [
  {
    id: 1,
    name: 'Jennifer Smith',
    role: 'Patient',
    avatar: 'https://randomuser.me/api/portraits/women/48.jpg',
    testimonial: 'The care I received at White Lotus Hospital was exceptional. The doctors were knowledgeable and took the time to explain everything. The staff was compassionate and attentive to my needs.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Robert Johnson',
    role: 'Patient',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    testimonial: 'I was nervous about my surgery, but the team at White Lotus Hospital made me feel comfortable and confident. The facilities are state-of-the-art and my recovery was smooth.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Maria Garcia',
    role: 'Patient',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    testimonial: 'From the moment I walked in, I was treated with respect and kindness. Dr. Chen took the time to listen to my concerns and provided a comprehensive treatment plan. I highly recommend White Lotus Hospital.',
    rating: 4,
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Patient',
    avatar: 'https://randomuser.me/api/portraits/men/72.jpg',
    testimonial: 'The pediatric department at White Lotus Hospital is amazing. The doctors and nurses were so good with my son, making him feel comfortable during a scary time. We are grateful for the care he received.',
    rating: 5,
  },
];

const TestimonialsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-hospital-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-hospital-800 mb-4">What Our Patients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read testimonials from our patients about their experience at White Lotus Hospital.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-md p-8 relative">
                    <Quote className="absolute text-hospital-200 h-16 w-16 -top-6 -left-6 opacity-40" />
                    
                    <div className="text-gray-700 mb-6 text-lg relative z-10">
                      "{testimonial.testimonial}"
                    </div>
                    
                    <div className="flex items-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-14 h-14 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-bold text-hospital-800">{testimonial.name}</h4>
                        <p className="text-gray-500">{testimonial.role}</p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i}
                              className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevSlide}
              className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow hover:bg-hospital-50 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-hospital-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow hover:bg-hospital-50 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-hospital-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 transition-all duration-300 rounded-full ${
                  index === currentSlide ? 'w-8 bg-hospital-600' : 'w-2 bg-hospital-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
