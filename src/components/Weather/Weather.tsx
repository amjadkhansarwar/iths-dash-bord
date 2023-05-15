import React, { FC, useEffect, useState } from "react";
import * as S from "./styled";
import * as T from "../../theme/typography";
interface Props {
  city: string;
}

interface WeatherData {
  name: string;
  weather: WeatherIcon[];
  main: Main;
  wind: Wind;
  visibility: number;
  sys: Sys;
}

interface WeatherIcon {
  icon: string;
  description: string;
}

interface Main {
  temp: number;
  humidity: number;
  pressure: number;
}

interface Wind {
  speed: number;
}

interface Sys {
  sunrise: number;
  sunset: number;
}
const WEATHER_API_KEY = "a03d5359fd3cca8ba8a852c9e86b749c";
const Weather: FC<Props> = ({ city }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [mode, setMode] = useState('Online')

  useEffect(() => {
    const fetchData = async () => {
      const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`;
      try {
        const response = await fetch(weatherApiUrl);
        const data = await response.json();
        setWeatherData(data);
        localStorage.setItem("Weather", JSON.stringify(data));
      } catch (error) {
        const data = localStorage.getItem("Weather");
        if (data) {
          try {
            setWeatherData(JSON.parse(data));
            setMode('Offline')
          } catch (error) {
            console.error("Failed to parse data from localStorage", error);
          }
        }
        console.error("Failed to fetch weather data", error);
      }
    };
    fetchData();
  }, [city]);

  function unixTimestampToTime(unixTimestamp: number): string {
    const date = new Date(unixTimestamp * 1000);
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    const seconds = date.getUTCSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  if (!weatherData) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }

  const weatherIconUrl = "https://openweathermap.org/img/w/";
  const weatherIcon = weatherData?.weather[0].icon;
  const weatherLocation = weatherData?.name;
  const weatherTemperature = Math.round(weatherData?.main.temp - 273.15);
  const weatherDescription = weatherData?.weather[0].description;
  const windSpeed = weatherData?.wind.speed;
  const humidity = weatherData?.main.humidity;
  const pressure = weatherData?.main.pressure;
  const visibility = weatherData?.visibility;
  const sunriseTime = unixTimestampToTime(weatherData?.sys.sunrise);
  const sunsetTime = unixTimestampToTime(weatherData?.sys.sunset);
  return (
    <T.Container>
      <T.Heading>Stockholm Daily Weather Reprot</T.Heading>
      <S.WeatherData>
        { mode === 'Offline' ? 
          <S.Element>
          <S.Text>You are Offline</S.Text>
        </S.Element>
          :
          <S.Image
            src={`${weatherIconUrl}${weatherIcon}.png`}
            alt="weather icon"
          />

    
      }
        <S.Element>
          <S.Text> Temperature: {`${weatherTemperature}°C`}</S.Text>
        </S.Element>
        <S.Element>
          <S.Text>Wind Speed: {windSpeed} m/s</S.Text>
        </S.Element>
        <S.Element>
          <S.Text>Humidity: {humidity}%</S.Text>
        </S.Element>
        <S.Element>
          <S.Text>Pressure: {pressure} hPa</S.Text>
        </S.Element>
        <S.Element>
          <S.Text>Visibility: {visibility} m</S.Text>
        </S.Element>
        <S.Element>
          <S.Text>Sunrise: {sunriseTime}</S.Text>
        </S.Element>
        <S.Element>
          <S.Text>Sunset: {sunsetTime}</S.Text>
        </S.Element>
      </S.WeatherData>
    </T.Container>
  );
};

export default Weather;
