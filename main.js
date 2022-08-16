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
  for (let i = 0; i < str.length; i++) {
    let letter = str[i]
    if (alphabet[letter]) {
      alphabet[letter]++
    } else {
      alphabet[letter] = 1
    }
  }
  let letters = []
  alphabet.forEach(letter => letters.push(letter['value']))
  letters.sort((a, b) => a - b)

}

function factorialize(num) {
  let factors = []
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      factors.push(i)
    }
  }
  return (factors)
}

function battleForMiddleEarth(strG, strE) {
  let arrG = strG.split(' ')
  let goodTeam = (Number(arrG[0] * 1) + (arrG[1] * 2) + (arrG[2] * 3) + (arrG[3] * 3) + (arrG[4] * 4) + (arrG[5] * 10))

  let arrE = strE.map(s => parseInt(s))
  let evilTeam = (parseInt(arrE[0]) + (arrE[1] * 2) + (arrE[2] * 2) + (arrE[3] * 2) + (arrE[4] * 3) + (arrE[5] * 5) + (arrE[6] * 10))
  if (evilTeam > goodTeam) {
    return "evil team wins"
  } else if (evilTeam = goodTeam) {
    return "tie"
  } else {
    return "good team wins!"
  }
}

function betterMethod(strG, strE) {

  let goodSide = [1, 2, 3, 3, 4, 10]
  let badSide = [1, 2, 2, 2, 3, 5, 10]

  let goodTotal = 0

  for (let i = 0; i < strG.length; i++) {
    let troopType = strG[i]
    let multiplier = goodSide[i]
    goodTotal += troopType * multiplier
  }

  let badTotal = 0
  badSide.forEach((t, i) => { badTotal += strE[i * t] })
}

function phoneBill() {
  let bubbles = 91.44 + 46.92
  let dan = 46.65 + 36.54
  let chris = 55.25 + 88.31
  let total = chris + dan + bubbles
  return total
}

function isTriangle(num1, num2, num3) {
  if (num1 > num2 + num3) {
    return "false"
  }
  else if (num2 > num1 + num3) {
    return "false"
  }
  else if (num3 > num1 + num2) {
    return "false"
  } else {
    return "true"
  }

  let option1 = num1 + num2
  let option2 = num2 + num3
  let option3 = num3 + num1

  if (option1 >= num3 && option2 >= num2 && option3 >= num1) {
    return true
  } return false
}

function isTriangleBetter(num1, num2, num3,){
  if (Math.min(num1, num2, num3)) {
    return
  }
}

// repeater code
function repeaterCode(arr) {
  let col = []
  for( let i = 0; i < arr[0].length; i++) {arr.forEach(str => col.push( str[i])) 
}
}
