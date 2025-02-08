async function getWether(city) {
  try {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=L2BKF9QYW776J6EJV4LWD6KSS&contentType=json`
    const data = await fetch(url);
    if(!data.ok){
      console.log("Weather Status: ",data.status)
      const display = document.querySelector(".address");
      display.textContent = `Please Enter correct city ${data.status}`
      display.style.color ="red"
    

    }
    const weather = await data.json();
    return weather;
  }catch({name, message}) {
    console.log("name:" ,name)
    console.log("message:",message)
  }

}

async function updateTheDom() {
  const userValue = document.querySelector(".userSearch").value
  const weather = await getWether(userValue);
  const address = weather.address
  const temp = weather.currentConditions.temp;
  const humidity = weather.currentConditions.humidity;
  const iconName = weather.currentConditions.icon
  const weatherCondition = weather.currentConditions.conditions;
  const windSpeed = weather.currentConditions.windspeed;
  const display = document.querySelector(".address");

  document.querySelector(".weatherDegree").textContent = temp
  document.querySelector(".weatherCondition").textContent = weatherCondition
  document.querySelector(".windSpeed").textContent = `${windSpeed} mph`
  document.querySelector(".humidity").textContent = `${humidity} %`
  display.textContent = `${address}`
  display.style.color = "unset" 
  console.log("Weather", weather)
  // displayTheImage(iconName)
  displayImage(iconName)
}
updateTheDom()

function displayImage(iconName) {
  const imageSrc = `/assets/icons/${iconName}.png` 
  const image = document.querySelector(".weatherImage");
  image.src = imageSrc
}



// async function displayTheImage(iconName) {
//   console.log("iconName: ", iconName)
//   const apiKey = "Qy82l9OjjuIxsph5pxFVZoQiyfTumIFb";
//   const url = "https://api.giphy.com/v1/gifs/search?api_key=";
//   const response = await fetch(`${url}${apiKey}&q=${iconName}`,
//     {mode: 'cors'}
//   );
  
//   const data = await response.json();
//   const image = document.querySelector(".weatherImage");
//   if(data.data.length > 0) {
//     image.src =data.data[0].images.original.url
//     image.onload = () => (
//       console.log("Image loaded succesfully")
//     )
//     image.onError = () => {
//       console.log("Error loading image")
//     }
//   }else {
//     console.log("no Image has been found")
//   }
// }
