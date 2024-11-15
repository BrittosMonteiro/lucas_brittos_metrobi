// Questions 4 - Check if bracket string is correct
const brackets = {
  "(": ")",
  "[": "]",
  "{": "}",
  ")": "(",
  "]": "[",
  "}": "{",
};

const checkBracketsString = (value) => {
  if (!arrayLengthEven(value)) return false;
  
  const reversed = reverseString(value)

  for (i = 0; i < value.length; i++) {
    const currentChar = value.charAt(i);
    const currentRevChar = reversed.charAt(i);
    if (brackets[currentChar] != currentRevChar) return false;
  }

  return true;
};

const arrayLengthEven = (value) => value.length % 2 == 0;

const reverseString = (value) => {
  let reversedValue = value;
  const reversed = reversedValue.split("").reverse().join("");
  return reversed
}

const bracketString1 = checkBracketsString("{[]}");
const bracketString2 = checkBracketsString("{(])}");
const bracketString3 = checkBracketsString("{([)]}");
console.log(bracketString1);
console.log(bracketString2);
console.log(bracketString3);
