
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Testimonials = () => (
  <Layout>
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-hospital-800 mb-6">Testimonials</h1>
        {/* Submission form - not functional yet */}
        <form className="mb-8 max-w-lg bg-hospital-50 rounded-lg p-4 shadow space-y-2">
          <Input name="name" placeholder="Your Name" />
          <Input name="testimonial" placeholder="Your testimonial" />
          <Button className="bg-hospital-600 hover:bg-hospital-700 text-white">Submit Testimonial</Button>
          {/* TODO: Implement testimonials POST and request approval system */}
        </form>
        <div>
          <h2 className="font-semibold text-lg mb-4">Recent Testimonials</h2>
          {/* TODO: Map over testimonials from backend/store */}
          <div className="bg-white border rounded p-4 text-gray-500 text-center">
            No testimonials yet.
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Testimonials;
