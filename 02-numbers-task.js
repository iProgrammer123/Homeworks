//! Returns an area of a rectangle given by width and heigth.
const areaOfRectangle = (width, height) => width * height;
console.log(areaOfRectangle(5, 10));

// ! Returns a circumference of circle given by radius.
const getCicleCircumference = (radius) => 2 * 3.14 * radius;
console.log(getCicleCircumference(5));

// ! Returns an average of two given numbers.
const findAverageNum = (num1, num2) => (num1 + num2) / 2;
console.log(findAverageNum(15, 5));

// ! Returns a distance beetween two points by cartesian coordinates.
const getDistanceBetweenPoints = (x1, y1, x2, y2) => {
  return Math.sqrt((y1 - y2) ** 2 + (x1 - x2) ** 2);
};
console.log(getDistanceBetweenPoints(2, 6, 5, 10));

// !Returns a root of linear equation a*x + b = 0 given by coefficients a and b.
// const getLinearEquationRoot = (a, b) => {
//     return
// };
// ! This code is not compleated

// console.log(getLinearEquationRoot(5,0));

// !Returns an angle (in radians) between two vectors given by xi and yi, coordinates in Cartesian plane;

const getAngleBetweenVectors = (x1, y1, x2, y2) => {
  const a = (x1 ** 2 + y1 ** 2) ** (1 / 2);
  const b = (x2 ** 2 + y2 ** 2) ** (1 / 2);
  const c = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** (1 / 2);
  return Math.acos((a ** 2 + b ** 2 - c ** 2) / (2 * a * b)); 
};

console.log(getAngleBetweenVectors(1, 0, 0, 1));

// ! Returns a last digit of a integer number.
const getLastDigit = (value) => value % 10;
console.log(getLastDigit(431));

// ! Returns a number by given string representation.
const parseNumberFromString = (value) =>
  typeof value === "number" ? value : parseInt(value, 10);

console.log(parseNumberFromString(10));

// ! Returns a diagonal length of the rectangular parallelepiped given by its sides a,b,c.
const getParallelipedDiagonal = (a, b, c) => {
  return Math.sqrt(a**2 + b**2 + c**2);
}
console.log(getParallelipedDiagonal(1,2,3));

// ! Returns the number rounded to specified power of 10.
const roundToPowerOfTen = (num, pow) => {
  return Math.round(num / Math.pow(10, pow)) * Math.pow(10, pow);
}
console.log(roundToPowerOfTen(1234, 3));

// ! Returns true is the number is prime; otherwise false.
const isPrime = (number) => number % 2 === 1 ? true : false;
console.log(isPrime(17));