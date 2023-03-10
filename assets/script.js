console.log("My JavaScript file is linked.");
// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  // variable stores password length based on user input
  let confirmLength = parseInt(
    prompt("How long do you want your password to be?")
    )

   if(isNaN(confirmLength) === true){
   alert("Password length must only include digits 0 to 9.");
    return;
   }
    
    if (confirmLength < 10 || confirmLength > 64){
      alert("Password must between 10 and 64 characters. \n\nSelect 'Generate password' to start again.");
      return;
    }
      /*
    } else if (confirmLength > 64){
      alert("Password must be 64 characters or fewer.");
      return;
    } else if (confirmLength < 10){
      alert("Password must be 10 characters or more.");
      prompt("How long do you want your password to be?");
    }*/
  
    let confirmNumber = 
    confirm("Would you like to include numbers?");
    
    let confirmLower = 
    confirm("Would you like to include lower case letters?");
    
    let confirmUpper = 
    confirm("Would you like to include upper case letters?");
    
    let confirmSpecial = 
    confirm("Would you like to include special characters?");

    if(confirmNumber === false &&
      confirmLower === false &&
      confirmUpper === false &&
      confirmSpecial === false){
        alert("You must select at least one type of character.\n\nSelect 'Generate password' to start again.");
        return;
      }

      let passwordOptions = {
        confirmLength: confirmLength,
        confirmNumber: confirmNumber,
        confirmLower: confirmLower,
        confirmUpper: confirmUpper,
        confirmSpecial: confirmSpecial
      }

     //console.log(passwordOptions);
     return passwordOptions;

}


// Function for getting a random element from an array
// Should return a value
function getRandom(arr) {
let randomIndex = Math.floor(Math.random() * arr.length);
let randomElement = arr[randomIndex];
return randomElement; 
}
//console.log(random, numericCharacters[random]);

// Function to generate password with user input
// Should return a value
function generatePassword() {
let options = getPasswordOptions();
console.log(options);
let result = []

let possibleCharacters = []

let guaranteedCharacters = []
// If the user selects numeric characters, this chooses random numbers from the numbers array
if(options.confirmNumber) {
  possibleCharacters = possibleCharacters.concat(numericCharacters);
  guaranteedCharacters.push(getRandom(numericCharacters))
}

console.log(possibleCharacters);
console.log(guaranteedCharacters);
// If the user selects lower cased characters, this chooses random letters from the lower cased characters array
if(options.confirmLower) {
  possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
  guaranteedCharacters.push(getRandom(lowerCasedCharacters))
}

console.log(possibleCharacters);
console.log(guaranteedCharacters);
// If the user selects upper cased characters, this chooses random letters from the upper cased characters array
if(options.confirmUpper) {
  possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
  guaranteedCharacters.push(getRandom(upperCasedCharacters))
}

console.log(possibleCharacters);
console.log(guaranteedCharacters);
// If the user selects special characters, this chooses random characters from the special characters array
if(options.confirmSpecial) {
  possibleCharacters = possibleCharacters.concat(specialCharacters);
  guaranteedCharacters.push(getRandom(specialCharacters))
}

console.log(possibleCharacters);
console.log(guaranteedCharacters);


for(index = 0; index < options.confirmLength; index++){
  var generated = getRandom(possibleCharacters);
  result.push(generated);
}

for(index = 0; index < guaranteedCharacters.length; index++){
  result[index] = guaranteedCharacters[index];
}

// Returns result onscreen
return result.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);