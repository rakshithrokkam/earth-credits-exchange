
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Earth, Users, Shield, TreeDeciduous } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

const About = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleGetStarted = () => {
    if (user) {
      navigate('/projects');
    } else {
      navigate('/auth');
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="bg-earth-50 py-16 md:py-24">
          <div className="container mx-auto text-center">
            <div className="inline-flex items-center rounded-full bg-earth-100 px-3 py-1 text-sm text-earth-800 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Our mission is a healthier planet
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              At EarthCredits, we're committed to making carbon offsetting accessible, transparent, and impactful.
            </p>
            <div className="mt-8">
              <Button onClick={handleGetStarted} size="lg" className="px-8">
                {user ? 'Browse Projects' : 'Get Started'}
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2024, EarthCredits began with a simple idea: to make it easy for individuals and businesses to take meaningful climate action. Our founders recognized that while many people care deeply about climate change, they often lack accessible ways to make a difference.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We built a platform that connects people directly to high-quality carbon offset projects, ensuring that their contributions make the greatest possible impact. By focusing on transparency, education, and accessibility, we're working to scale climate solutions and accelerate the transition to a low-carbon economy.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, our community has grown to include individuals, small businesses, and major corporations all united by a commitment to climate action. Together, we've offset millions of tons of carbon emissions and supported projects that bring additional benefits to communities around the world.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-earth-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-forest-200 rounded-full opacity-60"></div>
              <img 
                src="https://images.unsplash.com/photo-1552799446-159ba9523315?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team discussing carbon projects" 
                className="relative z-10 rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          <div className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These core principles guide everything we do at EarthCredits.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg border border-earth-100">
                <div className="h-12 w-12 rounded-lg bg-earth-50 flex items-center justify-center mb-4">
                  <Earth className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Environmental Impact</h3>
                <p className="text-muted-foreground">
                  We prioritize projects that deliver the highest climate benefit and positively impact ecosystems.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-earth-100">
                <div className="h-12 w-12 rounded-lg bg-earth-50 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                <p className="text-muted-foreground">
                  We provide clear information about projects, pricing, and impact so you know exactly where your money goes.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-earth-100">
                <div className="h-12 w-12 rounded-lg bg-earth-50 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-muted-foreground">
                  We support projects that bring additional social and economic benefits to local communities.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-earth-100">
                <div className="h-12 w-12 rounded-lg bg-earth-50 flex items-center justify-center mb-4">
                  <TreeDeciduous className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  We constantly seek new approaches and technologies to enhance our impact and accessibility.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-earth-50 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Join us in creating a more sustainable future
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Whether you're an individual looking to offset your carbon footprint or a business aiming to meet sustainability goals, we're here to help you make a difference.
            </p>
            <Button onClick={handleGetStarted} size="lg" className="px-8">
              {user ? 'Browse Projects' : 'Get Started'}
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
