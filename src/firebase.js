import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCnYW72dbGFfUkxIWPcJXajtO-ShAuyz5k",
  authDomain: "chatapp-a2493.firebaseapp.com",
  databaseURL: "https://chatapp-a2493.firebaseio.com",
  projectId: "chatapp-a2493",
  storageBucket: "chatapp-a2493.appspot.com",
  messagingSenderId: "865487249580"
};
firebase.initializeApp(config);

export default firebase;
