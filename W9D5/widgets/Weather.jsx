
import React from 'react'
const APIkey = 'a65d7e4185eee817c68338cd944350e3'
export const Weather = () => {
  
  let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  const request = new XMLHttpRequest();
  
  request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
      let weather = this.response.json
      debugger
      console.log(weather)
    } else {
      console.log("error")
    }
  }
  request.onerror =function() {
    console.log('connectionError')
  }
  
  
  const fetch =(crd) => {
    console.log(crd)
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${crd.latitude}&lon=${crd.longitude}&exclude={part}&appid=${APIkey}`
    
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
  
  const point = navigator.geolocation.getCurrentPosition(success, error, options);
  
  return (
    <div>
      {point}
    </div>
  )
}

