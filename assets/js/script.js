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
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
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


  // Validate at least one character type is selected 

  if (!incLudeLowercase && !incLudeUppercase && !incLudeNumeric && !incLudeSpecial) { 

    alert("Please select at least one character type."); 

    return ""; 

  } 

// Add value of defined character values (if preceding statement is truthy) to the end of the allChars value

  if (incLudeLowercase) allChars += lowercaseChars;
  if (incLudeUppercase) allChars += uppercaseChars;
  if (incLudeNumeric) allChars += numericChars;
  if (incLudeSpecial) allChars += specialChars;



}