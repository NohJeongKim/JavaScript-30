const now = new Date(); // 지금 시간을 표시해준다.
/*
console.log(now);
console.log(now.toLocaleString("en-GB")); // 시간을 영어로 표시해준다.
console.log(now.toLocaleString("ko-KR")); // 시간을 한국어로 표시해준다.
*/

const nowHour = now.getHours(); // 지금 시간의 "시"를 나타낸다.
// console.log(nowHour);

const nowMin = now.getMinutes(); // 지금 시간의 "분"을 나타낸다.
// console.log(nowMin);

const nowSec = now.getSeconds(); // 지금 시간의 "초"를 나타낸다.
// console.log(nowSec);

// console.log(nowHour, nowMin, nowSec); 이렇게 해주면 계속 업데이트가 된다.

/*
// setInterval을 이용해서 시간을 보여줄 수 있다.
const clockCnt = setInterval(showClock, 1000, nowMin, nowSec);

function showClock(a, b) {
  // Your code here
  // Parameters are purely optional.
  console.log(a, b);
}
*/

console.log(now);
console.log(now.getTime());
