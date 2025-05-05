
import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Choose a Project',
    description: 'Browse our portfolio of high-quality carbon offset projects from around the world.',
    icon: (
      <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Purchase Credits',
    description: 'Buy carbon credits to offset your emissions. Each credit represents one ton of CO₂ prevented or removed.',
    icon: (
      <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
        <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Get Verified',
    description: 'Receive a certificate confirming your offset. Track the impact of your contribution.',
    icon: (
      <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Make a Difference',
    description: 'Your purchase directly funds projects that reduce or remove greenhouse gas emissions.',
    icon: (
      <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
      </svg>
    )
  }
];

const HowItWorks = () => {
  return (
    <div className="py-16 bg-earth-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Making a positive impact on our planet has never been easier.
            Follow these simple steps to offset your carbon footprint.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-earth-100 mb-4">
                {step.icon}
              </div>
              
              {index < steps.length - 1 && (
                <div className="absolute top-8 left-[60%] hidden lg:block">
                  <ArrowRight className="h-5 w-5 text-earth-300" />
                </div>
              )}
              
              <h3 className="text-xl font-semibold text-center mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
