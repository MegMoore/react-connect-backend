import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import axios from "axios";

interface FosterKids {
  id: number;
  name: string;
}

function App() {
  const [fosterKids, setFosterKids] = useState<FosterKids[]>([]);

  useEffect(() => {
    axios
      .get<FosterKids[]>("https://localhost:7206/api/fosterKids")
      .then((res) => console.log(res.data))
      .catch((error) => console.error("Error", error));
  });

  //const [category, setCatagory] = useState("");

  return (
    <ul>
      {fosterKids.map((fosterKids) => (
        <li key={fosterKids.id}>{fosterKids.name}</li>
      ))}
    </ul>
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
  );
}

export default App;
