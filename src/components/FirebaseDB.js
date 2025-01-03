// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3uY4XrpCCqq-7Loya_LaKJkdZsWXD5TI",
  authDomain: "product-4fee3.firebaseapp.com",
  databaseURL: "https://product-4fee3-default-rtdb.firebaseio.com",
  projectId: "product-4fee3",
  storageBucket: "product-4fee3.firebasestorage.app",
  messagingSenderId: "263317671658",
  appId: "1:263317671658:web:f84e5fce4ca535e007d193",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
