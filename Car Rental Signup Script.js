

function visibility() {
    let passwordInput = document.getElementById("passwordInput");
    let eyeStyle= document.getElementById("visibilityBtn");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeStyle.style.color = "rgb(0, 162, 255)";
    } else {
        passwordInput.type ="password";
        eyeStyle.style.color = "rgb(116, 116, 116)";
    }
}



function showMessage() {
    document.getElementById('overlay').style.display = 'flex';
  }

  // JavaScript to hide the overlay and message box
  function hideMessage() {
    document.getElementById('overlay').style.display = 'none';
  }


  const firebaseConfig = {
    apiKey: "AIzaSyADGTXtQeTppVV3MRoIH5Kvqwiy6G6CjeA",
    authDomain: "carregister-e906e.firebaseapp.com",
    databaseURL: "https://carregister-e906e-default-rtdb.firebaseio.com",
    projectId: "carregister-e906e",
    storageBucket: "carregister-e906e.appspot.com",
    messagingSenderId: "722158710457",
    appId: "1:722158710457:web:7c18abb53ffd4f88b6b568",
    measurementId: "G-TKKE7425VF"
  };


  //initialize database
  firebase.initializeApp(firebaseConfig);
  
  //reference database
  var register_pageDB = firebase.database().ref("contact");
  
  document.getElementById('contact').addEventListener("overlay",submitform);
  
  function submitform(e) {
    e.preventDefault();
  
    var name = getElementByVal('name');
    var email = getElementByVal('email');
    var paswd = getElementByVal('paswd');
  
    saveMessages(name, email, paswd);
  
    //enable alert
    document.querySelector('.alert').style.display = "block";
  
    //remove alert
    setTimeout(() => {
      document.querySelector('.alert').style.display = "none";
    }, 3000);
  
    //reset the form
    document.getElementById('contact').reset();
  }
  
  const saveMessages = (name, email, paswd) => {
    var newRegForm = register_pageDB.push();
  
    newRegForm.set({
      name: name,
      email: email,
      paswd: paswd,
    });
  };
  
  const getElementByVal = (id) => {
    return document.getElementById(id).value;
  };
  