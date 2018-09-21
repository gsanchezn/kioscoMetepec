// Initialize Firebase
var config = {
  apiKey: "AIzaSyBe8WoMGUBOkQ5O3qzNhg9yiPEn3qnRBiA",
  authDomain: "kiosco-metepec.firebaseapp.com",
  databaseURL: "https://kiosco-metepec.firebaseio.com",
  projectId: "kiosco-metepec",
  storageBucket: "",
  messagingSenderId: "508895680399"
};
firebase.initializeApp(config);

var preObject = document.getElementById("object");
var dbRefObject = firebase
  .database()
  .ref()
  .child("object");
dbRefObject.on("value"), snap => console.log(snap.val());
