import React, { useState } from 'react'
import './Weather.css'
import '../App.css';



function Weather() {

  const apiKey = '7507117e6ca3c85b0aecd7b053f9f778'
  const [weatherData, setWeatherData] = useState([{}])
  const [city, setcity] = useState('')

  const getWeather = async(event) => {
    if(event.key === 'Enter'){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      setWeatherData(data)
      setcity("")
    })
    }
  }

  function newcity(e) {
    setcity(e.target.value)
  }





  return (
    <div className='weather'>
      <div className='weather-input'>
        <input
        className='text'
        type='text'
        placeholder='Search'
        onChange={newcity}
        value={city}
        onKeyPress={getWeather}
        />


        {typeof weatherData.main === 'undefined' ? (
          <div>
          </div>
        ): (
          <>
          <div>
            <p className='city_name'>{weatherData.name}</p>
            <p className='city_temp'>{Math.floor(Math.round(weatherData.main.temp -273.15))}°C</p>
            <p className='city_feel'>{weatherData.weather[0].description}</p>
            <hr className='hori'/>
          </div>

          <div className='city_info'>
            <h3 className='max_text'> Max Temp </h3>
            <p className='max_temp'>{Math.floor(Math.round(weatherData.main.temp_max -273.15))}°C </p>
            <h3 className='min_text'>Min Temp </h3>
            <p className='min_temp'>{Math.floor(Math.round(weatherData.main.temp_min -273.15))}°C </p>
          </div>

          <div className='other_info'>
            <h3 className='humid'>Humidity</h3>
            <p className='humid_data'>{weatherData.main.humidity}%</p>
            <h3 className='wind'>Wind</h3>
            <p className='wind_info'>Wind Speed : {weatherData.wind.speed} <br/>Wind Direction : {weatherData.wind.deg}° </p>
            <h3 className='pressure'>Pressure </h3> <br /> <p className='pressure_info'>{weatherData.main.pressure}</p> 
          </div>
          </>
        )}

        {weatherData.cod === '404' ? (
          <p>City not found</p>
        ): (
          <>
          </>
        )}

        

      </div>


    </div>

  )
 } 





  


export default Weather