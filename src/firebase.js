import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAUrw0Q0ZOC10HFgu2TOhcSOt5ZQowS23E",
  authDomain: "todolist-7c42b.firebaseapp.com",
  projectId: "todolist-7c42b",
  storageBucket: "todolist-7c42b.appspot.com",
  messagingSenderId: "860561568424",
  appId: "1:860561568424:web:07c7d5ead0a55dd768089d",
};

export const firebaseInstance = initializeApp(firebaseConfig);
export const authService = getAuth();
export const dbService = getFirestore();
export const storageService = getStorage();
