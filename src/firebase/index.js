import firebase from 'firebase'

export const config = {
  apiKey: 'Your apiKey here',
  authDomain: 'Your authDomain here',
  databaseURL: 'Your databaseURL here',
  projectId: 'Your projectId here',
  storageBucket: '',
  messagingSenderId: 'Your messagingSenderId here'

}

firebase.initializeApp(config)

var firebaseRef = firebase.database().ref()
export default firebase
export var chatRef = firebaseRef.child('chat')
