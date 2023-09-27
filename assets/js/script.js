// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  // All variables possible for password generation
  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChar = "0123456789";
  var specialChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  // Defined as empty string to store data based on users choice
  var allChars ="";
  var password ="";
  // Prompts user to enter number between 8-128 for password length
  var length = prompt("Enter a password length between 8 and 128");
  if (length <8 || length>128){
    alert("Invalid length. Please enter a number between 8 and 128")
    return ""
  }
  // Asks user to confrim which characters they would like to include in their password
  var incLudeLowercase = confirm("Include lowercase characters?");
  var incLudeUppercase = confirm("Include uppercase characters?");
  var incLudeNumeric = confirm("Include numeric characters?");
  var incLudeSpecial = confirm("Include special characters?");






}