import { ChevronDown, ChevronUp } from "lucide-react";
import { FakeProduct } from "../utils/createFakeProducts";
import React, { useState } from "react";
import { Rating } from "@mui/material";

interface SidebarProps {
  products: [FakeProduct];
}

const Sidebar: React.FC<SidebarProps> = ({ products }) => {
  const [arrowUp, setArrowUp] = useState(false);
  const [displayDepartments, setDisplayDepartments] = useState(
    products.slice(0, 2)
  );
  function handleDisplayMore() {
    setDisplayDepartments(products.slice(0, 6));
    setArrowUp(true);
  }
  function handleDisplayLess() {
    setDisplayDepartments(products.slice(0, 2));
    setArrowUp(false);
  }
  return (
    <div className="h-[calc(100vh-10rem)] w-[320px] px-8 py-4 overflow-y-scroll">
      <div className="flex flex-col gap-4 pb-4 mb-2 border-b border-gray-300">
        <div className="flex items-center justify-between w-full">
          <h3 className="font-semibold uppercase">Department</h3>
          {arrowUp ? (
            <ChevronUp onClick={handleDisplayLess} />
          ) : (
            <ChevronDown onClick={handleDisplayMore} />
          )}
        </div>
        {displayDepartments.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <input
              type="checkbox"
              value={item.department}
              className="w-4 h-4 border-none shadow-md outline-none"
            />
            <span className="font-medium tracking-wide">{item.department}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4 pb-4 mb-2 border-b border-gray-300">
        <h3 className="font-semibold uppercase">Price Range</h3>
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            className="w-4 h-4 border-none shadow-md outline-none"
          />
          <span className="font-medium tracking-wide">Below 500</span>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            className="w-4 h-4 border-none shadow-md outline-none"
          />
          <span className="font-medium tracking-wide">500-700</span>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            className="w-4 h-4 border-none shadow-md outline-none"
          />
          <span className="font-medium tracking-wide">700-900</span>
        </div>
      </div>
      {/* Ratings */}
      <div className="flex flex-col gap-4 pb-4 border-b border-gray-300">
        <h3 className="font-semibold uppercase">Ratings</h3>
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            className="w-4 h-4 border-none shadow-md outline-none"
          />
          <Rating value={5} readOnly />
        </div>
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            className="w-4 h-4 border-none shadow-md outline-none"
          />
          <Rating value={4} readOnly />
        </div>
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            className="w-4 h-4 border-none shadow-md outline-none"
          />
          <Rating value={3} readOnly />
        </div>
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            className="w-4 h-4 border-none shadow-md outline-none"
          />
          <Rating value={2} readOnly />
        </div>
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            className="w-4 h-4 border-none shadow-md outline-none"
          />
          <Rating value={1} readOnly />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
