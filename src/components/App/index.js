// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
import Search from 'src/containers/Search';
import theme from 'src/styles/materialUi/materialUiTheme/theme';
import { MuiThemeProvider } from '@material-ui/core';

// == Composant
const App = () => {
  console.log(theme);
  return (
    <MuiThemeProvider theme={theme}>
      <div id="app">
        <Search />
      </div>
    </MuiThemeProvider>
  );
};

// == Export
export default App;
