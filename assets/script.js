



// selector for search form
var searchFormEl = document.querySelector("#search-form");
var formSubmitHandler = function(event) {
    event.preventDefault();
    console.log(event);
};

searchFormEl.addEventListener("submit", formSubmitHandler);


