GetData();

function GetData(){
    fetch("https://api.adviceslip.com/advice").then(
        response => response.json()
    ).then(
        // data => console.log(data)
        data => dataHere.innerText = data.slip.advice
    )
}