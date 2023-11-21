import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9Un_X5WwzG-IsqiLyJgU9DP_Lm7gXlPo",
  authDomain: "taskm-app.firebaseapp.com",
  projectId: "taskm-app",
  storageBucket: "taskm-app.appspot.com",
  messagingSenderId: "616963290189",
  appId: "1:616963290189:web:ffbbe360f4858868209804",
};

firebase.initializeApp(firebaseConfig);

export default firebase;