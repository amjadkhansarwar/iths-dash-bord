import React, {FC} from 'react';
import Clock from '../components/Clock';
import Weather from '../components/Weather';
import Traffic from '../components/Traffic';
import * as S from '../styled'

const Home:FC = () => {
  return (
    <S.Body>
      <Clock />
      <Weather city="Stockholm,SE"/>
      <Traffic siteId="9192" timewindow={20} />
    </S.Body>
  )
}

export default Home;