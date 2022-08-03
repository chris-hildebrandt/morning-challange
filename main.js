function palindrome(str) {
  let backword = ""
  for (let i = str.length - 1; i >= 0; i--) {
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

// single line solution
function reverseCheck(str) {
  return str == str.split('').reverse().join('')
}

console.log("javascript running");

//example:
// mostCommonLetter('hello') => 'l'
function mostCommonLetter(str) {
  // let duplicates = {char, frequency}
  let alphabet = {}
  for (i = 0; i < str.length; i++) {
    let letter = str[i]
    if (alphabet[letter]) {
      alphabet[letter]++
    } else {
      alphabet[letter] = 1
    }
  }
  let letters = []
  alphabet.forEach(letter => letters.push(letter[value]))
  letters.sort((a,b) => a-b)
  
}

function factorialize(num) {
  let factors = []
  for (i = 1; i <= num; i++) {
    if (num % i == 0) {
      factors.push(i)
    }
  }
  return (factors)
}

