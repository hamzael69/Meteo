import React from "react";
import "./WeatherDays.css";

function WeatherDays({handleChangeDay}) {

  const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

  const today = new Date().getDay();  

  // Get today and the next days
  const forecastDays = ["Aujourd'hui"].concat(
    Array.from({ length: 4 }, (_, i) => days[(today + i) % days.length])
  );

 




  return (
    <div className="card-action">
      <a href="#"onClick={() => handleChangeDay(0)}>{forecastDays[0]}</a>
      <a href="#"onClick={() => handleChangeDay(1)}>{forecastDays[1]}</a>
      <a href="#"onClick={() => handleChangeDay(2)}>{forecastDays[2]}</a>
      <a href="#" onClick={() => handleChangeDay(3)}>{forecastDays[3]}</a>
      <a href="#" onClick={() => handleChangeDay(4)}>{forecastDays[4]}</a>
    </div>
  );
}

export default WeatherDays;
