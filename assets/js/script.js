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

      //convert password length from string to integer
      passwordLength = parseInt(passwordLength);
      console.log(passwordLength);


    //confirm special characters
    var specialCharacterConfirm = window.confirm("Click OK to include special characters.");
      if (specialCharacterConfirm === true) {
        specialCharacterConfirm = special;
      }
      else if (specialCharacterConfirm === false) {
        specialCharacterConfirm= "";
      }


      //confirm numeric characters
      var numericConfirm = window.confirm ("Click OK to include numeric characters.");
      if (numericConfirm === true) {
        numericConfirm = num;
      }
      else if (numericConfirm === false) {
        numericConfirm = "";
      }
      

      //confirm lowercase characters
      var lowerCaseConfirm = window.confirm("Click OK to include lowercase characters.");
      if (lowerCaseConfirm === true) {
        lowerCaseConfirm = lower;
      }
      else if (lowerCaseConfirm === false) {
        lowerCaseConfirm = "";
      }
      

      //confirm uppercase characters
      var upperCaseConfirm = window.confirm("Click OK to include uppercase characters.");
      if (upperCaseConfirm === true) {
        upperCaseConfirm = upper;
      }
      else if (upperCaseConfirm === false) {
        upperCaseConfirm = "";
      }

      //concantenate variables for selected criteria characters
      var selectedCriteria = specialCharacterConfirm.concat(numericConfirm, lowerCaseConfirm, upperCaseConfirm);
      console.log(selectedCriteria);

      //create new array where generated characters will be stored
      var generatedPassword = new Array();

      //for loop to assign each length index a character
      for(var i=0; i < passwordLength; i++) {
        
        var character = selectedCriteria.charAt(
          Math.floor(Math.random() * selectedCriteria.length)
        );
          generatedPassword.push(character);
      };

      return generatedPassword.join('');

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