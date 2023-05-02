import React from "react";
import Banner from "../Banner/Banner";
import ChiefsSection from "../ChiefsSec/ChiefsSection";
import BestSelling from "../HomePage/BestSelling";

const WholeHome = () => {
  return (
    <div className="space-y-20">
      <Banner></Banner>
      <ChiefsSection></ChiefsSection>
      <BestSelling></BestSelling>
    </div>
  );
};

export default WholeHome;
