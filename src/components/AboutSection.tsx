import { Button } from "@/components/ui/button";
import { FlaskConical, TestTube, FileText, HeadphonesIcon } from "lucide-react";

const aboutFeatures = [
  {
    icon: FlaskConical,
    title: "Research-Grade Synthesis",
    description: "BioLongevity Labs manufactures 99% purity research peptides using solid-phase peptide synthesis in USA-registered facilities that follow Good Manufacturing Practices. Each peptide undergoes rigorous quality control testing, including HPLC for purity, LC-MS for molecular weight, and contaminant screening.",
  },
  {
    icon: TestTube,
    title: "Third-Party Testing Standard",
    description: "Every batch is tested through three independent, certified laboratories and accompanied by external certificates of analysis.",
  },
  {
    icon: FileText,
    title: "Peptides for In Vitro Research",
    description: "The catalog includes 150+ research-grade peptides for laboratory applications, shipped with complete analytical documentation. Orders placed before 12 PM PT ship the same day, with free shipping over 400 USD.",
  },
  {
    icon: HeadphonesIcon,
    title: "Supporting Scientific Research",
    description: "BioLongevity supports laboratories conducting in vitro research by providing high-quality peptides and technical documentation.",
  },
];

export const AboutSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            About Biolongevity Labs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leading provider of research-grade peptides and bioregulators for scientific applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {aboutFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-xl border border-border p-6 hover:shadow-card transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-muted-foreground mb-4">
            Questions? We're here to help with your research needs.
          </p>
          <Button variant="shop">Contact our team</Button>
        </div>
      </div>
    </section>
  );
};
