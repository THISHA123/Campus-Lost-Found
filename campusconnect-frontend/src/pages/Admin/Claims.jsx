import API from "../../services/api";
import { useEffect, useState } from "react";

export default function Claims() {
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    fetchClaims();
  }, []);

  const fetchClaims = async () => {
    const res = await API.get("/claims");
    setClaims(res.data);
  };

  const updateStatus = async (id, status) => {
    await API.put(`/claims/${id}`, { status });
    fetchClaims(); // refresh list
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Claims Management</h1>

      {claims.map((c) => (
        <div key={c._id} className="bg-white p-4 shadow rounded mb-3">

          <p><b>Message:</b> {c.message}</p>
          <p><b>Status:</b> {c.status}</p>

          {/* ✅ YOUR BUTTONS GO HERE */}
          <div className="flex gap-3 mt-3">

            <button
              onClick={() => updateStatus(c._id, "approved")}
              className="bg-green-600 text-white px-3 py-1 rounded"
            >
              Approve
            </button>

            <button
              onClick={() => updateStatus(c._id, "rejected")}
              className="bg-red-600 text-white px-3 py-1 rounded"
            >
              Reject
            </button>

          </div>

        </div>
      ))}
    </div>
  );
}