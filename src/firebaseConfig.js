import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASny7CkxQk_XX36fs_8R7x0Q4ZORkP0CY",
  authDomain: "proyecto-gimenez.firebaseapp.com",
  projectId: "proyecto-gimenez",
  storageBucket: "proyecto-gimenez.appspot.com",
  messagingSenderId: "1077030253223",
  appId: "1:1077030253223:web:6ff1eb9daf5962c9996182",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
