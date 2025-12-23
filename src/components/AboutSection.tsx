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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            About <span className="text-foreground">Biolongevity Labs</span>
          </h2>
        </div>

        <div className="space-y-24">
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Research-Grade Synthesis</h3>
                <p className="text-muted-foreground leading-relaxed">
                  BioLongevity Labs manufactures 99% purity research peptides using solid-phase peptide synthesis in USA-registered facilities that follow Good Manufacturing Practices (GMP). Our synthesis protocols prioritize molecular accuracy and batch consistency.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Each peptide undergoes rigorous quality control testing before release. We verify purity through HPLC, confirm molecular weight via LC-MS, and screen for contaminants.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Third-Party Testing Standard</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We're a leading peptide supplier that tests every batch through three independent, certified laboratories. No shortcuts. Your research deserves the highest quality peptides backed by certificates of analysis from external facilities-not just internal claims.
                </p>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-2xl h-full min-h-[400px]">
              <img 
                src="/about-research-grade.png" 
                alt="Scientist holding test tube" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-full min-h-[400px] order-2 md:order-1">
              <img 
                src="/about-in-vitro.png" 
                alt="Scientist working in lab" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="space-y-8 order-1 md:order-2">
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Peptides for In Vitro Research</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our catalog includes 150+ research-grade peptides for laboratory applications. All compounds ship with complete analytical documentation.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Need to buy peptides for your next study? Same-day shipping on orders placed before 12 PM PT. Free shipping over $400.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Supporting Scientific Research</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  BioLongevity exists to support laboratories conducting in vitro research. We provide the quality peptides and technical documentation your studies require.
                </p>

                <div className="bg-secondary/30 p-6 rounded-xl border border-secondary">
                  <p className="font-bold text-foreground mb-2">
                    Questions about our synthesis methods or quality control protocols?
                  </p>
                  <p className="text-muted-foreground mb-4">
                    <span className="text-primary font-bold cursor-pointer hover:underline">Contact our team</span> and we will promptly respond to your inquiries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
