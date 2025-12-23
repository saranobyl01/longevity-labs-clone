import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";
import { ShoppingCart } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  description?: string;
  priceRange?: string;
  regularPrice?: number;
  salePrice?: number;
  salePriceRange?: string;
  action: "addToCart" | "selectOptions" | "waitlist";
  image?: string;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking Add to Cart
    addToCart({
      id: product.id,
      name: product.name,
      price: product.regularPrice || 0,
      salePrice: product.salePrice,
    });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleSelectOptions = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation
    toast({
      title: "Select Options",
      description: "Product options modal would open here.",
    });
  };

  const handleWaitlist = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation
    toast({
      title: "Joined Waitlist",
      description: "You've been added to the waitlist. We'll notify you when available.",
    });
  };

  const renderPrice = () => {
    if (product.priceRange && product.salePriceRange) {
      return (
        <div className="space-y-1">
          <p className="line-through-price">{product.priceRange} USD</p>
          <p className="text-sale font-bold">{product.salePriceRange} USD</p>
        </div>
      );
    }
    if (product.priceRange) {
      return <p className="font-bold text-foreground">{product.priceRange} USD</p>;
    }
    if (product.salePrice) {
      return (
        <div className="space-y-1">
          <p className="line-through-price">${product.regularPrice?.toFixed(2)}</p>
          <p className="text-sale font-bold">${product.salePrice.toFixed(2)}</p>
        </div>
      );
    }
    return <p className="font-bold text-foreground">${product.regularPrice?.toFixed(2)}</p>;
  };

  const renderButton = () => {
    switch (product.action) {
      case "addToCart":
        return (
          <Button variant="addToCart" className="w-full" onClick={handleAddToCart}>
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        );
      case "selectOptions":
        return (
          <Button variant="selectOptions" className="w-full" onClick={handleSelectOptions}>
            Select Options
          </Button>
        );
      case "waitlist":
        return (
          <Button variant="waitlist" className="w-full" onClick={handleWaitlist}>
            Join Waitlist
          </Button>
        );
    }
  };

  return (
    <Link to={`/product/${product.id}`} className="block h-full group">
      <div className="h-full flex flex-col bg-card rounded-xl border border-border overflow-hidden hover:shadow-card-hover transition-all duration-300">
        {/* Image */}
        <div className="aspect-square bg-secondary relative overflow-hidden flex-shrink-0">
          {product.image ? (
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-muted rounded-xl flex items-center justify-center">
                <span className="text-4xl">🧪</span>
              </div>
            </div>
          )}
          {product.salePrice || product.salePriceRange ? (
            <div className="absolute top-3 left-3 bg-sale text-sale-foreground text-xs font-bold px-2 py-1 rounded">
              SALE
            </div>
          ) : null}
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors min-h-[3rem]">
            {product.name}
          </h3>
          {product.description && (
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {product.description}
            </p>
          )}
          <div className="mt-auto">
            <div className="mb-4">{renderPrice()}</div>
            {renderButton()}
          </div>
        </div>
      </div>
    </Link>
  );
};
