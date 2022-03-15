console.log([2, 10].sort());
console.log(["2", "10"].sort());
// 2의 유니코드는 32이고, 10의 유니코드는 30이기 때문이다.

const numArray = [40, 12, 34, 55, 67, 26, 167, 89, 999];
// console.log(numArray);
// console.log(numArray.sort()); // 오름차순

var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

// value 기준으로 정렬 (오름차순 정렬)
items.sort(function (a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  // a must be equal to b
  return 0;
});

console.log(items); // 오름차순 정렬하기.

// value 기준으로 정렬 (내림차순 정렬)
items.sort(function (a, b) {
  if (b.value > a.value) {
    return 1;
  }
  if (b.value < a.value) {
    return -1;
  }
  return 0;
});

console.log(items); // 내림차순으로 정렬하기.
