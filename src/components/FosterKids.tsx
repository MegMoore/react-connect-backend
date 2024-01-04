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
    useEffect((fosterKids) => {
        console.log("Information", fosterKids);
       
        
    })
    
    return (
       <div>
        Foster Kids
       </div>
  )
}

export default FosterKids