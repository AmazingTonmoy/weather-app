const loadWeather = async (inputValue) => {
  const api_key = "a8ed144d535cc9f0add2a09ff34b5168";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=${api_key}`;
  const res = await fetch(url);
  const data = await res.json();
  weatherDisplay(data);
};

const weatherDisplay = (weatherData) => {
  const noFound = document.getElementById("no-found");
  const cityName = document.getElementById("city-name");
  const temperature = document.getElementById("temperature");
  const situation = document.getElementById("situa");

  if (weatherData.cod === "404") {
    noFound.classList.remove("d-none");
    cityName.classList.add("d-none");
    temperature.classList.add("d-none");
    situation.classList.add("d-none");
  } else {
    noFound.classList.add("d-none");
    cityName.classList.remove("d-none");
    temperature.classList.remove("d-none");
    situation.classList.remove("d-none");
  }
  // showing city name

  cityName.innerText = `${weatherData.name}, ${weatherData.sys.country} `;

  //  showing tempature
  const temp = weatherData.main.temp;
  temperature.innerHTML = `${Math.round(temp)}&#8451`;

  //   showing situation

  situation.innerText = weatherData.weather[0].main;
};

// button click

document.getElementById("search-btn").addEventListener("click", function () {
  const inputName = document.getElementById("input-city-name");
  const inputValue = inputName.value;
  if (inputValue === "") {
    alert("Please Input Name");
  } else {
    loadWeather(inputValue);
    inputName.value = "";
  }
});

loadWeather("kushtia");
