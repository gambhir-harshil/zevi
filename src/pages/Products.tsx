import { useLocation } from "react-router-dom";
import Header from "../components/ProductsHeader";
import Sidebar from "../components/Sidebar";
import { generateFakeProducts } from "../utils/createFakeProducts";
import ProductCard from "../components/ProductCard";
const ProductsPage = () => {
  const [filteredData, setFilteredData] = useState([]);
  const location = useLocation();
  const products = generateFakeProducts(20);
  return (
    <>
      <Header product={location.state} />
      <div className="flex">
        <Sidebar products={products} />
        <main className="h-[calc(100vh-10rem)] md:w-[calc(100%-320px)] w-full px-8 py-4">
          <div className="grid grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default ProductsPage;
