'use client';

import { Box } from '@mantine/core';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ServiceSection } from '@/components/ServiceSection';
import { Process } from '@/components/Process';
import { SecuritySection } from '@/components/SecuritySection';
import { Reviews } from '@/components/Reviews';
import { ConsultationForm } from '@/components/ConsultationForm';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <Box>
      <Header />
      <Hero />
      <ServiceSection />
      <SecuritySection />
      <Process />
      <Reviews />
      <ConsultationForm />
      <Footer />
    </Box>
  );
}
