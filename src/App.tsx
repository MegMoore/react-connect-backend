import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import axios from "axios";
import FosterKids from "./components/FosterKids/FosterKids";

function App() {
  const [fosterKids, setFosterKids] = useState([]);

  return (
    <div>
      {/* Pass fosterKids as a prop */}
      <FosterKids fosterKids={fosterKids} />
    </div>
  );
}

export default App;
