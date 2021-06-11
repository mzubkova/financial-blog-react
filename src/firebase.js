import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAvppgebG2dy8sY7ftPzmJiQ401e0Y5BDM",
  authDomain: "react-financial-blog.firebaseapp.com",
  projectId: "react-financial-blog",
  storageBucket: "react-financial-blog.appspot.com",
  messagingSenderId: "27907592060",
  appId: "1:27907592060:web:7c61aaddcd9748aeb2def9",
  measurementId: "G-9RM4E8M304",
};

firebase.initializeApp(config);

export default firebase;
