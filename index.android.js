import React, { Component } from 'react';
import {Map} from 'immutable'
import {Provider,connect} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {createLogger,logger} from 'redux-logger'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {reducer} from './src/reducers/core.js'
import {authorize} from './src/actions/LoginScreen.js'
import { Container, Header, Left, Body, Right, Title, Content,Form,Item,Input,Button, Spinner } from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';
import Router from './Router'
import * as firebase from 'firebase';
console.ignoredYellowBox = ['Warning: BackAndroid']

export default class ChatApp extends Component {
  render() {
    const store =
      createStore(reducer,Map({authorized: false, isAuthorizing:false}),applyMiddleware(ReduxThunk,createLogger({
        collapsed: true,
        stateTransformer: state => state.toJS()
      })));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ChatApp', () => ChatApp);
