import React from "react";
import heroImg from "../assets/chat.png"

function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-1/3 flex items-end justify-end">
        <img
          src={heroImg}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        </div>
        
        <div className="w-2/3">
          <h1 className="text-6xl font-bold">One Stop Solution for Lab Tests, Consultancy & Medical Needs!</h1>
          <p className="py-6 text-xl">
          Book lab tests, consult doctors online, buy medical essentials, donate blood, and explore the latest medical research—all in one place!
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
