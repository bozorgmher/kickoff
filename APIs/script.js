//Your API key is: abf2aeb7ff87409ebcba94e3e3e9e9c4


var btn = document.querySelector("#search");
var fcast = document.querySelector("#forcast");

btn.addEventListener('click', function(){
  var url = 'https://newsapi.org/v2/everything?' +
  'q=' + document.getElementById("subject").value +'&' +
  'from=' +document.getElementById("from").value +'&' +
  'sortBy=popularity&' +
  'apiKey=abf2aeb7ff87409ebcba94e3e3e9e9c4';
  fetch(url)
  .then(response => response.json())
  .then(data=> {
    //console.log(data)
    let result = data.articles.map(function (list) {
      return `<h2>${list.title}</h2>
      <h4>${list.author}</h4>
      <p>${list.description}</p>
      <img src=${list.urlToImage}>
      `
    }).join("")
  //  console.log(result)
    document.getElementById("art").innerHTML=result}
 
    
  )


});

fcast.addEventListener('click', function(){
  let apiKey = "2af1c9fd3b3cd99957de20ed234df91e";
  let city = document.querySelector("#city").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=${ apiKey }&units=metric`;
 

  fetch(apiUrl)
  .then(response => response.json())
  .then(data=> {
    console.log(data)
    let result = data.weather.map(function (list) {
      return `<h2>${city}</h2>
      <p>${list.description}</p>
      <p>${list.main}</p>
      `
    }).join("")
    let weath  = data.wind.map(function (list) {
      return `
      <p>${list.deg} + celius</p>
      <p>${list.speed} + km</p>
      `
  //  console.log(result)
    document.getElementById("art").innerHTML= result + weath;
    
  }
 
    
  )


})});