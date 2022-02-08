import { initializeApp } from "firebase/app";
const firebaseConfig = process.env.FIREBASE_CONFIG;
export default initializeApp(firebaseConfig);
