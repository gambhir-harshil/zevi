import { faker } from "@faker-js/faker";

export interface FakeProduct {
  id: string;
  name: string;
  price: string;
  material: string;
  department: string;
  imageUrl: string;
}

const generateFakeProduct = (): FakeProduct => {
  return {
    id: faker.commerce.isbn(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    material: faker.commerce.productMaterial(),
    department: faker.commerce.department(),
    imageUrl: faker.image.urlLoremFlickr({
      category: "random",
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
