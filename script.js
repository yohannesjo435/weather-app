import { countriesAndCities } from "./cityAndCountryData.js";

async function getWether(city) {
  try {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=L2BKF9QYW776J6EJV4LWD6KSS&contentType=json`;
    const data = await fetch(url);
    if (!data.ok) {
      console.log("Weather Status: ", data.status);
      const display = document.querySelector(".address");
      display.textContent = `Please Enter correct city ${data.status}`;
      display.style.color = "red";
      return null;
    }
    const weather = await data.json();
    return weather;
  } catch ({ name, message }) {
    console.log("name:", name);
    console.log("message:", message);
    return null;
  }
}

async function updateTheDom() {
  const userValue = document.querySelector(".userSearch").value;
  const weather = await getWether(userValue);

  if (!weather) return; // Early return if weather data is not available

  const address = weather.address;
  const temp = weather.currentConditions.temp;
  const humidity = weather.currentConditions.humidity;
  const iconName = weather.currentConditions.icon;
  const weatherCondition = weather.currentConditions.conditions;
  const windSpeed = weather.currentConditions.windspeed;
  const display = document.querySelector(".address");

  document.querySelector(".weatherDegree").textContent = temp;
  document.querySelector(".weatherCondition").textContent = weatherCondition;
  document.querySelector(".windSpeed").textContent = `${windSpeed} mph`;
  document.querySelector(".humidity").textContent = `${humidity} %`;
  display.textContent = `${address}`;
  display.style.color = "unset";

  displayImage(iconName);
}

window.updateTheDom = updateTheDom;

function displayImage(iconName) {
  const imageSrc = `/assets/icons/${iconName}.png`;
  const image = document.querySelector(".weatherImage");
  image.src = imageSrc;
}

const searchResult = document.querySelector(".search-result");
const userInput = document.querySelector(".userSearch");

searchResult.style.display = "none"; // Initially hide the search results

// Adding event listener to body once
document.body.addEventListener("click", (event) => {
  if (!searchResult.contains(event.target) && userInput !== event.target) {
    // Hide search results when clicking outside of them and the input field
    searchResult.style.display = "none";
  }
});

userInput.onkeyup = function () {
  let result = [];
  let inputValue = userInput.value.trim();
  if (inputValue) {
    result = countriesAndCities.filter((keyword) => {
      return keyword.toLowerCase().includes(inputValue.toLowerCase());
    });
    displaySearchRec(result);
  } else {
    searchResult.innerHTML = ""; // Clearing results if input is empty
    searchResult.style.display = "none"; // Hideing if no input
  }
};

function updateTheInputField(inputValue) {
  userInput.value = inputValue;
  updateTheDom();
  console.log(inputValue);
  // Hide search results after selecting a value
  searchResult.style.display = "none";
}

window.updateTheInputField = updateTheInputField;

function displaySearchRec(result) {
  let resultHtml = result.map((value) => {
    return `<li onclick="updateTheInputField('${value}')">${value}</li>`;
  });

  searchResult.innerHTML = `<ul>${resultHtml.join("")}</ul>`;
  // Showing the search results if there are any
  if (result.length > 0) {
    searchResult.style.display = "block";
  } else {
    searchResult.style.display = "none"; // Hide if no results
  }
}

// Call updateTheDom to initialize the display based on any existing input inour case AddisAbab
updateTheDom();
