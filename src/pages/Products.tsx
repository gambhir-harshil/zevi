import { useLocation } from "react-router-dom";
import Header from "../components/ProductsHeader";
import Sidebar from "../components/Sidebar";
import { generateFakeProducts } from "../utils/createFakeProducts";
const ProductsPage = () => {
  const location = useLocation();
  const products = generateFakeProducts(20);
  console.log(products);
  return (
    <>
      <Header product={location.state} />
      <div className="flex">
        <Sidebar products={products} />
        <main className="h-[calc(100vh-10rem)] md:w-[calc(100%-320px)] w-full bg-red-600 px-8 py-4">
          Hey
        </main>
      </div>
    </>
  );
};

export default ProductsPage;
