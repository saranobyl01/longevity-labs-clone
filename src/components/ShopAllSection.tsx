import { Button } from "@/components/ui/button";

const shopCategories = [
  { name: "Peptide Capsules", href: "#peptide-capsules" },
  { name: "Peptide Vials", href: "#peptide-vials" },
  { name: "Bioregulator Capsules", href: "#bioregulator-capsules" },
  { name: "Bioregulator Vials", href: "#bioregulator-vials" },
  { name: "Bioregulator Creams", href: "#bioregulator-creams" },
];

export const ShopAllSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Shop All Peptides for Sale Online
          </h2>
          <p className="text-muted-foreground">
            Browse our complete catalog of research-grade peptides and bioregulators
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {shopCategories.map((category) => (
            <Button
              key={category.name}
              variant="category"
              asChild
            >
              <a href={category.href}>{category.name}</a>
            </Button>
          ))}
        </div>

        <div className="text-center">
          <Button variant="shop" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};
