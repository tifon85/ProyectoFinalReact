// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCub0rmYqt2CUI43Wi5fj4Fwu87qPkCClU",
  authDomain: "ecommerce-nico-cd623.firebaseapp.com",
  projectId: "ecommerce-nico-cd623",
  storageBucket: "ecommerce-nico-cd623.appspot.com",
  messagingSenderId: "128390023833",
  appId: "1:128390023833:web:6ca883cae8bb408e1d0608"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); //crea la conexion a Firebase con mi api key

export const getFirestoreApp = () => {
    return app;
}