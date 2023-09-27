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
  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChar = "0123456789";
  var specialChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  var allChars ="";
  var password ="";

  var length = prompt("Enter a password length between 8 and 128");
  if (length <8 || length>128){
    alert("Invalid length.Please enter a number between 8 and 128")
    return ""
  }
}