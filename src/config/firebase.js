import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "Sua Chave Secreta",
    authDomain: "Seu dominio.com",
    databaseURL: "https://seu dominio.firebaseio.com",
    projectId: "clonenetflix-a2123",
    storageBucket: "clonenetflix-a2123.appspot.com",
    messagingSenderId: "828410679962",
    appId: "1:828410679962:web:9952f77b93e4a6acb90523"
  };
  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
