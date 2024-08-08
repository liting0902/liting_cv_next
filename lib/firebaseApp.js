import { initializeApp } from "firebase/app";

const firebaseConfig = process.env.FIREBASE_CONFIG;
const fireApp = initializeApp(process.env.FIREBASE_CONFIG);
export default fireApp;
// const firebase = require('firebase/app');
// const firebaseConfig = process.env.FIREBASE_CONFIG;
// module.exports = firebase.initializeApp(firebaseConfig);
