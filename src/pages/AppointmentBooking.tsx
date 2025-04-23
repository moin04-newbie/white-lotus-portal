
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const AppointmentBooking = () => {
  const [searchParams] = useSearchParams();
  const doctorId = searchParams.get('doctor');
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const form = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      phone: '',
      department: '',
      date: '',
      time: '',
    }
  });

  const onSubmit = async (values: any) => {
    try {
      const { error } = await supabase
        .from('appointments')
        .insert({
          patient_name: values.fullname,
          patient_email: values.email,
          patient_phone: values.phone,
          doctor_id: parseInt(doctorId || '1'),
          department: values.department,
          appointment_date: values.date,
          appointment_time: values.time,
        });

      if (error) throw error;

      toast({
        title: "Appointment Booked",
        description: "Your appointment has been successfully scheduled.",
      });

      navigate('/');
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <Layout>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-lg">
          <h1 className="text-4xl font-bold text-hospital-800 mb-8">Book an Appointment</h1>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-hospital-50 rounded-lg p-6 shadow">
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@email.com" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="e.g., 123-456-7890" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="department"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Department/Specialty</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Cardiology" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Appointment Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} required min={new Date().toISOString().split('T')[0]} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Time Slot</FormLabel>
                    <FormControl>
                      <Input 
                        type="time" 
                        {...field} 
                        required 
                        step="3600"
                        min="09:00"
                        max="17:00"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full bg-hospital-600 hover:bg-hospital-700 text-white"
              >
                Book Appointment
              </Button>
            </form>
          </Form>
        </div>
      </section>
    </Layout>
  );
};

export default AppointmentBooking;
