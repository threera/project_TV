import React from "react";

const month = () => {
  return (
    <div className=" col-span-2 shadow-lg-home-1">
      <div>
        <h1 className="">month</h1>
      </div>
      <div className="w-full">
        <select
          className="border-2 w-full border-black-500 p-2 rounded-md"
          id="cars"
          name="cars"
        >
          <option value="volvo">มกราคม</option>
          <option value="saab">กุมภาพันธ์</option>
        </select>
      </div>
    </div>
  );
};

export default month;
