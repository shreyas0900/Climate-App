 //City Name
 const key = '7507117e6ca3c85b0aecd7b053f9f778 '

 const base = `http://dataservice.accuweather.com/locations/v1/cities/search/?apikey=${key}`;




//Current Conditions
const url = `http://dataservice.accuweather.com/currentconditions/v1/?apikey=${key}`;

export { key, base, url };