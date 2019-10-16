import React from 'react'
import { cities } from "../utils";

export default  function renderCities(props) {
        return cities.map(city => {
        return (
        <button
          key={city.latitude}
          className="city-button btn"
          onClick={() => props.getWeather(city.latitude, city.longitude)}
           >
          {city.name} 
        
        </button>
      );
    });
  }
