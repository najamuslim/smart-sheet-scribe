
import { Book, Brain, Clock, Settings } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Generation",
    description: "Advanced AI technology creates unique, tailored worksheets based on your requirements.",
  },
  {
    icon: Settings,
    title: "Customizable Templates",
    description: "Choose from various templates and customize them to match your teaching style.",
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "Create worksheets in seconds instead of hours. Focus more on teaching.",
  },
  {
    icon: Book,
    title: "Subject Variety",
    description: "Generate worksheets for any subject, from math to language arts.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 px-4 bg-accent/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-text mb-4">
          Features that Make a Difference
        </h2>
        <p className="text-lg text-text-muted text-center max-w-2xl mx-auto mb-16">
          Our AI worksheet generator comes packed with powerful features to enhance your teaching experience.
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
