import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8agOOdEHvqw5fq5t187mhWcrjXLA5tLY",
  authDomain: "herbalife-api.firebaseapp.com",
  projectId: "herbalife-api",
  storageBucket: "herbalife-api.appspot.com",
  messagingSenderId: "558922481316",
  appId: "1:558922481316:web:c1d7b60b4bf8265e96f031",
  measurementId: "G-JJ20R8X7WW",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)

export { db, auth };
