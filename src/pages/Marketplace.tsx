import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectFilters from '@/components/ProjectFilters';
import ProjectGrid from '@/components/ProjectGrid';
import CallToAction from '@/components/CallToAction';
import { useIsMobile } from '@/hooks/use-mobile';

type Project = {
  id: number;
  title: string;
  description: string;
  location: string;
  region: string;
  image: string;
  price: number;
  type: "Forest Conservation" | "Renewable Energy" | "Community Projects";
  typeSlug: 'forest' | 'renewable' | 'community';
  verified: boolean;
  impact: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Madre de Dios Forest Conservation',
    description: 'Protecting 100,000 hectares of Peruvian rainforest from logging and mining. This project helps preserve biodiversity and supports indigenous communities.',
    location: 'Peru',
    region: 'south-america',
    image: 'https://images.unsplash.com/photo-1592155931584-901ac15763e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 14.99,
    type: 'Forest Conservation',
    typeSlug: 'forest',
    verified: true,
    impact: '1 ton CO₂'
  },
  {
    id: 2,
    title: 'Kenya Clean Cookstoves',
    description: 'Providing fuel-efficient cookstoves to reduce wood consumption and indoor air pollution. This improves health outcomes and reduces deforestation.',
    location: 'Kenya',
    region: 'africa',
    image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 12.50,
    type: 'Community Projects',
    typeSlug: 'community',
    verified: true,
    impact: '1 ton CO₂'
  },
  {
    id: 3,
    title: 'Tamil Nadu Wind Power',
    description: 'Supporting wind energy development in southern India to replace coal-fired power. This project reduces carbon emissions and creates clean energy jobs.',
    location: 'India',
    region: 'asia',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 9.99,
    type: 'Renewable Energy',
    typeSlug: 'renewable',
    verified: true,
    impact: '1 ton CO₂'
  },
  {
    id: 4,
    title: 'Brazilian Amazon Reforestation',
    description: 'Restoring degraded land in the Amazon rainforest through native tree planting. This project sequesters carbon and restores vital habitat.',
    location: 'Brazil',
    region: 'south-america',
    image: 'https://images.unsplash.com/photo-1586967440896-62ffa091b037?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 18.50,
    type: 'Forest Conservation',
    typeSlug: 'forest',
    verified: true,
    impact: '1 ton CO₂'
  },
  {
    id: 5,
    title: 'Uganda Borehole Project',
    description: 'Providing clean water access to communities to reduce the need for water boiling. This reduces emissions while improving health and livelihoods.',
    location: 'Uganda',
    region: 'africa',
    image: 'https://images.unsplash.com/photo-1604249180474-9c6426d7b9f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 11.75,
    type: 'Community Projects',
    typeSlug: 'community',
    verified: true,
    impact: '1 ton CO₂'
  },
  {
    id: 6,
    title: 'Colorado Solar Array',
    description: 'Funding large-scale solar farms to provide clean, renewable energy to the electrical grid. This project displaces fossil fuel electricity generation.',
    location: 'United States',
    region: 'north-america',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 15.25,
    type: 'Renewable Energy',
    typeSlug: 'renewable',
    verified: true,
    impact: '1 ton CO₂'
  },
  {
    id: 7,
    title: 'Indonesian Mangrove Restoration',
    description: 'Regenerating vital mangrove ecosystems in coastal Indonesia. This protects shorelines, provides wildlife habitat, and sequesters carbon.',
    location: 'Indonesia',
    region: 'asia',
    image: 'https://images.unsplash.com/photo-1565479739438-6ed9bde3859f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 13.99,
    type: 'Forest Conservation',
    typeSlug: 'forest',
    verified: true,
    impact: '1 ton CO₂'
  },
  {
    id: 8,
    title: 'Scottish Wind Farm',
    description: 'Supporting the development of onshore wind farms in Scotland. This produces clean, renewable energy and reduces dependence on fossil fuels.',
    location: 'United Kingdom',
    region: 'europe',
    image: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 17.50,
    type: 'Renewable Energy',
    typeSlug: 'renewable',
    verified: true,
    impact: '1 ton CO₂'
  },
  {
    id: 9,
    title: 'Guatemalan Improved Stoves',
    description: 'Distributing fuel-efficient cookstoves to rural households in Guatemala. This reduces emissions and improves indoor air quality for families.',
    location: 'Guatemala',
    region: 'north-america',
    image: 'https://images.unsplash.com/photo-1603793303277-ed67787545e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 10.25,
    type: 'Community Projects',
    typeSlug: 'community',
    verified: true,
    impact: '1 ton CO₂'
  }
];

const Marketplace = () => {
  const isMobile = useIsMobile();
  const [filters, setFilters] = useState({
    type: '',
    region: '',
    priceMin: 0,
    priceMax: 50,
    search: '',
  });
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  useEffect(() => {
    const newFilteredProjects = projects.filter(project => {
      // Filter by project type
      if (filters.type && project.typeSlug !== filters.type) return false;
      
      // Filter by region
      if (filters.region && project.region !== filters.region) return false;
      
      // Filter by price range
      if (project.price < filters.priceMin || project.price > filters.priceMax) return false;
      
      // Filter by search query
      if (filters.search && !project.title.toLowerCase().includes(filters.search.toLowerCase()) && 
          !project.description.toLowerCase().includes(filters.search.toLowerCase()) &&
          !project.location.toLowerCase().includes(filters.search.toLowerCase())) return false;
      
      return true;
    });
    
    setFilteredProjects(newFilteredProjects);
  }, [filters]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="container mx-auto py-8 md:py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Carbon Offset Marketplace</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our verified carbon offset projects from around the world.
              Each credit represents one ton of CO₂ prevented or removed from the atmosphere.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {isMobile ? (
              <div className="lg:col-span-4">
                <ProjectFilters onFilterChange={setFilters} />
                <div className="flex justify-between items-center my-4">
                  <p className="text-muted-foreground">
                    Showing <span className="font-medium text-foreground">{filteredProjects.length}</span> projects
                  </p>
                </div>
                <ProjectGrid projects={filteredProjects} />
              </div>
            ) : (
              <>
                <div className="lg:col-span-1">
                  <div className="sticky top-4">
                    <ProjectFilters onFilterChange={setFilters} />
                  </div>
                </div>
                
                <div className="lg:col-span-3">
                  <div className="flex justify-between items-center mb-6">
                    <p className="text-muted-foreground">
                      Showing <span className="font-medium text-foreground">{filteredProjects.length}</span> projects
                    </p>
                  </div>
                  
                  <ProjectGrid projects={filteredProjects} />
                </div>
              </>
            )}
          </div>
        </div>
        
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Marketplace;
