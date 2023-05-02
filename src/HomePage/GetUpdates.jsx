import React from "react";

const GetUpdates = () => {
  return (
    <div>
      <div
        className="hero h-max"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-photo/top-view-circular-food-frame_23-2148723455.jpg?w=1380&t=st=1683037630~exp=1683038230~hmac=3407bc34a6d525e5725a9b437180fb03c3d8073abee953ac9ce6e1b2dd3ed285")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Hello there.{" "}
              <span className="text-2xl">
                <br />Subscribe here to get regular updates!
              </span>
            </h1>
            <p className="mb-5">
              We are constantly updating our site with new and delicious recipes
              that you won't want to miss. To make sure you never miss a recipe,
              be sure to subscribe to our updates. As a subscriber, you'll
              receive the latest recipes right in your inbox, as well as special
              promotions and exclusive content. So what are you waiting for?
              Sign up now and join our community of food lovers!
            </p>
            <div className="inline-block">
              <input
                type="email"
                placeholder="example@gmail.com"
                className="input input-bordered w-full max-w-xs mb-2"
              />
              <button className="btn btn-primary bg-yellow-500 border-none">Let's go !</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetUpdates;
