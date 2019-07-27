import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';
import { View, Text } from 'react-native';
import {
  APIKEY,
  AUTHDOMAIN,
  DBURL,
  PROJECTID,
  STORAGEBUCKET,
  MSGSENDID,

} from 'react-native-dotenv';

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
    console.log(firebase);
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <PaperProvider>
          <Router hideNavBar={true} />
        </PaperProvider>
      </Provider>
    );
  }
}

export default App;
