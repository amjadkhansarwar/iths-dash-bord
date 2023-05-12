import pLimit from "p-limit";
const WEATHER_API_KEY = "a03d5359fd3cca8ba8a852c9e86b749c";
const TRAFFIC_API_KEY = "1f43b48aa22945f587a7865064f9c2e2";
const trafficApiUrl = `https://api.sl.se/api2/realtimedeparturesV4.json?key=${TRAFFIC_API_KEY}&siteid=9192&timewindow=40`;

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

const SITE_ID = "9192";
const url = `https://api.sl.se/api2/realtimedeparturesV4.json?key=1f43b48aa22945f587a7865064f9c2e2&siteid=9192&timewindow=40`

const limit = pLimit(30); // limit to 30 requests per minute

const getDepartures = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data.ResponseData;
  };

export const fetchDepartures = async () => {
  const result = await limit(() => getDepartures());
  return result;
};
