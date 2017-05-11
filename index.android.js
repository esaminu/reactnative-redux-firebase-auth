import React, { Component } from 'react';
import {Map} from 'immutable'
import {Provider,connect} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {createLogger,logger} from 'redux-logger'
import {createStore, applyMiddleware} from 'redux'
import {reducer} from './src/reducers/core.js'
import {authorize} from './src/actions/LoginScreen.js'
import { Container, Header, Left, Body, Right, Title, Content,Form,Item,Input,Button, Spinner } from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';


const RegLogin = (props,{store}) => {
  return (
    <Content>
      <Form>
          <Item>
              <Input placeholder="Username" onChangeText={text=>store.dispatch({type:'USER_FIELD_CHANGED',text})}></Input>
          </Item>
          <Item last>
              <Input placeholder="Password" onChangeText={text=>store.dispatch({type:'PASS_FIELD_CHANGED',text})} />
          </Item>
          <Button primary full onPress={()=>store.dispatch(authorize(store.getState().get('userField'),store.getState().get('passField')))}><Text> Login </Text></Button>
          <Button info full><Text> Register </Text></Button>
      </Form>
    </Content>
  )
}

RegLogin.contextTypes = {
  store: React.PropTypes.object
};

let Screen = ({authorized, isAuthorizing}) => {
  console.log(isAuthorizing)
  if (authorized) {

      return (
        <Container>
          <Header>
            <Left/>
            <Body>
                <Title>Home</Title>
            </Body>
            <Right />
          </Header>
        </Container>
      );


    }

  else {
    if(isAuthorizing) {
      return (
        <Container>
          <Header>
            <Left/>
            <Body>
                <Title>Login</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <Spinner />
          </Content>
        </Container>
      );
    } else {
      return (
        <Container>
          <Header>
            <Left/>
            <Body>
                <Title>Login</Title>
            </Body>
            <Right />
          </Header>
          <RegLogin />
        </Container>
      );
    }
  }
}

const mapStateToProps = (state) => {
	return {
		authorized: state.get('authorized'),
    isAuthorizing: state.get('isAuthorizing')
	};
}
Screen = connect(mapStateToProps)(Screen)

export default class ChatApp extends Component {
  render() {
    const store = createStore(reducer,Map({}),applyMiddleware(ReduxThunk,createLogger({
    collapsed: true,
    stateTransformer: state => state.toJS()
  })));
    return (
      <Provider store={store}>


              <Screen />


      </Provider>
    );
  }
}


{/* const mapStateToProps = (state) => {
  return {
    authorizing: state.isAuthorizing,
    authorized: state.authorized
  }
}

const ChatApp = connect(
  mapStateToProps
)(ChatApp) */}

AppRegistry.registerComponent('ChatApp', () => ChatApp);
