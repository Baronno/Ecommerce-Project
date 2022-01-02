// always the one you need to import 
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const config = {
	apiKey: "AIzaSyBzsasQU2sxqsdSDQCmupCR5pb_1dCPiII",
	authDomain: "clothing-shopping.firebaseapp.com",
	projectId: "clothing-shopping",
	storageBucket: "clothing-shopping.appspot.com",
	messagingSenderId: "1029944208363",
	appId: "1:1029944208363:web:de6c1d74eda9af5fe007ae",
	measurementId: "G-5FVPPWQY2R"
};
// initialize the firebase function that we need
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;