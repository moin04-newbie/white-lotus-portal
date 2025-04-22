
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AppointmentBooking = () => {
  return (
    <Layout>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-lg">
          <h1 className="text-4xl font-bold text-hospital-800 mb-8">Book an Appointment</h1>
          <form className="space-y-6 bg-hospital-50 rounded-lg p-6 shadow">
            <div>
              <label className="block font-medium text-gray-700 mb-2">Full Name</label>
              <Input type="text" name="fullname" placeholder="Your Name" required />
            </div>
            <div>
              <label className="block font-medium text-gray-700 mb-2">Email</label>
              <Input type="email" name="email" placeholder="you@email.com" required />
            </div>
            <div>
              <label className="block font-medium text-gray-700 mb-2">Phone Number</label>
              <Input type="tel" name="phone" placeholder="e.g., 123-456-7890" required />
            </div>
            <div>
              <label className="block font-medium text-gray-700 mb-2">Department/Specialty</label>
              <Input type="text" name="department" placeholder="e.g., Cardiology" required />
            </div>
            <div>
              <label className="block font-medium text-gray-700 mb-2">Preferred Doctor (optional)</label>
              <Input type="text" name="doctor" placeholder="Doctor Name" />
            </div>
            <div>
              <label className="block font-medium text-gray-700 mb-2">Appointment Date</label>
              <Input type="date" name="date" required />
            </div>
            <div>
              <label className="block font-medium text-gray-700 mb-2">Time Slot</label>
              <Input type="time" name="time" required />
            </div>
            <Button className="w-full bg-hospital-600 hover:bg-hospital-700 text-white">Book Appointment</Button>
            {/* TODO: Add confirmation, validation, and backend integration */}
          </form>
        </div>
      </section>
    </Layout>
  );
};
export default AppointmentBooking;
