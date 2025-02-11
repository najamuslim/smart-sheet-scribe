
import { BookOpen, Brain, Clock, Settings } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Smart Content Generation",
    description: "Our AI generates grade-appropriate questions and content tailored to your specific subject and requirements.",
  },
  {
    icon: BookOpen,
    title: "Multiple Subjects",
    description: "Create worksheets for any subject - from Math and Science to History and Language Arts.",
  },
  {
    icon: Settings,
    title: "Customizable Format",
    description: "Choose from multiple-choice, short answer, or essay questions. Customize layouts and difficulty levels.",
  },
  {
    icon: Clock,
    title: "Time-Saving",
    description: "Generate complete worksheets in seconds instead of hours. Focus more on teaching and less on preparation.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 px-4 bg-accent/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-text mb-4">
          Powerful Features for Educators
        </h2>
        <p className="text-lg text-text-muted text-center max-w-2xl mx-auto mb-16">
          Create professional educational content quickly and easily with our AI-powered worksheet generator.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-text mb-2">{feature.title}</h3>
              <p className="text-text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
