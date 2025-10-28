import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPRBv2rWW3pPSvugNR5HZHaIHXfFZQJu4",
  authDomain: "owta-verify.firebaseapp.com",
  projectId: "owta-verify",
  storageBucket: "owta-verify.appspot.com",
  messagingSenderId: "1029432331945",
  appId: "1:1029432331945:web:15f5ca80d7d4bc924b63b8",
  measurementId: "G-M2B483K33C",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
