
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProjects from '@/components/FeaturedProjects';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProjects />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
