import React, { useEffect, useState } from "react";
import * as S from "./styled";
import * as T from "../../theme/typography";

interface Country {
  name: string;
  capital: string;
  population: number;
  area: number;
  languages: LangName[];
  currencies: Currency[];
  timezones: string[];
  flag: string
}
interface LangName{
  name: string
}
interface Currency{
  name: string
}

const RestCountries: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v2/region/europe");
        if (response.ok) {
          const data = await response.json();
          setCountries(data);
        } else {
          setError("Failed to fetch country data");
        }
      } catch (error) {
        setError("An error occurred while fetching data");
      }
    };

    fetchData();
  }, []);


  return (
    <T.Container>
      <T.Heading>Country Information</T.Heading>
      {error && <p>{error}</p>}
      {countries.length === 0 && !error && <p>Loading...</p>}
      {countries.length > 0 &&
        countries.map((country, index) => (
          <S.Body key={index}>
            <S.Element>
            <T.Heading>{country.name}</T.Heading>
            <img src={country.flag} alt={country.name} style={{ width: 50, height: 30}}/>
            </S.Element>
            <S.Element>
            <S.Text>Capital: {country.capital}</S.Text>
            <S.Text>Population: {country.population}</S.Text>
            </S.Element>
            <S.Element>
            <S.Text>Area: {country.area}</S.Text>
            <S.Text>Languages: {country.languages.map((language)=> language.name)}</S.Text>
            </S.Element>
            <S.Element>
            <S.Text>Currency: {country.currencies.map((currency)=> currency.name)}</S.Text>
            <S.Text>Growth: {country.timezones}</S.Text>
            </S.Element>
            <S.DottedLine />
          </S.Body>
        ))}
    </T.Container>
  );
};

export default RestCountries;
