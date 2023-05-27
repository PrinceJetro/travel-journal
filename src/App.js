import React from "react";
import { ReactDOM } from "react";
import Navbar from './components/navbar'
import Card from './components/cards'
import data from "./components/data"


function App() {
const mainData = data.map(items =>{
  return(
    <Card
    key={items.image}
    item={items}
    />
  )
}) 
  return (
    <div className="container">
      <Navbar/>
      {mainData}
      
    </div>
  );
}

export default App;
