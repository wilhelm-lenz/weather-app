// ==============================
//     Fetch current weather
// ==============================

const apiKey = "6e1aed96f2f25e9492558352453387af";

const weatherCardsSectionElement = document.querySelector(
  ".section-weather-cards-wrapper"
);

let currentWeatherData = {};
let cityName = "";
let countryCode = "";

const getCoordinatesOfUserLocation = () => {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let coordinates = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          fetchWeatherDataOfUserLocation(
            coordinates.latitude,
            coordinates.longitude
          ).then(() => resolve());
        },
        (error) => {
          console.error("Fehler bei der Standortabfrage:", error);
          reject(error);
        }
      );
    } else {
      console.log("Geolocation wird von diesem Browser nicht unterstützt.");
      reject(new Error("Geolocation nicht unterstützt"));
    }
  });
};

const fetchWeatherDataOfUserLocation = (latitudeParam, longitudeParam) => {
  return new Promise((resolve, reject) => {
    const latitude = latitudeParam;
    const longitude = longitudeParam;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Hier ist was schief gelaufen");
        }
      })
      .then((userLocationObj) => {
        currentWeatherData = { ...userLocationObj };
        createWeatherCard(currentWeatherData);
        resolve(); // Resolve the promise after successful data fetch
      })
      .catch((error) => {
        console.log(error);
        reject(error); // Reject the promise in case of an error
      });
  });
};

const fetchWeatherData = (cityNameParam, langParam) => {
  cityName = cityNameParam;
  langCode = langParam;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&lang=de;&appid=${apiKey}`
  )
    .then((response) => {
      if (response.ok) {
        searchErrorOutput.textContent = "";
        return response.json();
      } else {
        searchErrorOutput.textContent = "Please insert a valid city.";
        throw new Error("Hier ist was schief gelaufen");
      }
    })
    .then((fixedLocationData) => {
      currentWeatherData = { ...fixedLocationData };
      createWeatherCard(currentWeatherData);
    })
    .catch((error) => console.log(error));
};

const createWeatherCard = (currentWeatherDataParam) => {
  const currentWeatherData = currentWeatherDataParam;

  // create needed HTML Elements
  const weatherCardArticleElement = document.createElement("article");
  const weatherCardHeadlineH2Element = document.createElement("h2");
  const weatherCardDegreeWrapperDivElement = document.createElement("div");
  const weatherCardIconImgElement = document.createElement("img");
  const weatherCardDegreeH3Element = document.createElement("h3");
  const weatherCardDescriptionParagraphElement = document.createElement("p");
  const weatherCardTimestampParagraphElement = document.createElement("p");
  const weatherCardTimestampAnchorElement = document.createElement("a");
  const weatherCardAdditionalDataWrapperElement = document.createElement("div");
  const weatherCardAdditionalDataPropElement1 = document.createElement("p");
  const weatherCardAdditionalDataValueElement1 = document.createElement("p");
  const weatherCardAdditionalDataPropElement2 = document.createElement("p");
  const weatherCardAdditionalDataValueElement2 = document.createElement("p");
  const weatherCardAdditionalDataPropElement3 = document.createElement("p");
  const weatherCardAdditionalDataValueElement3 = document.createElement("p");
  const weatherCardAdditionalDataPropElement4 = document.createElement("p");
  const weatherCardAdditionalDataValueElement4 = document.createElement("p");
  const weatherCardAdditionalDataPropElement5 = document.createElement("p");
  const weatherCardAdditionalDataValueElement5 = document.createElement("p");
  const weatherCardAdditionalDataPropElement6 = document.createElement("p");
  const weatherCardAdditionalDataValueElement6 = document.createElement("p");
  const weatherCardAdditionalDataPropElement7 = document.createElement("p");
  const weatherCardAdditionalDataValueElement7 = document.createElement("p");
  const weatherCardAdditionalDataPropElement8 = document.createElement("p");
  const weatherCardAdditionalDataValueElement8 = document.createElement("p");

  // Added class to HTML Elements
  weatherCardArticleElement.classList.add("weather-card");
  weatherCardHeadlineH2Element.classList.add("weather-card-headline");
  weatherCardDegreeWrapperDivElement.classList.add(
    "weather-card-degree-wrapper"
  );
  weatherCardIconImgElement.classList.add("weather-card-icon");
  weatherCardDegreeH3Element.classList.add("weather-card-degree");
  weatherCardDescriptionParagraphElement.classList.add(
    "weather-card-description"
  );
  weatherCardTimestampParagraphElement.classList.add(
    "weather-card-current-timestamp"
  );
  weatherCardAdditionalDataWrapperElement.classList.add(
    "weather-card-add-data-wrapper"
  );
  weatherCardAdditionalDataPropElement1.classList.add(
    "weather-card-add-data-prop"
  );
  weatherCardAdditionalDataValueElement1.classList.add(
    "weather-card-add-data-value"
  );
  weatherCardAdditionalDataPropElement2.classList.add(
    "weather-card-add-data-prop"
  );
  weatherCardAdditionalDataValueElement2.classList.add(
    "weather-card-add-data-value"
  );
  weatherCardAdditionalDataPropElement3.classList.add(
    "weather-card-add-data-prop"
  );
  weatherCardAdditionalDataValueElement3.classList.add(
    "weather-card-add-data-value"
  );
  weatherCardAdditionalDataPropElement4.classList.add(
    "weather-card-add-data-prop"
  );
  weatherCardAdditionalDataValueElement4.classList.add(
    "weather-card-add-data-value"
  );
  weatherCardAdditionalDataPropElement5.classList.add(
    "weather-card-add-data-prop"
  );
  weatherCardAdditionalDataValueElement5.classList.add(
    "weather-card-add-data-value"
  );
  weatherCardAdditionalDataPropElement6.classList.add(
    "weather-card-add-data-prop"
  );
  weatherCardAdditionalDataValueElement6.classList.add(
    "weather-card-add-data-value"
  );
  weatherCardAdditionalDataPropElement7.classList.add(
    "weather-card-add-data-prop"
  );
  weatherCardAdditionalDataValueElement7.classList.add(
    "weather-card-add-data-value"
  );
  weatherCardAdditionalDataPropElement8.classList.add(
    "weather-card-add-data-prop"
  );
  weatherCardAdditionalDataValueElement8.classList.add(
    "weather-card-add-data-value"
  );
  weatherCardTimestampAnchorElement.classList.add(
    "timestamp-wrong-question-link"
  );

  // set Attributes to HTML Elements
  weatherCardIconImgElement.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}@2x.png`
  );
  weatherCardIconImgElement.setAttribute("alt", "");
  weatherCardTimestampAnchorElement.setAttribute("href", "#");

  // create Date Informations
  const date = new Date();
  let currentUTCHour = date.getUTCHours();
  let currentHour = date.getHours();
  let currentMinutes = date.getMinutes();
  const currentDay = date.getDate();
  const currentMonthName = date.toLocaleString("default", { month: "short" });
  const currentFullYear = date.getFullYear();
  const sunriseTime = new Date(currentWeatherData.sys.sunrise * 1000);
  const sunriseHours = sunriseTime.getUTCHours();
  const sunriseMinutes = sunriseTime.getUTCMinutes();
  const sunsetTime = new Date(currentWeatherData.sys.sunset * 1000);
  const sunsetHours = sunsetTime.getUTCHours();
  const sunsetMinutes = sunsetTime.getUTCMinutes();

  // get wind Informations
  const windDirection = getWindDirection(currentWeatherData.wind.deg);
  const windDescription = getWindDescription(currentWeatherData.wind.speed);

  // Set content to HTML Elements
  weatherCardHeadlineH2Element.textContent = `Weather in ${currentWeatherData.name}, ${currentWeatherData.sys.country}`;
  weatherCardDegreeH3Element.textContent = `${(
    currentWeatherData.main.temp - 273.15
  ).toFixed(1)} °C`;
  weatherCardDescriptionParagraphElement.textContent =
    currentWeatherData.weather[0].description;
  weatherCardTimestampParagraphElement.textContent = `Optained at ${
    currentHour < 10 ? "0" + currentHour : currentHour
  }:${
    currentMinutes < 10 ? "0" + currentMinutes : currentMinutes
  }, ${currentDay} ${currentMonthName} ${currentFullYear} `;
  weatherCardTimestampAnchorElement.textContent = "Wrong data?";

  weatherCardAdditionalDataPropElement1.textContent = "Local Time";
  weatherCardAdditionalDataValueElement1.textContent = `${
    currentUTCHour < 10 ? "0" + currentUTCHour : currentUTCHour
  }:${currentMinutes}, ${currentDay} ${currentMonthName} ${currentFullYear} `;
  weatherCardAdditionalDataPropElement2.textContent = "Wind";
  weatherCardAdditionalDataValueElement2.textContent = `${windDescription} ${currentWeatherData.wind.speed} m/s ${windDirection} ( ${currentWeatherData.wind.deg} )`;
  weatherCardAdditionalDataPropElement3.textContent = "Cloudiness";
  weatherCardAdditionalDataValueElement3.textContent = `${currentWeatherData.weather[0].description}`;
  weatherCardAdditionalDataPropElement4.textContent = "Pressure";
  weatherCardAdditionalDataValueElement4.textContent = `${currentWeatherData.main.pressure} hPa`;
  weatherCardAdditionalDataPropElement5.textContent = "Humidity";
  weatherCardAdditionalDataValueElement5.textContent = `${currentWeatherData.main.humidity} %`;
  weatherCardAdditionalDataPropElement6.textContent = "Sunrise";
  weatherCardAdditionalDataValueElement6.textContent = `${sunriseHours}:${sunriseMinutes}`;
  weatherCardAdditionalDataPropElement7.textContent = "Sunset";
  weatherCardAdditionalDataValueElement7.textContent = `${sunsetHours}:${sunsetMinutes}`;
  weatherCardAdditionalDataPropElement8.textContent = "Geo coords";
  weatherCardAdditionalDataValueElement8.textContent = `[${currentWeatherData.coord.lon}, ${currentWeatherData.coord.lat}]`;

  // Append HTML Elements to Body
  weatherCardsSectionElement.append(weatherCardArticleElement);
  weatherCardTimestampParagraphElement.appendChild(
    weatherCardTimestampAnchorElement
  );

  weatherCardArticleElement.append(
    weatherCardHeadlineH2Element,
    weatherCardDegreeWrapperDivElement,
    weatherCardDescriptionParagraphElement,
    weatherCardTimestampParagraphElement,
    weatherCardAdditionalDataWrapperElement
  );

  weatherCardDegreeWrapperDivElement.append(
    weatherCardIconImgElement,
    weatherCardDegreeH3Element
  );

  weatherCardAdditionalDataWrapperElement.append(
    weatherCardAdditionalDataPropElement1,
    weatherCardAdditionalDataValueElement1,
    weatherCardAdditionalDataPropElement2,
    weatherCardAdditionalDataValueElement2,
    weatherCardAdditionalDataPropElement3,
    weatherCardAdditionalDataValueElement3,
    weatherCardAdditionalDataPropElement4,
    weatherCardAdditionalDataValueElement4,
    weatherCardAdditionalDataPropElement5,
    weatherCardAdditionalDataValueElement5,
    weatherCardAdditionalDataPropElement6,
    weatherCardAdditionalDataValueElement6,
    weatherCardAdditionalDataPropElement7,
    weatherCardAdditionalDataValueElement7,
    weatherCardAdditionalDataPropElement8,
    weatherCardAdditionalDataValueElement8
  );
};

// Wind direction with with non-official degree units -> But it's a convention in meteorology and navigation
const getWindDirection = (windDegree) => {
  if (
    (windDegree >= 348.75 && windDegree <= 360) ||
    (windDegree >= 0 && windDegree < 11.25)
  ) {
    return "North";
  } else if (windDegree >= 11.25 && windDegree < 33.75) {
    return "North-Northeast";
  } else if (windDegree >= 33.75 && windDegree < 56.25) {
    return "Northeast";
  } else if (windDegree >= 56.25 && windDegree < 78.75) {
    return "East-Northeast";
  } else if (windDegree >= 78.75 && windDegree < 101.25) {
    return "East";
  } else if (windDegree >= 101.25 && windDegree < 123.75) {
    return "East-Southeast";
  } else if (windDegree >= 123.75 && windDegree < 146.25) {
    return "Southeast";
  } else if (windDegree >= 146.25 && windDegree < 168.75) {
    return "South-Southeast";
  } else if (windDegree >= 168.75 && windDegree < 191.25) {
    return "South";
  } else if (windDegree >= 191.25 && windDegree < 213.75) {
    return "South-Southwest";
  } else if (windDegree >= 213.75 && windDegree < 236.25) {
    return "Southwest";
  } else if (windDegree >= 236.25 && windDegree < 258.75) {
    return "West-Southwest";
  } else if (windDegree >= 258.75 && windDegree < 281.25) {
    return "West";
  } else if (windDegree >= 281.25 && windDegree < 303.75) {
    return "West-Northwest";
  } else if (windDegree >= 303.75 && windDegree < 326.25) {
    return "Northwest";
  } else if (windDegree >= 326.25 && windDegree < 348.75) {
    return "North-Northwest";
  }
};

// Beaufort scale with wind speeds in meters per second (m/s) and its description '
const getWindDescription = (windSpeed) => {
  if (windSpeed <= 0) {
    return "Calm";
  } else if (windSpeed <= 1.5) {
    return "Light Air";
  } else if (windSpeed <= 3.3) {
    return "Light Breeze";
  } else if (windSpeed <= 5.4) {
    return "Gentle Breeze";
  } else if (windSpeed <= 7.9) {
    return "Moderate Breeze";
  } else if (windSpeed <= 10.7) {
    return "Fresh Breeze";
  } else if (windSpeed <= 13.8) {
    return "Strong Breeze";
  } else if (windSpeed <= 17.1) {
    return "Near Gale";
  } else if (windSpeed <= 20.7) {
    return "Gale";
  } else if (windSpeed <= 24.4) {
    return "Strong Gale";
  } else if (windSpeed <= 28.4) {
    return "Storm";
  } else if (windSpeed <= 32.6) {
    return "Violent Storm";
  } else {
    return "Hurricane";
  }
};

const loadWeatherData = async () => {
  try {
    await getCoordinatesOfUserLocation(); // Waiting for the location data

    fetchWeatherData("Hamburg", "de");
    fetchWeatherData("New York", "us");
    fetchWeatherData("Berlin", "de");
    fetchWeatherData("London", "gb");
  } catch (error) {
    console.error("Fehler beim Laden der Wetterdaten: ", error);
  }
};

loadWeatherData();

// search function

const searchInput = document.body.querySelector("#search-input");
const searchErrorOutput = document.body.querySelector(".search-error-output");

// const cityNameApi = currentWeather.name.value.toLowerCase().trim();

const searchCity = (currentWeatherParam) => {
  const searchInputCity = searchInput.value.toLowerCase().trim();
  const searchSubmitBtn = document.body.querySelector(".search-btn");
  searchSubmitBtn.addEventListener("click", () => {
    event.preventDefault();
    console.log(currentWeatherParam);

    weatherCardsSectionElement.innerHTML = "";
    console.log("Du suchst nach: " + searchInput.value);
    const currentWeatherCity = currentWeatherParam;
    console.log(currentWeatherCity);
    fetchWeatherData(searchInput.value);
  });
};
searchCity();
