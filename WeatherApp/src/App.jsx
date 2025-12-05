import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './App.css'

const App = () => {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState(null)
  async function handleClick() 
  {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'API'}`)
    console.log(res.data)
    setWeather(res.data)
  }
  return (
    <div>
      <input type="text" placeholder='Enter your City' value ={city} onChange={e => setCity(e.target.value)} />
      <button onClick={handleClick}>Search</button>
      <div>
        <h2>Name: {weather?.name}</h2>
        <h2>Temperature: {weather ? (weather.main.temp - 273.15).toFixed(2) : ""} °C</h2>
        <h2>Humidity: {weather?.main.humidity} %</h2>
        <h2>Weather: {weather?.weather[0].main}</h2>
      </div>
    </div>
  )
}

export default App
