import { Button } from "@/components/ui/button";
import { Check, Truck, HeadphonesIcon } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-secondary py-16 md:py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Research Peptides for Sale
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            USA-Manufactured, Third Party Tested Peptides
          </p>
          <p className="text-2xl md:text-3xl font-semibold text-primary mb-6">
            CJC 1295 Ipamorelin 5mg
          </p>
          <p className="text-lg text-foreground mb-8">
            The World's Most Advanced Research Peptides and Bioregulators
          </p>

          <Button variant="shop" size="xl" className="mb-12">
            Shop Now
          </Button>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <span className="font-medium text-foreground">GMP USA Manufactured</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Truck className="h-5 w-5 text-primary" />
              </div>
              <span className="font-medium text-foreground">Fast Global Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <HeadphonesIcon className="h-5 w-5 text-primary" />
              </div>
              <span className="font-medium text-foreground">Dedicated Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
