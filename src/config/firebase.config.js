import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";

const firebaseConfig = {
	// apiKey: "...",
	// authDomain: "...",
	// projectId: "react...",
	// storageBucket: "...",
	// messagingSenderId: "....",
	// appId: "....",
	// measurementId: "...",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let auth;
let db;

if (process.env.NODE_ENV === "development") {
	auth = getAuth();
	db = getFirestore();

	connectAuthEmulator(auth, "http://localhost:9099");
	connectFirestoreEmulator(db, "localhost", 8080);
} else {
	auth = getAuth(app);
	db = getFirestore(app);
}

export { auth, db };
