import React, { useContext } from "react";
import AppContext from "../Context/AppContext";

const Recommended = () => {
  const brands = ["All", "Nike", "Adidas", "Puma", "Vans"];
  const { setFilter,  filters } = useContext(AppContext);

  return (
    <div className="max-w-4xl  px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-semibold mb-5">Recommended</h1>
      {/* Buttons */}
      <div className="flex gap-5">
        {brands.map((brand) => (
          <button
            key={brand}
            onClick={() => {
              setFilter("company",brand.toLowerCase())
             
            }}
            className={`border w-full border-gray-300  py-1.5 rounded-md  ${filters.company === brand.toLowerCase() ? "bg-gray-900 text-white border-gray-900" : "border-gray-300 hover:bg-gray-100"}  cursor-pointer`}
          >
            {brand}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
