// Problem 1 f(x) Declaration
function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

// console.log(maxOfTwoNumbers(15, 7));

// Problem 2 f(x) Expression
const maxOfThree = function (x, y, z) {
  if (x > y && x > z) {
    return x;
  } else if (y > x && y > z) {
    return y;
  } else if (z > x && z > y) {
    return z;
  }
};

console.log(maxOfThree(4, 9, 7));

// Problem 3 f(x) Declaration

function isCharAVowel(char) {
  if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
    return true;
  } else {
    return false;
  }
}
console.log(isCharAVowel("a"));

// Problem 4 f(x) Expression
const sumArray = function ([x, y, z]) {
  return x + y + z;
};
console.log(sumArray([2, 4, 5]));

// Problem 5 f(x) Declaration
function multiplyArray([x, y, z]) {
  return x * y * z;
}
console.log(multiplyArray([2, 4, 5]));

// Problem 6 f(x) Expression
const numArgs = function (x, y, z) {
  return numArgs.length;
};
console.log(numArgs.length);

// Problem 7 f(x) Declaration
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("rockstar"));

// Problem 8 f(x) Expression
const longestStringInArray = function ([str]) {
  return longestStringInArray.length;
};
console.log(longestStringInArray.length);

// Problem 9 f(x) Declaration
function stringsLongerThan([a, b, c, d, e], x) {
  return stringsLongerThan.length;
}
console.log(stringsLongerThan(["hello", "I", "am", "Morning", "Nice"], 4));

// Problem 10 f(x) Expression
const addList = function (x, y, z) {
  if ((x, y, z in addList)) {
    return x + y + z;
  } else {
    return 0;
  }
};
console.log(addList());
