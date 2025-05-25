'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { toast } from 'react-hot-toast';

interface Appointment {
  id: string;
  full_name: string;
  phone_number: string;
  service: string;
  preferred_time: string;
  notes?: string;
  created_at: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [appointmentsLoading, setAppointmentsLoading] = useState(true);

  useEffect(() => {
    const getUserAndAppointments = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error || !user) {
        toast.error('You must be logged in');
        router.push('/admin/login');
        return;
      }

      setUser(user);
      setLoading(false);

      const { data: appointmentData, error: appointmentError } = await supabase
        .from('appointments')
        .select('*')
        .order('created_at', { ascending: false });

      if (appointmentError) {
        toast.error('Failed to fetch appointments');
      } else {
        setAppointments(appointmentData || []);
      }

      setAppointmentsLoading(false);
    };

    getUserAndAppointments();
  }, [router]);

  if (loading) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to the Admin Dashboard</h1>
      <p className="text-gray-600 mb-6">You are logged in as: {user?.email}</p>

      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Appointments</h2>

      {appointmentsLoading ? (
        <p>Loading appointments...</p>
      ) : appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <div className="grid gap-4">
          {appointments.map((appt) => (
            <div
              key={appt.id}
              className="bg-white p-4 rounded shadow border border-gray-200"
            >
              <p><strong>Name:</strong> {appt.full_name}</p>
              <p><strong>Phone:</strong> {appt.phone_number}</p>
              <p><strong>Service:</strong> {appt.service}</p>
              <p><strong>Preferred Time:</strong> {appt.preferred_time}</p>
              {appt.notes && <p><strong>Notes:</strong> {appt.notes}</p>}
              <p className="text-sm text-gray-500 mt-2">
                Created at: {new Date(appt.created_at).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}