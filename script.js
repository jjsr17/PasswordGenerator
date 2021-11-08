// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword() {
//check for paramaters
//go through for loop where length is isLength
//populate length of password via accepted parameters
//return password
let password ="";
let characters = "";
let isLowerCase;
let isUpperCase;
let isNumber;
let isSpecial;

let passwordLength = parseInt(prompt("Choose Length of password (8 - 128 characters)"));
if(Number.isNaN(passwordLength)){
  alert("Password Length must be an interger, please try again");
  return "Password Length must be an interger, please try again ";
}
  if(passwordLength < 8 || passwordLength > 128){
    alert("Length not valid.Length must be between 8 and 128, please try again")
    return "Length not valid.Length must be between 8 and 128, please try again";
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
  if (isLowerCase != "Y"  && isUpperCase != "Y" && isNumber != "Y"  && isSpecial != "Y" )
  {
    alert("You must at least have one type of character available, please try again")
    return "You must at least have one type of character available, please try again";
  }
  console.log("characters",characters);
  for ( var i  = 0; i < passwordLength;i++){
    //populate password
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
      );

  }
  return password;
}
// Add event listener to generate button
//generateBtn.addEventListener("click", passwordPrompt);
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);




