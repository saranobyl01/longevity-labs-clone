import { useState } from "react";
import { Menu, Search, ShoppingCart, X, ChevronDown, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { CartDrawer } from "./CartDrawer";
import { SearchModal } from "./SearchModal";

const menuItems = [
  { label: "Peptide Vials", href: "#peptide-vials" },
  { label: "Peptide Capsules", href: "#peptide-capsules" },
  { label: "Bioregulator Vials", href: "#bioregulator-vials" },
  { label: "Bioregulator Capsules", href: "#bioregulator-capsules" },
  { label: "Bioregulator Creams", href: "#bioregulator-creams" },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { itemCount, setIsCartOpen } = useCart();

  return (
    <>
      <header className="sticky top-0 z-50 bg-background border-b border-border shadow-header">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="BioLongevity Labs" className="h-10 w-auto" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <button className="flex items-center gap-1 text-base font-bold text-primary hover:text-primary/80 transition-colors">
                Peptides <ChevronDown className="h-4 w-4" />
              </button>
              <button className="flex items-center gap-1 text-base font-bold text-primary hover:text-primary/80 transition-colors">
                Bioregulators <ChevronDown className="h-4 w-4" />
              </button>
              <a href="#" className="text-base font-bold text-primary hover:text-primary/80 transition-colors">
                About Us
              </a>
              <button className="flex items-center gap-1 text-base font-bold text-primary hover:text-primary/80 transition-colors">
                Resources <ChevronDown className="h-4 w-4" />
              </button>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              {/* Search Bar */}
              <div className="hidden lg:flex items-center w-64">
                <div className="relative w-full flex items-center">
                  <input 
                    type="text" 
                    placeholder="Search" 
                    className="w-full h-10 pl-3 pr-10 border border-gray-300 bg-white text-sm focus:outline-none placeholder:text-gray-400"
                  />
                  <button className="absolute right-0 top-0 h-10 w-10 bg-gray-200 border-l border-gray-300 flex items-center justify-center hover:bg-gray-300 transition-colors">
                    <Search className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hidden lg:flex"
                  aria-label="Account"
                >
                  <User className="h-7 w-7 text-primary" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsCartOpen(true)}
                  className="relative"
                  aria-label="Cart"
                >
                  <ShoppingCart className="h-6 w-6 text-black" />
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                    {itemCount}
                  </span>
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Menu"
                >
                  {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-border animate-fade-in">
              <nav className="py-4 space-y-1">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      <CartDrawer />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};
