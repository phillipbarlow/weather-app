import axios from 'axios';

export const getWeatherInfo = (city)=>{
      const url = `http://api.weatherapi.com/v1/current.json?key=726529d89b2a477d9df204208241506&q=${city}`;
      return axios
        .get(url)
          .then((result)=>{
            // console.log(result.data.location)
            return result.data
          })
          .catch((error)=>{
            console.log(error);
            throw error;
          })
}