// global selectors
const formEl = document.querySelector("#search-form");
const searchInputEl = document. querySelector("#search-input");
const cityItemEl = document.querySelector('#city-list');
const cityNameEl = document.querySelector("#name");
const dateEl = document.querySelector("#date");
const weatherIconEl = document.querySelector("#icon");
const temperatureEl = document.querySelector("#temperature");
const windEl = document.querySelector("#wind");
const humidityEl = document.querySelector("#humidity");
const uvIndexEl = document.querySelector("#uv");

const apiKey = ('45f469664e37c781b87272989d626c9a');


// show previously searched cities in list


const createFormHandler = function(event) {
    event.preventDefault();
     var cityInput = document.querySelector("input[name='city-name']").value;

     

     var listItemEl = document.createElement("li");
     listItemEl.className = "city-item";

     
     var cityListEl = document.createElement("div");
     cityListEl.className = "search-list";

     

     cityListEl.innerHTML = "h3 class= 'city-name'>" + cityInput + "</h3>";
     listItemEl.appendChild(cityListEl);


};



// request data from api in specific city (included in http..here I used Austin, Tx)

function getWeatherData(city) {
    fetch (`https://api.openweathermap.org/data/2.5/forecast?q=Austin&appid=${apiKey}`)
    .then(function(resp) {return resp.json()})
    .then(function(data) {
        console.log(data);
    })
    .catch(function() {

    });
}


// display weather data on page







window.onload = function() {
    getWeatherData();
}



 formEl.addEventListener("submit", createFormHandler);
