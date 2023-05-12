import React, {FC, useState, useEffect} from "react"
import * as S from './styled'
import * as T from '../../theme/typography'
import useSWR from 'swr';

const API_KEY = '1f43b48aa22945f587a7865064f9c2e2';

interface Props {
  siteId?: string;
  timewindow?: number
}
interface Departure {
  LineNumber: string;
  Destination: string;
  DisplayTime: string;
}

const API_ENDPOINT = `https://api.sl.se/api2/realtimedeparturesV4.json?key=${API_KEY}&siteid=${9192}&timewindow=${40}`


const Traffic:FC<Props> = ({siteId, timewindow}) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    let delay = 2000; // delay in milliseconds
    let requests: any[] = [];
    const fetchData = async () => {
      try {
        const sites = [9192, 9193, 9194]; // example site ids
        for (let i = 0; i < sites.length; i++) {
          const siteId = sites[i];
          const corsProxy = 'https://cors-anywhere.herokuapp.com/';
          const url = `https://api.sl.se/api2/realtimedeparturesV4.json?key=1f43b48aa22945f587a7865064f9c2e2&siteid=${siteId}&timewindow=20`;
          requests.push(fetch(corsProxy + url));
        }
        const responses = await Promise.all(requests);
        const jsonData: any = await Promise.all(
          responses.map((response) => response.json())
        );
        if (isMounted) {
          setData(jsonData);
        }
      } catch (error) {
        console.log(error)
      }
    };

    const intervalId = setInterval(() => {
      fetchData();
    }, delay);

    return () => {
      clearInterval(intervalId);
      isMounted = false;
    };
  }, []);
  const departures: Departure[]= []
  return (
    <T.Container>
        <T.Heading>Traffic Info</T.Heading>
        {departures.length > 0 ? (
        <S.DepartureList>
          {departures.map((departure, index) => (
            <S.DepartureItem key={index}>
              <S.LineNumber>{departure.LineNumber}</S.LineNumber>
              <S.Destination>{departure.Destination}</S.Destination>
              <S.DisplayTime>{departure.DisplayTime}</S.DisplayTime>
            </S.DepartureItem>
          ))}
        </S.DepartureList>
      ) : (
        <S.NoData>No departures found</S.NoData>
      )}
    </T.Container>
  );
};

export default Traffic;
