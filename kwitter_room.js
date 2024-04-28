
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBWgUZswdCSlmo-Co9D4m1Mm8PcKMpSlWc",
      authDomain: "kwitter-b2bfc.firebaseapp.com",
      databaseURL: "https://kwitter-b2bfc-default-rtdb.firebaseio.com",
      projectId: "kwitter-b2bfc",
      storageBucket: "kwitter-b2bfc.appspot.com",
      messagingSenderId: "563578355264",
      appId: "1:563578355264:web:0f0c5851a15a8b45b6a9a5"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;

       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
         window.location = "index.html";
}


function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"  
      });

          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_page.html";
}

