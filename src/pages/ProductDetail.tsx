import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";
import { getProductById } from "@/data/products";
import { ChevronRight, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { ProductTabs } from "@/components/ProductTabs";

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id || "");
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.regularPrice || 0,
      salePrice: product.salePrice,
      quantity: quantity
    });
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} added to your cart.`,
    });
  };

  const renderPrice = () => {
    if (product.priceRange && product.salePriceRange) {
      return (
        <div className="space-y-1 mb-6">
          <p className="line-through text-muted-foreground text-lg">{product.priceRange}</p>
          <p className="text-primary font-bold text-2xl">{product.salePriceRange}</p>
        </div>
      );
    }
    if (product.salePrice) {
      return (
        <div className="space-y-1 mb-6">
          <p className="line-through text-muted-foreground text-lg">
            ${product.regularPrice?.toFixed(2)}
          </p>
          <p className="text-primary font-bold text-2xl">
            ${product.salePrice.toFixed(2)}
          </p>
        </div>
      );
    }
    return (
      <p className="text-primary font-bold text-2xl mb-6">
        ${product.priceRange || product.regularPrice?.toFixed(2)}
      </p>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <ChevronRight className="h-4 w-4" />
          <span className="text-primary font-medium">{product.category}</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground font-medium truncate">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column: Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-secondary/20 rounded-2xl p-8 flex items-center justify-center relative overflow-hidden">
              {product.salePrice || product.salePriceRange ? (
                <span className="absolute top-4 left-4 bg-yellow-400 text-black font-bold px-3 py-1 rounded-full text-sm">
                  Sale!
                </span>
              ) : null}
              {product.image ? (
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              ) : (
                <span className="text-6xl">🧪</span>
              )}
            </div>
            
            {/* Thumbnails row - reusable layout */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="aspect-square bg-secondary/20 rounded-xl p-2 flex items-center justify-center cursor-pointer hover:ring-2 ring-primary transition-all">
                  {product.image ? (
                    <img 
                      src={product.image} 
                      alt="Thumbnail" 
                      className="w-full h-full object-contain mix-blend-multiply"
                    />
                  ) : (
                    <span className="text-2xl">🧪</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Details */}
          <div>
            <h1 className="text-3xl font-bold text-primary mb-6">{product.name}</h1>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {product.longDescription || product.description}
            </p>

            {product.note && (
              <p className={`text-foreground mb-4 ${product.noteItems ? 'font-bold underline text-sm' : 'font-bold'}`}>
                {product.note}
              </p>
            )}

            {product.noteItems && (
              <ul className="list-disc pl-5 mb-6 space-y-2">
                {product.noteItems.map((item, index) => (
                  <li key={index} className="text-foreground font-bold text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {product.presale && (
              <p className="font-bold text-orange-500 mb-6">{product.presale}</p>
            )}

            {renderPrice()}

            {/* Product Specific Options */}
            {product.weight && (
              <div className="mb-6">
                <p className="font-bold mb-2">Weight</p>
                <div className="flex gap-2">
                  <button className="px-4 py-2 border-2 border-primary bg-background text-foreground font-medium rounded-lg">
                    {product.weight}
                  </button>
                </div>
              </div>
            )}

            {product.options?.map((option) => (
              <div key={option.label} className="mb-6">
                <p className="font-bold mb-2">{option.label}</p>
                <div className="flex flex-wrap gap-2">
                  {option.values.map((val, idx) => (
                    <button 
                      key={val} 
                      className={`px-4 py-2 border rounded-lg transition-colors ${idx === 0 ? 'border-primary bg-background text-foreground font-medium' : 'border-gray-200 hover:border-primary/50'}`}
                    >
                      {val}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <div className="h-px bg-border my-8" />

            {/* Add to Cart Actions */}
            {(product.id === "follistatin" || product.showBacWater) && (
              <div className="mb-8 p-4 bg-secondary/10 rounded-xl border border-secondary/20">
                 <h4 className="font-bold text-primary mb-4">Don't forget your BAC Water</h4>
                 <div className="flex items-center gap-4">
                    <img src="/logo.png" className="w-12 h-12 object-contain opacity-50" alt="BAC Water" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Reconstitution Solution (30ml)</p>
                      <p className="text-sm text-muted-foreground">$19.97</p>
                    </div>
                    <Button variant="outline" size="sm">Add</Button>
                 </div>
              </div>
            )}

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center rounded-lg border border-gray-200">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-secondary/50 transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <div className="w-12 text-center font-medium">{quantity}</div>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-secondary/50 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <Button onClick={handleAddToCart} size="lg" className="flex-1 h-12 text-base">
                Add to cart
              </Button>
            </div>
            
            <div className="text-xs text-muted-foreground space-y-1 mt-8">
              <p>SKU: {product.sku || `SUPP-${product.id.toUpperCase()}`}</p>
              <p>Category: <span className="text-primary font-medium">{product.category}</span></p>
              {product.brand && <p>Brand: <span className="text-primary font-medium">{product.brand}</span></p>}
            </div>
          </div>
        </div>

        {/* Product Info Tabs */}
        <ProductTabs product={product} />
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
