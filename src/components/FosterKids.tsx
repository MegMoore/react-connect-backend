import axios from 'axios';
import React, { useEffect, useState } from 'react'



function FosterKids() {
    const [fosterKids, setFosterKids] = useState<fosterKids[]>([]);
  
    useEffect(() =>{
        axios
      .get<fosterKids[]>("https://localhost:7206/api/fosterKids")
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