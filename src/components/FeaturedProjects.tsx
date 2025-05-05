
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { TreeDeciduous, Leaf, DollarSign } from 'lucide-react';

const projectTypes = [
  { 
    id: 1, 
    name: 'Forest Conservation', 
    description: 'Projects that prevent deforestation and protect existing forests.',
    icon: <TreeDeciduous className="h-6 w-6 text-primary" />,
    projects: 24
  },
  { 
    id: 2, 
    name: 'Renewable Energy', 
    description: 'Clean energy projects like wind, solar, and hydroelectric power.',
    icon: <Leaf className="h-6 w-6 text-primary" />,
    projects: 32
  },
  { 
    id: 3, 
    name: 'Community Projects', 
    description: 'Initiatives that benefit local communities and reduce emissions.',
    icon: <DollarSign className="h-6 w-6 text-primary" />,
    projects: 18
  }
];

const featuredProjects = [
  {
    id: 1,
    title: 'Madre de Dios Forest Conservation',
    description: 'Protecting 100,000 hectares of Peruvian rainforest from logging and mining.',
    location: 'Peru',
    image: 'https://images.unsplash.com/photo-1592155931584-901ac15763e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 14.99,
    type: 'Forest Conservation',
    verified: true,
    impact: '1 ton CO₂'
  },
  {
    id: 2,
    title: 'Kenya Clean Cookstoves',
    description: 'Providing fuel-efficient cookstoves to reduce wood consumption and indoor air pollution.',
    location: 'Kenya',
    image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 12.50,
    type: 'Community Projects',
    verified: true,
    impact: '1 ton CO₂'
  },
  {
    id: 3,
    title: 'Tamil Nadu Wind Power',
    description: 'Supporting wind energy development in southern India to replace coal-fired power.',
    location: 'India',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 9.99,
    type: 'Renewable Energy',
    verified: true,
    impact: '1 ton CO₂'
  }
];

const FeaturedProjects = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Carbon Offset Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our hand-picked selection of high-quality carbon offset projects from around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projectTypes.map(type => (
            <div
              key={type.id}
              className="bg-white rounded-lg border border-earth-100 p-6 hover:border-primary transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-earth-50 flex items-center justify-center mb-4">
                {type.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{type.name}</h3>
              <p className="text-muted-foreground mb-4">{type.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{type.projects} projects</span>
                <Button variant="ghost" size="sm">Browse All</Button>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map(project => (
            <Card key={project.id} className="overflow-hidden border border-earth-100 transition-all hover:shadow-md">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                />
                <Badge className="absolute top-3 right-3 bg-white/90 text-forest-800 hover:bg-white/95">
                  {project.type}
                </Badge>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{project.title}</CardTitle>
                  {project.verified && (
                    <div className="flex items-center gap-1 bg-earth-50 px-2 py-1 rounded-full text-xs text-earth-800">
                      <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Verified
                    </div>
                  )}
                </div>
                <CardDescription>{project.location}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              
              <CardFooter className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">{project.impact}</span>
                  <span className="font-semibold">${project.price.toFixed(2)}</span>
                </div>
                <Button>Purchase</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <Button size="lg" variant="outline">View All Projects</Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
