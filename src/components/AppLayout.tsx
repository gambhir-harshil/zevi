import { MoveRight } from "lucide-react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const AppLayout = () => {
  return (
    <main className="relative h-screen px-5 bg-[url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover gap-4 bg-center flex flex-col items-center">
      <span className="absolute flex items-center justify-between gap-2 px-4 py-2 text-2xl font-bold tracking-wide text-white bg-black/30 border border-white top-10 right-10 hover:shadow-btn hover:-translate-x-[5px] hover:-translate-y-[5px] transition-all ease-out">
        <Link to="/products">Explore more</Link>
        <MoveRight />
      </span>
      <Outlet />
    </main>
  );
};

export default AppLayout;
