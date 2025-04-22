
import Layout from "@/components/layout/Layout";

const Gallery = () => (
  <Layout>
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-hospital-800 mb-6">Gallery</h1>
        <p className="mb-6 text-lg">Photos & Videos from White Lotus International Hospital</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-100 rounded shadow"></div>
          <div className="bg-gray-100 rounded shadow"></div>
          <div className="bg-gray-100 rounded shadow"></div>
        </div>
        {/* TODO: Add lightbox & category filtering functionality */}
        <div className="text-gray-500 italic">Gallery feature coming soon...</div>
      </div>
    </section>
  </Layout>
);
export default Gallery;
