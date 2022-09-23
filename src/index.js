import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';


import {createTheme, ThemeProvider} from '@mui/material/styles';
// --color1: #f8b8bf;
// --color2: #f8cbad;
// --color3: #124a7a;
// --color4: #158a96;
// --color5: #54d3c2;
const theme = createTheme({
  palette: {
    primary: {
      main: '#124a7a',
      contrastText: '#54d3c2',
    },
    secondary: {
      main: '#124a7a',
      contrastText: '#f8cbad'
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
