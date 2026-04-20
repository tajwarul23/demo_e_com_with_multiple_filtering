import React, { useContext } from 'react'
import AppContext from '../Context/AppContext'

const Search = () => {
    const {setFilter, filters} = useContext(AppContext)
  return (
    <div><input type="text" placeholder='Enter Your Search Shoes' className='border-2 rounded-md px-2 'onChange={(e)=>{setFilter("search", e.target.value)}} value={filters.search}/></div>
  )
}

export default Search