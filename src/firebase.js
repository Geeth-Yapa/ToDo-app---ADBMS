import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgFrlMC_tQsHVKgvKJE5xCJMeFl_exkHU",
  authDomain: "adbms-crud-d5c1c.firebaseapp.com",
  projectId: "adbms-crud-d5c1c",
  storageBucket: "adbms-crud-d5c1c.appspot.com",
  messagingSenderId: "720566490676",
  appId: "1:720566490676:web:9e671c681217614ac59c61",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
