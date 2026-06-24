
const apiKey = "10fccb2534458270282520145e08244f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    try{
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if(response.status == 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }
        else{
                  let data = await response.json(); //convert into json readable formate

                  console.log(data);

        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML= Math.floor(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
        document.querySelector(".wind").innerHTML= data.wind.speed + " km/h";

if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "clouds.png";
}
else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "clear.png";
}
else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "rain.png";
}
else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "drizzle.png";
}
else if(data.weather[0].main == "Mist" ||
    data.weather[0].main == "Haze" ||
    data.weather[0].main == "Fog"){
    weatherIcon.src = "HazeDust.png";
}
else if(data.weather[0].main == "Snow"){
    weatherIcon.src = "snow1.png";
}
else if(data.weather[0].main == "Thunderstorm"){
    weatherIcon.src = "thunder.png";
}

document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display = "none";
    }
 }
    catch(e){
        console.log("error:", e);
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        checkWeather(searchBox.value);
    }
});