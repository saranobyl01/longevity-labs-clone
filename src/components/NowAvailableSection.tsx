import { ProductCard, Product } from "./ProductCard";

const nowAvailableProducts: Product[] = [
  {
    id: "follistatin",
    name: "Follistatin (FLGR242) (10mg)",
    priceRange: "799.00 – 9,588.00",
    action: "waitlist",
  },
  {
    id: "klotho",
    name: "Klotho (alphaKlothoLR) (20mcg)",
    priceRange: "799.00 – 9,588.00",
    salePriceRange: "479.40 – 5,752.80",
    action: "selectOptions",
  },
  {
    id: "klotho-follistatin-bundle",
    name: "Klotho (alphaKlothoLR) / Follistatin (FLGR242) bundle",
    priceRange: "1,199.00 – 14,388.00",
    action: "waitlist",
  },
  {
    id: "klotho-follistatin-female",
    name: "Klotho (alphaKlothoLR) / Follistatin Female Bundle",
    priceRange: "1,799.00 – 10,794.00",
    action: "waitlist",
  },
];

export const NowAvailableSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Now Available
          </h2>
          <p className="text-muted-foreground">
            Premium research peptides now in stock
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {nowAvailableProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
