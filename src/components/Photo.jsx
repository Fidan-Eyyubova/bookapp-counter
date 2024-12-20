import React, { Component } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  handleNext = () => {
    const { images } = this.props;
    if (images && images.length > 0) {
      this.setState((prevState) => ({
        currentIndex: (prevState.currentIndex + 1) % images.length,
      }));
    }
  };

  handlePrevious = () => {
    const { images } = this.props;
    if (images && images.length > 0) {
      this.setState((prevState) => ({
        currentIndex: (prevState.currentIndex - 1 + images.length) % images.length,
      }));
    }
  };

  render() {
    const { images } = this.props;
    const { currentIndex } = this.state;
    return (
      <div className="text-center photo mt-5">
        <button onClick={this.handlePrevious}><FaArrowLeft /></button>
        <img src={images[currentIndex]} className="mx-5" />
        <button onClick={this.handleNext}><FaArrowRight /></button>
      </div>
    );
  }
}
