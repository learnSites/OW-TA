import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase.js";

export const setUpRecaptcha = (phoneNumber) => {
  if (!window.recaptchaVerifier) {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
      size: "invisible",
      callback: () => console.log("reCAPTCHA solved"),
    });
  }

  const appVerifier = window.recaptchaVerifier;
  return signInWithPhoneNumber(auth, phoneNumber, appVerifier);
};
