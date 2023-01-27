import React from "react";
import VerticalBar from "../chart/VerticalBar";

const Daily = () => {
  return (
    <div className="flex items-start justify-between shadow-lg rounded-md  bg-white p-3">
      <div className="flex justify-end w-full">
        <VerticalBar />
      </div>
    </div>
  );
};

export default Daily;
