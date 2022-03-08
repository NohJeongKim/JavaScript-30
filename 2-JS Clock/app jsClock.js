const secondHand = document.querySelector(".second-hand");
// console.log(secondHand);
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const date = new Date();
  // console.log(date);
  const second = date.getSeconds();
  // console.log(second);
  const secondDegree = (second / 60) * 360 + 90; // 여기 살짝 주의하기. 아까 12시 방향으로 맞추기 위해서 90도 돌려놓았기 때문에 + 90deg을 해줘야한다.
  // console.log(secondDegree);
  secondHand.style.transform = `rotate(${secondDegree}deg)`;
  // console.log(second);

  const minute = date.getMinutes();
  // console.log(minute);
  const minuteDegree = (minute / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

  const hour = date.getHours();
  // console.log(hour);
  const hourDegree = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000); // 1초에 setDate 1번씩 갱신시키기.

function init() {
  setDate();
}

init();
