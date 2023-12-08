async function today(today) {
    // this line is getting the data from the url which is getting weather from the entered lot and lan
    let promise = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=37.797&lon=-121.216&appid=2d380a5e9e23c1b1a805cb1d2431b6b4&units=imperial');
    // this line is creating a new data and the await is telling it to wait and the promise is holding the api data the json is trying the promise into an object 
    let data = await promise.json();
    let todayMin = data.main.temp_min + '°F' + '/' + data.main.temp_max + '°F'
    console.log(data.main.temp);
    document.getElementById('todayMin').innerText = todayMin;
}




async function chanceHere(chance) {
    // this line is getting the data from the url which is getting weather from the entered lot and lan
    let promise = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=37.797&lon=-121.216&appid=2d380a5e9e23c1b1a805cb1d2431b6b4');
    // this line is creating a new data and the await is telling it to wait and the promise is holding the api data the json is trying the promise into an object 
    let data = await promise.json();
    let chanceHere = data.main.rain
    console.log(data)
    document.getElementById('chanceHere').innerText = chanceHere;
    if (chanceHere === undefined) {
        document.getElementById('chanceHere').innerText = "No rain";
    }
}

async function cloudinessHere(cloudiness) {
    // this line is getting the data from the url which is getting weather from the entered lot and lan
    let promise = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=37.797&lon=-121.216&appid=2d380a5e9e23c1b1a805cb1d2431b6b4&units=imperial');
    // this line is creating a new data and the await is telling it to wait and the promise is holding the api data the json is trying the promise into an object 
    let data = await promise.json();
    let cloudinessHere = data.main.clouds
    console.log(data.main.clouds);
    document.getElementById('cloudinessHere').innerText = cloudiness;
    if (cloudinessHere === undefined) {
        document.getElementById('cloudinessHere').innerText = "No clouds";
    }
}

today();
chanceHere();
cloudinessHere();
windSpeedHere();
sunriseHere();
sunsetHere();