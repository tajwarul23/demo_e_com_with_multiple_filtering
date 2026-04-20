import React, { useContext } from 'react'
import AppContext from '../Context/AppContext'

// Colors.jsx
const Colors = ({ prefix }) => {
  const { setFilter, filters } = useContext(AppContext);
  const handleChange = (e) => setFilter("color", e.target.value);

  return (
    <div className="flex flex-col gap-3 mt-3">
      <h1 className='text-lg font-semibold'>Colors</h1>
      <div className="flex items-center gap-2">
        <input type="radio" id={`${prefix}-color-all`}   name={`${prefix}-color`} value="all"   onChange={handleChange} checked={filters.color === "all"} />
        <label htmlFor={`${prefix}-color-all`}>All</label>
      </div>
      <div className="flex items-center gap-2">
        <input type="radio" id={`${prefix}-color-black`} name={`${prefix}-color`} value="black" onChange={handleChange} checked={filters.color === "black"} />
        <label htmlFor={`${prefix}-color-black`}>Black</label>
      </div>
      <div className="flex items-center gap-2">
        <input type="radio" id={`${prefix}-color-blue`}  name={`${prefix}-color`} value="blue"  onChange={handleChange} checked={filters.color === "blue"} />
        <label htmlFor={`${prefix}-color-blue`}>Blue</label>
      </div>
      <div className="flex items-center gap-2">
        <input type="radio" id={`${prefix}-color-red`}   name={`${prefix}-color`} value="red"   onChange={handleChange} checked={filters.color === "red"} />
        <label htmlFor={`${prefix}-color-red`}>Red</label>
      </div>
      <div className="flex items-center gap-2">
        <input type="radio" id={`${prefix}-color-green`} name={`${prefix}-color`} value="green" onChange={handleChange} checked={filters.color === "green"} />
        <label htmlFor={`${prefix}-color-green`}>Green</label>
      </div>
      <div className="flex items-center gap-2">
        <input type="radio" id={`${prefix}-color-white`} name={`${prefix}-color`} value="white" onChange={handleChange} checked={filters.color === "white"} />
        <label htmlFor={`${prefix}-color-white`}>White</label>
      </div>
    </div>
  );
};

export default Colors