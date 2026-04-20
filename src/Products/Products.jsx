import React, { useContext } from "react";
import Card from "../Components/Card";
import AppContext from "../Context/AppContext";

const Products = () => {
  const { filterData } = useContext(AppContext);
  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card> 
      <Card></Card>  */}
    {
      filterData.length > 0 ? (   filterData.map((data) => (
          <Card
            key={data?.img}
            img={data.img}
            title={data.title}
            reviews={data.reviews}
            prevPrice={data.prevPrice}
            newPrice={data.newPrice}
            company = {data.company}
            color = {data.color}
            category = {data.category}
            
          ></Card>
        ))):(<div className="col-span-5 text-center text-2xl"><h1>No data found for the specific filter</h1></div>)
    }
      </div>
    </div>
  );
};

export default Products;
