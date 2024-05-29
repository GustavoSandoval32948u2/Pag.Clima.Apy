document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '1d8dc8323ad1e77e020b54e6bed1a95f'; // Reemplaza con tu clave API
    const cities = ['London', 'New York', 'Tokyo', 'Paris', 'Sydney'];
    const worldWeatherElement = document.getElementById('world-weather');

    cities.forEach(city => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1d8dc8323ad1e77e020b54e6bed1a95f&units=metric&lang=es`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error fetching weather data for ${city}`);
                }
                return response.json();
            })
            .then(data => {
                const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
                const weatherInfo = `
                    <div class="city-weather">
                        <h3>${data.name}</h3>
                        <p>Temperatura: ${data.main.temp}°C</p>
                        <p>Clima: ${data.weather[0].description}</p>
                        <img src="${iconUrl}" alt="Icono del clima">
                    </div>
                `;
                worldWeatherElement.innerHTML += weatherInfo;
            })
            .catch(error => {
                console.error('Error fetching the weather data:', error);
                const errorInfo = `
                    <div class="city-weather">
                        <h3>${city}</h3>
                        <p>No se pudo obtener el clima</p>
                    </div>
                `;
                worldWeatherElement.innerHTML += errorInfo;
            });
    });
});
