import React, { useEffect, useState } from 'react';
import './App.css';
import CityButtons from './components/CityButtons';
import { cities } from "./utils";

// Get the user location (longitude, latitude)[x]
// Call the API of OpenWeatherMap.org, using the longitude and latitude we just get.[x]
// Receive the Response in JSON Format. Store the data in the state of our component.[x]
// Render the data for User. [x]

function App() {

  

  const [weather, setWeather] = useState(false)
  const [error, setError] = useState(false)
  
  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      
    });
  }

  useEffect(() => {
    getCurrentPosition();
  }, []);

  const getWeather = async (lat, lon) => {
    try {
      const apiKey = "5dd96461cd4a460e26935cdcdf65919a"
      const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${apiKey}&units=metric`
      const response = await fetch(url)
      const data = await response.json()
      console.log('datadata', data)
      setWeather(data)

    } catch (error) {
      setError(true)
    }
  }

  return (
    <div className="container-fluid text-white my-auto">
      <div className="container mx-auto my-4 py-4">
        <div className="row justify-content-center text-center">
          {/* <h1 className="col-12 display-4 my-2 py-3 app-title">
            Awesome Weather App
            </h1> */}
            <div className="info-wrap">
          {!error && 
          <div className="info">
            <h2 className="col-12"> {weather && weather.name}</h2>
            <h3 className="col-12 text-danger">Current Temperature: {weather && weather.main.temp}°C </h3>
            <h4>Max temp:{weather && weather.main.temp_max}°C  Min temp: {weather && weather.main.temp_min}°C </h4>
            <h3 className="col-12">{weather && weather.weather[0].description}</h3>
            <img src={`https://openweathermap.org/img/wn/${weather && weather.weather[0].icon}@2x.png`} alt="weather icon"></img>
            <h2 className="col-12"> 3 Day Forecast</h2>
            <h6>Coming Soon</h6>
            <div className="sidebar"> 
             <CityButtons getWeather={getWeather} /> 
             {/* Add A Button That Takes You Back To GeoLocated Result  */}
            </div>
          </div>

          }
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;



// const [forecast, setForecast] = useState(false)
// getForecast(position.coords.latitude, position.coords.longitude);


 // const getForecast = async (lat, lon) => {
  //   const apiKey = "5dd96461cd4a460e26935cdcdf65919a"
  //   const url = `api.openweathermap.org/data/2.5/forecast??lat=${lat}&lon=${lon}&APPID=${apiKey}&units=metric`
  //   const response = await fetch(url)
  //   const forecastData = await response.json()
  //   console.log('forecastdata', forecastData)
  //   setForecast(forecastData)

  //}