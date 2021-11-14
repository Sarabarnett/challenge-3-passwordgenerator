// Assignment code here
//1st- button is clicked to generate password
  //select desired criteria (pop up windows)
    //length (8-128 characters) 
    //confirm special characters
    //confirm numeric characters
    //confirm uppercase
    //confirm lowercase
  //display password with given criteria in box


  //declare characters that can be included
  const special = "!#$%&'()*+,-./:;<=>?@[]/^_`{|}~";
  const num = "0123456789";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var generatePassword = function() {
    //ask how long they would like their password
    var passwordLength = window.prompt("How long would you like your password to be? Choose 8-128 characters.");
    if (passwordLength < 8) {
      window.alert("That is too short! Please enter a number between 8-128.");
      generatePassword();
    }
    else if (passwordLength > 128) {
      window.alert("That is too long! Please enter a number between 8-128.")
      generatePassword();
    }

    // return passwordLength;


    //confirm special characters
    var specialCharacter = window.confirm("Click OK to include special characters.");
      if (specialCharacter === true) {
        specialCharacter=special;
      }
      else if (specialCharacter === false) {
        specialCharacter="";
      }

      //confirm numberic characters
      var numeric = window.confirm ("Click OK to include numeric characters.");
      if (numeric === true) {
        numeric = num;
      }
      else if (numeric === false) {
        numeric = "";
      }

      var lowerCase = window.confirm("Click OK to include lowercase characters.");
      if (lowerCase === true) {
        lowerCase = lower;
      }
      else if (lowerCase === false) {
        lowerCase = "";
      }

      var upperCase = window.confirm("Click OK to include uppercase characters.");
      if (upperCase === true) {
        upperCase = upper;
      }
      else if (upperCase === false) {
        upperCase = "";
      }

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