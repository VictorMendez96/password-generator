// Assignment code here

// Assigned Variables to all desired options for the password
var nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", ",", "<", ">", "?"]

function generatePassword() {
  var charsToUse = [];

  //Ask User if they would like to include numbers in their password
  var 

  //Ask User if they would like to include lower case letters in their password
  var

  //Ask User if they would like to include upper case letters in their password
  var

  //Ask User if they would like to include special characters in their password
  var

  //Ask User for desired password length
  var 

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
