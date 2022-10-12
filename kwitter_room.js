firebase = {
  apiKey: "AIzaSyCReFyxpFrTrvIGOuPG2tN7uTVjbNuPZuk",
  authDomain: "kwitter-room-4d323.firebaseapp.com",
  projectId: "kwitter-room-4d323",
  storageBucket: "kwitter-room-4d323.appspot.com",
  messagingSenderId: "682776954908",
  appId: "1:682776954908:web:1348c78fcb8489fe4af7d9",
  measurementId: "G-96HJ92FVFQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
