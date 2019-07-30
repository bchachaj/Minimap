import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

import {
  APIKEY,
  AUTHDOMAIN,
  DBURL,
  PROJECTID,
  STORAGEBUCKET,
  MSGSENDID,

} from 'react-native-dotenv';



const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // primary: '#B9F6CA',
    primary: '#33691E',
    // accent: 'yellow',
  },
  dark: true
};



class App extends Component {
  componentDidMount() {
    const config = {
      apiKey: APIKEY,
      authDomain: AUTHDOMAIN,
      databaseURL: DBURL,
      projectId: PROJECTID,
      storageBucket: STORAGEBUCKET,
      messagingSenderId: MSGSENDID
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <Router hideNavBar={true} />
        </PaperProvider>
      </Provider>
    );
  }
}

export default App;
// 