import Header from "../components/ProductsHeader";
import Sidebar from "../components/Sidebar";
import { FakeProduct, generateFakeProducts } from "../utils/createFakeProducts";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
const ProductsPage = () => {
  const [filteredData, setFilteredData] = useState<FakeProduct[]>([]);
  const [products, setProducts] = useState<FakeProduct[]>([]);

  useEffect(() => {
    const fakeProducts = generateFakeProducts(20);
    setProducts(fakeProducts);
  }, []);

  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar products={products} setFilteredData={setFilteredData} />
        <main className="h-[calc(100vh-10rem)] lg:w-[calc(100%-320px)] w-full px-8 py-4 overflow-y-scroll">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 md:grid-cols-3">
            {filteredData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default ProductsPage;
