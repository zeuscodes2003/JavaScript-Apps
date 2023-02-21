
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

getWeatherData =async(city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FUll_URL=`${URL}?q=${city}&appid=${API_KEY}&units=imperial`
  const response=await fetch(FUll_URL)
  const json=await response.json()
  return json;
    
  
}


const searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city).then(data=>showWeatherData(data)).catch(err=>{
    console.log(err)
    console.log('something Happend')
  })
}


const showWeatherData = (weatherData) => {
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText = weatherData.weather[0].main;
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;
  
  
  
}

