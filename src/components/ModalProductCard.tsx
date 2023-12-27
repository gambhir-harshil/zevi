import { FakeProduct } from "../utils/createFakeProducts";

interface ModalProductCardProps {
  product: FakeProduct;
}
const ModalProductCard: React.FC<ModalProductCardProps> = ({ product }) => {
  console.log(product);
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-cover w-[160px] h-[180px] hover:translate-x-1 hover:translate-y-1 transition ease-linear">
        <img
          loading="lazy"
          src={product.imageUrl}
          className="h-full w-full"
          alt={product.name}
        />
      </div>
      <span className="text-sm font-medium">{product.name}</span>
    </div>
  );
};

export default ModalProductCard;
