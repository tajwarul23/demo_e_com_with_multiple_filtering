import React from "react";
import { AiFillStar } from "react-icons/ai";
import { HiShoppingBag } from "react-icons/hi2";
// //

// img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
//     title: "Nike Air Vapormax Plus",
//     star: <AiFillStar className="rating-star" />,
//     reviews: "(123 reviews)",
//     prevPrice: "$140,00",
//     newPrice: "200",
//     company: "Nike",
//     color: "red",
//     category: "sneakers"
const Card = ({ img, title, reviews, prevPrice, newPrice, company, color, category }) => {

  return (
    <div className="w-full rounded-xl border bg-slate-300 border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300 flex flex-col p-5 cursor-pointer">
      {/* Product Image */}
      <img
        src={img}
        alt={title}
        className="mb-3 mx-auto object-contain w-full h-full"
      />

      {/* Product Title */}
      <h3 className="text-lg font-semibold text-gray-800 text-center leading-snug">
        {title}
      </h3>

      {/* Product Reviews */}
      <div className="flex items-center gap-1.5 mt-2 justify-center">
        <div className="text-amber-400 flex text-sm">
          {[...Array(5)].map((_, i) => (
            <AiFillStar key={i} />
          ))}
        </div>
        <p className="text-xs text-gray-400">{reviews}</p>
      </div>

      {/* Product Price + Cart */}
      <div className="flex items-center justify-between mt-3">
        <div>
          <span className="line-through text-gray-400 text-xs">
            ${prevPrice}
          </span>
          <span className="font-bold text-gray-900 ml-1.5 text-sm">
            ${newPrice}
          </span>
        </div>
        <button className="bg-gray-900 text-white p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200">
          <HiShoppingBag size={15} />
        </button>
      </div>
      {/* Details */}
    <div className="flex flex-col gap-1.5 mt-2">

  {/* Row 1 — Color + Category */}
  <div className="flex items-center justify-center gap-3">
    <div className="flex items-center gap-1.5">
      <span className="text-xs font-semibold text-gray-800">Color:</span>
      <span
        style={{ backgroundColor: color }}
        className="w-3.5 h-3.5 rounded-full border border-gray-200 inline-block"
      />
    </div>

    <div>
      <span className="text-xs font-semibold text-gray-800">Category: </span>
      <span className="text-xs text-gray-500">{category.toUpperCase()}</span>
    </div>
  </div>

  {/* Row 2 — Brand (wider) */}
  <div className="w-full">
    <p className="text-sm font-bold text-gray-900 bg-gray-100 px-3 py-1 text-center rounded-md">
      {company.toUpperCase()}
    </p>
  </div>

</div>
    </div>
  );
};

export default Card;
