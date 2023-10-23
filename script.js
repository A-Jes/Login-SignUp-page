function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}


window.onload = function() {

  // Check for LocalStorage support.
  if (localStorage) {

    // Add an event listener for form submissions
    document.getElementById('form').addEventListener('submit', function(e) {
      // Get the value of the name field.
      var name = document.getElementById('name').value;
      var lastname = document.getElementById('lastname').value;
      var username = document.getElementById("username").value;
      var email = document.getElementById("email").value;
      var phonenumber = document.getElementById("phonenumber").value;
      var password = document.getElementById("password").value;

      // Save the name in localStorage.
      localStorage.setItem('name', name);
      localStorage.setItem('lastname', lastname)
      localStorage.setItem('username', username)
      localStorage.setItem('email', email)
      localStorage.setItem('phonenumber', phonenumber)
      localStorage.setItem('password', password)


      return false
    });

  }

}



// function myfunc(event) {
//   // event.preventDefault();

//   var name = document.getElementById("name").value;
//   var lastname = document.getElementById("lastname").value;
//   var username = document.getElementById("username").value;
//   var email = document.getElementById("email").value;
//   var phonenumber = document.getElementById("phonenumber").value;
//   var password = document.getElementById("password").value;

//   localStorage.setItem('name', name)
//   localStorage.setItem('lastname', lastname)
//   localStorage.setItem('username', username)
//   localStorage.setItem('email', email)
//   localStorage.setItem('phonenumber', phonenumber)
//   localStorage.setItem('password', password)

// }

