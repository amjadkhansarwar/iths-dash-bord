import React, { FC, useEffect, useState } from "react";
import * as S from "./styled";
import * as T from "../../theme/typography";
import { fetchWeatherData } from "../../api/api";
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
const Weather: FC<Props> = ({ city }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeatherData(city);
        setWeatherData(data);
      } catch (error) {
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
        <S.Image
          src={`${weatherIconUrl}${weatherIcon}.png`}
          alt="weather icon"
        />
        <S.Element>
          <S.Text> Description: {`${weatherDescription}`}</S.Text>
        </S.Element>
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
