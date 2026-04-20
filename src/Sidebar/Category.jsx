import React, { useContext } from 'react'
import AppContext from '../Context/AppContext'

const Category = ({ prefix }) => {
  const { setFilter, filters } = useContext(AppContext);
  const handleChange = (e) => setFilter("category", e.target.value);

  return (
    <div className="flex flex-col gap-3">
      <h1 className='text-lg font-semibold'>Category</h1>
      <div className="flex items-center gap-2">
        <input type="radio" id={`${prefix}-cat-all`}      name={`${prefix}-category`} value="all"      onChange={handleChange} checked={filters.category === "all"} />
        <label htmlFor={`${prefix}-cat-all`}>All</label>
      </div>
      <div className="flex items-center gap-2">
        <input type="radio" id={`${prefix}-cat-sneakers`} name={`${prefix}-category`} value="sneakers" onChange={handleChange} checked={filters.category === "sneakers"} />
        <label htmlFor={`${prefix}-cat-sneakers`}>Sneakers</label>
      </div>
      <div className="flex items-center gap-2">
        <input type="radio" id={`${prefix}-cat-flat`}     name={`${prefix}-category`} value="flat"     onChange={handleChange} checked={filters.category === "flat"} />
        <label htmlFor={`${prefix}-cat-flat`}>Flat</label>
      </div>
      <div className="flex items-center gap-2">
        <input type="radio" id={`${prefix}-cat-sandals`}  name={`${prefix}-category`} value="sandals"  onChange={handleChange} checked={filters.category === "sandals"} />
        <label htmlFor={`${prefix}-cat-sandals`}>Sandals</label>
      </div>
      <div className="flex items-center gap-2">
        <input type="radio" id={`${prefix}-cat-heels`}    name={`${prefix}-category`} value="heels"    onChange={handleChange} checked={filters.category === "heels"} />
        <label htmlFor={`${prefix}-cat-heels`}>Heels</label>
      </div>
    </div>
  );
};
export default Category