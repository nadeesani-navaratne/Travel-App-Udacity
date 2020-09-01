const removeTripButton = document.getElementById('remove');

/* const cityName = document.getElementById('city').value;
console.log(cityName) */
const removeAction = () => {
    const cityInput = document.getElementById('city');
    const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');
    const iconSource = document.getElementById("weather__icon");
    const currentResultClass = document.getElementById("current-result")


    const inputVal = "";

    if (cityInput) {
        cityInput.value = "";
    }
    if (startDateInput) {
        startDateInput.value = inputVal;
    }
    if (endDateInput) {
        endDateInput.value = inputVal;
    }
    if (iconSource) {
        iconSource.src = inputVal;
    }
    if (currentResultClass) {
        currentResultClass.classList.add('hidden')
    }
}
module.exports = { removeAction }
