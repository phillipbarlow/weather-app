import React,{ useState} from 'react'
import './App.css';
import {getWeatherInfo} from './utils/api'
function App() {
  const [input,setInput] = useState('');
  const [city,setCity] = useState('');
  const [error, setError] = useState(null);
  function handleRequest(event){
          if(event.key === 'Enter'){
            event.preventDefault();
            return getWeatherInfo(input)
              .then((result)=>{
                setCity(result);
                setError(null);
                console.log('city updated: ', result.data)
              })
              .catch((error)=>{
                if (error.response && error.response.status === 404) {
                  setError('City not found');
                } else {
                  setError('An error occurred. Please try again.');
                }
                setCity('');
              })
            }
  }
  return (
    <div className="app">
      <input type="text" placeholder='Enter location' onChange={(e)=>setInput(e.target.value)} onKeyDown={handleRequest}/>
      <div className="container">
        <div className="top">
          <div className="temp">
          {city && <p>{city.current.temp_c} C</p>}
          </div>
          <div className="location">
            {console.log('city updated: ', city)}
            {error ? <p>{error}</p>:city && <p>{city.location.name}</p>}
          </div>
          <div className="time">
          {city && <p>{city.location.localtime}</p>}
          </div>
          <div className="condition">
          {city && <p>{city.current.condition.text}</p>}
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
