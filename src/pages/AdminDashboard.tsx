
import Layout from "@/components/layout/Layout";

const AdminDashboard = () => (
  <Layout>
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-hospital-800 mb-6">Admin Dashboard</h1>
        <div className="mb-6 bg-yellow-50 p-4 rounded shadow">
          <div className="mb-2 font-semibold">Functionality Coming Soon</div>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Doctor Profile Management (CRUD)</li>
            <li>Content Management (Departments, News, Blog, Testimonials)</li>
            <li>Appointment Management</li>
            <li>User Management & Roles</li>
            <li>Settings & Configuration</li>
          </ul>
        </div>
        <p>Authentication & secure admin access will be available after backend integration.<br/>
        <span className="text-xs text-gray-500">* You will need Supabase (or other backend) for secure login and management.</span></p>
      </div>
    </section>
  </Layout>
);

export default AdminDashboard;
