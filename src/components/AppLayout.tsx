import { MoveRight } from "lucide-react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const AppLayout = () => {
  return (
    <main className="relative h-screen px-5 bg-[url('./background.avif')] bg-cover gap-4 bg-center flex flex-col items-center">
      <span className="absolute flex items-center justify-between gap-2 px-4 py-2 text-2xl font-bold tracking-wide text-white bg-black/30 border border-white top-10 right-10 hover:shadow-btn hover:-translate-x-[5px] hover:-translate-y-[5px] transition-all ease-out">
        <Link to="/products">Explore more</Link>
        <MoveRight />
      </span>
      <Outlet />
    </main>
  );
};

export default AppLayout;
