import React from "react";
import { Button } from "@material-ui/core";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__wrapper">
        <h1>Try hosting</h1>
        <h2>Earn extra income and unlock new opportunities by sharing your space.</h2>
        <Button className="hero-btn" variant="outlined">
          Learn more
        </Button>
      </div>
    </div>
  );
}

export default Hero;