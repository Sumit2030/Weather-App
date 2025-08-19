const apiKey = "0659f50b9a1f4ec3e776d439c0ad416d"; // Replace with your OpenWeatherMap API key

document.getElementById("search").addEventListener("click", async () => {
  const city = document.getElementById("city").value;
  if (!city) {
    document.getElementById("result").innerHTML = "<p>Please enter a city</p>";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    document.getElementById("result").innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>🌡️ Temp: ${data.main.temp} °C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>💨 Wind: ${data.wind.speed} m/s</p>
      <p>🌥️ ${data.weather[0].description}</p>
    `;
  } catch (error) {
    document.getElementById("result").innerHTML = `<p>${error.message}</p>`;
  }
});
