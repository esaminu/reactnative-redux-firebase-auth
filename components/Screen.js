import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Content,Form,Item,Input,Button, Spinner } from 'native-base';
import {Provider,connect} from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';
import {authorize} from '../src/actions/LoginScreen.js'

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
    if(isAuthorizing) {
      return (
        <Container>
          <Content>
            <Spinner />
          </Content>
        </Container>
      );
    } else {
      return (
        <Container>
          <RegLogin />
        </Container>
      );
    }
  }

const mapStateToProps = (state) => {
	return {
		authorized: state.get('authorized'),
    isAuthorizing: state.get('isAuthorizing')
	};
}
Screen = connect(mapStateToProps)(Screen)

export default Screen
