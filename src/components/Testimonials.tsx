
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    quote: "EarthCredits has made it incredibly easy for our business to offset our carbon footprint. The transparency and variety of projects available are impressive.",
    name: "Sarah Johnson",
    role: "Sustainability Director, GreenTech Inc.",
    image: "https://i.pravatar.cc/150?img=33"
  },
  {
    id: 2,
    quote: "I've been using EarthCredits for my personal carbon offsetting and the impact tracking is fantastic. I love seeing exactly where my money is going.",
    name: "Michael Chen",
    role: "Environmental Activist",
    image: "https://i.pravatar.cc/150?img=11"
  },
  {
    id: 3,
    quote: "The verification process EarthCredits uses gives us confidence that we're investing in legitimate carbon offset projects. Great platform!",
    name: "Emma Rodriguez",
    role: "CEO, Sustainable Fashion Co.",
    image: "https://i.pravatar.cc/150?img=23"
  }
];

const Testimonials = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">What Our Users Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of individuals and businesses making a positive impact on our planet.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <Card key={testimonial.id} className="bg-white border border-earth-100">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <svg width="45" height="36" className="text-earth-200" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.4 36C9.4 36 6.30001 34.5333 4.10001 31.6C1.90001 28.5333 0.800012 24.8 0.800012 20.4C0.800012 16.4 1.70001 12.6667 3.50001 9.2C5.30001 5.73333 7.70001 2.93333 10.7 0.799997C13.7667 -1.33333 17.2 -2.4 21 -2.4C22.2 -2.4 23.1667 -2.33333 23.9 -2.2C24.6334 -2.06667 25.5334 -1.8 26.6 -1.4L23.9 8.2C22.7 7.8 21.7667 7.53333 21.1 7.4C20.4334 7.26667 19.8334 7.2 19.3 7.2C17.1 7.2 15.3 8.06666 13.9 9.8C12.5667 11.5333 11.9 13.8 11.9 16.6C11.9 18.6 12.4334 20.2 13.5 21.4C14.5667 22.6 15.9667 23.2 17.7 23.2C19.5667 23.2 21.0334 22.5333 22.1 21.2C23.1667 19.8667 23.7 18.2 23.7 16.2C23.7 14.8667 23.4334 13.6667 22.9 12.6C22.3667 11.5333 21.3 10.8 19.7 10.4L27.1 3C29.9 4.06667 32.1 5.8 33.7 8.2C35.3667 10.6 36.2 13.6667 36.2 17.4C36.2 21.4 35.3 24.8667 33.5 27.8C31.7667 30.7333 29.3667 33 26.3 34.6C23.2334 35.5333 19.9334 36 16.4 36H13.4ZM38.4001 36C34.4001 36 31.3001 34.5333 29.1001 31.6C26.9001 28.5333 25.8001 24.8 25.8001 20.4C25.8001 16.4 26.7001 12.6667 28.5001 9.2C30.3001 5.73333 32.7001 2.93333 35.7001 0.799997C38.7667 -1.33333 42.2001 -2.4 46.0001 -2.4C47.2001 -2.4 48.1667 -2.33333 48.9001 -2.2C49.6334 -2.06667 50.5334 -1.8 51.6001 -1.4L48.9001 8.2C47.7001 7.8 46.7667 7.53333 46.1001 7.4C45.4334 7.26667 44.8334 7.2 44.3001 7.2C42.1001 7.2 40.3001 8.06666 38.9001 9.8C37.5667 11.5333 36.9001 13.8 36.9001 16.6C36.9001 18.6 37.4334 20.2 38.5001 21.4C39.5667 22.6 40.9667 23.2 42.7001 23.2C44.5667 23.2 46.0334 22.5333 47.1001 21.2C48.1667 19.8667 48.7001 18.2 48.7001 16.2C48.7001 14.8667 48.4334 13.6667 47.9001 12.6C47.3667 11.5333 46.3001 10.8 44.7001 10.4L52.1001 3C54.9001 4.06667 57.1001 5.8 58.7001 8.2C60.3667 10.6 61.2001 13.6667 61.2001 17.4C61.2001 21.4 60.3001 24.8667 58.5001 27.8C56.7667 30.7333 54.3667 33 51.3001 34.6C48.2334 35.5333 44.9334 36 41.4001 36H38.4001Z" fill="currentColor" />
                  </svg>
                </div>
                
                <p className="text-foreground mb-6">{testimonial.quote}</p>
                
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
