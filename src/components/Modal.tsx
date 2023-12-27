import { generateFakeProducts } from "../utils/createFakeProducts";
import ModalProductCard from "./ModalProductCard";

const Modal: React.FC = () => {
  const productCardData = generateFakeProducts(5);
  const suggestionsData = generateFakeProducts(5);
  return (
    <div className="bg-white h-[540px] lg:w-[1050px] w-[98%] rounded-sm shadow-md px-8 py-4 flex flex-col gap-4">
      <h4 className="text-2xl font-semibold tracking-wide">Latest trends</h4>
      <div className="flex justify-between gap-4">
        {productCardData.map((product) => (
          <ModalProductCard product={product} key={product.id} />
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="text-2xl font-semibold tracking-wide">
          Popular suggestions
        </h4>
        <div className="flex flex-col gap-2">
          {suggestionsData.map((item) => (
            <p key={item.id}>{item.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
