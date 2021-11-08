import firebase from "firebase";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAm3dR77IAkgohjiC94XR9ttzeyzZsZdGo",
  authDomain: "project-m9-1f45a.firebaseapp.com",
  projectId: "project-m9-1f45a",
  storageBucket: "project-m9-1f45a.appspot.com",
  messagingSenderId: "31957198428",
  appId: "1:31957198428:web:1b0495efcc39f10dc16899",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const database = app.firestore();
const storage = firebase.storage();

export { database, storage, app };
