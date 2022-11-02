import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3i7RJOxhY4-viCJRymBLxl9tPJpMaBQE",
  authDomain: "vocablery-17169.firebaseapp.com",
  databaseURL: "https://vocablery-17169-default-rtdb.firebaseio.com",
  projectId: "vocablery-17169",
  storageBucket: "vocablery-17169.appspot.com",
  messagingSenderId: "811474216942",
  appId: "1:811474216942:web:f027afe06e2334e80b10ff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
