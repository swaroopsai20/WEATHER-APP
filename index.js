let inputEle = document.getElementById("location-input")
let temEle = document.getElementById("temp-value")
let locele = document.getElementById("location")
let weatherdesEle = document.getElementById("weather-dec")
let btnEle = document.getElementById("btn")

const imgele = document.querySelector(".img")


const apikey = '41d39eaffe7a7a9f3836678b1cea28c5';


btnEle.onclick = function () {
    if(inputEle.value == "")
    alert("enter the loction")
    else {
        loc = inputEle.value
        url =`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const {name} = data 
            const{feels_like} = data.main
            const{description} = data.weather[0]
            temEle.innerText= Math.floor(feels_like-273);
            locele.innerText= name;
            weatherdesEle.innerText= description

            if (data.weather[0].main == "Cloud") {
                imgele.src="cloud.png"
                   
            } 
            else if(data.weather[0].main == "Clear")
                {
                imgele.src="weather-icon-png-11074 (1).png"   
         
            }
            else if(data.weather[0].main == "Rain")
            {
                imgele.src="storm.png"   
         
            }
            else if (data.weather[0].main == "Drizzle") {
                imgele.src="drizzle.png"   
         
            }

            else if (data.weather[0].main == "Mist") {
                imgele.src="fog.png"   
         
            }

            else if (data.weather[0].main == "few clouds") {
                imgele.src="Gnome-weather-few-clouds.svg.png" 
         
            }
            




            
        }) 
        .catch(() => {
            alert("enter vaild location")
        })

        inputEle.value= ""
        
    }
}
