import firebase from "firebase/app"
import "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyAvXXYDmw5IKJP-Ok3_oMWuI88qC8Oup1k",
  authDomain: "chat-app-6f94a.firebaseapp.com",
  databaseURL: "https://chat-app-6f94a.firebaseio.com",
  projectId: "chat-app-6f94a",
  storageBucket: "",
  messagingSenderId: "149109708516",
  appId: "1:149109708516:web:e0317c46a0f9dbbe",
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
