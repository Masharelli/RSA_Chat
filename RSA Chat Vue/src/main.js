import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import firebase from "firebase";

// Required for side-effects
require("firebase/firestore");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBvB8JgC47oBBti4RacczQa-tPN10HYwQY",
  authDomain: "chatmatescompus.firebaseapp.com",
  databaseURL: "https://chatmatescompus.firebaseio.com",
  projectId: "chatmatescompus",
  storageBucket: "chatmatescompus.appspot.com",
  messagingSenderId: "1091114788266",
  appId: "1:1091114788266:web:c69363e20a0dae094df7d3",
  measurementId: "G-5VDNTZYKW2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

window.db = db;

db.settings({
  timestampsInSnapshots: true
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
