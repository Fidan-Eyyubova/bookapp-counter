import React, { Component } from "react";
import element from "../data/data.js";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
    };
  }

  handleNext = () => {
    const { currentPage } = this.state;
    if ((currentPage + 1) * 2 < element.length) {
      this.setState((prevState) => ({
        currentPage: prevState.currentPage + 1,
      }));
    }
  };

  handlePrevious = () => {
    const { currentPage } = this.state;
    if (currentPage > 0) {
      this.setState((prevState) => ({
        currentPage: prevState.currentPage - 1,
      }));
    }
  };

  render() {
    const { currentPage } = this.state;
    const startIndex = currentPage * 2;
    const currentItems = element.slice(startIndex, startIndex + 2);

    return (
      <div className="count-shop">
        <div className="shop d-flex">
          <button onClick={this.handlePrevious} className="mt-5"><FaArrowLeft />
          </button>
          <ul className="d-flex mx-3">
            {currentItems.map((el) => (
              <div className="list">
                <li key={el.id} className="mx-5 d-flex">
                  <div className="left">
                    <img src={el.image} alt="" />
                  </div>
                  <div className="right">
                    <p>
                      <span>Name:</span> {el.name}
                    </p>
                    <p>
                      <span>Username:</span> {el.username}
                    </p>
                    <p>
                      <span>Address:</span> {el.address.street},{" "}
                      {el.address.city}
                    </p>
                    <p>
                      <span>Phone:</span> {el.phone}
                    </p>
                    <p>
                      <span>Money:</span> {el.money}
                    </p>
                  </div>
                </li>
              </div>
            ))}
          </ul>
          <button onClick={this.handleNext} className="mt-5"><FaArrowRight />
          </button>
        </div>
        <div></div>
      </div>
    );
  }
}
