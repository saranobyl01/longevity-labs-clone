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
    note?: string;
    noteItems?: string[];
    presale?: string;
    showBacWater?: boolean;
    benefitsHeader?: string;
    benefits?: string[];
    availability?: string;
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
        description: "Research-grade klotho protein (a-Klotho) for in vitro studies. 99%+ purity with full analytical documentation for laboratory applications.",
        priceRange: "799.00 – 9,588.00",
        salePriceRange: "479.40 – 5,752.80",
        regularPrice: 799.00,
        salePrice: 479.40,
        action: "selectOptions",
        image: "/klotho.png",
        images: ["/klotho.png"],
        category: "Bioregulators",
        sku: "KLOTHO-20MCG",
        brand: "BioLongevity Labs",
        note: "1 month supply = 2x 10mcg vials",
        presale: "** This is a pre-sale. Expected to ship no later than 12/15",
        showBacWater: true,
        options: [
            {
                label: "Quantity",
                values: ["1 Month Supply", "3 Month Supply", "6 Month Supply", "12 Month Supply"]
            }
        ]
    },
    {
        id: "klotho-follistatin-bundle",
        name: "Klotho (alphaKlothoLR) / Follistatin (FLGR242)",
        description: "Research-grade klotho protein (a-Klotho) and Follistatin glycoprotein for in vitro studies. 99%+ purity with full documentation for laboratory applications.",
        priceRange: "1,199.00 – 14,388.00",
        regularPrice: 1199.00,
        action: "selectOptions",
        image: "/klotho-follistatin-bundle.png",
        images: ["/klotho-follistatin-bundle.png"],
        category: "Bundles",
        brand: "BioLongevity Labs",
        note: "1 month supply:",
        noteItems: [
            "2x 10mcg vials of Klotho",
            "2x 5mg vials of Follistatin"
        ],
        sku: "KLO-FOLLI-4PK",
        options: [
            {
                label: "Quantity",
                values: ["1 Month Supply", "3 Month Supply", "6 Month Supply", "12 Month Supply"]
            }
        ]
    },
    {
        id: "klotho-follistatin-female",
        name: "Klotho (alphaKlothoLR) / Follistatin Female Bundle",
        description: "Research-grade klotho protein (a-Klotho) and Follistatin glycoprotein for in vitro studies. 99%+ purity with full documentation for laboratory applications.",
        priceRange: "1,799.00 – 10,794.00",
        regularPrice: 1799.00,
        action: "selectOptions",
        image: "/klotho-female-bundle.png",
        images: ["/klotho-female-bundle.png"],
        category: "Bundles",
        brand: "BioLongevity Labs",
        note: "2 month supply:",
        noteItems: [
            "4x 10mcg vials of Klotho",
            "2x 5mg vials of Follistatin"
        ],
        sku: "KLO-FOLLI-FEM-6PK",
        options: [
            {
                label: "Quantity",
                values: ["2 Month Supply", "4 Month Supply", "6 Month Supply", "12 Month Supply"]
            }
        ]
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
        name: "BioZapetite",
        regularPrice: 249.97,
        salePrice: 149.98,
        action: "addToCart",
        image: "/biozapetite.png",
        images: ["/biozapetite.png"],
        category: "Peptide Capsules",
        brand: "BioLongevity Labs",
        longDescription: "BioZapetite delivers orforglipron (6 mg), a first-in-class oral, small-molecule GLP-1 receptor agonist designed for investigational use. Unlike peptide GLP-1 agonists, orforglipron is orally bioavailable without fasting or water restrictions and demonstrates robust pharmacology in glucose and weight regulation.",
        benefitsHeader: "Together, its mechanisms are designed to:",
        benefits: [
            "Promote glucose disposal & insulin sensitivity",
            "Drive weight reduction & appetite control",
            "Improve lipid & cardiometabolic health",
            "Provide oral dosing convenience",
            "Exhibit a safety profile consistent with injectable GLP-1 medicines."
        ],
        availability: "In stock",
        sku: "SUPP-BIOZEP"
    },
    {
        id: "bioignite",
        name: "BioIgnite",
        regularPrice: 399.97,
        salePrice: 239.98,
        action: "addToCart",
        image: "/bioignite.png",
        images: ["/bioignite.png"],
        category: "Peptide Capsules",
        brand: "BioLongevity Labs",
        longDescription: "BioIgnite is an integrated metabolic-activation formula that combines a thermogenic amino acid, a neurostimulant alkaloid, an inflammation-modulating kinase inhibitor, and a selective β2-adrenergic agonist. Together they are designed to:",
        benefits: [
            "Enhance thermogenesis & fat oxidation",
            "Improve glucose disposal & insulin sensitivity",
            "Reduce metabolic inflammation",
            "Amplify mitochondrial energy metabolism"
        ],
        availability: "In stock",
        sku: "SUPP-BIOIGN"
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
        brand: "BioLongevity Labs",
        longDescription: "BioAbsorb is an integrated metabolic research formula that pairs low-dose metformin and highly bio-available dihydroberberine with activated B-complex cofactors.",
        availability: "In stock",
        sku: "SUPP-BIOABS"
    },
    {
        id: "bioamp",
        name: "BioAmp",
        regularPrice: 299.00,
        salePrice: 179.40,
        action: "addToCart",
        image: "/bioamp.png",
        images: ["/bioamp.png"],
        category: "Peptide Capsules",
        brand: "BioLongevity Labs",
        longDescription: "BioAmp is a targeted metabolic-support formula featuring a single, high-potency dose of the pan-AMPK activator ATX-304 (OS-01). For laboratory research use only.",
        availability: "In stock",
        sku: "SUPP-BMP"
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
