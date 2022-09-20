// Assignment code here

// Assigned Variables to all desired options for the password
var nums = "1234567890"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialChar = "!@#$%^&*()_-+=?<>"

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
  console.log("Length: ", Length, "Include Numbers: ", incNums, "Include Lower Case: ", incLowerCase, "Include Upper Case: ", incUpperCase, "Include Special Characters: ", incSpecialChar)

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

  //Create string of characters user chooses
  var charsToUse = [];
  if(incNums){charsToUse += nums}
  if(incLowerCase){charsToUse += lowerCase}
  if(incUpperCase){charsToUse += upperCase}
  if(incSpecialChar){charsToUse += specialChar}

  //Console Log Character string for testing
  console.log(charsToUse)

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
