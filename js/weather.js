function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=773e5abdd57a5c3eccc8165db27b49e1&units=metric`;

  fetch(URL).then((res) =>
    res.json().then((data) => {
      const weather = document.querySelector("#weather div:first-child");
      const location = document.querySelector("#weather div:last-child");
      weather.innerText = `${data.weather[0].main}, ${data.main.temp}°C`;
      location.innerText = data.name;
    })
  );
}

function onGeoError() {
  alert("Can't use your location, no weather will be shown.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
