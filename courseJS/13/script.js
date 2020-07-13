const apikey = "c600a1e235d01cf97a064f98deeb40f3";    //  if don`t work, make new api key on https://home.openweathermap.org/api_keys
fetch(`http://api.openweathermap.org/data/2.5/weather?id=658225&APPID=${apikey}`)    //  Espoo id = 660129   Helsinki id = 658225
    .then(function (resp) { return resp.json() }) // convert data to json
    .then(function (data) {
        console.log(data);
        document.querySelector('.name').textContent = data.name;
        document.querySelector('.tempr').innerHTML = Math.round(data.main.temp - 273) + '&degC';
        document.querySelector('.descr').innerHTML = data.weather[0].description;
        document.querySelector('.pic').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;

    })
    .catch(function () {
        // catch any errors
    });
