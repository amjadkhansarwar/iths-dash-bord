import React, {FC} from 'react';
import Clock from '../components/Clock';
import Weather from '../components/Weather';
import Traffic from '../components/Traffic';
import * as S from '../styled'

const Home:FC = () => {
  return (
    <S.Body>
      <Clock />
      <Weather />
      <Traffic />
    </S.Body>
  )
}

export default Home;