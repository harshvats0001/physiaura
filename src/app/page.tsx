import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import AppointmentForm from '@/components/AppointmentForm'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <AppointmentForm />
    </main>
  )
} 