import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import "./App.css";
import { auth, db } from "./config/firebase.config";

function App() {
	const handleLoginWithGoogle = () => {
		signInWithPopup(auth, new GoogleAuthProvider()).then((user) => {
			console.log(user);
		});
	};

	const addData = async () => {
		await setDoc(doc(db, "cities", "LA"), {
			name: "Los Angeles",
			state: "CA",
			country: "USA",
		});
		console.log("done");
	};

	return (
		<div className="App">
			<button onClick={handleLoginWithGoogle}>Login with Google</button>
			<button onClick={addData}>Add data firestore</button>
		</div>
	);
}

export default App;
