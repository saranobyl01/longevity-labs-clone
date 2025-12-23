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
  {
    id: "weightloss",
    name: "Advanced GLP-1 + GIP℞",
    regularPrice: 249.00,
    salePrice: 229.00,
    action: "addToCart",
    image: "/trulyrx-bottle.png",
  },
  {
    id: "hairloss",
    name: "Women's Hair Loss",
    regularPrice: 79.00,
    salePrice: 69.00,
    action: "addToCart",
    image: "/trulyrx-bottle.png",
  },
  {
    id: "sermorelin",
    name: "Sermorelin",
    regularPrice: 195.00,
    salePrice: 155.00,
    action: "addToCart",
    image: "/trulyrx-bottle.png",
  },
  {
    id: "nad",
    name: "NAD+ Injection",
    regularPrice: 199.00,
    salePrice: 179.00,
    action: "addToCart",
    image: "/trulyrx-bottle.png",
  },
  {
    id: "glutathione",
    name: "Glutathione Injection",
    regularPrice: 57.32,
    salePrice: 50.00,
    action: "addToCart",
    image: "/trulyrx-bottle.png",
  },
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
