
import React from 'react';
import { Link } from 'react-router-dom';
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

type Project = {
  id: number;
  title: string;
  description: string;
  location: string;
  region: string;
  image: string;
  price: number;
  type: 'Forest Conservation' | 'Renewable Energy' | 'Community Projects';
  typeSlug: 'forest' | 'renewable' | 'community';
  verified: boolean;
  impact: string;
};

type ProjectGridProps = {
  projects: Project[];
};

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.length > 0 ? (
        projects.map(project => (
          <Card key={project.id} className="overflow-hidden border border-earth-100 transition-all hover:shadow-md">
            <Link to={`/projects/${project.id}`}>
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
                  <CardTitle className="text-lg">{project.title}</CardTitle>
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
            </Link>
            
            <CardContent>
              <p className="text-muted-foreground line-clamp-3">{project.description}</p>
            </CardContent>
            
            <CardFooter className="flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">{project.impact}</span>
                <span className="font-semibold">${project.price.toFixed(2)}</span>
              </div>
              <Link to={`/projects/${project.id}`}>
                <Button>Purchase</Button>
              </Link>
            </CardFooter>
          </Card>
        ))
      ) : (
        <div className="col-span-full flex flex-col items-center justify-center py-12">
          <div className="bg-earth-50 h-16 w-16 rounded-full flex items-center justify-center mb-4">
            <svg className="h-8 w-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944c-2.649 0-5.07.8-7.122 2.176L12 10.643l7.122-4.667zM12 5.52l7.434 4.88A11.944 11.944 0 0120.618 18c0 .93-.117 1.836-.29 2.695L12 15.57l-8.33 5.125A11.947 11.947 0 013.382 18c0-2.649.8-5.07 2.176-7.122L12 5.52z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium mb-1">No Projects Found</h3>
          <p className="text-muted-foreground">Try adjusting your filters to find projects</p>
        </div>
      )}
    </div>
  );
};

export default ProjectGrid;
