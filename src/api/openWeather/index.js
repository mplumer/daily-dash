const API_URL = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${process.env.REACT_APP_OPEN_WEATHER_API}&units=imperial`;

export const getWeather = async (city, state) => {
  const response = await fetch(`${API_URL}&q=${city},${state}`);
  const json = await response.json();

  return {
    weatherMetadata: json.weather[0],
    temperature: json.main.temp
  };
};

const openWeatherMapApi = {
  getWeather
};

export default openWeatherMapApi;
