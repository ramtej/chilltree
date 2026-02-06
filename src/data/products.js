// Chill Tree product images (Gold Rush, Tropical Punch, Kanna Kava)
const productImages = [
  "/chill-tree-gold.png",   // Gold Rush – 1.76 OZ
  "/chill-tree-green.png",  // Tropical Punch – Extra Strength 2 OZ
  "/chill-tree-red.png",    // Kanna Kava – 2 OZ
];

const getProductImage = (id) => productImages[(id - 1) % productImages.length];

export const products = [
  { 
    id: 1, 
    name: "Tropical Punch Energy Shot – Extra Strength Botanical Formula for Clean Energy & Focus", 
    price: 3.99, 
    originalPrice: 5.99,
    category: "Energy Shots", 
    image: getProductImage(2), 
    description: "Extra Strength • 2 OZ | 59 ML",
    rating: 4.3,
    reviews: 2100,
    socialProof: "5K+ bought in past month",
    badge: "Best Seller",
    delivery: "Free shipping on orders over $50"
  },
  { 
    id: 2, 
    name: "Kanna + Kava Focus Shot – Premium Botanical Blend for Calm Energy & Mental Clarity", 
    price: 4.49, 
    originalPrice: 6.99,
    category: "Energy Shots", 
    image: getProductImage(3), 
    description: "Kanna & Kava • 2 OZ | 59 ML",
    rating: 4.5,
    reviews: 1200,
    socialProof: "8K+ bought in past month",
    badge: "Top Rated",
    delivery: "Ships within 24–48 hours"
  },
  { 
    id: 3, 
    name: "Gold Rush Energy Shot – Premium Gold-Infused Formula for Peak Performance", 
    price: 12, 
    originalPrice: 18,
    category: "Energy Shots", 
    image: getProductImage(1), 
    description: "1.76 OZ | 50 ML",
    rating: 4.7,
    reviews: 3500,
    socialProof: "12K+ bought in past month",
    badge: "Limited Time Deal",
    delivery: "Free shipping on orders over $50"
  },
  { 
    id: 4, 
    name: "Gold Rush Energy Shot – Premium Gold-Infused Formula for Peak Performance", 
    price: 12, 
    originalPrice: 18,
    category: "Energy Shots", 
    image: getProductImage(1), 
    description: "1.76 OZ | 50 ML",
    rating: 4.7,
    reviews: 3500,
    socialProof: "12K+ bought in past month",
    badge: "Best Seller",
    delivery: "Free shipping on orders over $50"
  },
  { 
    id: 5, 
    name: "Tropical Punch Energy Shot – Extra Strength Botanical Formula for Clean Energy & Focus", 
    price: 3.99, 
    originalPrice: 5.99,
    category: "Energy Shots", 
    image: getProductImage(2), 
    description: "Extra Strength • 2 OZ | 59 ML",
    rating: 4.3,
    reviews: 2100,
    socialProof: "5K+ bought in past month",
    delivery: "Ships within 24–48 hours"
  },
  { 
    id: 6, 
    name: "Kanna + Kava Focus Shot – Premium Botanical Blend for Calm Energy & Mental Clarity", 
    price: 4.49, 
    originalPrice: 6.99,
    category: "Energy Shots", 
    image: getProductImage(3), 
    description: "Kanna & Kava • 2 OZ | 59 ML",
    rating: 4.5,
    reviews: 1200,
    socialProof: "8K+ bought in past month",
    badge: "Top Rated",
    delivery: "Free shipping on orders over $50"
  },
];
