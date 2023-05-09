import React, {FC, useEffect, useState} from "react"
//import * as S from './styled'
import * as T from '../../theme/typography'
import { GetTraffic } from "../../api/api"

const Traffic: FC = () =>{

    const [trafficData, setTrafficData] = useState(null);

    useEffect( () => {
       const data = async ()  => {
        const data = await GetTraffic();
        setTrafficData(data);
      }
      data();
    }, []);
  
    return(
        <T.Container>
            <T.Heading>Slussan Local Traffic Departure Info </T.Heading>
            {trafficData}
        </T.Container>
    )
}

export default Traffic