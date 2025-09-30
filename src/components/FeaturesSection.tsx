import { FileText, Anchor, Shield, Eye, CheckCircle2, Calculator } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Proactive guidance",
    description: "Clause level Q&A, differencet ranciers, each or to."
  },
  {
    icon: Anchor,
    title: "Clause anchoring",
    description: "Humon-friendly clarity."
  },
  {
    icon: CheckCircle2,
    title: "Edge-case coverage",
    description: "Edge-case-coverage-randed."
  },
  {
    icon: Eye,
    title: "Reviewer mode",
    description: "Review mode oiaged to her/go ver s'ociallymail."
  },
  {
    icon: Calculator,
    title: "Smart computation",
    description: "Automated tax calculations with clause-level precision."
  },
  {
    icon: FileText,
    title: "Document analysis",
    description: "Intelligent parsing of tax documents and forms."
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Meet ITAI, your tax assistant
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          AI-powered intelligence for effortless tax filing
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-[var(--shadow-card)] hover:shadow-xl transition-all hover:-translate-y-1 bg-card"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
