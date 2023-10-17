/* GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city 

*/

var apiKey = `4b00c954dfbfed2f55f7d1b1f64163c9`;
var currWeather = document.querySelector("#currWeather");

function fetchWeather() {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=Austin&limit=5&appid=${apiKey}`    
      )
      .then((response) => response.json())
      .then((data) =>{
         console.log(data)
         console.log(data[0])
         console.log(data[0].lat)
         console.log(data[0].lon)
         var currentLat = data[0].lat
         var currentLon = data[0].lon
         fetchLatLon(currentLat, currentLon)
        });
  }
  fetchWeather();

  function fetchLatLon(lat, lon) {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`
    )
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      var currForecast = []
      for (let i = 0; i < data.list.length; i+=7) {
        console.log(data.list[i])
     currForecast.push(data.list[i])
        
      }
      console.log(currForecast)
      var currElh1 = document.createElement("h1")
      currElh1.textContent = data.city.name
      var currTemp = document.createElement("p")
      currTemp.textContent = "Temp: "+currForecast[0].main.temp + "°"
      var currImg = document.createElement("img")
      currImg.setAttribute('src', "https://openweathermap.org/img/wn/"+currForecast[0].weather[0].icon+"@2x.png")
      var currWind = document.createElement("p")
      currWind.textContent = "wind: "+ currForecast[0].wind.speed + " MPH"
      var currHumid = document.createElement("p")
      currHumid.textContent = "Humidity: " + currForecast[0].main.humidity + "%"
      
      currWeather.appendChild(currElh1)
      currWeather.appendChild(currImg)
      currWeather.appendChild(currTemp)
      currWeather.appendChild(currWind)
      currWeather.appendChild(currHumid)
   
   
    });
  } 





    