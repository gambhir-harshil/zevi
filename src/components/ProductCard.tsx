import { Rating } from "@mui/material";
import { FakeProduct } from "../utils/createFakeProducts";
import { useState } from "react";
import { FavoriteBorder, Favorite } from "@mui/icons-material";

interface ProductCardProps {
  product: FakeProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="flex flex-col gap-1">
      <div
        className="relative md:h-[200px] md:w-[160px] rounded-sm overflow-hidden hover:-translate-x-1 hover:-translate-y-1 hover:shadow-img transition-all ease-linear mb-1"
        onMouseEnter={() => setIsShow(true)}
        onMouseLeave={() => setIsShow(false)}
      >
        <span
          className="absolute cursor-pointer top-4 right-4"
          onClick={handleClick}
        >
          {isLiked ? (
            <Favorite style={{ color: "red" }} />
          ) : (
            <FavoriteBorder style={{ color: "white" }} />
          )}
        </span>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full"
        />
        {isShow && (
          <div className="absolute bottom-0 w-full px-4 py-2 font-semibold tracking-wide text-center text-white transition-all ease-linear bg-blue-500/50">
            View Product
          </div>
        )}
      </div>
      <span className="font-medium tracking-wide">{product.name}</span>
      <span className="flex gap-2">
        <span className="text-sm font-medium text-gray-400 line-through md:text-base">
          Rs. {product.price + 200}
        </span>
        <span className="font-semibold text-blue-500">Rs. {product.price}</span>
        <span className="px-2 py-1 text-xs font-semibold text-white rounded-lg md:text-sm bg-blue-500/50">
          {product.department}
        </span>
      </span>
      <p className="flex items-center">
        <Rating value={product.rating} readOnly />
        <span className="text-gray-500">({product.reviews})</span>
      </p>
    </div>
  );
};

export default ProductCard;
