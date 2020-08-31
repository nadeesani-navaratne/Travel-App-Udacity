const startDate = document.getElementById('start-date')

const getRemainingDaysForTrip = () => {

    const startDay = new Date(startDate.value);
    const today = new Date();
    const duration =  Math.floor(startDay - today);
    const remainingDays = Math.floor(duration / (1000 * 60 * 60 * 24) + 1);
    console.log(remainingDays);
    document.getElementById('remaining-days').innerHTML = `Remaining Days: ${remainingDays}`;
    return remainingDays;
}

module.exports ={getRemainingDaysForTrip}