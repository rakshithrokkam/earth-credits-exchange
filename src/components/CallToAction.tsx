
import React from 'react';
import { Button } from '@/components/ui/button';
import { Earth } from 'lucide-react';

const CallToAction = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto">
        <div className="rounded-2xl bg-gradient-to-r from-forest-500 to-forest-600 p-8 md:p-12 shadow-lg">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
                Ready to take action for our planet?
              </h2>
              <p className="text-forest-50 mb-6 text-lg">
                Join thousands of individuals and businesses making a meaningful impact by offsetting their carbon footprint today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" variant="default" className="bg-white text-forest-600 hover:bg-forest-50">
                  Browse Projects
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-forest-400">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="flex-shrink-0 bg-white/10 p-6 rounded-full">
              <Earth className="h-16 w-16 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
