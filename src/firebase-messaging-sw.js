importScripts('https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCE2ptBzcUZaDm4iRFgYANl7N3c162G41w",
    authDomain: "house-3e00f.firebaseapp.com",
    databaseURL: "https://house-3e00f.firebaseio.com",
    projectId: "house-3e00f",
    storageBucket: "house-3e00f.appspot.com",
    messagingSenderId: "525633067901",
    appId: "1:525633067901:web:3dcaf25a0f02b7dc24ca14"
});

const messaging = firebase.messaging();