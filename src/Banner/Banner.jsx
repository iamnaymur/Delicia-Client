import React from "react";
import Lottie from "lottie-react";
import foodSlider from "../assets/4762-food-carousel.json";
const Banner = () => {
  return (
    <div>
      <div className="md:flex items-center mt-10 align-middle text-center ">
        <div className="p-10">
          <p className="text-3xl">
            Welcome to Delicia, your ultimate destination for exploring
            delicious and mouth-watering food recipes. Whether you're a seasoned
            cook or a newbie in the kitchen.
          </p>
        </div>

        <div style={{ width: "100%" }}>
          <Lottie animationData={foodSlider}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Banner;
