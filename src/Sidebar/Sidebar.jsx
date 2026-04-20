import React, { useContext } from "react";
import Category from "./Category";
import Price from "./Price";
import Colors from "./Colors";
import AppContext from "../Context/AppContext";
const Sidebar = ({ prefix = "default" }) => {
  const { clearFilter } = useContext(AppContext);
  return (
    <div>
      <Category prefix={prefix} />
      <Price prefix={prefix} />
      <Colors prefix={prefix} />
      <button
        onClick={clearFilter}
        className="bg-red-500 text-white p-3 rounded-lg mt-5 font-medium cursor-pointer"
      >
        Clear All Filter
      </button>
    </div>
  );
};

export default Sidebar;
