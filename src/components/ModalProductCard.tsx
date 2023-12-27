import { FakeProduct } from "../utils/createFakeProducts";

interface ModalProductCardProps {
  product: FakeProduct;
}
const ModalProductCard: React.FC<ModalProductCardProps> = ({ product }) => {
  console.log(product);
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-cover lg:w-[160px] lg:h-[180px] sm:w-[60px] sm:h-[60px] h-[40px] w-[40px] hover:translate-x-1 hover:translate-y-1 transition ease-linear lg:rounded-md overflow-hidden rounded-full flex-wrap">
        <img
          loading="lazy"
          src={product.imageUrl}
          className="w-full h-full"
          alt={product.name}
        />
      </div>
      <span className="hidden text-sm font-medium md:block">
        {product.name}
      </span>
    </div>
  );
};

export default ModalProductCard;
