import styled from 'styled-components'

export const Header = styled.header`
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.red};
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const Logo = styled.img`
  padding: 2em;
  font-size: 2em;
`
export const Title = styled.h1`
  padding: 0.5em;
  font-size: 3.5em;
`
