import {expect} from 'chai';
import {Map} from 'immutable'
import {reducer} from '../src/reducers/core.js';
import {authorize} from '../src/actions/LoginScreen.js'
import ReduxThunk from 'redux-thunk'
import configureStore from 'redux-mock-store'

describe('action creators',() => {
  it('authorize action dispatches LOGIN action if credentials correct',()=>{
    const middlewares = [ReduxThunk]
    const mockStore = configureStore(middlewares)
    const store = mockStore({});
    const user = 'test@test.com'

    //correct credentials
    return store.dispatch(authorize(user,'test11'))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0].user.W.email).is.eql(user)
    })
  })
})

describe('reducer',()=>{
  it('authorizes user if LOGIN is dispatched',()=>{
    const initalState = Map({ authorized: false, isAuthorizing: false })
    const finalState = Map({authorized: true, isAuthorizing: false, user: 'test@test.com' })
    const action = {type:'LOGIN', user:'test@test.com'}

    expect(reducer(initalState,action)).to.equal(finalState)
  })
})
