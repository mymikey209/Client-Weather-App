let monHighandLow = document.getElementById('monLowHere');
let monChances = document.getElementById('monChancesHere');
let monClouds = document.getElementById('monCloudsHere');
let monWindSpeed = document.getElementById('monWindHere');
let monSunRise = document.getElementById('monSunriseHere');
let monSunSet = document.getElementById('monSunsetHere');
let tueHighandLow = document.getElementById('tueLowHere');
let tueChances = document.getElementById('tueChancesHere');
let tueClouds = document.getElementById('tueCloudsHere');
let tueWindSpeed = document.getElementById('tueWindHere');
let tueSunRise = document.getElementById('tueSunriseHere');
let tueSunSet = document.getElementById('tueSunsetHere');
let wedHighandLow = document.getElementById('wedLowHere');
let wedChances = document.getElementById('wedChancesHere');
let wedClouds = document.getElementById('wedCloudsHere');
let wedWindSpeed = document.getElementById('wedWindHere');
let wedSunRise = document.getElementById('wedSunriseHere');
let wedSunSet = document.getElementById('wedSunsetHere');
let thuHighandLow = document.getElementById('thuLowHere');
let thuChances = document.getElementById('thuChancesHere');
let thuClouds = document.getElementById('thuCloudsHere');
let thuWindSpeed = document.getElementById('thuWindHere');
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
    monHighandLow.innerText = ((data.list[18].main.temp_min -273.15)*1.8)+32 + '°F' + '/' + ((data.list[18].main.temp_max -273.15)*1.8)+32 + '°F'
    console.log(data);
}
getFiveDayWeather();