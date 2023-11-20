// ==============================
//     Fetch current weather
// ==============================
const apiKey = "e5fe6c8387ce0464aa27c742deafd87b";

const cityName = "Hamburg";

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Hier ist was schief gelaufen");
    } else {
      return response.json();
    }
  })
  .then((data) => {
    console.log(data);
  });
