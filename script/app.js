async function todayHere(today){
    // this line is getting the data from the url which is getting weather from the entered lot and lan
 let promise = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=37.797&lon=-121.216&appid=2d380a5e9e23c1b1a805cb1d2431b6b4');
 // this line is creating a new data and the await is telling it to wait and the promise is holding the api data the json is trying the promise into an object 
 let data = await promise.json();
console.log(data);
// document.getElementById('todayHere').innerText = todayHere;
}
todayHere();