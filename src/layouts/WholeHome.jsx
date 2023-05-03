import React from "react";
import Banner from "../Banner/Banner";
import ChiefsSection from "../ChiefsSec/ChiefsSection";
import BestSelling from "../HomePage/BestSelling";
import GetUpdates from "../HomePage/GetUpdates";

const WholeHome = () => {
  return (
    <div className="space-y-20">
      <div
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80")`,
        }}
      >
        <Banner></Banner>
      </div>
      <ChiefsSection></ChiefsSection>

      <BestSelling></BestSelling>
      <GetUpdates></GetUpdates>
    </div>
  );
};

export default WholeHome;
