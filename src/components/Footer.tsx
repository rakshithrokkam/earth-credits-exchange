
import React from 'react';
import { Earth } from "lucide-react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-earth-50 py-12 mt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Earth className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold text-foreground">EarthCredits</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Making carbon offsets accessible, transparent, and impactful.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/marketplace" className="text-muted-foreground hover:text-primary transition-colors">
                  Browse Projects
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-earth-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} EarthCredits. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Use
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
