import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwmG8wkPFx_8o--5ElqVQckh787U0i3aY",
  authDomain: "gallery-3bc9c.firebaseapp.com",
  projectId: "gallery-3bc9c",
  storageBucket: "gallery-3bc9c.appspot.com",
  messagingSenderId: "217744462106",
  appId: "1:217744462106:web:b4183e45e6832d97955ca3",
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectfirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectfirestore, timestamp };
