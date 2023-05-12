import styled from 'styled-components';
import theme from '../../theme'

export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
height: 60px;
width: 100%;
background-color: ${theme.primaryColor.OnColor}
`
export const FooterText = styled.p`
font-family: ${theme.fonts.title};
font-weight: 500;
font-size: 14px;
color: ${theme.FooterTextColor};
align-self: center;
padding-left: 32px;
`