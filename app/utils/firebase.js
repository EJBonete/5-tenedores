// import firabase from "firebase/compat/app"
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoxNAE7F6fcx9r9TRxdHX7JUbK-dzp2RU",
  authDomain: "tenedores-8c4ce.firebaseapp.com",
  projectId: "tenedores-8c4ce",
  storageBucket: "tenedores-8c4ce.appspot.com",
  messagingSenderId: "241151442551",
  appId: "1:241151442551:web:c66af3569d4ebb9d0bd072",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
