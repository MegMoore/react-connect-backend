import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface FosterKid {
  id: number;
  firstName: string;
  sacwis: string;
  // Add other properties as needed
}

interface FosterKidsProps {
  fosterKids: FosterKid[];
}

function FosterKids({ fosterKids: initialFosterKids }: FosterKidsProps) {
  const [fosterKids, setFosterKids] = useState<FosterKid[]>(initialFosterKids);

  useEffect(() => {
    axios
      .get<FosterKid[]>("https://localhost:7206/api/fosterKids")
      .then((res) => {
        setFosterKids(res.data);
        console.log("Information", res.data);
      })
      .catch((error) => console.error("Error", error));
  }, []);

  return (
    <div>
      <h2>Foster Kids</h2>
      {fosterKids.map((kid) => (
        <div key={kid.id}>
          <p>ID: {kid.id}</p>
          <p>First Name: {kid.firstName}</p>
          <p>Sacwis: {kid.sacwis}</p>
          {/* Add more properties as needed */}
        </div>
      ))}
    </div>
  );
}

export default FosterKids;
