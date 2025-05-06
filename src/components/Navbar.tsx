
import React from 'react';
import { Button } from "@/components/ui/button";
import { Earth } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (user) {
      signOut();
    } else {
      navigate('/auth');
    }
  };

  const handleGetStarted = () => {
    if (user) {
      navigate('/projects');
    } else {
      navigate('/auth');
    }
  };

  return (
    <nav className="w-full py-4 border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Earth className="h-6 w-6 text-primary" />
          <span className="text-xl font-semibold text-foreground">EarthCredits</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/marketplace" className="text-foreground/80 hover:text-primary transition-colors">
            Marketplace
          </Link>
          <Link to="/projects" className="text-foreground/80 hover:text-primary transition-colors">
            Projects
          </Link>
          <Link to="/about" className="text-foreground/80 hover:text-primary transition-colors">
            About
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            className="hidden md:inline-flex"
            onClick={handleAuthAction}
          >
            {user ? 'Log out' : 'Log in'}
          </Button>
          <Button onClick={handleGetStarted}>
            {user ? 'Browse Projects' : 'Get Started'}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
