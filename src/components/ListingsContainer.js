import React from "react";
 import ListingCard from "./ListingCard";

function ListingsContainer({arr}) {

  
  return (
    <main>
      <ul className="cards">
        {arr.map((item)=>{return <ListingCard item = {item} key={item.id}/>})}
      </ul>
    </main>
  );
}

export default ListingsContainer;

