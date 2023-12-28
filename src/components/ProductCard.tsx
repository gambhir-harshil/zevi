import { Rating } from "@mui/material";
import { FakeProduct } from "../utils/createFakeProducts";

interface ProductCardProps {
  product: FakeProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="h-[240px] w-[200px] rounded-sm overflow-hidden hover:-translate-x-1 hover:-translate-y-1 hover:shadow-img transition-all ease-linear mb-1">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full"
        />
      </div>
      <span className="font-medium tracking-wide">{product.name}</span>
      <p className="flex gap-2">
        <span className="font-medium text-gray-400 line-through">
          Rs. {product.price + Math.floor(Math.random() * 200) + 1}
        </span>
        <span className="font-semibold text-blue-500">Rs. {product.price}</span>
      </p>
      <p className="flex items-center">
        <Rating value={product.rating} readOnly />
        <span className="text-gray-500">
          ({Math.floor(Math.random() * 300) + 1})
        </span>
      </p>
    </div>
  );
};

export default ProductCard;
