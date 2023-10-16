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

var apiKey = "4b00c954dfbfed2f55f7d1b1f64163c9";


function fetchWeather() {
    fetch(
      "https://api.openweathermap.org/geo/1.0/direct?q=Austin&limit=5&appid=${apiKey}"
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  fetchWeather();
    