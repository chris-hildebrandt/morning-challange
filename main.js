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

console.log("javascript running");