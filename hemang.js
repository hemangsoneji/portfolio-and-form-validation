function validate() {
  var firstname = document.getElementById('fname');
  var middlename = document.getElementById('mname');
  var lastname = document.getElementById('lname');
  var email = document.getElementById('email');
  var mobilenumber = document.getElementById('number');
  var password = document.getElementById('pass');
  
  if (firstname.value.trim() == "" || firstname.value.trim() == null
    || firstname.value.trim().length < 3 || firstname.value.trim().length > 20) {
    alert("Please fill in First Name correctly.");
    return false;
    }
  else if (middlename.value.trim() == "" || middlename.value.trim() == null
    || middlename.value.trim().length < 3 || middlename.value.trim().length > 20) {
    alert("Please fill in Middle Name correctly.");
    return false;
  }
  else if (lastname.value.trim() == "" || lastname.value.trim() == null
    || lastname.value.trim().length < 3 || lastname.value.trim().length > 20) {
    alert("Please fill in Last Name correctly.");
    return false;
  }
  else if (email.value.trim() == "" || email.value.trim() == null) {
    alert("Please fill in Email correctly.");
    return false;
  }
  else if (mobilenumber.value.trim() == "" || mobilenumber.value.trim().length != 10
    || mobilenumber.value.trim() == null) {
    alert("Please fill in Mobile Number correctly.");
    return false;
  }
  else if (password.value.trim() == "" || password.value.trim() == null
    || password.value.trim().length < 5) {
    alert("A stronger password required.");
    return false;
  }
   else {
     return true;
   }
}
function validate1(){
  var firstname1 = document.getElementById('fname').value;
  var middlename1 = document.getElementById('mname').value;
  var lastname1 = document.getElementById('lname').value;
  var regx=/^[A-Za-z]+$/;
  
  if(regx.test(firstname1) || regx.test(middlename1) || regx.test(lastname1)){
    return true;
  }
  else{
    alert("Enter text correctly.")
  }
}

function validate2(){
  var regx1=/^[7-9]\d{9}$/;
  if(regx1.test(mobilenumber1)){
    return true;
  }
  else{
    alert("Enter number correctly.")
  }
}