
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/context/AuthContext';
import { getUserPurchases } from '@/utils/purchaseUtils';

interface Purchase {
  id: string;
  project_id: string;
  project_title: string;
  quantity: number;
  total_price: number;
  project_type: string;
  created_at: string;
}

const UserPurchases = () => {
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    const fetchPurchases = async () => {
      if (!user) {
        navigate('/auth');
        return;
      }

      setLoading(true);
      const result = await getUserPurchases();
      
      if (result.success && result.data) {
        setPurchases(result.data);
      }
      
      setLoading(false);
    };

    fetchPurchases();
  }, [user, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="container mx-auto py-12">
          <div className="flex justify-center items-center h-64">
            <p className="text-lg text-muted-foreground">Loading your purchases...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Your Carbon Credits</h1>
          <p className="text-muted-foreground">
            View the history of your carbon offset purchases
          </p>
        </div>

        {purchases.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-earth-50 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944c-2.649 0-5.07.8-7.122 2.176L12 10.643l7.122-4.667zM12 5.52l7.434 4.88A11.944 11.944 0 0120.618 18c0 .93-.117 1.836-.29 2.695L12 15.57l-8.33 5.125A11.947 11.947 0 013.382 18c0-2.649.8-5.07 2.176-7.122L12 5.52z" />
              </svg>
            </div>
            <h2 className="text-xl font-medium mb-2">No Purchases Yet</h2>
            <p className="text-muted-foreground mb-6">You haven't purchased any carbon credits yet</p>
            <Button onClick={() => navigate('/projects')}>
              Browse Projects
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {purchases.map((purchase) => (
              <Card key={purchase.id} className="overflow-hidden">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{purchase.project_title}</CardTitle>
                    <Badge>{purchase.project_type}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {new Date(purchase.created_at).toLocaleDateString()}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Credits:</span>
                      <span>{purchase.quantity} ton{purchase.quantity !== 1 ? 's' : ''}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total:</span>
                      <span className="font-semibold">${purchase.total_price.toFixed(2)}</span>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full mt-4" 
                      onClick={() => navigate(`/projects/${purchase.project_id}`)}
                    >
                      View Project
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default UserPurchases;
