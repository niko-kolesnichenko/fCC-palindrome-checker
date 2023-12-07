/*
palindrome("eye") should return true.
palindrome("_eye") should return true.
palindrome("race car") should return true.
palindrome("not a palindrome") should return false.
palindrome("A man, a plan, a canal. Panama") should return true.
palindrome("never odd or even") should return true.
palindrome("nope") should return false.
palindrome("almostomla") should return false.
palindrome("My age is 0, 0 si ega ym.") should return true.
palindrome("1 eye for of 1 eye.") should return false.
palindrome("0_0 (: /-\ :) 0-0") should return true.
palindrome("five|\_/|four") should return false.
*/

// Finished solution
function palindrome(str) {
    let regex_pattern = /[^A-Za-z0-9]/g;
    let comparison_string = str.replace(regex_pattern, "").toLowerCase();
    let reversed_comparison_string = comparison_string.split("").reverse().join("");
  
    if (comparison_string === reversed_comparison_string) {
      return true;
      } else return false;  
  }
  
console.log(palindrome("five|\_/|four"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("0_0 (: /-\ :) 0-0"));

// Thinking history
/*
let test_str = "five|\_/|four";
let regex_pattern = /[^A-Za-z0-9]/g;

let comparison_string = test_str.replace(regex_pattern, "").toLowerCase();
let reversed_comparison_string = comparison_string.split("").reverse().join("");

if (comparison_string === reversed_comparison_string) {
    console.log("Hurray!")
} else console.log("Whooops...")

console.log(comparison_string);
console.log(reversed_comparison_string);
*/