const startDate = document.getElementById('start-date')
const endDate = document.getElementById('end-date')

const getRemainingDaysForTrip = () => {
    const startDay = new Date(startDate.value);
    const today = new Date();
    const duration = Math.floor(startDay - today);
    const remainingDays = Math.floor(duration / (1000 * 60 * 60 * 24) + 1);
    console.log(remainingDays);
    document.getElementById('remaining-days').innerHTML = `Remaining Days: ${remainingDays}`;
    return remainingDays;
}

const duration = () => {
    const startDay = new Date(startDate.value);
    const endDay = new Date(endDate.value);
    const duration = Math.floor(endDay - startDay);
    const durationDays = Math.floor(duration / (1000 * 60 * 60 * 24) + 1);
    console.log(durationDays);
    document.getElementById('duration').innerHTML = `Duration: ${durationDays}`;
    return durationDays;


}

module.exports = { getRemainingDaysForTrip, duration }