import firebase from "firebase/app"
import "firebase/database"

const {
  REACT_APP_API_KEY,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_DATABASE_URL,
  REACT_APP_PROJECT_ID,
  REACT_APP_MESSAGING_SENDER_ID,
  REACT_APP_APP_ID,
} = process.env

const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  databaseURL: REACT_APP_DATABASE_URL,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: "",
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID,
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export default database
/* Suggested data structure (see Firebase docs: Structure Your Database)
{
  members: {
    user1: true,
    user2: true,
    user3: true,
  },

  messages: {
    m1: {
      sender: "user2",
      message: "Hello, World!",
      timestamp: 1459361875337,
    },
  },
}
*/
