import { Button } from "@/components/ui/button";
import { Beaker, Pill, FlaskConical, Droplets } from "lucide-react";

const categories = [
  { name: "Peptide Vials", icon: Beaker, href: "#peptide-vials" },
  { name: "Peptide Capsules", icon: Pill, href: "#peptide-capsules" },
  { name: "Bioregulator Vials", icon: FlaskConical, href: "#bioregulator-vials" },
  { name: "Bioregulator Capsules", icon: Pill, href: "#bioregulator-capsules" },
  { name: "Bioregulator Creams", icon: Droplets, href: "#bioregulator-creams" },
];

export const CategorySection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Buy Research Peptides by Category
          </h2>
          <p className="text-muted-foreground">
            All products are manufactured for research use only.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <a
              key={category.name}
              href={category.href}
              className="group"
            >
              <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary hover:shadow-card-hover transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                  <category.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
