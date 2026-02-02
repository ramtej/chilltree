// Chill Tree product images (Gold Rush, Tropical Punch, Kanna Kava)
const productImages = [
  "/chill-tree-gold.png",   // Gold Rush – 1.76 OZ
  "/chill-tree-green.png",  // Tropical Punch – Extra Strength 2 OZ
  "/chill-tree-red.png",    // Kanna Kava – 2 OZ
];

const getProductImage = (id) => productImages[(id - 1) % productImages.length];

export const products = [
  { id: 1, name: "Tropical Punch", price: 3.99, category: "Energy Shots", image: getProductImage(2), description: "Extra Strength • 2 OZ | 59 ML" },
  { id: 2, name: "Kanna Kava", price: 4.49, category: "Energy Shots", image: getProductImage(3), description: "Kanna & Kava • 2 OZ | 59 ML" },
  { id: 3, name: "Gold Rush", price: 12, category: "Energy Shots", image: getProductImage(1), description: "1.76 OZ | 50 ML" },
  { id: 4, name: "Gold Rush", price: 12, category: "Energy Shots", image: getProductImage(4), description: "1.76 OZ | 50 ML" },
  { id: 5, name: "Tropical Punch", price: 3.99, category: "Energy Shots", image: getProductImage(5), description: "Extra Strength • 2 OZ | 59 ML" },
  { id: 6, name: "Kanna Kava", price: 4.49, category: "Energy Shots", image: getProductImage(6), description: "Kanna & Kava • 2 OZ | 59 ML" },
];
