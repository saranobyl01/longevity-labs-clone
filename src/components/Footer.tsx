import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const productLinks = [
  { name: "Peptide Vials", href: "#peptide-vials" },
  { name: "Peptide Capsules", href: "#peptide-capsules" },
  { name: "Bioregulator Capsules", href: "#bioregulator-capsules" },
  { name: "Bioregulator Creams", href: "#bioregulator-creams" },
  { name: "Bioregulator Vials", href: "#bioregulator-vials" },
];

const resourceLinks = [
  { name: "About Us", href: "#about" },
  { name: "Contact Us", href: "#contact" },
  { name: "My Account", href: "#account" },
  { name: "Track My Order", href: "#track" },
  { name: "Research", href: "#research" },
  { name: "Terms & Conditions", href: "#terms" },
  { name: "Privacy Policy", href: "#privacy" },
  { name: "Shipping & Payments", href: "#shipping" },
];

const partnerLinks = [
  { name: "Wholesale Program", href: "#wholesale" },
  { name: "Wholesale Login", href: "#wholesale-login" },
  { name: "Affiliate Program", href: "#affiliate" },
  { name: "Affiliate Login", href: "#affiliate-login" },
];

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && firstName) {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
      setFirstName("");
    }
  };

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & Newsletter */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">BL</span>
              </div>
              <div>
                <span className="font-bold text-lg text-foreground">BioLongevity</span>
                <span className="font-light text-lg text-muted-foreground ml-1">Labs</span>
              </div>
            </a>

            <p className="text-muted-foreground mb-6 max-w-sm">
              Subscribe to our newsletter for the latest research peptide updates and exclusive offers.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-background"
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background"
              />
              <Button type="submit" variant="shop" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Products</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Partners</h3>
            <ul className="space-y-2">
              {partnerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              F2 Nutrition Inc | 405 Rothrock Rd #106 Akron, OH 44321
            </p>
            <p className="text-xs text-muted-foreground max-w-4xl mx-auto">
              © 2024 BioLongevity Labs. Statements not evaluated by the FDA; products are for research and development use only and not intended for human use. BioLongevity Labs is a chemical supplier, not a compounding pharmacy or outsourcing facility under sections 503A/503B of the Federal Food, Drug, and Cosmetic Act.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
