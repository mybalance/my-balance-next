import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC8dJc_F_xTMYYeQc_oZ5VbLmQe6zQliOs",
  authDomain: "mybalance-marketing.firebaseapp.com",
  projectId: "mybalance-marketing",
  storageBucket: "mybalance-marketing.appspot.com",
  messagingSenderId: "748122988493",
  appId: "1:748122988493:web:af305f7062aa173523ae84",
  measurementId: "G-D3SEWE7DVQ"
};

const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebaseApp;