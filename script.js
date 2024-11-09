const apiKey = "c27c51c2ff5346c3651a54b3be4d20a6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const inpBox = document.querySelector("#searchBox");
const searchBtn = document.querySelector("#searchBtn");
const weaIC = document.querySelector("#weaIC");
const error = document.querySelector(".error");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";  
    }
    else{
        var data = await response.json();
        


        document.getElementById("city").innerHTML = data.name;
        document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.getElementById("humidity").innerHTML = data.main.humidity + "%";
        document.getElementById("wind").innerHTML = data.wind.speed + " Km/H";


        if(data.weather[0].main === "Rain"){
            weaIC.src = "images/rain.png"
        }
        else if(data.weather[0].main === "Clear"){
            weaIC.src = "images/clear.png"
        }
        else if(data.weather[0].main === "Clouds"){
            weaIC.src = "images/clouds.png"
        }
        else if(data.weather[0].main === "Drizzle"){
            weaIC.src = "images/drizzle.png"
        }
        else if(data.weather[0].main === "Mist"){
            weaIC.src = "images/mist.png"
        }

        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";  
    }
    console.log(data)
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(inpBox.value)
})


