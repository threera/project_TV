import React from "react";
import PieChart from "../chart/PieChart";

const Realtime = () => {
  return (
    <div className="flex items-start justify-between shadow-lg rounded-md  bg-white p-3">
      <div className="flex justify-end w-full">
        <PieChart />
      </div>
    </div>
  );
};

export default Realtime;
