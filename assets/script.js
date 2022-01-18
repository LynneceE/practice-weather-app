// global selectors
var searchFormEl = document.querySelector("#search-form");
var searchInputEl = document. querySelector("#search-input");
var cityNameEl = document.querySelector("#name");
var dateEl = document.querySelector("#date");
var weatherIconEl = document.querySelector("#icon");
var temperatureEl = document.querySelector("#temperature");
var windEl = document.querySelector("#wind");
var humidityEl = document.querySelector("#humidity");
var uvIndexEl = document.querySelector("#uv");

var apiKey = ('45f469664e37c781b87272989d626c9a');


var formSubmitHandler = function(event) {
    event.preventDefault();

    // get value from input
    var city = searchInputEl.value.trim();

    if (city) {
        getCityWeather(city);
    };

// function for weather api

var getCityWeather = function(city) {
    
    var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey} `; 

    // make get request to url

    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            console.log(response);
            response.json().then(function(data) {
                console.log(data);
                displayCityData(data, city);
            });
        }  else {
            alert("Error: " + response.statusText);
        }
    }).catch(function(error) {
        alert("Unable to display weather");
    });

};





};

searchFormEl.addEventListener('submit', formSubmitHandler);
