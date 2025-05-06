
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';

interface ProjectDetails {
  id: number;
  title: string;
  description: string;
  location: string;
  image: string;
  price: number;
  type: string;
  verified: boolean;
  impact: string;
  co2: string;
  area?: string;
  capacity?: string;
  households?: string;
  communities?: string;
}

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // Mock data - in a real app, you would fetch this from Supabase
  const projectData: ProjectDetails = {
    id: parseInt(projectId || '1'),
    title: 'Madre de Dios Amazon Conservation',
    description: 'Protecting 100,000 hectares of Peruvian rainforest from deforestation and logging pressures. This project works with local communities to create sustainable livelihoods while preserving critical habitat for endangered species.',
    location: 'Peru',
    image: 'https://images.unsplash.com/photo-1592155931584-901ac15763e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 14.99,
    type: 'Forest Conservation',
    verified: true,
    impact: '1 ton CO₂',
    co2: '2.5M tons CO₂ prevented',
    area: '100,000 hectares protected'
  };

  const handlePurchase = async () => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to purchase carbon credits",
        variant: "destructive",
      });
      navigate('/auth');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Insert purchase record into Supabase
      const { error } = await supabase
        .from('purchases')
        .insert({
          user_id: user.id,
          project_id: projectId,
          project_title: projectData.title,
          quantity: quantity,
          total_price: projectData.price * quantity,
          project_type: projectData.type
        });
      
      if (error) throw error;
      
      toast({
        title: "Purchase successful!",
        description: `You've purchased ${quantity} carbon credits for ${projectData.title}`,
      });
      
      setIsDialogOpen(false);
      
      // In a real app, you might want to redirect to a purchase confirmation page
      // navigate('/purchase-confirmation');
    } catch (error: any) {
      toast({
        title: "Error completing purchase",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const openPurchaseDialog = () => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to purchase carbon credits",
      });
      navigate('/auth');
      return;
    }
    
    setIsDialogOpen(true);
  };
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">{projectData.title}</h1>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline">{projectData.type}</Badge>
                <span className="text-muted-foreground">{projectData.location}</span>
                {projectData.verified && (
                  <div className="flex items-center gap-1 bg-earth-50 px-2 py-1 rounded-full text-xs text-earth-800">
                    <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Verified
                  </div>
                )}
              </div>
            </div>
            
            <div className="aspect-[16/9] overflow-hidden rounded-lg mb-6">
              <img 
                src={projectData.image} 
                alt={projectData.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="prose max-w-none mb-6">
              <h2 className="text-2xl font-semibold mb-3">About this project</h2>
              <p>{projectData.description}</p>
              
              <h2 className="text-2xl font-semibold mb-3 mt-8">Environmental impact</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">CO₂ Reduction</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-semibold">{projectData.co2}</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Protected Area</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-semibold">{projectData.area}</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Price per credit</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-semibold">${projectData.price.toFixed(2)}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle>Purchase Carbon Credits</CardTitle>
                <CardDescription>Offset your carbon footprint</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-sm mb-1">Price per credit</p>
                  <p className="text-2xl font-semibold">${projectData.price.toFixed(2)}</p>
                </div>
                <div className="mb-4">
                  <p className="text-sm mb-1">Impact</p>
                  <p>{projectData.impact} per credit</p>
                </div>
                <Separator className="my-4" />
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Credits</span>
                    <div className="flex items-center gap-3">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                      >-</Button>
                      <span className="w-8 text-center">{quantity}</span>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setQuantity(quantity + 1)}
                      >+</Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center font-semibold">
                    <span>Total</span>
                    <span>${(projectData.price * quantity).toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={openPurchaseDialog}>
                  Purchase Now
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Purchase</DialogTitle>
            <DialogDescription>
              You're about to purchase {quantity} carbon credits for {projectData.title}.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="flex justify-between mb-2">
              <span>Credits:</span>
              <span>{quantity} × ${projectData.price.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>${(projectData.price * quantity).toFixed(2)}</span>
            </div>
            <Separator className="my-4" />
            <p className="text-sm text-muted-foreground">
              By completing this purchase, you're offsetting {quantity} tons of CO₂ and supporting sustainable initiatives.
            </p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
            <Button onClick={handlePurchase} disabled={isLoading}>
              {isLoading ? "Processing..." : "Complete Purchase"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default ProjectDetails;
