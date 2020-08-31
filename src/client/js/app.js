const { getWeatherForcast } = require("./weatherForecast");

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

const generateButton = document.getElementById('generate');
const city = document.getElementById('city')

generateButton.addEventListener('click', performAction);
function performAction() {
    const newDestination = city.value;
    getWeatherRequest(baseURL, newDestination, username)
        .then(function (data) {
            const cityLatitute = data.geonames[0].lat;
            const cityLongitute = data.geonames[0].lng;
            const country = data.geonames[0].countryName;
            getWeatherForcast(cityLatitute,cityLongitute)
        })
};

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

module.exports = { performAction, getWeatherRequest }
