import { ProductCard, Product } from "./ProductCard";

const featuredCapsules: Product[] = [
  {
    id: "shredmax",
    name: "ShredMAX – Slu-PP-332 (120 Capsules)",
    regularPrice: 349.97,
    salePrice: 209.98,
    priceRange: "349.97 – 799.97",
    salePriceRange: "209.98 – 479.98",
    action: "selectOptions",
    image: "/shredmax.png",
  },
  {
    id: "biozapetite",
    name: "BioZapetite – 90 capsules",
    regularPrice: 249.97,
    salePrice: 149.98,
    action: "addToCart",
    image: "/biozapetite.png",
  },
  {
    id: "bioignite",
    name: "BioIgnite – 90 capsules",
    regularPrice: 399.97,
    salePrice: 239.98,
    action: "addToCart",
    image: "/bioignite.png",
  },
  {
    id: "bioabsorb",
    name: "BioAbsorb",
    regularPrice: 199.97,
    salePrice: 119.98,
    action: "addToCart",
    image: "/bioabsorb.png",
  },
  {
    id: "bioamp",
    name: "BioAmp – 45 capsules",
    regularPrice: 299.00,
    salePrice: 179.40,
    action: "addToCart",
    image: "/bioamp.png",
  },
  // {
  //   id: "bioampmax",
  //   name: "BioAmpMax",
  //   regularPrice: 450.00,
  //   salePrice: 270.00,
  //   action: "addToCart",
  // },
  // {
  //   id: "bioflow",
  //   name: "BioFlow",
  //   regularPrice: 169.97,
  //   salePrice: 101.98,
  //   action: "addToCart",
  // },
  // {
  //   id: "biogutpro",
  //   name: "BioGutPro – 60 capsules (research use only)",
  //   regularPrice: 299.97,
  //   salePrice: 179.98,
  //   action: "waitlist",
  // },
  // {
  //   id: "biomind",
  //   name: "BioMind",
  //   regularPrice: 349.97,
  //   salePrice: 209.98,
  //   action: "addToCart",
  // },
  // {
  //   id: "biorestore",
  //   name: "BioRestore – 60 capsules",
  //   description: "BPC-157-AS, Palmitoylethanolamide, Sodium-Bicarbonate, Hyaluronic Acid",
  //   regularPrice: 179.97,
  //   salePrice: 107.98,
  //   action: "addToCart",
  // },
];

export const FeaturedCapsulesSection = () => {
  return (
    <section id="peptide-capsules" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Featured Peptides (Capsules)
          </h2>
          <p className="text-muted-foreground">
            Research-grade peptide capsules with verified purity
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {featuredCapsules.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
