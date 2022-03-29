import React,{useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  
  const [arr, setArr]= useState([])
   useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then(res=>res.json())
    .then(data=>{
      setArr(data)

    })
    


  },[])

  function handleChange(e){
    const newArr = arr.filter((item)=>{
      return item.description.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
    })
    if(e.target.value ===""){
      setArr(arr)
    }else{setArr(newArr)}
    console.log(e.target.value)
    

  }

  return (
    <div className="app">
      <Header  handleChange ={handleChange}/>
      <ListingsContainer arr = {arr} />
    </div>
  );
}

export default App;
