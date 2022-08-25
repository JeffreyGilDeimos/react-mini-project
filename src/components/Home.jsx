import React from "react";
import Carousel from "./Carousel";
import Reviews from "./Reviews";
import Featured from "./Featured";

export default function Home() {
  return (
    <div>
      <Carousel />
      <Featured />
      <Reviews />
    </div>
  );
}
