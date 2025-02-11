
import { Button } from "./ui/button";
import { BookOpen, Download } from "lucide-react";

export const Hero = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 animate-fade-in">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent-light via-background to-background -z-10" />
      
      <div className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full animate-fade-up mb-6">
        <BookOpen className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium text-text">Free Educational Resources</span>
      </div>
      
      <h1 className="text-4xl md:text-6xl font-bold text-center text-text max-w-4xl mb-6 animate-fade-up [animation-delay:150ms]">
        Create Educational Worksheets Instantly with AI
      </h1>
      
      <p className="text-lg md:text-xl text-text-muted text-center max-w-2xl mb-8 animate-fade-up [animation-delay:300ms]">
        Generate customized worksheets for any subject and grade level. Perfect for teachers, tutors, and parents to save time and enhance learning.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 animate-fade-up [animation-delay:450ms]">
        <Button size="lg" className="bg-primary hover:bg-primary-hover transition-colors">
          <BookOpen className="mr-2 h-5 w-5" />
          Generate Worksheet
        </Button>
        <Button size="lg" variant="outline">
          <Download className="mr-2 h-5 w-5" />
          View Samples
        </Button>
      </div>
    </div>
  );
};
