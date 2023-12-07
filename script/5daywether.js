async function fiveDayHere(){
    let promise = await fetch('api.openweathermap.org/data/2.5/forecast?lat=37.797&lon=-121.216&appid=a83a8a3f14f7269a62f56270da542afd')
    let data = await promise.json();
    console.log(data);
}
fiveDayHere();