let request = require('request');

let apiKey = '*****************************';
let city = 'Malaga';
let url = "http://api.openweathermap.org/data/2.5/weather?q=Malaga,es&units=metric&appid=839256392c6f30efe6bcb631b1e1fc14"

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `${weather.name} max:${weather.main.temp_max} min:${weather.main.temp_min}`;
    console.log(message);
  }
});
