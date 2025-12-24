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
    <section className="py-20 bg-blue-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Biolongevity Labs Quality <span className="text-primary">Standard</span>
          </h2>
          <p className="text-primary font-medium text-lg max-w-3xl mx-auto">
            Buy USA Made research-grade peptides online with verified purity for in vitro applications
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-blue-100 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column: Image */}
            <div className="rounded-2xl overflow-hidden h-[400px]">
              <img 
                src="/about-research-grade.png" 
                alt="Scientist conducting research" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Column: Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Third-Party Verified Purity: <span className="font-normal text-muted-foreground">Every batch undergoes independent testing by certified labs. No exceptions.</span>
                </h3>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Advanced Analytical Testing:
                </h3>
                <ul className="space-y-4">
                  {testingMethods.map((method, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{method}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Stamps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualityFeatures.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="w-24 h-24 rounded-full border-2 border-primary/20 flex items-center justify-center bg-white shadow-sm mb-2 group hover:border-primary transition-colors duration-300">
                <feature.icon className="h-10 w-10 text-primary stroke-[1.5]" />
              </div>
              <h3 className="font-bold text-foreground text-lg">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[250px] mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
