const urlBase = `https://api.openweathermap.org/data/2.5/weather`
const API_KEY = 'd92d849609007e5c07ff7ee2af9848ca'
const diffKelvin = 273.15

document.getElementById('searchBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (city) {
        fetchWeather(city)
    } else {
        alert('Ingrese una ciudad valida')
    }
})

function fetchWeather(city) {
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
    .then(data => data.json())
    .then(data => showWeatherData(data))
}

function showWeatherData(data) {
    const divResponse = document.getElementById('response-data')
    divResponse.innerHTML = " "

    const cityName = data.name
    const countryName = data.sys.country
    const temp = data.main.temp
    const humidity = data.main.humidity
    const description = data.weather[0].description
    const icon = data.weather[0].icon

    const cityInfo = document.createElement('h2')
    cityInfo.textContent = `${cityName}, ${countryName}`
    
    const tempInfo = document.createElement('p')
    tempInfo.textContent = `La temperatura es de: ${Math.floor(temp - diffKelvin )}°C`

    const humidityInfo = document.createElement('p')
    humidityInfo.textContent = `La humedad es de ${humidity}%`

    const iconInfo = document.createElement('img')
    iconInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`

    const descriptionInfo = document.createElement('p')
    descriptionInfo.textContent = `La descripcion del clima es ${description}`
    
    divResponse.appendChild(cityInfo)
    divResponse.appendChild(tempInfo)
    divResponse.appendChild(humidityInfo)
    divResponse.appendChild(iconInfo)
    divResponse.appendChild(descriptionInfo)
}