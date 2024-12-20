import React, { Component } from "react";
import { CiLocationOn, CiSquareCheck } from "react-icons/ci";
import { FaRegStar, FaSearch, FaStar } from "react-icons/fa";

export default class Service extends Component {
  render() {
    return (
        <div className="cont-service mx-5">
      <div className="service mt-5">
        <div className="row first g-5 mb-5">
          <div className="col-12 col-md-6 col-sm-6">
            <div className="left">
              <p>Barber Services</p>
              <h3>Men's Haircuts And Hair styles</h3>
              <p>
                <CiLocationOn />
                Tokyo city tower, Road No: 1280, Housing Apartment, Japan
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-sm-6">
            <div className="right">
              <div className="cont">
                <div className="up">
                  <h4>
                    $150.00 <span>$200.00</span>
                  </h4>
                </div>
                <div className="down d-flex">
                  <div className="left mx-2">
                    <img
                      src="https://themeforest.kreativdev.com/bookapp/demo/assets/images/vendor/shop-14.png"
                      alt=""
                    />
                  </div>
                  <div className="right">
                    <h5>By Jonathan Doe</h5>
                    <p className="star">
                      <FaStar /> <FaStar /> <FaStar /> <FaStar />
                      <FaRegStar />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row second mb-5">
          <div className="col-12">
            <h4>Service Description</h4>
            <p className="para">
              Get Barbers at your doorstep now on your demand as per your
              required time and date. Trim your <br /> regular hairstyle or get
              a new look with a new style from the catalog. Even if you are too
              busy in the <br /> office and have a meeting to attend, why not
              get the job done in the office itself!! Choose a regular <br />{" "}
              scissor cut or ask for a trimmer cut, any style you want is just a
              tap away!
            </p>
            <p className="para">
              Praesent lectus facilisi tempor ridiculus arcu pharetra non
              tellus. Torquent nisl tempori amader Magnis <br /> mollis lobortis
              nam, montes ut, consequat sed amet nullam.
            </p>
          </div>
        </div>
        <div className="row third mb-5">
          <div className="col-12">
            <h4>Service Description</h4>
            <ul>
              <li>
                <span>Service Booking:</span> 3 hours before service delivery
              </li>
              <li>
                <span>Service Duration:</span> 40 minutes (can be extended up to
                10 minutes)
              </li>
              <li>
                <span>Service Availability:</span> 9 Am to 7 pm
              </li>
            </ul>
          </div>
        </div>
        <div className="row fourth mb-5">
          <div className="col-12">
            <h4>Service Features</h4>
            <div className="bottom d-flex">
              <p className="mx-3">
                <CiSquareCheck className="icon" /> 100% Secure Services
              </p>
              <p className="mx-3">
                <CiSquareCheck className="icon" /> Covid 19 Safety
              </p>
              <p className="mx-3">
                <CiSquareCheck className="icon" /> Easy Payment Method
              </p>
              <p className="mx-3">
                <CiSquareCheck className="icon" /> Services Quality Ensure
              </p>
            </div>
          </div>
        </div>
      </div>

        </div>
    );
  }
}
