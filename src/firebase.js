

  import firebase from "firebase";

  const firebaseApp = firebase.initialzeApp({    
    apiKey: "AIzaSyCwQMW2OhaiBanU1En6IxxBnknp6YfuEdw",
    authDomain: "todo-app-87eb6.firebaseapp.com",
    projectId: "todo-app-87eb6",
    storageBucket: "todo-app-87eb6.appspot.com",
    messagingSenderId: "691630932666",
    appId: "1:691630932666:web:faf8c674e4ebf413fe7883",
    measurementId: "G-HSF0ZXMMSB"
  });

  const db = firebaseApp.firestore();