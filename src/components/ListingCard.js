import React, {useState} from "react";

function ListingCard({item}) {

  const[isFav, setIsFav] = useState(false)
  function handleClickFav(){
    setIsFav(!isFav)
  }
  function handleClickDelete(){
    fetch(`http://localhost:6001/listings/${item.id}`, {
      method : "DELETE"
    })
    .then(console.log("successful delete"))
    

  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={"description"} />
      </div>
      <div className="details" >
        {isFav ? (
          <button className="emoji-button favorite active" onClick={handleClickFav}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClickFav}>☆</button>
        )}
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button className="emoji-button delete" onClick={handleClickDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
