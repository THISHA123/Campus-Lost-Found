import { useEffect, useState } from "react";
import API from "../services/api";

function MyClaims() {
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    // Example: fetch claims for one item
    API.get("/claims/ITEM_ID").then(res => setClaims(res.data));
  }, []);

  return (
    <div>
      <h2>Claims</h2>

      {claims.map(c => (
        <div key={c._id} className="border p-3 mb-2">
          <p>{c.message}</p>
          <p>Status: {c.status}</p>
        </div>
      ))}
    </div>
  );
}

export default MyClaims;