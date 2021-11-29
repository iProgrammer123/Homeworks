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
  return Math.atan2(y2 - y1, x2 - x1);
};

console.log(getAngleBetweenVectors(0, 1, 0, -1));

// ! Returns a last digit of a integer number.
const getLastDigit = (value) => value % 10;
console.log(getLastDigit(431));

// ! Returns a number by given string representation.
const parseNumberFromString = (value) =>
  typeof value === "number" ? value : parseInt(value, 10);

console.log(parseNumberFromString(10));

// 