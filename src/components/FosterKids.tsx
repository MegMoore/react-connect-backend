import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface FosterKids {
    id: number;
    firstName: string;
}

function FosterKids() {
    const [fosterKids, setFosterKids] = useState<FosterKids[]>([]);
  
    useEffect(() =>{
        axios
      .get<FosterKids[]>("https://localhost:7206/api/fosterKids")
      .then((res) => console.log(res.data))
      .catch((error) => console.error("Error", error));
  });
    
    return (
        <ul>
      {fosterKids.map((user) => (
        <li key={fosterKids.forEach}></li>
      ))}
    </ul>
  )
}

export default FosterKids