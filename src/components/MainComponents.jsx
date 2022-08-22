import React from "react";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Header from "./Header";
import Reviews from "./Reviews";

export default function MainComponents() {
  return (
    <div>
      <Header />
      <Carousel />
      <Reviews />
      <Footer />
    </div>
  );
}
