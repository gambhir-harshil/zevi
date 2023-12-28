import Searchbar from "./Searchbar";

interface HeaderProps {
  product: string;
}

const Header: React.FC<HeaderProps> = ({ product }) => {
  return (
    <div className="h-40 px-8">
      <div className="flex justify-center w-full mb-8">
        <Searchbar productPage />
      </div>
      {product && (
        <h1 className="text-2xl font-semibold tracking-wide">
          Search results for {product}
        </h1>
      )}
    </div>
  );
};

export default Header;
