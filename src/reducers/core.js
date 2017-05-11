import {Map} from 'immutable'

export const reducer = (state = Map({authorized: false, isAuthorizing:false}), action) => {
  switch(action.type) {
    case 'AUTHING': return state.set('isAuthorizing',true); break;
    case 'FAIL':
      return state.set('isAuthorizing',false);
      break;
    case 'LOGIN':
        return state.set('authorized',true).set('user',action.user).set('isAuthorizing',false)
      break;
    case 'USER_FIELD_CHANGED':
      return state.set('userField',action.text)
      break;
    case 'PASS_FIELD_CHANGED':
      return state.set('passField',action.text)
      break;
    default: return state
  }
}
