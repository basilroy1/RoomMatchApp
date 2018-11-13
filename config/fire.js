import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBGobBA4FRWwN3_gIOYV770DWtxR3OAAQw",
    authDomain: "roommatch-f2355.firebaseapp.com",
    databaseURL: "https://roommatch-f2355.firebaseio.com",
    projectId: "roommatch-f2355",
    storageBucket: "roommatch-f2355.appspot.com",
    messagingSenderId: "776335086478"

}

const fire = firebase.initializeApp(config);

export default fire;