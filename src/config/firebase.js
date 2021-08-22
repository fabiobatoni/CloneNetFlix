import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCZmtTA-UZ1Z55n6tgFVpB3qmu0AxRIWF4",
    authDomain: "clonenetflix-a2123.firebaseapp.com",
    databaseURL: "https://clonenetflix-a2123.firebaseio.com",
    projectId: "clonenetflix-a2123",
    storageBucket: "clonenetflix-a2123.appspot.com",
    messagingSenderId: "828410679962",
    appId: "1:828410679962:web:9952f77b93e4a6acb90523"
  };
  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);