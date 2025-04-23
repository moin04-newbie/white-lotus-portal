import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const slides = [{
  image: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80',
  title: 'Excellence in Healthcare',
  description: 'Providing compassionate care with cutting-edge technology',
  cta: 'Our Services',
  link: '/departments'
}, {
  image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80',
  title: 'Expert Medical Professionals',
  description: 'Our team of specialists is dedicated to your well-being',
  cta: 'Meet Our Doctors',
  link: '/doctors'
}, {
  image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80',
  title: 'Modern Facilities',
  description: 'State-of-the-art equipment for the best patient care',
  cta: 'Explore Our Hospital',
  link: '/about-us'
}];
const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide(prev => prev === slides.length - 1 ? 0 : prev + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => prev === 0 ? slides.length - 1 : prev - 1);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${slide.image})`
      }} />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          
          <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in text-center">
                {slide.title}
              </h1>
              <p className="text-xl mb-8 animate-fade-in text-right">
                {slide.description}
              </p>
              <Button size="lg" className="bg-hospital-600 hover:bg-hospital-700 text-white animate-fade-in">
                <Link to={slide.link}>{slide.cta}</Link>
              </Button>
            </div>
          </div>
        </div>)}
      
      {/* Navigation Arrows */}
      <button className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 text-white" onClick={prevSlide} aria-label="Previous slide">
        <ChevronLeft size={24} />
      </button>
      
      <button className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 text-white" onClick={nextSlide} aria-label="Next slide">
        <ChevronRight size={24} />
      </button>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center space-x-2">
        {slides.map((_, index) => <button key={index} className={`h-2 w-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-8 bg-white' : 'bg-white bg-opacity-50'}`} onClick={() => setCurrentSlide(index)} aria-label={`Go to slide ${index + 1}`} />)}
      </div>
    </div>;
};
export default HeroBanner;