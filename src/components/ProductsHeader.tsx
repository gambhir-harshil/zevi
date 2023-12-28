import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

const Header = () => {
  return (
    <div className="h-40 px-8">
      <span className="absolute flex items-center justify-between gap-2 md:px-4 md:py-2 p-1 md:text-2xl text-xl font-bold tracking-wide text-white bg-gray-500/60 border border-black top-8 md:right-10 right-1 md:hover:shadow-img md:hover:-translate-x-[5px] md:hover:-translate-y-[5px] transition-all ease-out">
        <Link to="/">Home</Link>
      </span>
      <div className="flex justify-center w-full mb-8">
        <Searchbar productPage />
      </div>
      <h1 className="text-2xl font-semibold tracking-wide">Search results</h1>
    </div>
  );
};

export default Header;
