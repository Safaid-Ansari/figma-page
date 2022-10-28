
// It is only for Mobile Screen if You want to see mobile screen way then you can add  this file in App.js file 
import React from "react";
import overlapGroup from "../assests/home.png";
import barsSolid11 from "../assests/bar.png";
import image3 from "../assests/downarrow.png";
import iconSearch from "../assests/searchIcon.png";
import "./MobileFirstScreen.css";
export default function MobileFirstScreen() {
  return (
    <div className="container-center-horizontal">
      <div className="mobile-first-screen screen">
        <div
          className="overlap-group"
          style={{ backgroundImage: `url(${overlapGroup})` }}
        >
          <div className="rectangle-9"></div>
          <div className="your-logo dancingscript-bold-white-45px">
            <span className="dancingscript-bold-white-45px">Your Logo </span>
          </div>
          <img
            className="bars-solid-1-1"
            src={barsSolid11}
            alt="bars-solid"
          ></img>
          <h1 className="title valign-text-middle exo2-bold-white-52px">
            <span>
              <span
                className="exo-2-bold-white-52px"
                style={{ fontSize: "30px" }}
              >
                Rethink your living & renting{" "}
              </span>
            </span>
          </h1>
          <p className="make-your-stay-painless-with-us valign-text-middle ubuntu-medium-white-20px">
            <span>
              <span className="ubuntu-medium-white-20px">
                Make your stay painless with us{" "}
              </span>
            </span>
          </p>
          <div className="rectangle-9-1"></div>
          <div className="rectangle-4"></div>

          <div className="rectangle-5"></div>
          <div className="city valign-text-middle exo2-normal-dove-gray-15px">
            <span>
              <span className="exo2-normal-dove-gray-15px">CITY</span>
            </span>
          </div>
          <div className="select-your-city valign-text-middle ubuntu-normal-black-22px">
            <span>
              <span className="ubuntu-normal-black-22px">
                Select your city{" "}
              </span>
            </span>
          </div>
          <div className="rectangle-11"></div>
          <div className="guests valign-text-middle exo2-normal-dove-gray-15px">
            <span>
              <span className="exo2-normal-dove-gray-15px">GUESTS</span>
            </span>
          </div>
          <div className="add-guests valign-text-middle ubuntu-normal-black-22px">
            <span>
              <span className="ubuntu-normal-black-22px">Add guests</span>
            </span>
          </div>
          <div className="rectangle-10"></div>
          <div className="dates valign-text-middle exo2-normal-dove-gray-15px">
            <span>
              <span className=" exo2-normal-dove-gray-15px">DATES</span>
            </span>
          </div>
          <div className="select-your-dates valign-text-middle ubuntu-normal-black-22px">
            <span>
              <span className="ubuntu-normal-black-22px">
                Select your dates{" "}
              </span>
            </span>
          </div>
          <img className="image-3" src={image3} alt="imag"></img>
          <div className="search-text-icon">
            <img
              className="icon-search"
              src={iconSearch}
              alt="icon-search"
            ></img>
            <div className="search valign-text-middle ubuntu-medium-white-26px">
              <span>
                <span className="ubuntu-medium-white-26px">Search</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
