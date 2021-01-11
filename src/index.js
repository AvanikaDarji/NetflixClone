import React from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux";
import { GlobalStyles } from "./global-styles";
import { FirebaseContext } from "./context/firebase";
import App from "./App";
//import { seedDatabase } from "./seed";
var config = {
  apiKey: "AIzaSyB2Luit2AXD5X4J97Fkm09Lnvm8k9MeLvo",
  authDomain: "netfilxscrimba.firebaseapp.com",
  databaseURL: "https://netfilxscrimba-default-rtdb.firebaseio.com",
  projectId: "netfilxscrimba",
  storageBucket: "netfilxscrimba.appspot.com",
  messagingSenderId: "1074833080698",
  appId: "1:1074833080698:web:d95439e80ff028f361d6c3",
  measurementId: "G-JJ3E46Q53B"
};
const firebase = window.firebase.initializeApp(config);
//seedDatabase(firebase);
ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
