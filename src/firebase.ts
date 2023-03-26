import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDonkCM1rfTaHAJ5yJNVFiQ7IqdrxsIeCA",
  authDomain: "nonameauth.firebaseapp.com",
  projectId: "nonameauth",
  storageBucket: "nonameauth.appspot.com",
  messagingSenderId: "905288562432",
  appId: "1:905288562432:web:9af7104de8bfccda6725e5"
};

export const app = initializeApp(firebaseConfig);
