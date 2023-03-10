import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth/react-native";

const firebaseConfig = {
  apiKey: "AIzaSyAlMf_j-4R5o3HX1Xbsq-IbczNRtyDvtGk",
  authDomain: "examen-90fe9.firebaseapp.com",
  projectId: "examen-90fe9",
  storageBucket: "examen-90fe9.appspot.com",
  messagingSenderId: "242714463231",
  appId: "1:242714463231:web:7e6232bfbb9a740c6835ca"
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app,{persistence: getReactNativePersistence(AsyncStorage)})