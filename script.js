// Assignment Code
let generateBtn = document.querySelector("#generate");
let isLowerCase;
let isUpperCase;
let isNumber;
let isSpecial;
// Write password to the #password input


function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword() {
//check for paramaters
//go through for loop where length is isLength
//populate length of password via accepted parameters
//return password
let password ="";
let characters = "";
let passwordLength = prompt("Choose Length of password (8 - 128 characters)");
  if(passwordLength < 8 || passwordLength > 128){
    alert("Length not valid.")
  }else{
     firstSign = alert("Choose whether to include the following character types in your password.")
     isLowerCase = prompt("Will you include a lowercase letter? Answer: Y/N");
     isUpperCase = prompt("Will you include a uppercase letter? Answer: Y/N");
     isNumber = prompt("Will you include number? Answer: Y/N");
     isSpecial = prompt("Will you include special Character? Answer: Y/N")
  }
  //for password concatenation:
  if(isLowerCase === "Y"){
    characters = "abcdefghijklmnopqrstuvwxyz";
  }
  if(isUpperCase === "Y"){
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if(isNumber === "Y"){
    characters += "1234567890";

  }
  if(isSpecial === "Y"){
    characters += "!@#$%^&*()-_=+{[}]|\:;<,.>?/~`";
  }
  console.log("characters",characters);
  for ( var i  = 0; i < isLength;i++){
    //populate password

  }
  return password;
}
// Add event listener to generate button
//generateBtn.addEventListener("click", passwordPrompt);
generateBtn.addEventListener("click", writePassword);




