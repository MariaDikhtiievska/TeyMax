//import axios from "axios";
let butt = document.getElementById('butt')
let result
let position = document.getElementById('position')


window.onload=async ()=>{
   let userWe= await navigator.geolocation.getCurrentPosition(success, error);
}
async function success(pos) {

    var crd = pos.coords;

     let latitude =crd.latitude
     let longitude = crd.longitude

let userPos = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&cnt=5&appid=afff5f1680b44b0b8597df8193faf7ab&units=metric`)
    let userWeather =userPos['data']
    console.log(userWeather)
    Findweather(userWeather)
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}


const getForecast = async function () {
    let city = document.getElementById('city').value


// await axios.get
    // await fetc
    result = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=5&appid=8103bd229490ea7ad5a867dd19205022&units=metric`)

    const resultJson = result.data

    Findweather(resultJson)


}

butt.addEventListener('click', getForecast)
let container = document.createElement('div')

function Findweather(weatherArr) {
    let sunrise= new Date(weatherArr.city.sunrise*1000)
    let hourSunrise = sunrise.getHours()
    let minutesSunrise = sunrise.getMinutes()
    let sunDown = new Date(weatherArr.city.sunset*1000)
    let hourSunset = sunDown.getHours()
    let minutesSunset = sunDown.getMinutes()
position.classList.add('position')
    position.innerHTML = `
 <span>Weather in ${weatherArr.city.name}</span>
    `

    container.innerHTML = ''
    container.classList.add('container')
    document.body.append(container)
    weatherArr.list.forEach(item => {
        let div = document.createElement('div')
        div.classList.add('day')
        div.innerHTML = `
        <img src="http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png" alt="">
        <table>
        <tr class="day">
              <th>Temperature</th>
              <td> ${item['main']['temp']}</td>
        </tr>
        <tr>
            <th>Feels like</th>
            <td>${item['main']['feels_like']}</td>
        </tr>
        <tr>
            <th>Weather</th>
            <td>${item['weather'][0]['main']}</td>
        </tr>
        <tr>
           <th>Pressure</th>
           <td>${item['main']['pressure']}</td>
        </tr>
           <tr>
           <th>Humidity</th>
           <td>${item['main']['humidity']}</td>
        </tr>
           <tr>
          
           <th>Wind Speed</th>
           <td>${item['wind']['speed']}</td><br>
           
        </tr>
        <tr>
            <th>Wind Deg</th>
            <td>${item['wind']['deg']}</td>
        </tr>
        <tr>
            <th>Wind Gust</th>
            <td>${item['wind']['gust']}</td>
        </tr>
        <tr>
            <th>Sunrise</th>
            <td>${hourSunrise}:${minutesSunrise}</td>
        </tr>
        <tr>
            <th>SunDown</th>
            <td>${hourSunset}:${minutesSunset}</td>
        </tr>
           
</table>`

        container.append(div)


    })
}


