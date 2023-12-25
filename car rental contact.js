const firebaseConfig = {
    apiKey: "AIzaSyBKSr0QcoUxv_ZLACJhuNsk7OkBO70wIks",
    authDomain: "carcontact-77eaf.firebaseapp.com",
    databaseURL: "https://carcontact-77eaf-default-rtdb.firebaseio.com",
    projectId: "carcontact-77eaf",
    storageBucket: "carcontact-77eaf.appspot.com",
    messagingSenderId: "865290928829",
    appId: "1:865290928829:web:b20117e393cbdf4d462dd4",
    measurementId: "G-FRE35Q455B"
  };
  
  //initialize database
  firebase.initializeApp(firebaseConfig);
  
  //reference database
  var register_pageDB = firebase.database().ref("contact-form");
  
  document.getElementById('contact-form').addEventListener("submit",submitform);
  
  function submitform(e) {
    e.preventDefault();
  
    var name = getElementByVal('name');
    var email = getElementByVal('email');
    var message = getElementByVal('message');
  
    saveMessages(name, email, message);
  
    //enable alert
    document.querySelector('.alert').style.display = "block";
  
    //remove alert
    setTimeout(() => {
      document.querySelector('.alert').style.display = "none";
    }, 3000);
  
    //reset the form
    document.getElementById('contact-form').reset();
  }
  
  const saveMessages = (name, email, message) => {
    var newRegForm = register_pageDB.push();
  
    newRegForm.set({
      name: name,
      email: email,
      message: message,
    });
  };
  
  const getElementByVal = (id) => {
    return document.getElementById(id).value;
  };
  