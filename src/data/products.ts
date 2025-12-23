export interface Product {
    id: string;
    name: string;
    description?: string;
    longDescription?: string;
    priceRange?: string;
    regularPrice?: number;
    salePrice?: number;
    salePriceRange?: string;
    action: "addToCart" | "selectOptions" | "waitlist";
    image?: string;
    images?: string[];
    category?: string;
    sku?: string;
    brand?: string;
    weight?: string;
    count?: string;
    options?: {
        label: string;
        values: string[];
    }[];
    peptideInfo?: {
        property: string;
        value: string;
    }[];
    researchInfo?: string; // HTML or long text
    coas?: string[]; // Links to PDF or images
}

export const products: Product[] = [
    // Now Available Section
    {
        id: "follistatin",
        name: "Follistatin (FLGR242) (10mg)",
        description: "High-purity Follistatin glycoprotein for muscle mass and tissue research.",
        longDescription: "Follistatin (FLGR242), is a novel fragmented, modified version of Follistatin-344 (FST-344) that does not bind to the protein activin. Activin is responsible for the negative effects of myostatin inhibition such as unwanted cellular growth in laboratory models. It also contains a patented albumin binder.\n\nFollistatin protein (FST) fused with an albumin-binding construct that uses a hydrophilic glycine-serine linker to achieve high-affinity binding to serum albumin (<20 nM Kd). This recombinant technology allows researchers to study follistatin–albumin interactions and protein trafficking in experimental systems.\n\nResearch applications include muscle mass development studies, activin neutralization assays, and TGF-β superfamily pathway modulation with albumin binding dynamics. The construct maintains biological activity while enabling investigation of albumin as a carrier protein.\n\nUS GMP-manufactured with third-party verification and comprehensive COAs for reproducible research outcomes.",
        priceRange: "799.00 – 9,588.00",
        regularPrice: 799.00,
        action: "waitlist",
        image: "/follistatin.png",
        images: ["/follistatin.png"],
        category: "Peptides",
        sku: "FOLLI-MAB-5MG-2PK",
        brand: "BioLongevity Labs",
        options: [
            {
                label: "Quantity",
                values: ["1 Month Supply", "3 Month Supply", "6 Month Supply", "12 Month Supply"]
            }
        ],
        peptideInfo: [
            { property: "Peptide Type", value: "Follistatin-Albumin Binding Construct" },
            { property: "Technology", value: "Albumin-binding peptide fusion (GGSGGSGGSGGRLIEDICLPRWGCLWEDD linker)" },
            { property: "Molecular Weight", value: "~40 kDa" },
            { property: "Binding Affinity", value: "<20 nM" },
            { property: "Synonyms", value: "FST-Albumin Construct, Extended Half-Life Follistatin" }
        ]
    },
    {
        id: "klotho",
        name: "Klotho (alphaKlothoLR) (20mcg)",
        priceRange: "799.00 – 9,588.00",
        salePriceRange: "479.40 – 5,752.80",
        regularPrice: 799.00,
        salePrice: 479.40,
        action: "selectOptions",
        image: "/klotho.png",
        images: ["/klotho.png"],
        category: "Bioregulators",
        sku: "KLOTHO-20MCG",
        brand: "BioLongevity Labs"
    },
    {
        id: "klotho-follistatin-bundle",
        name: "Klotho (alphaKlothoLR) / Follistatin (FLGR242) bundle",
        priceRange: "1,199.00 – 14,388.00",
        action: "waitlist",
        image: "/klotho-follistatin-bundle.png",
        images: ["/klotho-follistatin-bundle.png"],
        category: "Bundles",
        brand: "BioLongevity Labs"
    },
    {
        id: "klotho-follistatin-female",
        name: "Klotho (alphaKlothoLR) / Follistatin Female Bundle",
        priceRange: "1,799.00 – 10,794.00",
        action: "waitlist",
        image: "/klotho-female-bundle.png",
        images: ["/klotho-female-bundle.png"],
        category: "Bundles",
        brand: "BioLongevity Labs"
    },

    // Featured Capsules Section
    {
        id: "shredmax",
        name: "ShredMAX – Slu-PP-332 (120 Capsules)",
        description: "ShredMAX is a research peptide formulation containing ERRα/β/γ agonist SLU-PP-332 at 100mg per capsule for mitochondrial research.",
        longDescription: "ShredMAX is a research peptide formulation containing ERRα/β/γ agonist SLU-PP-332 at 100mg per capsule for mitochondrial research.",
        regularPrice: 349.97,
        salePrice: 209.98,
        priceRange: "349.97 – 799.97",
        salePriceRange: "209.98 – 479.98",
        action: "selectOptions",
        image: "/shredmax.png",
        images: ["/shredmax.png"],
        category: "Peptide Capsules",
        sku: "SUPP-SHRDMX",
        brand: "BioLongevity Labs",
        weight: "100MG",
        count: "120 capsules",
        options: [
            {
                label: "Count",
                values: ["120 capsules", "30 capsules"]
            }
        ]
    },
    {
        id: "biozapetite",
        name: "BioZapetite – 90 capsules",
        regularPrice: 249.97,
        salePrice: 149.98,
        action: "addToCart",
        image: "/biozapetite.png",
        images: ["/biozapetite.png"],
        category: "Peptide Capsules",
        brand: "BioLongevity Labs"
    },
    {
        id: "bioignite",
        name: "BioIgnite – 90 capsules",
        regularPrice: 399.97,
        salePrice: 239.98,
        action: "addToCart",
        image: "/bioignite.png",
        images: ["/bioignite.png"],
        category: "Peptide Capsules",
        brand: "BioLongevity Labs"
    },
    {
        id: "bioabsorb",
        name: "BioAbsorb",
        regularPrice: 199.97,
        salePrice: 119.98,
        action: "addToCart",
        image: "/bioabsorb.png",
        images: ["/bioabsorb.png"],
        category: "Peptide Capsules",
        brand: "BioLongevity Labs"
    },
    {
        id: "bioamp",
        name: "BioAmp – 45 capsules",
        regularPrice: 299.00,
        salePrice: 179.40,
        action: "addToCart",
        image: "/bioamp.png",
        images: ["/bioamp.png"],
        category: "Peptide Capsules",
        brand: "BioLongevity Labs"
    },
    {
        id: "weightloss",
        name: "Advanced GLP-1 + GIP℞",
        regularPrice: 249.00,
        salePrice: 229.00,
        action: "addToCart",
        image: "/trulyrx-bottle.png",
        images: ["/trulyrx-bottle.png"],
        category: "Peptide Capsules",
        brand: "Truly Rx"
    },
    {
        id: "hairloss",
        name: "Women's Hair Loss",
        regularPrice: 79.00,
        salePrice: 69.00,
        action: "addToCart",
        image: "/trulyrx-bottle.png",
        images: ["/trulyrx-bottle.png"],
        category: "Peptide Capsules",
        brand: "Truly Rx"
    },
    {
        id: "sermorelin",
        name: "Sermorelin",
        regularPrice: 195.00,
        salePrice: 155.00,
        action: "addToCart",
        image: "/trulyrx-bottle.png",
        images: ["/trulyrx-bottle.png"],
        category: "Peptide Capsules",
        brand: "Truly Rx"
    },
    {
        id: "nad",
        name: "NAD+ Injection",
        regularPrice: 199.00,
        salePrice: 179.00,
        action: "addToCart",
        image: "/trulyrx-bottle.png",
        images: ["/trulyrx-bottle.png"],
        category: "Peptide Capsules",
        brand: "Truly Rx"
    },
    {
        id: "glutathione",
        name: "Glutathione Injection",
        regularPrice: 57.32,
        salePrice: 50.00,
        action: "addToCart",
        image: "/trulyrx-bottle.png",
        images: ["/trulyrx-bottle.png"],
        category: "Peptide Capsules",
        brand: "Truly Rx"
    }
];

export const getProductById = (id: string) => {
    return products.find(p => p.id === id);
};
