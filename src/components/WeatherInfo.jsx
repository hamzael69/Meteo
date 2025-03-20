import React, { useState, useEffect } from "react";
import "./WeatherInfo.css";
import Weather from "./Weather";

function WeatherInfo({ location, meteoDuJour }) {

  console.log(meteoDuJour);
  
  // const [temperature, setTemperature] = useState();
  // const [chargement, setChargement] = useState(true);
  // const [erreur, setErreur] = useState(null);

  // useEffect(() => {
  //   fetch(
  //    `https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=Lyon&days=5&aqi=yes&alerts=no`
  //   )
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Erreur sa marche pas ");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setTemperature(data);
  //       setChargement(false);
  //     })
  //     .catch((erreur) => {
  //       setErreur(erreur.message);
  //       setChargement(false);
  //     });
  // }, []);

  // if (chargement) return <div>sa charge patiente mec</div>;
  // if (erreur) return <div>Erreur: {erreur}</div>;

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
