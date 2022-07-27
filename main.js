function palindrome(str) {
  let backword = ""
  for (let i = str.length-1; i >= 0; i--) {
    backword += str[i]
  }
  console.log(backword);
  if (str == backword) {
    console.log("it is a palindrome");
  } else {
    console.log("it is NOT a palindrome");
  }
}

// divide "str" by 2 and compare it to itself
function isPalindrome(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return "false"
    }
    return "true"
  }
}


console.log("javascript running");