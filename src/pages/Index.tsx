
import Layout from '@/components/layout/Layout';
import HeroBanner from '@/components/home/HeroBanner';
import DepartmentShowcase from '@/components/home/DepartmentShowcase';
import FeaturedDoctors from '@/components/home/FeaturedDoctors';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import StatsSection from '@/components/home/StatsSection';
import CallToAction from '@/components/home/CallToAction';
// Removed LatestBlogPosts import

const Index = () => {
  return (
    <Layout>
      <HeroBanner />
      <StatsSection />
      <DepartmentShowcase />
      <FeaturedDoctors />
      <CallToAction />
      <TestimonialsCarousel />
      {/* Removed LatestBlogPosts component */}
    </Layout>
  );
};

export default Index;
