// 1. 평균 구하기.
const numArray = [1, 2, 3, 4, 5];
const mean = numArray.reduce((acc, cur, i, { length }) => {
  // {}를 씌우면 개수가 나온다.
  // console.log(acc, cur, i, length);
  return i === length - 1 ? (acc + cur) / length : acc + cur;
}, 0);

console.log(mean);

// 2. 최대값 구하기.
const max = numArray.reduce((acc, cur) => {
  return acc > cur ? acc : cur;
}, 0);
console.log(max);

// 3. 횟수 구하기.
const strArray = [
  "banana",
  "apple",
  "peach",
  "banana",
  "melon",
  "strawberry",
  "strawberry",
];

// 4. 합계 구하기.
const array = [1, 2, 3, 4];
/*
const sumArray = array.reduce((acc, cur) => acc + cur, 0);
console.log(sumArray); // 10
*/

const sumArray = array.reduce(function (acc, cur) {
  return acc + cur;
}, 0);
console.log(sumArray); // 10

const arrayNum = [0, 1, 2, 3, 4];
/*
const arrayNumSum = arrayNum.reduce((acc, cur) => acc + cur, 10);
console.log(arrayNumSum); // 20
*/

const arrayNumSum = arrayNum.reduce(function (acc, cur) {
  return acc + cur;
}, 10);
console.log(arrayNumSum); // 20
