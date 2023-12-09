let feelslike = document.getElementById('feelsLike'); 
let todayMin = document.getElementById('todayMin');
let chance = document.getElementById("chanceHere");
let cloudiness = document.getElementById("cloudinessHere");
let windSpeed = document.getElementById("windSpeedHere");
let sunrise = document.getElementById("sunriseHere");
let sunset = document.getElementById("sunsetHere");


async function getTodayWeather() {
    // this line is getting the data from the url which is getting weather from the entered lot and lan
    let promise = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=37.797&lon=-121.216&appid=2d380a5e9e23c1b1a805cb1d2431b6b4&units=imperial');
    // this line is creating a new data and the await is telling it to wait and the promise is holding the api data the json is trying the parse into an object 
    let data = await promise.json();
    console.log(data.main.temp);
    todayMin.innerText = data.main.temp_min + '°F' + '/' + data.main.temp_max + '°F';
    chance.innerText = data.main.rain
    if (data.main.rain === undefined) {
        chance.innerText = "No rain";
    }
    cloudiness.innerText = data.main.clouds
    if (data.main.rain === undefined) {
        cloudiness.innerText = "No clouds"
    }
    console.log(data);
    windSpeed.innerText = data.wind.speed + 'mph'
    sunrise.innerText =  new Date(data.sys.sunrise).getHours() + '' + "am"
    sunset.innerText = new Date(data.sys.sunset).getHours() + '' + "pm"
    console.log(data.sys.sunset);
    console.log(new Date(1702082753).getHours());
    feelslike.innerText = data.main.feels_like + '°F'
    
}
getTodayWeather();





// async function chanceHere(chance) {
//     // this line is getting the data from the url which is getting weather from the entered lot and lan
//     let promise = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=37.797&lon=-121.216&appid=2d380a5e9e23c1b1a805cb1d2431b6b4');
//     // this line is creating a new data and the await is telling it to wait and the promise is holding the api data the json is trying the promise into an object 
//     let data = await promise.json();
//     let chanceHere = data.main.rain
//     console.log(data)
//     document.getElementById('chanceHere').innerText = chanceHere;
//     if (chanceHere === undefined) {
//         document.getElementById('chanceHere').innerText = "No rain";
//     }
// }

// async function cloudinessHere(cloudiness) {
//     // this line is getting the data from the url which is getting weather from the entered lot and lan
//     let promise = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=37.797&lon=-121.216&appid=2d380a5e9e23c1b1a805cb1d2431b6b4&units=imperial');
//     // this line is creating a new data and the await is telling it to wait and the promise is holding the api data the json is trying the promise into an object 
//     let data = await promise.json();
//     let cloudinessHere = data.main.clouds
//     console.log(data.main.clouds);
//     document.getElementById('cloudinessHere').innerText = cloudiness;
//     if (cloudinessHere === undefined) {
//         document.getElementById('cloudinessHere').innerText = "No clouds";
//     }
// }

// async function windSpeedHere(windSpeed) {
//     // this line is getting the data from the url which is getting weather from the entered lot and lan
//     let promise = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=37.797&lon=-121.216&appid=2d380a5e9e23c1b1a805cb1d2431b6b4&units=imperial');
//     // this line is creating a new data and the await is telling it to wait and the promise is holding the api data the json is trying the promise into an object 
//     let data = await promise.json();
//     let windSpeedHere = data.wind.speed
//     console.log(data.wind.speed);
//     document.getElementById('windSpeedHere').innerText = windSpeed;
// }

// today();
// chanceHere();
// cloudinessHere();
// windSpeedHere();
// sunriseHere();
// sunsetHere();