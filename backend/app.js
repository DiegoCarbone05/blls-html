import firebase from "firebase/app";
import "firebase/firestore";
const express = require('express')
const app = express()
const firebaseConfig = {
    apiKey: "AIzaSyBP8zycIUzI067ph0QHAmJkWq5InjG8Ois",
    authDomain: "meet-konnect.firebaseapp.com",
    projectId: "meet-konnect",
    storageBucket: "meet-konnect.appspot.com",
    messagingSenderId: "759559330802",
    appId: "1:759559330802:web:8f257e7054bb60dd77a96b"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)