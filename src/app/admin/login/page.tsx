'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { toast } from 'react-hot-toast';

interface Appointment {
  id: string;
  full_name: string;
  phone_number: string;
  service: string;
  preferred_date: string;
  preferred_time: string;
  notes?: string;
  created_at: string;
}

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Clear any existing session on component mount
  useEffect(() => {
    const clearSession = async () => {
      if (!isAuthenticated) {
        await supabase.auth.signOut();
      }
    };
    clearSession();
  }, [isAuthenticated]);

  const fetchAppointments = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('appointments')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast.error('Failed to fetch appointments');
    } else {
      setAppointments(data || []);
    }
    setIsLoading(false);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      if (data.user) {
        setIsAuthenticated(true);
        setUser(data.user);
        await fetchAppointments();
        toast.success('Logged in successfully!');
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      toast.error('An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await supabase.auth.signOut();
      setIsAuthenticated(false);
      setUser(null);
      setAppointments([]);
      toast.success('Logged out successfully!');
    } catch (error) {
      toast.error('Error logging out');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {!isAuthenticated ? (
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8 transform transition-all duration-300 hover:scale-[1.02]">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Login</h1>
              <p className="text-gray-600">Please sign in to access the dashboard</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                  required
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 transition-all duration-200"
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="p-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">Welcome to the Admin Dashboard</h1>
                  <p className="text-gray-600 mt-2">You are logged in as: {user?.email}</p>
                </div>
                <button
                  onClick={handleLogout}
                  disabled={isLoading}
                  className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 transition-all duration-200 shadow-md"
                >
                  {isLoading ? 'Signing out...' : 'Sign Out'}
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Appointments</h2>

              {isLoading ? (
                <div className="flex justify-center items-center py-8">
                  <p className="text-gray-600">Loading appointments...</p>
                </div>
              ) : appointments.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-600">No appointments found.</p>
                </div>
              ) : (
                <div className="grid gap-6">
                  {appointments.map((appt) => (
                    <div
                      key={appt.id}
                      className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <p><strong>Name:</strong> {appt.full_name}</p>
                        <p><strong>Phone:</strong> {appt.phone_number}</p>
                        <p><strong>Service:</strong> {appt.service}</p>
                        <p><strong>Preferred Date:</strong> {new Date(appt.preferred_date).toLocaleDateString()}</p>
                        <p><strong>Preferred Time:</strong> {appt.preferred_time}</p>
                        {appt.notes && <p className="col-span-full"><strong>Notes:</strong> {appt.notes}</p>}
                        <p className="text-sm text-gray-500 col-span-full">
                          Created at: {new Date(appt.created_at).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}