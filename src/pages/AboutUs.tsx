
import Layout from "@/components/layout/Layout";

const AboutUs = () => (
  <Layout>
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-hospital-800 mb-6">About Us</h1>
        <p className="mb-4 text-lg">
          <b>Mission:</b> To deliver exceptional patient care and foster community trust through medical excellence.
        </p>
        <p className="mb-4 text-lg">
          <b>Vision:</b> Leading healthcare innovation and compassionate service regionally and globally.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Our History</h2>
        <p>White Lotus International Hospital was founded to provide quality healthcare with a global perspective...</p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Achievements & Accreditations</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>National Hospital Quality Award, 2020</li>
          <li>ISO 9001:2015 Certified</li>
          <li>Ranked Top 10 Asia Hospitals 2024</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="font-bold">Dr. Maya Sharma (CEO)</div>
            <div className="text-gray-600">Visionary leader in healthcare transformation, 20+ years experience.</div>
          </div>
          <div>
            <div className="font-bold">Mr. Ramesh Patel (COO)</div>
            <div className="text-gray-600">Expert in hospital management and patient care operations.</div>
          </div>
        </div>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Facilities & Stats</h2>
        <p className="mb-2">500 beds, 50+ departments, 150+ doctors, advanced intensive care, and more.</p>
      </div>
    </section>
  </Layout>
);

export default AboutUs;
