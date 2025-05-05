
import React from 'react';
import { Button } from '@/components/ui/button';
import { TreeDeciduous, Earth } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-earth-50 to-transparent py-16 md:py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMzYTk1M2EiIGZpbGwtb3BhY2l0eT0iLjAzIiBkPSJNMzYgMzRjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem0tMTItMjRjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem0wIDEyYzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptMCAxMmMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6bTEyLTEyYzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptMC0xMmMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6bTEyIDEyYzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptMC0xMmMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6bTAgMTJjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem0wIDEyYzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnoiLz48L2c+PC9zdmc+')] opacity-40"></div>
      </div>
      
      <div className="container mx-auto relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-flex items-center rounded-full bg-earth-100 px-3 py-1 text-sm text-earth-800">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Carbon Marketplace
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Invest in the planet's <span className="text-primary">future</span>
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Buy verified carbon credits directly from impactful projects around the world. 
              Make a real difference in the fight against climate change.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                <TreeDeciduous className="h-5 w-5" />
                Browse Projects
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Learn More
              </Button>
            </div>
            
            <div className="pt-6 flex flex-col sm:flex-row gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-earth-100 flex items-center justify-center">
                  <Earth className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">100+ Projects</p>
                  <p className="text-muted-foreground">Worldwide</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-earth-100 flex items-center justify-center">
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.5 2a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11ZM13 8a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">1M+ Tons</p>
                  <p className="text-muted-foreground">CO₂ Offset</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-earth-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-forest-200 rounded-full opacity-60"></div>
              
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-earth-100 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Forest conservation project" 
                  className="w-full h-64 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-earth-100 text-earth-800 text-xs px-3 py-1 rounded-full">
                      Conservation
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Verified by Gold Standard
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">
                    Amazon Rainforest Protection
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    Preserve critical rainforest habitats while supporting indigenous communities.
                  </p>
                  
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-lg font-medium">
                      $18 <span className="text-sm text-muted-foreground">per credit</span>
                    </span>
                    <Button>Purchase Credits</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
