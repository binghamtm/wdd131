const currentYear = document.querySelector("#current-year");
const lastModified = document.querySelector("#lastModified")
const windChillHTML = document.querySelector('#wind-chill');

const today = new Date();

currentYear.innerHTML = today.getFullYear();
lastModified.innerHTML = document.lastModified;

const temperature = 9;
const windSpeed = 5;
let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed);
    windChill = Math.round(windChill * 10) / 10;
}

windChillHTML.innerText = `${windChill}°C`;









function calculateWindChill(temperature, windSpeed) {
    return 13.12 + (0.6215 * temperature) - (11.37 * windSpeed**0.16) + (0.3965 * temperature * windSpeed**0.16);
}

