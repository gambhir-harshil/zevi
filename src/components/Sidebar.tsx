import { ChevronDown, ChevronUp } from "lucide-react";
import { FakeProduct } from "../utils/createFakeProducts";
import React, { useEffect, useState } from "react";
import { Rating } from "@mui/material";

interface SidebarProps {
  products: FakeProduct[];
  setFilteredData: React.Dispatch<React.SetStateAction<FakeProduct[]>>;
}

const Sidebar: React.FC<SidebarProps> = ({ products, setFilteredData }) => {
  const [arrowUp, setArrowUp] = useState(false);
  const [displayDepartments, setDisplayDepartments] = useState<string[]>([]);
  const [uniqueDepartments, setUniqueDepartments] = useState<string[]>([]);

  const [selectedFilters, setSelectedFilters] = useState({
    departments: new Set<string>(),
    minPrice: 0,
    maxPrice: Number.MAX_SAFE_INTEGER,
    ratings: new Set<number>(),
  });

  useEffect(() => {
    const uniqueDepartments = Array.from(
      new Set(products.map((product) => product.department))
    );
    setUniqueDepartments(uniqueDepartments);
    setDisplayDepartments(uniqueDepartments.slice(0, 3));
  }, [products]);

  useEffect(() => {
    const filteredData = products.filter((product) => {
      const departmentFilter =
        selectedFilters.departments.size === 0 ||
        selectedFilters.departments.has(product.department);

      const priceFilter =
        product.price >= selectedFilters.minPrice &&
        product.price <= selectedFilters.maxPrice;

      const ratingFilter =
        selectedFilters.ratings.size === 0 ||
        selectedFilters.ratings.has(product.rating);

      return departmentFilter && priceFilter && ratingFilter;
    });

    setFilteredData(filteredData);
  }, [selectedFilters, products]);

  const handleDepartmentFilter = (department: string) => {
    setSelectedFilters((prevFilters) => {
      const newDepartments = new Set(prevFilters.departments);
      if (newDepartments.has(department)) {
        newDepartments.delete(department);
      } else {
        newDepartments.add(department);
      }
      return { ...prevFilters, departments: newDepartments };
    });
  };

  const handlePriceFilter = (minPrice: number, maxPrice: number) => {
    setSelectedFilters((prevFilters) => {
      const newMinPrice = prevFilters.minPrice === minPrice ? 0 : minPrice;
      const newMaxPrice =
        prevFilters.maxPrice === maxPrice ? Number.MAX_SAFE_INTEGER : maxPrice;
      return { ...prevFilters, minPrice: newMinPrice, maxPrice: newMaxPrice };
    });
  };

  const handleRatingFilter = (rating: number) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      ratings: prevFilters.ratings.has(rating)
        ? new Set([...prevFilters.ratings].filter((r) => r !== rating))
        : new Set([...prevFilters.ratings, rating]),
    }));
  };

  function handleDisplayMore() {
    setDisplayDepartments(uniqueDepartments);
    setArrowUp(true);
  }
  function handleDisplayLess() {
    setDisplayDepartments(uniqueDepartments.slice(0, 3));
    setArrowUp(false);
  }
  return (
    // Wrapper
    <div className="h-[calc(100vh-10rem)] w-[320px] px-8 py-4 overflow-y-scroll hidden lg:block">
      <div className="flex flex-col gap-4 pb-4 mb-2 border-b border-gray-300">
        {/* Department */}
        <div className="flex items-center justify-between w-full">
          <h3 className="font-semibold uppercase">Department</h3>
          {arrowUp ? (
            <ChevronUp className="cursor-pointer" onClick={handleDisplayLess} />
          ) : (
            <ChevronDown
              className="cursor-pointer"
              onClick={handleDisplayMore}
            />
          )}
        </div>
        {displayDepartments.map((item) => (
          <div key={item} className="flex items-center gap-4">
            <input
              type="checkbox"
              checked={selectedFilters.departments.has(item)}
              value={item}
              onChange={() => handleDepartmentFilter(item)}
              className="w-4 h-4 border-none shadow-md outline-none"
            />
            <span className="font-medium tracking-wide">{item}</span>
          </div>
        ))}
      </div>

      {/* Price Ranges */}
      <div className="flex flex-col gap-4 pb-4 mb-2 border-b border-gray-300">
        <h3 className="font-semibold uppercase">Price Range</h3>
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            className="w-4 h-4 border-none shadow-md outline-none"
            checked={
              selectedFilters.minPrice === 0 && selectedFilters.maxPrice === 500
            }
            onChange={() => handlePriceFilter(0, 500)}
          />
          <span className="font-medium tracking-wide">Below 500</span>
        </div>

        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            className="w-4 h-4 border-none shadow-md outline-none"
            checked={
              selectedFilters.minPrice === 500 &&
              selectedFilters.maxPrice === 700
            }
            onChange={() => handlePriceFilter(500, 700)}
          />
          <span className="font-medium tracking-wide">500-700</span>
        </div>

        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            className="w-4 h-4 border-none shadow-md outline-none"
            checked={
              selectedFilters.minPrice === 700 &&
              selectedFilters.maxPrice === 900
            }
            onChange={() => handlePriceFilter(700, 900)}
          />
          <span className="font-medium tracking-wide">700-900</span>
        </div>
      </div>

      {/* Ratings */}
      <div className="flex flex-col gap-4 pb-4 border-b border-gray-300">
        <h3 className="font-semibold uppercase">Rating</h3>
        {[5, 4, 3, 2, 1].map((rating) => (
          <div key={rating} className="flex items-center gap-4">
            <input
              type="checkbox"
              className="w-4 h-4 border-none shadow-md outline-none"
              onChange={() => handleRatingFilter(rating)}
              checked={selectedFilters.ratings.has(rating)}
            />
            <Rating value={rating} readOnly />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
