import { Shield, Award, Factory, Truck, FlaskConical } from "lucide-react";

const qualityFeatures = [
  {
    icon: Shield,
    title: "99%+ Purity Guarantee",
    description: "Research-grade peptides with verified potency. Each product includes certificates of analysis.",
  },
  {
    icon: Factory,
    title: "GMP Manufacturing Standards",
    description: "Synthesized in USA-registered facilities following Good Manufacturing Practices. Full chain of custody documentation.",
  },
  {
    icon: Truck,
    title: "Best In Class Fulfillment",
    description: "Same-day shipping on orders before 12 PM PT. Free standard domestic shipping on orders over $400.",
  },
  {
    icon: FlaskConical,
    title: "Zero Fillers or Additives",
    description: "Pure active compounds only. Independently verified composition for reliable in vitro studies.",
  },
];

const testingMethods = [
  "HPLC (High-Performance Liquid Chromatography) for purity verification",
  "LC-MS (Liquid Chromatography-Mass Spectrometry) for molecular confirmation",
  "Sterility testing for microbiological safety",
  "Endotoxin testing to ensure research-grade quality",
  "Chemical contaminant screening for laboratory confidence",
];

export const QualitySection = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            The Biolongevity Labs Quality Standard
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Buy USA Made research-grade peptides online with verified purity for in vitro applications
          </p>
        </div>

        {/* Third-Party Testing */}
        <div className="bg-card rounded-2xl border border-border p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Third-Party Verified Purity
              </h3>
              <p className="text-muted-foreground">
                Every batch undergoes independent testing by certified labs. No exceptions.
              </p>
            </div>
          </div>

          <h4 className="font-semibold text-foreground mb-4">
            Advanced Analytical Testing:
          </h4>
          <ul className="space-y-3">
            {testingMethods.map((method, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">{method}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quality Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualityFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-xl border border-border p-6 hover:shadow-card transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
