import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDFUwIXyaqTWoiiyzf97-3xtK1tot-5qtk",
  authDomain: "gratify-55bbb.firebaseapp.com",
  projectId: "gratify-55bbb",
  storageBucket: "gratify-55bbb.appspot.com",
  messagingSenderId: "1043140776431",
  appId: "1:1043140776431:web:c7ad036bdc213dce2f261a",
  measurementId: "G-V388WVNFZJ"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);
export const auth = getAuth(firebaseApp);
