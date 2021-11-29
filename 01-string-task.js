"use strict";

//  !Returns the result of concatenation of two strings.
const concarenateString = (v1, v2) => v1 + v2;

console.log(concarenateString("aa", "cc"));
console.log(concarenateString("aa", ""));
console.log(concarenateString("", "eqew"));

//! Returns the length of given string.

const getStringLength = (value) => value.length;
console.log(getStringLength("Jasur Olimjonov"));

// ! Returns the result of string template and given parameters firstName and lastName.Please do not use concatenation, use template string :

const getStringFromTemplate = (firstName, secondName) =>
  `Hello Mr ${firstName} ${secondName}! How are you doing today?`;
console.log(getStringFromTemplate("Jasur", "Olimjonov"));

// ! Extracts a name from template string 'Hello, First_Name Last_Name!'.

const extractNameFromTemplate = (value) => `Hello${value}`;
console.log(extractNameFromTemplate("Jasur Olimjonov").substring(5, 21));

// !Returns a first char of the given string.

const getFirstChar = (value) => value[0];
console.log(getFirstChar("Jasur"));

// ! Removes a leading and trailing whitespace characters from string.

const removeLeadingAndTrailingWhitespaces = (value) => value.trim();
console.log(removeLeadingAndTrailingWhitespaces("    Olimojnov"));

// ! * Returns a string that repeated the specified number of times.

const repeatString = (value, count) => value.repeat(count);
console.log(repeatString("Jasur", 5));

// ! Remove the first occurrence of string inside another string;
function removeFirstOccurrences(str, value) {
  let index = str.indexOf(value);
  return str.slice(0, index) + str.slice(index + value.length);
}
console.log(removeFirstOccurrences("He is not the best one", "best"));
//  ! Remove the first and last angle brackets from tag string

const unbracketTag = (str) => str.slice(1, -1);
console.log(unbracketTag("<divdsdsds>"));

//! Converts all characters of the specified string into the upper case

const convertToUpperCase = (str) => str.toUpperCase();
console.log(convertToUpperCase("jasur olimojnov"));

// ! Extracts e-mails from single string with e-mails list delimeted by semicolons

const extractEmails = (str) => str.split(";");
console.log(
  extractEmails(
    "jasurolimjonov23@mail.ru;jasur.olimjonov1@s.ammity.edu; dafasfasafs;fasfasfsa"
  )
);

// !Returns the string representation of rectangle with specified width and height using pseudograhic chars
const getRectangle = (width, height) => {
  let topLine = "┌" + "─".repeat(width) + "┐\n";
  let middleLine = "│" + " ".repeat(width) + "│\n";
  let downLine = "└" + "─".repeat(width) + "┘\n";
  return topLine + middleLine.repeat(height) + downLine;
};

console.log(getRectangle(10, 5));
console.log(getRectangle(12, 5));

// ! Encode specified string with ROT13 cipher;

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const encodeToRot13 = (str) => {
  let accumulator = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const isALetter = alphabet.includes(char);

    if (isALetter === false) {
      accumulator += char;
    } else {
      const charIndex = alphabet.findIndex((c) => c === char);
      accumulator += alphabet[charIndex + 13] || alphabet[charIndex - 13];
    }
  }
  return accumulator;
};
console.log(encodeToRot13("HELLO"));

//  ! Returns true if the value is string; otherwise false.
const isString = (value) => (typeof value === "string" ? true : false);
console.log(isString("Jasur"));

