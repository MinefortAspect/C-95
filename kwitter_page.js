firebase = {
    apiKey: "AIzaSyAcr9sA46UwbKDvgi65q5ifodMUxI-IDJQ",
    authDomain: "kwitter-page-copy.firebaseapp.com",
    projectId: "kwitter-page-copy",
    storageBucket: "kwitter-page-copy.appspot.com",
    messagingSenderId: "360917840996",
    appId: "1:360917840996:web:2a514dd38d3d44bb011b71"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0

    });

    document.getElementById("msg").value="";

}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}
