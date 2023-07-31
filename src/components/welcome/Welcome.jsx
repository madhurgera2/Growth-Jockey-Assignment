import React from "react";
import "./Welcome.css";
import { TiTick } from "react-icons/ti";
const Welcome = () => {
  return (
    <div className="welcome">
      <div className="left">
        <p className="heading">
          We Provide Best <br /> Marketing Solution
        </p>
        <p className="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu{" "}
        </p>
        <div className="search">
          <input
            type="text"
            className="text-input"
            placeholder="What do you want to services"
          ></input>
          <button className="search-btn ">Search</button>
        </div>
      </div>
      <div className="right">
        <div className="properties">
          <div className="icon-text">
            <TiTick color="green" />
            <span>Get 20% off on every 1st month</span>
          </div>
          <div className="icon-text">
            <TiTick color="green" />
            <span>Experts Person</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
