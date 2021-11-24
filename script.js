const url = 'https://api.openweathermap.org/data/2.5/';
const key = '135ac8e1e59aec41e364ca3b4ae51427';

const setQuery = (e) => {
  if (e.keyCode == '13') {
    getResult(searchBar.value);
  }
};

const getResult = (cityName) => {
  let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
  console.log(cityName);
  console.log(query);
  fetch(query)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);
};

const displayResult = (result) => {
  console.log(result);
  let city = document.querySelector('.city');
  city.innerText = `${result.name}, ${result.sys.country}`;

  let temp = document.querySelector('.temp');
  temp.innerText = `${Math.round(result.main.temp)} C`;

  let desc = document.querySelector('.desc');
  desc.innerText = `${result.weather[0].description}`;
  let minmax = document.querySelector('.minmax');
  minmax.innerText = `${Math.round(result.main.temp_min)} C / ${Math.round(
    result.main.temp_max
  )} C`;
};

const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('keypress', setQuery);

// const url = 'https://api.openweathermap.org/data/2.5/';
// const key = '5269485d20180ba618280f38a6f368b5';
// var check = document.querySelector('.check');
// console.log(check);
// const setQuery = (e) => {
//   if (e.keyCode == '13') {
//     getResult(searchBar.value);
//   }
// }
// const getResult = (cityName) => {
//   var query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
//   fetch(query)
//     .then((weather) => {
//       return weather.json();
//     })
//     .then(displayResult);
// };
// const displayResult = (weather) => {
//   var city = document.querySelector('.city');
//   var temp = document.querySelector('.temp');
//   var desc = document.querySelector('.desc');
//   var minmax = document.querySelector('.minmax');

//   city.innerText = `${weather.name} , ${weather.sys.country}`;
//   temp.innerText = `${Math.round(weather.main.temp)} °C`;
//   // desc edit
//   var descEdit = weather.weather[0].description;
//   descEdit = descEdit[0].toUpperCase() + descEdit.substring(1);

//   desc.innerHTML = `${descEdit}`;
//   minmax.innerText = `${Math.round(weather.main.temp_min)} °C / ${Math.round(
//     weather.main.temp_max
//   )} °C`;

//   console.log(weather);
// };

// const searchBar = document.getElementById('searchBar');

// searchBar.addEventListener('keypress', setQuery);
// check.addEventListener('click', () => {
//   getResult(searchBar.value);
// });
