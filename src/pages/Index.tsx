
import Layout from '@/components/layout/Layout';
import HeroBanner from '@/components/home/HeroBanner';
import DepartmentShowcase from '@/components/home/DepartmentShowcase';
import FeaturedDoctors from '@/components/home/FeaturedDoctors';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import StatsSection from '@/components/home/StatsSection';
import CallToAction from '@/components/home/CallToAction';
import LatestBlogPostsEnhanced from '@/components/home/LatestBlogPostsEnhanced';
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      <HeroBanner />
      <StatsSection />
      <DepartmentShowcase />
      <FeaturedDoctors />
      <CallToAction />
      <TestimonialsCarousel />
      <LatestBlogPostsEnhanced showSearch={false}/>
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 flex flex-wrap gap-4 justify-center">
          <Link to="/appointment-booking" className="bg-hospital-600 text-white px-6 py-3 rounded hover:bg-hospital-700">Book Appointment</Link>
          <Link to="/about-us" className="text-hospital-600 font-semibold underline">About Us</Link>
          <Link to="/gallery" className="text-hospital-600 font-semibold underline">Gallery</Link>
          <Link to="/emergency" className="text-red-600 font-semibold underline">Emergency Info</Link>
          <Link to="/testimonials" className="text-hospital-600 font-semibold underline">Testimonials</Link>
          <Link to="/admin" className="text-hospital-800 font-semibold underline">Admin Dashboard</Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
