import React, { useContext } from 'react'
import AppContext from '../Context/AppContext';

// Price.jsx
const Price = ({ prefix }) => {
  const { setFilter, filters } = useContext(AppContext);
  const handleChange = (e) => setFilter("price", e.target.value);

  return (
    <div className="flex flex-col gap-3 mt-3">
      <h1 className='text-lg font-semibold'>Price</h1>
      <div className="flex items-center gap-2">
        <input type="radio" id={`${prefix}-price-all`}      name={`${prefix}-price`} value="all"      onChange={handleChange} checked={filters.price === "all"} />
        <label htmlFor={`${prefix}-price-all`}>All</label>
      </div>
      <div className="flex items-center gap-2">
        <input type="radio" id={`${prefix}-price-0-50`}     name={`${prefix}-price`} value="0-50"     onChange={handleChange} checked={filters.price === "0-50"} />
        <label htmlFor={`${prefix}-price-0-50`}>$0 - $50</label>
      </div>
      <div className="flex items-center gap-2">
        <input type="radio" id={`${prefix}-price-50-100`}   name={`${prefix}-price`} value="50-100"   onChange={handleChange} checked={filters.price === "50-100"} />
        <label htmlFor={`${prefix}-price-50-100`}>$50 - $100</label>
      </div>
      <div className="flex items-center gap-2">
        <input type="radio" id={`${prefix}-price-100-150`}  name={`${prefix}-price`} value="100-150"  onChange={handleChange} checked={filters.price === "100-150"} />
        <label htmlFor={`${prefix}-price-100-150`}>$100 - $150</label>
      </div>
      <div className="flex items-center gap-2">
        <input type="radio" id={`${prefix}-price-over-150`} name={`${prefix}-price`} value="over-150" onChange={handleChange} checked={filters.price === "over-150"} />
        <label htmlFor={`${prefix}-price-over-150`}>Over $150</label>
      </div>
    </div>
  );
};

export default Price