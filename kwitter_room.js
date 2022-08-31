var firebaseConfig = {

    apiKey: "AIzaSyA3dde7mw4Ovi7sr3_b6iMs6mYCnqPe77E",
  
    authDomain: "kwitter-62778.firebaseapp.com",
  
    databaseURL: "https://kwitter-62778-default-rtdb.firebaseio.com",
  
    projectId: "kwitter-62778",
  
    storageBucket: "kwitter-62778.appspot.com",
  
    messagingSenderId: "710619866656",
  
    appId: "1:710619866656:web:b6c800134d9d7d901dbe45",
  
    measurementId: "G-5J8C9VFZFM"
  
  };
  
  
  // Initialize Firebase
  
  firebase. initializeApp(firebaseConfig);
  
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="WELCOME...."+user_name+"!";
  
  function addRoom()
  {
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update(
      {
        purpose:"adding room name"
      }
    )
    localStorage.setItem("room_name",room_name)
    window.location="kwitter_page.html"
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    localStorage.setItem("room_name",name);
    window.location("kwitter_page.html")
  }
  
  function logout() 
  {
    window.location="index.html";
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
  }
  