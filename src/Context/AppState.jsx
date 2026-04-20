import React, { useMemo, useState } from "react";
import data from "../db/data.js";
import AppContext from "./AppContext.jsx";
  const priceRanges = {
    all: { min: 0, max: 1000 },
    "0-50": { min: 0, max: 50 },
    "50-100": { min: 50, max: 100 },
    "100-150": { min: 100, max: 150 },
    "over-150": { min: 150, max: 1000 },
  };
const AppState = (props) => {
  const [allData] = useState(data);
  

  //single state object for all filters
  const [filters, setFilters] = useState({
    company: "all",
    category: "all",
    color: "all",
    price: "all",
  });



  const clearFilter = () => {
    setFilters({
      company: "all",
      category: "all",
      color: "all",
      price: "all",
    });
    
  };

  //setter function
  const setFilter = (key, value) =>
    setFilters((prev) => ({ ...prev, [key]: value })); //ex:key = company, value = nike

  const filterData = useMemo(() => {
    const{min, max} = priceRanges[filters.price];
    return allData.filter((d) => {
      const matchCompany =
        filters.company.toLowerCase() === "all" ||
        d.company.trim().toLowerCase() === filters.company.trim().toLowerCase();
      const matchCategory =
        filters.category.toLowerCase() === "all" ||
        d.category.trim().toLowerCase() ===
          filters.category.trim().toLowerCase();
      const matchColor =
        filters.color.toLowerCase() === "all" ||
        d.color.trim().toLowerCase() === filters.color.trim().toLowerCase();
      const matchPrice =
        d.newPrice >= min && d.newPrice <= max;

      return matchCompany && matchCategory && matchColor && matchPrice;
    });
  }, [allData, filters]);

  return (
    <AppContext.Provider
      value={{
        allData,
        setFilters,
        filterData,
        setFilter,
        clearFilter,
        filters,
       
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
