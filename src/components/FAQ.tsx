
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: 1,
    question: "What are carbon credits?",
    answer: "Carbon credits are tradable certificates that represent the reduction or removal of one metric ton of carbon dioxide (or equivalent greenhouse gas) from the atmosphere. When you purchase a carbon credit, you're funding projects that reduce or capture carbon emissions."
  },
  {
    id: 2,
    question: "How do you verify the projects?",
    answer: "We partner with leading carbon offset standards like Gold Standard, Verified Carbon Standard (VCS), and Climate Action Reserve to ensure all projects meet rigorous verification requirements. Each project undergoes regular third-party audits to verify their carbon impact."
  },
  {
    id: 3,
    question: "How do I know my money is making a difference?",
    answer: "When you purchase carbon credits through our platform, we provide transparent information on the project's impact, including its location, methodology, and verification status. You'll receive a certificate for your offset, and we provide regular updates on the projects you've supported."
  },
  {
    id: 4,
    question: "Can businesses use your platform?",
    answer: "Absolutely! We offer special solutions for businesses of all sizes to offset their carbon footprint. Our business dashboard allows you to track your impact, generate reports for sustainability disclosures, and showcase your commitment to your customers."
  },
  {
    id: 5,
    question: "What types of projects do you support?",
    answer: "We support a diverse range of verified projects, including renewable energy development, forest conservation and reforestation, methane capture, energy efficiency improvements, and community-focused sustainable development initiatives around the world."
  },
  {
    id: 6,
    question: "How is the price of carbon credits determined?",
    answer: "Carbon credit prices vary based on several factors, including the project type, location, co-benefits (like biodiversity protection or community development), verification standard, and market demand. Our platform provides transparent pricing for each project."
  }
];

const FAQ = () => {
  return (
    <div className="py-16 bg-earth-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about carbon offsetting? Here are answers to common questions about our marketplace.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm border border-earth-100 p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map(faq => (
              <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                <AccordionTrigger className="text-lg font-medium text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Don't see your question here?
          </p>
          <a href="/contact" className="text-primary font-medium hover:underline">
            Contact our support team
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
