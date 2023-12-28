import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="flex items-center justify-center h-screen text-white bg-black">
      <h1 className="text-4xl">OOPS! Seems like you're lost</h1>
      <Link to="/" className="text-xl underline">
        Home
      </Link>
    </div>
  );
};

export default Page404;
