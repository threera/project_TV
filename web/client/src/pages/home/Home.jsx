import React from "react";
import Box from "../../components/card/Box";
import Month from "../../components/card/Month";
import Subcribe from "../../components/card/Subcribe";
import Minute from "../../components/card/Minute";
import Daily from "../../components/card/Daily";
import Realtime from "../../components/card/Realtime";
import ByChannel from "../../components/card/ByChannel";

export const Home = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-5">
        <div className="grid grid-cols-3 gap-5">
          <h1 className="text-4xl">SET TOP</h1>
          <Month/>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <Subcribe />
          <Minute/>
        </div>
        <Daily />
        <Realtime />
        <Box />
        <ByChannel />
      </div>
    </>
  );
};
