import React from 'react';
import styled, {
  ThemeProvider
} from 'styled-components';
import './App.css';
import Button from './elements/Button';

const theme = {
  // primary: '#188038',
  primary: '#007bff',
  secondary: '#6c757d',
  warning: '#ffc107',
  success: '#28a745 ',
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  hoverColor: {
    primary: '#0069d9',
    secondary: '#5a6268',
    warning: '#e0a800',
    success: '#218838',
  },
}



const H1 = styled.h1`
  font-size: ${props => props.theme.fontFamily};
 `

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <H1> Styled Components </H1>
        <form action="" >
          <Button color="primary"> Primary </Button>
          <Button color="secondary" > Secondary </Button>
          <Button color="warning" > Warning </Button>
          <Button color="success" > Secondary </Button>
        </form>
      </div>
    </ThemeProvider>
  );
}

export default App;