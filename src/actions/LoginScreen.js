import firebase from '../firebase'

export const authorize = (username, password) => (dispatch) => {
  dispatch({type:'AUTHING'});
    return firebase.auth().signInWithEmailAndPassword(username,password)
    .then(user => {
      dispatch({type:'LOGIN',user});
    })
    .catch(error=> {
      console.log(error)
      dispatch({type:'FAIL'});
    });
}
