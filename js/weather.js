const API_KEY = "410da19f7d09f69c441ad47370ce5426";

function onGeoSucess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.name, data.weather[0].main);

      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");

      weather.innerText = `${data.weather[0].main} / ${data.main.temp} °C`;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("Can't find you, No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoSucess, onGeoError);
