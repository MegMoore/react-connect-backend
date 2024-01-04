import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import axios from "axios";
import FosterKids from "./components/FosterKids";



function App() {

  
 // const [category, setCatagory] = useState("");

  return (
    <div>
     <FosterKids 
     
     />
    </div>
    // <div>
    //   <select
    //     className="form-select"
    //     onChange={(event) => setCatagory(event.target.value)}
    //   >
    //     <option value=""></option>
    //     <option value="Clothing">Clothing</option>
    //     <option value="Household">Household</option>
    //   </select>
    //   <ProductList category={category}></ProductList>
    // </div>
  )
  }

export default App;
