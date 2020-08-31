const calculateDays = require('./calculateDays')

const currentWeatherURL = 'http://api.weatherbit.io/v2.0/current?'
const currentWeatherAPIKey = '094dafda6978431a91ffd7388991c8fe'
const futureWeatherURL ='https://api.weatherbit.io/v2.0/forecast/daily?'


const getWeatherForcast = async (cityLatitute,cityLongitute) => {
    const remainingDays = calculateDays.getRemainingDaysForTrip()
    console.log(remainingDays)
    if( remainingDays < 7 ) {
        const res = await fetch(`${currentWeatherURL}&lat=${cityLatitute}&lon=${cityLongitute}&key=${currentWeatherAPIKey}`)
        try {
            const weatherData = await res.json();
            return weatherData.data[0].app_temp;
        } catch (error) {
            console.log("There was an error with retrieving data from the Weather, error");
        }
    }
    else {
        const res = await fetch(`${futureWeatherURL}&lat=${cityLatitute}&lon=${cityLongitute}&key=${currentWeatherAPIKey}`)
        try {
            const weatherData = await res.json();
            console.log(weatherData)
            return weatherData.data[0].temp; 
        } catch (error) {
            console.log("There was an error with retrieving data from the Weather, error");
        }
    }
}

module.exports ={getWeatherForcast}
