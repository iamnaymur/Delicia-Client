import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="flex items-center align-middle text-center">
        <div>
          <p className="text-3xl">
            Welcome to Delicia, your ultimate destination for exploring
            delicious and mouth-watering food recipes. Whether you're a seasoned
            cook or a newbie in the kitchen.
          </p>
        </div>
        //? add lottie animation here at the end.
        <div>
          <img
            style={{ width: "100vw" }}
            src="https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg?w=826&t=st=1682955502~exp=1682956102~hmac=20489c3924bae036bed86db67c345650e107f8ed745fbaa292140bad7c941986"
            alt=""
          />
        </div>
          </div>
      </div>
      
      
  );
};

export default Banner;
