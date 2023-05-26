var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=12ea2cb6cf2c1fa0558febec63ad115d&mode=json&units=imperial')
.then(response => response.json())
.then(data => {
  var currentTemperature = data['main']['temp'];
  var nameValue = data['name'];
  var weatherDescription = data['weather'][0]['description'];
  console.log(data);

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+weatherDescription;
  temp.innerHTML = "Temp - "+currentTemperature;
  input.value ="";

})

.catch(err => alert("City Name Not Found, Please Try Again!"));
})


