import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Photo from "./components/Photo";
import Service from "./components/Service";
import Shop from "./components/Shop";
import Count from "./counter/Count";

function App() {
  const imageUrls = [
    "https://themeforest.kreativdev.com/bookapp/demo/assets/images/services/service-lg-1.jpg",
    "https://themeforest.kreativdev.com/bookapp/demo/assets/images/services/service-lg-4.jpg",
  ];

  return (
    <>
      <Navbar />
      <Hero />
      <Photo images={imageUrls} />
      <Service />
      <Shop />
      {/* <Count /> */}
    </>
  );
}

export default App;
