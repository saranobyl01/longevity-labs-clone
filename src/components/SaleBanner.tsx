import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";

export const SaleBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-primary-foreground py-2.5 px-4 relative animate-slide-down">
      <div className="container mx-auto flex items-center justify-center gap-3">
        <span className="text-sm md:text-base font-medium text-center">
          🚀 Year-end sale: 40% OFF Storewide!{" "}
          <Button
            variant="banner"
            size="sm"
            className="ml-2 h-7 px-3 text-xs"
            onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}
          >
            SHOP NOW
          </Button>
        </span>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
          aria-label="Close banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
