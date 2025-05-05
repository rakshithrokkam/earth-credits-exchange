
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projectCategories = [
  {
    id: 'forest',
    name: 'Forest Conservation',
    description: 'Projects that protect existing forests and support reforestation efforts.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'renewable',
    name: 'Renewable Energy',
    description: 'Projects that develop clean energy sources like wind, solar, and hydroelectric power.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'community',
    name: 'Community Projects',
    description: 'Initiatives that benefit local communities while reducing carbon emissions.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

const forestProjects = [
  {
    id: 1,
    title: 'Madre de Dios Amazon Conservation',
    description: 'Protecting 100,000 hectares of Peruvian rainforest from deforestation pressures.',
    location: 'Peru',
    image: 'https://images.unsplash.com/photo-1592155931584-901ac15763e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 14.99,
    verified: true,
    impact: '1 ton CO₂',
    co2: '2.5M tons CO₂ prevented',
    area: '100,000 hectares protected'
  },
  {
    id: 2,
    title: 'Brazilian Amazon Reforestation',
    description: 'Restoring degraded land in the Amazon rainforest through native tree planting.',
    location: 'Brazil',
    image: 'https://images.unsplash.com/photo-1586967440896-62ffa091b037?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 18.50,
    verified: true,
    impact: '1 ton CO₂',
    co2: '1.8M tons CO₂ sequestered',
    area: '25,000 hectares reforested'
  },
  {
    id: 3,
    title: 'Indonesian Mangrove Restoration',
    description: 'Regenerating vital mangrove ecosystems in coastal Indonesia.',
    location: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1565479739438-6ed9bde3859f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 13.99,
    verified: true,
    impact: '1 ton CO₂',
    co2: '850,000 tons CO₂ sequestered',
    area: '5,000 hectares restored'
  },
];

const renewableProjects = [
  {
    id: 1,
    title: 'Tamil Nadu Wind Power',
    description: 'Supporting wind energy development in southern India to replace coal-fired power.',
    location: 'India',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 9.99,
    verified: true,
    impact: '1 ton CO₂',
    co2: '3.2M tons CO₂ prevented',
    capacity: '120 MW wind capacity'
  },
  {
    id: 2,
    title: 'Colorado Solar Array',
    description: 'Funding large-scale solar farms to provide clean, renewable energy to the electrical grid.',
    location: 'United States',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 15.25,
    verified: true,
    impact: '1 ton CO₂',
    co2: '1.5M tons CO₂ prevented',
    capacity: '80 MW solar capacity'
  },
  {
    id: 3,
    title: 'Scottish Wind Farm',
    description: 'Supporting the development of onshore wind farms in Scotland.',
    location: 'United Kingdom',
    image: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 17.50,
    verified: true,
    impact: '1 ton CO₂',
    co2: '2.1M tons CO₂ prevented',
    capacity: '95 MW wind capacity'
  }
];

const communityProjects = [
  {
    id: 1,
    title: 'Kenya Clean Cookstoves',
    description: 'Providing fuel-efficient cookstoves to reduce wood consumption and indoor air pollution.',
    location: 'Kenya',
    image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 12.50,
    verified: true,
    impact: '1 ton CO₂',
    co2: '500,000 tons CO₂ prevented',
    households: '75,000 households benefited'
  },
  {
    id: 2,
    title: 'Uganda Borehole Project',
    description: 'Providing clean water access to communities to reduce the need for water boiling.',
    location: 'Uganda',
    image: 'https://images.unsplash.com/photo-1604249180474-9c6426d7b9f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 11.75,
    verified: true,
    impact: '1 ton CO₂',
    co2: '450,000 tons CO₂ prevented',
    communities: '120 communities with clean water'
  },
  {
    id: 3,
    title: 'Guatemalan Improved Stoves',
    description: 'Distributing fuel-efficient cookstoves to rural households in Guatemala.',
    location: 'Guatemala',
    image: 'https://images.unsplash.com/photo-1603793303277-ed67787545e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 10.25,
    verified: true,
    impact: '1 ton CO₂',
    co2: '350,000 tons CO₂ prevented',
    households: '50,000 households benefited'
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="bg-earth-50 py-16 md:py-24">
          <div className="container mx-auto text-center">
            <div className="inline-flex items-center rounded-full bg-earth-100 px-3 py-1 text-sm text-earth-800 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Our Projects
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Verified Carbon Offset Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of high-quality projects that reduce or remove carbon emissions while providing additional benefits to communities and ecosystems.
            </p>
          </div>
        </div>

        <div className="container mx-auto py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {projectCategories.map(category => (
              <div key={category.id} className="relative overflow-hidden rounded-lg h-80">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-white/80 mb-4">{category.description}</p>
                  <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                    View Projects
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <Tabs defaultValue="forest">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="forest">Forest Conservation</TabsTrigger>
                  <TabsTrigger value="renewable">Renewable Energy</TabsTrigger>
                  <TabsTrigger value="community">Community Projects</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="forest">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {forestProjects.map(project => (
                    <Card key={project.id} className="overflow-hidden border border-earth-100">
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        {project.verified && (
                          <Badge className="absolute top-3 right-3 bg-white/90 text-forest-800">
                            Verified
                          </Badge>
                        )}
                      </div>
                      
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.location}</CardDescription>
                      </CardHeader>
                      
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="bg-earth-50 p-3 rounded-md">
                            <p className="font-medium">Impact</p>
                            <p className="text-muted-foreground">{project.co2}</p>
                          </div>
                          <div className="bg-earth-50 p-3 rounded-md">
                            <p className="font-medium">Area</p>
                            <p className="text-muted-foreground">{project.area}</p>
                          </div>
                        </div>
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
              </TabsContent>
              
              <TabsContent value="renewable">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {renewableProjects.map(project => (
                    <Card key={project.id} className="overflow-hidden border border-earth-100">
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        {project.verified && (
                          <Badge className="absolute top-3 right-3 bg-white/90 text-forest-800">
                            Verified
                          </Badge>
                        )}
                      </div>
                      
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.location}</CardDescription>
                      </CardHeader>
                      
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="bg-earth-50 p-3 rounded-md">
                            <p className="font-medium">Impact</p>
                            <p className="text-muted-foreground">{project.co2}</p>
                          </div>
                          <div className="bg-earth-50 p-3 rounded-md">
                            <p className="font-medium">Capacity</p>
                            <p className="text-muted-foreground">{project.capacity}</p>
                          </div>
                        </div>
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
              </TabsContent>
              
              <TabsContent value="community">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {communityProjects.map(project => (
                    <Card key={project.id} className="overflow-hidden border border-earth-100">
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        {project.verified && (
                          <Badge className="absolute top-3 right-3 bg-white/90 text-forest-800">
                            Verified
                          </Badge>
                        )}
                      </div>
                      
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.location}</CardDescription>
                      </CardHeader>
                      
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="bg-earth-50 p-3 rounded-md">
                            <p className="font-medium">Impact</p>
                            <p className="text-muted-foreground">{project.co2}</p>
                          </div>
                          <div className="bg-earth-50 p-3 rounded-md">
                            <p className="font-medium">Beneficiaries</p>
                            <p className="text-muted-foreground">{project.households || project.communities}</p>
                          </div>
                        </div>
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
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
