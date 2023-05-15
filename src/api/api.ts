
const WEATHER_API_KEY = "a03d5359fd3cca8ba8a852c9e86b749c";

export async function GetWeather(city: string) {
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`;
  try {
    const response = await fetch(weatherApiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch weather data", error);
  }
}
