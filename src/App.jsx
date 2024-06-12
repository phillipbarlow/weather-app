import { useState } from 'react'

import './App.css'

function App() {
  return (
    <div className="app">
      <input type="text" placeholder='Enter location'/>
      <div className="container">
        <div className="top">
          <div className="temp">
            <p>0C</p>
          </div>
          <div className="location">
            <p>Leeds</p>
          </div>
          <div className="time">
            <p>10:00</p>
          </div>
          <div className="condition">
            <p>Cloudy</p>
          </div>
        </div>
        <div className="bottom">
          <div className="windSpeed">
            <p>0 MPH</p>
          </div>
          <div className="feelsLike">
            <p> Feels like 10C</p>
          </div>
          <div className="chanceOfRain">
            <p>10%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
