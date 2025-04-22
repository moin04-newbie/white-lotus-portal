
import Layout from "@/components/layout/Layout";
import { Clock } from "lucide-react";

const Emergency = () => (
  <Layout>
    <section className="py-12 bg-red-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Clock className="mr-2 text-red-600" size={32} />
          <h1 className="text-4xl font-bold text-hospital-800">Emergency Information</h1>
        </div>
        <div className="mb-6 text-lg">
          <b>EMERGENCY HELPLINE:</b> <span className="text-red-600 text-2xl font-bold">(123) 911-0000</span>
        </div>
        <ul className="list-disc pl-8 mb-8">
          <li>Go to Ground Floor, East Wing for Emergency Department</li>
          <li>Follow hospital directional signage</li>
          <li>If unable to reach hospital, dial the national emergency number</li>
        </ul>
        <p className="font-semibold mb-2">What to do in case of emergency:</p>
        <ul className="list-decimal pl-8 mb-8">
          <li>Call our emergency helpline or the national helpline.</li>
          <li>Stay calm and provide your location and symptoms clearly.</li>
          <li>Do not attempt to drive yourself if seriously unwell—call an ambulance.</li>
        </ul>
        <p className="text-xs text-gray-500 bg-white rounded p-2">
          <b>Disclaimer:</b> This website is not a substitute for emergency medical care. In a life-threatening emergency, call your local emergency number.
        </p>
        {/* TODO: Add directions map */}
      </div>
    </section>
  </Layout>
);

export default Emergency;
