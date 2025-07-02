
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCXCqsABIJm2qBGN84urlr3HBJiJBxA66Q",
    authDomain: "wallpapers-zedana.firebaseapp.com",
    databaseURL: "https://wallpapers-zedana-default-rtdb.firebaseio.com",
    projectId: "wallpapers-zedana",
    storageBucket: "wallpapers-zedana.appspot.com",
    messagingSenderId: "236651943084",
    appId: "1:236651943084:web:fafb7b268e1281b06bbb09",
    measurementId: "G-K136QT2R8S"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);