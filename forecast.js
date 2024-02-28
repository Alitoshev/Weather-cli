city.focus();

function getWeather() {
  const KEY = "a5dead73651182307ee6c3def6271c0f";
  const city = document.getElementById("city").value;
  if (!city) {
    alert("Please enter a city");
    return;
  }
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${KEY}`;

  fetch(currentWeatherUrl)
    .then((response) => response.json())
    .then((data) => {
      displayWeather(data);
    })
    .catch((error) => {
      console.error("Error fetching current weather data:, error");
      alert("Error fetching current weather data. Please try again.");
      console.log(error);
    });
  fetch(forecastUrl)
    .then((response) => response.json())
    .then((data) => {
      displayHourlyForecast(data.list);
    })
    .catch((error) => {
      console.error("Error fetching current weather data:, error");
      alert("Error fetching current weather data. Please try again.");
      console.log(error);
    });
}
