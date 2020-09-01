const pixabayURL = 'https://pixabay.com/api/?'
const pixabayAPIKey = '18023770-1686678485031f56a56844441'
//const images = require('./../media/skies.jpg')

//Fetching a photo of the city using pixabay api
const getPhoto = async (newDestination, country) => {
    const res = await fetch(`${pixabayURL}key=${pixabayAPIKey}&q=${newDestination}&image_type=photo`);
    try {
        document.getElementById("current-result").classList.remove('hidden');
        const image = await res.json();
        if (image.hits[0].webformatURL != null) {
            document.getElementById("weather__icon").src = image.hits[0].webformatURL
        }
        else {
            document.getElementById("weather__icon").src = "https://pixabay.com/get/55e6d54a4254af14f1dc846096293f7e173cd9e2534c704c7c2772d69f4ac35e_640.jpg"
        }

        document.getElementById('trip-tittle').innerHTML = `My next trip: ${newDestination},${country}`;
    }
    catch {
        console.log("error", error);
    }
}

module.exports = { getPhoto }
