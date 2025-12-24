import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Product } from "@/data/products";

interface ProductTabsProps {
  product: Product;
}

export const ProductTabs = ({ product }: ProductTabsProps) => {
  return (
    <div className="mt-16">
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent space-x-8">
          <TabsTrigger 
            value="description"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none px-0 py-3 text-base font-semibold text-muted-foreground hover:text-foreground transition-all"
          >
            Description
          </TabsTrigger>
          <TabsTrigger 
            value="research"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none px-0 py-3 text-base font-semibold text-muted-foreground hover:text-foreground transition-all"
          >
            Research
          </TabsTrigger>
          <TabsTrigger 
            value="coas"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none px-0 py-3 text-base font-semibold text-muted-foreground hover:text-foreground transition-all"
          >
            COAs
          </TabsTrigger>
          <TabsTrigger 
            value="catalog"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none px-0 py-3 text-base font-semibold text-muted-foreground hover:text-foreground transition-all"
          >
            Peptide Catalog
          </TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="py-8 space-y-12 fade-in-section">
          {/* Product Description */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-6">Product Description</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
               {product.longDescription?.split('\n\n').map((paragraph, index) => (
                 <p key={index}>{paragraph}</p>
               ))}
               {!product.longDescription && <p>{product.description}</p>}
            </div>
          </section>

          {/* Peptide Information Table */}
          {product.peptideInfo && (
            <section>
              <h3 className="text-xl font-bold text-primary mb-6">Peptide Information</h3>
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-secondary/20 border-b">
                      <th className="py-4 px-6 text-left font-bold text-foreground w-1/3">Property</th>
                      <th className="py-4 px-6 text-left font-bold text-foreground">Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {product.peptideInfo.map((item, index) => (
                      <tr key={index} className="hover:bg-secondary/5 transition-colors">
                        <td className="py-4 px-6 text-muted-foreground font-medium">{item.property}</td>
                        <td className="py-4 px-6 text-foreground">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Lyophilized Peptides */}
          <section>
            <h3 className="text-xl font-bold text-primary mb-4">Lyophilized Peptides:</h3>
            <p className="text-muted-foreground leading-relaxed">
              These peptides are freeze-dried, a process that not only extends shelf life but also preserves the purity and integrity of the peptides during storage. We do not use any fillers in this process.
            </p>
          </section>

          {/* Product Usage */}
          <section>
            <h3 className="text-xl font-bold text-primary mb-4">Product Usage:</h3>
            <p className="text-muted-foreground leading-relaxed">
              This PRODUCT IS INTENDED AS A RESEARCH CHEMICAL ONLY. This designation allows the use of research chemicals strictly for in vitro testing and laboratory experimentation only. All product information available on this website is for educational purposes only. This product should only be handled by licensed, qualified professionals. This product is not a drug, food, or cosmetic and may not be misbranded, misused or mislabeled as a drug.
            </p>
          </section>

          {/* Disclaimer */}
          <section>
            <h3 className="text-xl font-bold text-primary mb-4">Disclaimer: For Research Purposes Only</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              This content is provided strictly for research purposes and does not constitute an endorsement or recommendation for the non-laboratory application or improper handling of peptides designed for research. The information, including discussions about specific peptides and their researched benefits, is presented for informational purposes only and must not be construed as health, clinical, or legal guidance, nor an encouragement for non-research use in humans. Peptides described here are solely for use in structured scientific study by authorized individuals. We advise consulting with research experts, medical practitioners, or legal counsel prior to any decisions about obtaining or utilizing these peptides. The expectation of responsible, ethical utilization of this information for legitimate investigative and scholarly objectives is paramount. This notice is dynamic and governs all provided content on research peptides.
            </p>
          </section>
        </TabsContent>
        
        <TabsContent value="research" className="py-8">
           <p className="text-muted-foreground">Research data not available for this product.</p>
        </TabsContent>
        
        <TabsContent value="coas" className="py-8">
           <p className="text-muted-foreground">Certificates of Analysis not available online. Please contact support.</p>
        </TabsContent>
        
        <TabsContent value="catalog" className="py-8">
           <p className="text-muted-foreground">Catalog view.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
};
