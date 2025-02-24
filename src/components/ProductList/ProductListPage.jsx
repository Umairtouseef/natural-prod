import React, { useState } from "react";
import FilterConfig from "./filterConfig";
import FilterSidebar from "../CustomFilterComponent";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Woodan Diwan",
    image:
      "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
    price: "29.99",
    oldPrice: "49.99",
    rating: 4,
  },
  {
    id: 2,
    name: "Wing Lounge Chair",
    image:
      "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
    price: "19.99",
    oldPrice: "39.99",
    rating: 3,
  },
  {
    id: 3,
    name: "Egon Wood Chair",
    image:
      "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
    price: "15.99",
    oldPrice: "25.99",
    rating: 5,
  },
  {
    id: 4,
    name: "Woodan Center Table",
    image:
      "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
    price: "15.99",
    oldPrice: "25.99",
    rating: 2,
  },
  {
    id: 5,
    name: "Woodan Center Table",
    image:
      "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
    price: "15.99",
    oldPrice: "25.99",
    rating: 4,
  },

  {
    id: 6,
    name: "Woodan Diwan",
    image:
      "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
    price: "29.99",
    oldPrice: "49.99",
    rating: 4,
  },
  {
    id: 7,
    name: "Wing Lounge Chair",
    image:
      "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
    price: "19.99",
    oldPrice: "39.99",
    rating: 3,
  },
  {
    id: 8,
    name: "Egon Wood Chair",
    image:
      "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
    price: "15.99",
    oldPrice: "25.99",
    rating: 5,
  },
  
];

const ProductListComponent = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    brands: [],
    colors: [],
    ratings: [],
    price: 0,
  });

  const handleFilterChange = (key, value) => {
    setSelectedFilters((prevFilters) => {
      if (key === "price") {
        return { ...prevFilters, [key]: value };
      }
      const updatedFilters = prevFilters[key].includes(value)
        ? prevFilters[key].filter((item) => item !== value)
        : [...prevFilters[key], value];
      return { ...prevFilters, [key]: updatedFilters };
    });
  };

  return (
    <div className="container mx-auto lg:px-8 lg:py-8">
      <div className="flex">
        <div className="w-64 max-h-[100vh] overflow-y-auto sticky top-20">
    {/* <div className="w-64 fixed top-16 left-32 h-[calc(100vh-4rem)] overflow-y-auto bg-white shadow-md p-4"> */}

          <FilterSidebar
            filters={FilterConfig}
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
          />
        </div>

        <div className="flex-1 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* <div className="lg:w-1/5 w-full flex justify-center">
                    <img src={verticalbanner} alt="Vertical Banner" className="w-full h-full object-cover" />
                </div> */}
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListComponent;
