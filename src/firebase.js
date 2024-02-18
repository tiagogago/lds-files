import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCp0kWLuh-JUt8zrZ2hNx2vlHTlsPPPGZ4",
  authDomain: "projetolds123.firebaseapp.com",
  projectId: "projetolds123",
  storageBucket: "projetolds123.appspot.com",
  messagingSenderId: "532575392762",
  appId: "1:532575392762:web:7baf43712a62bc2aa00a43",
};

export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
