import { initializeApp,getApps, getApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCFqcs4lK1KNbUA9ij3Bh_3GR1-c2h0Lrg",
  authDomain: "pedalstart-951c0.firebaseapp.com",
  projectId: "pedalstart-951c0",
  storageBucket: "pedalstart-951c0.appspot.com",
  messagingSenderId: "419346707990",
  appId: "1:419346707990:web:31f63c737857beda63a737",
  measurementId: "G-Y32DK36HBV"
};


// Initialize Firebase
const app = !getApps().length? initializeApp(firebaseConfig):getApp();
const auth = getAuth(app)

export {app,auth}