import React, { useState, useEffect } from "react";
import "./WeatherInfo.css";
import Weather from "./Weather";

function WeatherInfo({ location, meteoDuJour }) {

 

  return (
    <div className="card-content white-text">
      <span className="card-title">{location.name}</span><br/>
      <span className="card-title">{location.region}</span><br/>
      <span className="card-title">{location.country}</span>
      <div>
        <img src={meteoDuJour.icon} alt="" />
      </div>
      <span className="temperature">{meteoDuJour.avgTemp}°</span>
      <div className="wind">
        Max: {meteoDuJour.maxTemp}°C / Min: {meteoDuJour.minTemp}°C
      </div>
      
    </div>
  );
}

export default WeatherInfo;
