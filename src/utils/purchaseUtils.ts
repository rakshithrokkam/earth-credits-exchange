
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export interface PurchaseData {
  project_id: string;
  project_title: string;
  quantity: number;
  total_price: number;
  project_type: string;
}

export const createPurchase = async (purchaseData: PurchaseData) => {
  const user = (await supabase.auth.getUser()).data.user;
  
  if (!user) {
    toast({
      title: "Authentication required",
      description: "Please sign in to purchase carbon credits",
      variant: "destructive",
    });
    return { success: false, error: "Authentication required" };
  }
  
  try {
    const { error } = await supabase
      .from('purchases')
      .insert({
        user_id: user.id,
        ...purchaseData
      });
    
    if (error) throw error;
    
    return { success: true };
  } catch (error: any) {
    toast({
      title: "Error completing purchase",
      description: error.message,
      variant: "destructive",
    });
    return { success: false, error: error.message };
  }
};

export const getUserPurchases = async () => {
  try {
    const { data, error } = await supabase
      .from('purchases')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    
    return { success: true, data };
  } catch (error: any) {
    toast({
      title: "Error fetching purchases",
      description: error.message,
      variant: "destructive",
    });
    return { success: false, error: error.message, data: [] };
  }
};
