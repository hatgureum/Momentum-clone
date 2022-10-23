const API_KEY = "be2a412c2f967ea2698f655e7236c3a8";
const LOCALSTORAGE_KEY_GEO = "geolocation";

const geo_box = document.querySelector(".geo");
const city = document.querySelector(".geo__city");
const weather = document.querySelector(".geo__weather");
const btn_delete = document.querySelector(".geo__delete");

const geo = {
  latitude: 0,
  longitude: 0,
};

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  paintWeather(lat, lon);

  geo.latitude = lat;
  geo.longitude = lon;
  saveGeo();
}

function paintWeather(lat, lon) {
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

function saveGeo() {
  localStorage.setItem(LOCALSTORAGE_KEY_GEO, JSON.stringify(geo));
}

function onGeoFail() {
  alert("Can't find your location.");
}

function removeGeo() {
  localStorage.removeItem(LOCALSTORAGE_KEY_GEO);
  navigator.geolocation.getCurrentPosition(onGeoOK, onGeoFail);
}

function onMouseEnterBtnDelete() {
  btn_delete.classList.remove("hidden");
}

function onMouseLeaveBtnDelete() {
  btn_delete.classList.add("hidden");
}

const parsedGeo = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY_GEO));
if (parsedGeo) {
  paintWeather(parsedGeo.latitude, parsedGeo.longitude);
} else {
  navigator.geolocation.getCurrentPosition(onGeoOK, onGeoFail);
}

btn_delete.addEventListener("click", removeGeo);
geo_box.addEventListener("mouseenter", onMouseEnterBtnDelete);
geo_box.addEventListener("mouseleave", onMouseLeaveBtnDelete);
