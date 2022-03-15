[1, 2, 3].forEach((items, index, arr) =>
  console.log(`요소값: ${items}, 인덱스: ${index}, 배열: [${arr}]`)
);

[1, 2, 3].forEach((items, index, arr) =>
  console.log((arr[index] = items ** 2 + 1))
);
