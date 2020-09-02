const { getWeatherForcast } = require("./weatherForecast");
const { getPhoto } = require("./getPhoto");
const { duration } = require("./calculateDays");
const removeAction = require('./removeTrip')


/* Global Variables */
const baseURL = 'http://api.geonames.org/searchJSON?q=';
const username = 'nadeesani'

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
console.log(newDate);

/*
Adding event listner for generate button.
Once generate button clicked will send an api call to fetch data from the  geonames API.
*/
const removeTripButton = document.getElementById('remove');
const generateButton = document.getElementById('generate');
const city = document.getElementById('city');

window.onload = function () {
    if (generateButton != null) {
        generateButton.addEventListener("click", performAction);
    }
}

function performAction() {
    const newDestination = city.value;
    getWeatherRequest(baseURL, newDestination, username)
        .then(function (data) {
            const cityLatitute = data.geonames[0].lat;
            const cityLongitute = data.geonames[0].lng;
            const country = data.geonames[0].countryName;
            getWeatherForcast(cityLatitute, cityLongitute);
            getPhoto(newDestination, country);
            duration()
        })
}

//Adding event litner to remove trip button
window.addEventListener('DOMContentLoaded', () => {
    if (removeTripButton != null) {
        removeTripButton.addEventListener("click", removeAction);
    }
});

removeAction.removeAction()



//Fetch data from geonames api
const getWeatherRequest = async (baseURL, newDestination, username) => {
    const urlToFetch = `${baseURL}${newDestination}&maxRows=10&username=${username}`;
    const request = await fetch(urlToFetch);

    try {
        // Transform into JSON
        const data = await request.json();
        return (data);
    }
    catch (error) {
        console.log("error", error);
    }
}

//module.exports = { performAction, getWeatherRequest, getWeatherForcast, getPhoto, removeTrip }
module.exports = { performAction, getWeatherRequest, getWeatherForcast, getPhoto, removeAction }
