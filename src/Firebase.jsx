import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvwxQoHLNKK_N2Be0T6Lr0RoYHPiNUlp0",
  authDomain: "shop-app-26778.firebaseapp.com",
  projectId: "shop-app-26778",
  storageBucket: "shop-app-26778.appspot.com",
  messagingSenderId: "358686129009",
  appId: "1:358686129009:web:8433268723b4e520f994d0",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
