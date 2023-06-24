function getWeather() {
    const apiKey = "e82598cd0f0612b8002f4755a8e00589"; // Replace with your OpenWeatherMap API key
    const cityInput = document.getElementById("cityInput");
    const cityName = cityInput.value;
    const weatherInfo = document.getElementById("weatherInfo");
    const wIcon= weatherIcon.querySelector("img");
    // Clear previous weather information
    weatherInfo.innerHTML = "";
    wIcon.innerHTML = "";
    // Make API request
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(data => {
        if (data.cod === "404") {
          weatherInfo.innerText = "City not found.";
        } else {
          const temperature = data.main.temp;
          const humidity = data.main.humidity;
          const description = data.weather[0].description;
          const id= data.weather[0].main;
          // Display weather information
          if (data.weather[0].main=="Clouds"){
            wIcon.src="images/clouds.png";
          }
          else if (data.weather[0].main=="Clear"){
            wIcon.src="images/clear.png";
          }
          else if (data.weather[0].main=="Snow"){
            wIcon.src="images/snow.png";
          }
          else if (data.weather[0].main=="Rain"){
            wIcon.src="images/rain.png";
          }
          else if (data.weather[0].main=="Drizzle"){
            wIcon.src="images/drizzle.png";
          }
          else if (data.weather[0].main=="Mist"){
            wIcon.src="images/mist.png";
          }
          const weatherHtml = `
            <p><strong>Weather in ${cityName}:</strong></p>
               
            <p>Temperature: ${temperature}°C</p>
            <p>Humidity: ${humidity}%</p>
            <p>Description: ${description}</p>
          `;
          
           
          
          weatherInfo.innerHTML = weatherHtml;
        }
      })
      .catch(error => {
        console.log("Error occurred while retrieving weather data.", error);
      });
      getMusic(id);
  }


  
  