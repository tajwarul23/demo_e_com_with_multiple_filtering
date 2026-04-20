import React, { useState } from "react";

import Navigation from "./Navigation/Navigation";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import { RxHamburgerMenu } from "react-icons/rx";
const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Mobile filter button */}
      <div className="lg:hidden px-6 py-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg text-sm w-full justify-between"
        >
          <span>Filters</span>
          <span className={`transition-transform duration-300 ${sidebarOpen ? "rotate-180" : ""}`}>
            ▼
          </span>
        </button>

        <div className={`overflow-hidden transition-all duration-300 ${sidebarOpen ? "max-h-150 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="border border-gray-100 rounded-xl p-5 mt-2 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
            <Sidebar  prefix="mobile"/>
          </div>
        </div>
      </div>

      {/* Desktop layout — full width flex */}
      <div className=" lg:flex min-h-screen">

        {/* Sidebar — sticks to the left edge */}
        <aside className="hidden sm:block w-56 shrink-0 border-r border-gray-100 px-4 py-6 sticky top-0 h-screen overflow-y-auto">
          <Sidebar prefix="desktop" />
        </aside>

        {/* Main content — takes all remaining space */}
        <main className="flex-1 px-8 py-6">
          <Recommended />
          <Products />
        </main>

      </div>
    </div>
  );
};

export default App;
