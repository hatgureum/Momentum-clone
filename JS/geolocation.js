const API_KEY = "be2a412c2f967ea2698f655e7236c3a8";
let city = document.querySelector("#city");
const weather = document.querySelector("#weather");
function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      city.innerText = data.name;
      weather.innerText = `${Math.round(data.main.temp)}℃, ${
        data.weather[0].main
      }`;
    })
  );
}

function onGeoFail() {
  alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoFail);
