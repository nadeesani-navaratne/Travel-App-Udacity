const removeTripButton = document.getElementById('remove');

const clearTripDetails = () => {
    window.onload = () => {
        if (removeTripButton != null) {
            removeTripButton.addEventListener("click", removeAction);


            const removeAction = () => {
                document.getElementById('city').value = "";
                document.getElementById('start-date').value = "";
                document.getElementById('end-date').value = "";
                document.getElementById("weather__icon").src = "";
                document.getElementById("current-result").classList.add('hidden');

            }
        }
    }
}




module.exports = { clearTripDetails }
