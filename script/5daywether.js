let monHighandLow = document.getElementById('monLowHere');
let monChances = document.getElementById('monChancesHere');
let monClouds = document.getElementById('monCloudsHere');
let monWindSpeed = document.getElementById('monWindHere');
let monSunRise = document.getElementById('monSunriseHere');
let monSunSet = document.getElementById('monSunsetHere');
let tueHighandLow = document.getElementById('tueLowHere');
let tueChances = document.getElementById('tueChancesHere');
let tueClouds = document.getElementById('tueCloudsHere');
let tueWindSpeed = document.getElementById('tueWindSpeedHere');
let tueSunRise = document.getElementById('tueSunriseHere');
let tueSunSet = document.getElementById('tueSunsetHere');
let wedHighandLow = document.getElementById('wedLowHere');
let wedChances = document.getElementById('wedChancesHere');
let wedClouds = document.getElementById('wedCloudsHere');
let wedWindSpeed = document.getElementById('wedWindSpeedHere');
let wedSunRise = document.getElementById('wedSunriseHere');
let wedSunSet = document.getElementById('wedSunsetHere');
let thuHighandLow = document.getElementById('thuLowHere');
let thuChances = document.getElementById('thuChancesHere');
let thuClouds = document.getElementById('ThuCloudsHere');
let thuWindSpeed = document.getElementById('thuWindSpeedHere');
let thuSunRise = document.getElementById('thuSunriseHere');
let thuSunSet = document.getElementById('thuSunsetHere');
let friHighandLow = document.getElementById('friLowHere');
let friChances = document.getElementById('friChancesHere');
let friClouds = document.getElementById('friCloudsHere');
let friWindSpeed = document.getElementById('friWindHere');
let friSunRise = document.getElementById('friSunriseHere');
let friSunSet = document.getElementById('friSunsetHere');



async function getFiveDayWeather() {
    let promise = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=37.797&lon=-121.216&appid=a83a8a3f14f7269a62f56270da542afd');


    let data = await promise.json();
    monHighandLow.innerText = Math.round(((data.list[13].main.temp_min -273.15)*1.8)+32) + '°F' + '/' + Math.round(((data.list[13].main.temp_max -273.15)*1.8)+32) + '°F'
    console.log(data);
   monChances.innerText = data.list[13]
    if (data.main === undefined) {
        monChances.innerText = "No rain";
    }
    monClouds.innerText = data.list[13]
    if (data.main === undefined) {
        monClouds.innerText = "No clouds"
    }
    monWindSpeed.innerText = data.list[13].wind.speed + 'mph'
    monSunRise.innerText =  new Date(data.list[13].sys.pod).getHours() + '' + "am"
    monSunSet.innerText =  new Date(data.list[13].sys.pod).getHours() + '' + "am"

    
    tueHighandLow.innerText = Math.round(((data.list[21].main.temp_min -273.15)*1.8)+32) + '°F' + '/' + Math.round(((data.list[21].main.temp_max -273.15)*1.8)+32) + '°F'
    tueChances.innerText = data.list[21]
    if (data.main === undefined) {
        tueChances.innerText = "No rain";
    }
    tueClouds.innerText = data.list[21]
    if (data.main === undefined) {
        tueClouds.innerText = "No clouds"
    }
    tueWindSpeed.innerText = data.list[21].wind.speed + 'mph'
    tueSunRise.innerText =  new Date(data.list[13].sys.pod).getHours() + '' + "am"
    tueSunSet.innerText =  new Date(data.list[13].sys.pod).getHours() + '' + "am"


    wedHighandLow.innerText = Math.round(((data.list[29].main.temp_min -273.15)*1.8)+32) + '°F' + '/' + Math.round(((data.list[29].main.temp_max -273.15)*1.8)+32) + '°F'
    wedChances.innerText = data.list[29]
    if (data.main === undefined) {
        wedChances.innerText = "No rain";
    }
    wedClouds.innerText = data.list[29]
    if (data.main === undefined) {
        wedClouds.innerText = "No clouds"
    }
    wedWindSpeed.innerText = data.list[29].wind.speed + 'mph'
    wedSunRise.innerText =  new Date(data.list[29].sys.pod).getHours() + '' + "am"
    wedSunSet.innerText =  new Date(data.list[29].sys.pod).getHours() + '' + "am"

    thuHighandLow.innerText = Math.round(((data.list[37].main.temp_min -273.15)*1.8)+32) + '°F' + '/' + Math.round(((data.list[37].main.temp_max -273.15)*1.8)+32) + '°F'
    thuChances.innerText = data.list[37]
    if (data.main === undefined) {
        thuChances.innerText = "No rain";
    }
    thuClouds.innerText = data.list[37]
    if (data.main === undefined) {
        ThuCloudsHere.innerText = "No clouds"
    }
    thuWindSpeed.innerText = data.list[37].wind.speed + 'mph'
    thuSunRise.innerText =  new Date(data.list[37].sys.pod).getHours() + '' + "am"
    thuSunSet.innerText =  new Date(data.list[37].sys.pod).getHours() + '' + "am"
}
getFiveDayWeather();