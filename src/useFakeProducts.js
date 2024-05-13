import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

const useFakeProducts = (count, query) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const generateProduct = () => ({
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      brand: generateBrandName(),
      image: faker.image.url(),
      description: faker.lorem.sentence(),
      price: faker.commerce.price(),
      rating: faker.number.int({ min: 1, max: 5 }),
    });
    const generateBrandName = () => {
      const brandWords = [
        "Adidas",
        "Nike",
        "Puma",
        "Reebok",
        "Under Armour",
        "New Balance",
        "Asics",
      ];
      return brandWords[Math.floor(Math.random() * brandWords.length)];
    };
    const fakeProducts = Array.from({ length: count }, () => generateProduct());

    // Filter products based on query
    const filteredProducts = query
    ? fakeProducts.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      )
    : fakeProducts;

    setProducts(filteredProducts || fakeProducts);
  }, [count, query]);

  return products;
};

export default useFakeProducts;
