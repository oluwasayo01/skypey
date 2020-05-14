import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar'
import Main from './components/main/Main'
import store from './components/store'
import _ from 'lodash'
import { ThemeProvider } from 'styled-components'

function App() {
  const { contacts } = store.getState()
  const theme = {color: "white"}
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Sidebar contacts={_.values(contacts)}/>
        <Main/>
      </div>
    </ThemeProvider>
  );
}

export default App;
