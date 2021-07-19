
import React from 'react'
import { render } from 'react-dom';
import { APIkey } from './frontend/apiKey';
export const Weather = () => {
  
  let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  const request = new XMLHttpRequest();
  
  request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
      return JSON.parse(this.response).current 
      // debugger
    } else {
      console.log("error")
    }
  }
  request.onerror =function() {
    console.log('connectionError')
  }
  
  
  const fetch =(crd) => {
    console.log(crd)
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${crd.latitude}&lon=${crd.longitude}&exclude=&hourly&daily&alerts'}&appid=${APIkey}&units=imperial`
    
    // console.log(url)
    request.open('GET', url, true)
    request.send();
    
    console.log(request)
  }
  
  const success = (pos) => {
    let crd = pos.coords;
    fetch(crd);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  
  const weatherFormat = (jsn) => {
    let temp = Math.ceil(jsn.temp).toString()+ "° F";
    let sky = jsn.weather[0].description 
    let speed = "Winds @ " + jsn.wind_speed.toString()+ " mph" 
    return `${temp} with ${sky} and ${speed}`
  }
  
  
  const point = () => navigator.geolocation.getCurrentPosition(success, error, options)
  {/* <h1>{weatherFormat(point())}</h1> */}
  
  return (
    <div>
    </div>
  )
}


