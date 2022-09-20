// Assignment code here

// Assigned Variables to all desired options for the password
var nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", ",", "<", ">", "?"]

function generatePassword() {

  //Ask User for desired password length
  var Length = parseInt(prompt("Password Length? (8-128 characters)"))

  //Ask User if they would like to include numbers in their password
  var incNums = confirm("Include numbers in password?")

  //Ask User if they would like to include lower case letters in their password
  var incLowerCase = confirm("Include lower case letters in password?")

  //Ask User if they would like to include upper case letters in their password
  var incUpperCase = confirm("Include Upper case letters in password?")

  //Ask User if they would like to include special characters in their password
  var incSpecialChar = confirm("Include special characters?")


  //Console log for testing
  console.log(Length, incNums, incLowerCase, incUpperCase, incSpecialChar)

  //Verify user typed number within parameters
  if(isNaN(Length)==true || Length < 8 || Length > 128) {
    alert('Length must be between 8 and 128 characters. Try Again!')
    generatePassword()
  }

  //Verify user chose a type of character
  if(incNums == false && incLowerCase == false && incUpperCase == false && incSpecialChar == false) {
    alert('At least one character type must be chosen. Try Again!')
    generatePassword()
  }

  var charsToUse = [];
}

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
