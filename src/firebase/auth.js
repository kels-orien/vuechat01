import firebase from './index'

export function twitterAuth() {
  const provider = new firebase.auth.TwitterAuthProvider()
    // const result = auth().signInWithPopup(provider);
  return firebase.auth().signInWithPopup(provider).then((result) => {
    console.log('Auth worked!', result)
    this.$router.push('/chat')
  }, (error) => {
    console.log('Unable to auth', error)
  })
}
