import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

initializeApp({
		apiKey: "AIzaSyD4FKDN2a71BRctEpa1Va6fUBNVaFILTEM",
		authDomain: "react-shop-3c81d.firebaseapp.com",
		projectId: "react-shop-3c81d",
		storageBucket: "react-shop-3c81d.appspot.com",
		messagingSenderId: "511778435335",
		appId: "1:511778435335:web:38c0c01d4c1921402d15a2"
});

export const db = getFirestore()
