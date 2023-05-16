

const WEATHER_API_KEY = "a03d5359fd3cca8ba8a852c9e86b749c";


export async function fetchWeatherData(city: string): Promise<any> {
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`;

  const cacheName = "weather-cache";
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(weatherApiUrl);

  if (cachedResponse) {
    const cachedData = await cachedResponse.json();
    return cachedData;
  } else {
    const response = await fetch(weatherApiUrl);
    const clonedResponse = response.clone();
    const data = await response.json();
    cache.put(weatherApiUrl, clonedResponse);
    return data;
  }
}
export async function fetchCountriesData(): Promise<any> {
  const apiUrl = "https://restcountries.com/v2/region/europe";
  
  const cacheName = 'countries-cache';
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(apiUrl);

  if (cachedResponse) {
    const cachedData = await cachedResponse.json();
    return cachedData;
  } else {
    const response = await fetch(apiUrl);
    const clonedResponse = response.clone(); 
    const data = await response.json();
    cache.put(apiUrl, clonedResponse); 
    return data;
  }
}
