import styled, {
    css
} from 'styled-components';

export default styled.button `
  font-family: ${props => props.theme.fontFamily};
  font-size: 1.3rem;
  border: none;
  border-radius: 5px;
  padding: 7px 15px;
  margin: 0 5px; 
  cursor: pointer;
  // background: #188038;
  // background: ${props => (props.primary ? '#4285f4' : '#188038')};
  ${(props) => props.color && css`
    background: ${props => props.theme[props.color]};
  `};
  color: #fff;
  outline: none;
  &:hover {
    //background: ${props => (props.primary ? '#4d90fe' : '#4f9e67')};
    ${(props) => props.color && css`
      background: ${props => props.theme.hoverColor[props.color]};
    `};
    box-shadow: 0 1px 3px 1px rgba(52,168,83,0.15)
  }
`