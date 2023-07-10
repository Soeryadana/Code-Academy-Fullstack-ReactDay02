import React, { useState } from "react";
import RegionApi from "../api/RegionApi";

const RegionUpdate = ({ region, setRefresh, setDisplayUpdate }) => {
  const [updatedRegion, setUpdatedRegion] = useState({
    region_id: region.region_id,
    region_name: region.region_name,
  });

  const handleUpdate = async () => {
    await RegionApi.update(updatedRegion); // Update the region using the API
    window.alert("Data successfully updated");
    setRefresh(true); // Refresh the region list
    setDisplayUpdate(false); // Close the update form
  };

  const handleChange = (e) => {
    setUpdatedRegion({
      ...updatedRegion,
      [e.target.name]: e.target.value,
    });
  };
  
  return (
    <div>
      <h2>Update Region</h2>
      <form>
        <label>
          Region ID:
          <input
            type="text"
            name="region_id"
            value={updatedRegion.region_id}
            onChange={handleChange}
            readOnly
          />
        </label>
        <label>
          Region Name:
          <input
            type="text"
            name="region_name"
            value={updatedRegion.region_name}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleUpdate}>Update Region</button>
      </form>
    </div>
  );
};

export default RegionUpdate;
