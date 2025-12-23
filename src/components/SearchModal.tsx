import { useState } from "react";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const popularSearches = [
  "CJC 1295",
  "Ipamorelin",
  "BPC-157",
  "Peptide Capsules",
  "Bioregulators",
  "Klotho",
  "Follistatin",
];

export const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-foreground/50 z-50 animate-fade-in"
        onClick={onClose}
      />

      <div className="fixed top-0 left-0 right-0 bg-background z-50 shadow-2xl animate-slide-down">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search peptides, bioregulators..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-12 h-12 text-lg"
                autoFocus
              />
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="mt-6">
            <p className="text-sm font-medium text-muted-foreground mb-3">
              Popular Searches
            </p>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((term) => (
                <Button
                  key={term}
                  variant="secondary"
                  size="sm"
                  onClick={() => setQuery(term)}
                >
                  {term}
                </Button>
              ))}
            </div>
          </div>

          {query && (
            <div className="mt-6 py-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Showing results for "{query}"...
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
