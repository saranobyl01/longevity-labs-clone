import { Button } from "@/components/ui/button";
import { Check, Truck, HeadphonesIcon } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-secondary pt-16 md:pt-24 pb-0 overflow-hidden flex flex-col items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex-grow flex flex-col items-center">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-4">
            Research Peptides for Sale
          </h1>
          <p className="text-xl md:text-2xl font-bold text-foreground mb-8">
            USA-Manufactured, Third Party Tested Peptides
          </p>

          <div className="relative w-full max-w-4xl mx-auto mb-8">
            <img 
              src="/hero-products.png" 
              alt="Research Peptides Product Group" 
              className="w-full h-auto object-contain"
            />
          </div>

          <Button variant="shop" size="xl" className="mb-12 shadow-xl hover:scale-105 transition-transform">
            Shop Now
          </Button>
        </div>
      </div>

      {/* Blue Bottom Bar */}
      <div className="w-full bg-primary py-4 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-16 text-primary-foreground">
            <div className="flex items-center gap-2">
              <Check className="h-6 w-6" />
              <span className="font-bold text-lg">GMP USA Manufactured</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-6 w-6" />
              <span className="font-bold text-lg">Fast Global Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <HeadphonesIcon className="h-6 w-6" />
              <span className="font-bold text-lg">Dedicated Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
