const pixabayURL = 'https://pixabay.com/api/?'
const pixabayAPIKey = '18023770-1686678485031f56a56844441'

const getPhoto = async (newDestination, country) => {
    const res = await fetch(`${pixabayURL}key=${pixabayAPIKey}&q=${newDestination}&image_type=photo`);
    try {
        document.getElementById("current-result").classList.remove('hidden');
        const image = await res.json();
        console.log('IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIImage')
        document.getElementById("weather__icon").src = image.hits[0].webformatURL
        document.getElementById('trip-tittle').innerHTML = `My next trip: ${newDestination},${country}`;
    }
    catch {
        console.log("error", error);
    }

}

module.exports = { getPhoto }
