
async function getWeather() {
    let city = document.querySelector("#exampleInputEmail1");
    const citydata = city.value;
    const location = citydata;
    const apiKey = '06e449df4c089232d99ba7b641bdc0ba';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await axios.get(url);
  
      const weatherData = response.data;
      const temperature = weatherData.main.temp;
      const conditions = weatherData.weather[0].description;
      let main = document.querySelector('.main');
      let temp = document.createElement('p')
      temp.innerHTML = `temperature : ${temperature}`
      main.before(temp)
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    
  }
  let drop = document.querySelector('#drop');
  drop.innerHTML = 'text'

