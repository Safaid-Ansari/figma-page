import React from "react";
import "./SecondScreen.css";
function Explore() {
  return (
    <>
      <div className="container" id="Explore">
        <h1 className="first-heading"> Explore </h1>
        <p className="first-para">
          From one-guest rooms to penthouses with pools and garden{" "}
        </p>

        <div className="first-card">
          <div className="card-info">
            <span>Room with one king-size bed </span>
            <div className="btn1">35$</div>
            <div className="btn2">28$</div>
            <div className="btn3">book</div>
          </div>
        </div>

        <div className="second-card">
          <div className="card-info">
            <span>Room with one king-size bed </span>
            <div className="btn1">35$</div>
            <div className="btn2">28$</div>
            <div className="btn3">book</div>
          </div>
        </div>
        <div className="third-card">
          <div className="card-info">
            <span>Room with one king-size bed </span>
            <div className="btn1">35$</div>
            <div className="btn2">28$</div>
            <div className="btn3">book</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
