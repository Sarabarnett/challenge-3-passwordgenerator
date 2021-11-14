// Assignment code here
//1st- button is clicked to generate password
  //select desired criteria (pop up windows)
    //length (8-128 characters) 
    //confirm special characters
    //confirm numeric characters
    //confirm uppercase
    //confirm lowercase
  //display password with given criteria in box

  var generatePassword = function() {

  };


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);