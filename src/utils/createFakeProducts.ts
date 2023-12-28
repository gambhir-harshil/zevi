import { faker } from "@faker-js/faker";

export interface FakeProduct {
  id: string;
  name: string;
  price: number;
  material: string;
  department: string;
  imageUrl: string;
  rating: number;
  reviews: number;
}

const generateFakeProduct = (): FakeProduct => {
  return {
    id: faker.commerce.isbn(),
    name: faker.commerce.productName(),
    price: parseInt(faker.commerce.price(), 10),
    material: faker.commerce.productMaterial(),
    department: faker.commerce.department(),
    rating: Math.floor(Math.random() * 5) + 1,
    reviews: Math.floor(Math.random() * 300) + 1,
    imageUrl: faker.image.urlLoremFlickr({
      category: "commerce",
      height: 360,
      width: 280,
    }),
  };
};

export const generateFakeProducts = (length: number) => {
  const products: FakeProduct[] = [];
  Array.from({ length: length }).forEach(() => {
    products.push(generateFakeProduct());
  });
  return products;
};
