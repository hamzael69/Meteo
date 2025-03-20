import React, { useEffect, useState } from "react";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import WeatherDays from "./WeatherDays";

function Weather() {
  const [meteoData, setMeteoData] = useState(null);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);
  const [jour, setJour] = useState(4);
  const [location, setLocation] = useState("Lyon"); // Nouvelle state pour la localisation
  const [searchInput, setSearchInput] = useState(""); // State pour l'input de recherche

  // Fonction pour chercher la météo
  const fetchWeather = (city) => {
    setChargement(true);
    setErreur(null);
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${
        import.meta.env.VITE_WEATHER_API_KEY
      }&q=${city}&days=5&aqi=yes&alerts=no`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Localisation non trouvée");
        }
        return response.json();
      })
      .then((data) => {
        const formattedMeteoData = {
          location: {
            name: data.location.name,
            region: data.location.region,
            country: data.location.country,
          },
          meteoParJour: [
            {
              date: data.forecast.forecastday[0].date,
              maxTemp: data.forecast.forecastday[0].day.maxtemp_c,
              minTemp: data.forecast.forecastday[0].day.mintemp_c,
              avgTemp: data.forecast.forecastday[0].day.avgtemp_c,
              icon: data.forecast.forecastday[0].day.condition.icon,
              windSpeed: data.forecast.forecastday[0].day.maxwind_kph,
            },
            {
              date: data.forecast.forecastday[1].date,
              maxTemp: data.forecast.forecastday[1].day.maxtemp_c,
              minTemp: data.forecast.forecastday[1].day.mintemp_c,
              avgTemp: data.forecast.forecastday[1].day.avgtemp_c,
              icon: data.forecast.forecastday[1].day.condition.icon,
              windSpeed: data.forecast.forecastday[1].day.maxwind_kph,
            },
            {
              date: data.forecast.forecastday[2].date,
              maxTemp: data.forecast.forecastday[2].day.maxtemp_c,
              minTemp: data.forecast.forecastday[2].day.mintemp_c,
              avgTemp: data.forecast.forecastday[2].day.avgtemp_c,
              icon: data.forecast.forecastday[2].day.condition.icon,
              windSpeed: data.forecast.forecastday[2].day.maxwind_kph,
            },
            {
              date: data.forecast.forecastday[3].date,
              maxTemp: data.forecast.forecastday[3].day.maxtemp_c,
              minTemp: data.forecast.forecastday[3].day.mintemp_c,
              avgTemp: data.forecast.forecastday[3].day.avgtemp_c,
              icon: data.forecast.forecastday[3].day.condition.icon,
              windSpeed: data.forecast.forecastday[3].day.maxwind_kph,
            },
            {
              date: data.forecast.forecastday[4].date,
              maxTemp: data.forecast.forecastday[4].day.maxtemp_c,
              minTemp: data.forecast.forecastday[4].day.mintemp_c,
              avgTemp: data.forecast.forecastday[4].day.avgtemp_c,
              icon: data.forecast.forecastday[4].day.condition.icon,
              windSpeed: data.forecast.forecastday[4].day.maxwind_kph,
            },
          ],
        };
        setMeteoData(formattedMeteoData);
        setChargement(false);
      })
      .catch((erreur) => {
        setErreur(erreur.message);
        setChargement(false);
      });
  };

  // Utiliser la fonction fetchWeather dans useEffect
  useEffect(() => {
    fetchWeather(location);
  }, [location]);

  // Gestionnaire de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setLocation(searchInput);
      setSearchInput("");
    }
  };

  function handleChangeDay(day) {
    setJour(day);
  }

  if (chargement) return <div>Chargement en cours...</div>;
  if (erreur) return <div>Erreur: {erreur}</div>;

  return (
    <>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Rechercher une ville..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Rechercher
        </button>
      </form>
      <WeatherInfo
        location={meteoData.location}
        meteoDuJour={meteoData.meteoParJour[jour]}
      />
      <WeatherDays handleChangeDay={handleChangeDay}/>
    </>
  );
}

export default Weather;
