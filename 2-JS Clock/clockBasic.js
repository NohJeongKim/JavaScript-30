// 1. 일단 html에서 사용할 객체들을 불러와야 한다.

const clockCnt = document.querySelector(".clock");
// console.log(clockCnt);
const clockShow = clockCnt.querySelector("h1");
// console.log(clockShow);

// 2. 현재 시간을 구해주는 메소드를 이용해서 변수를 만든 후에, 시계 안에 표기해야한다.
// 그러기 위해서는 함수를 제작해서 불러올 수 밖에 없다. (같은 행위를 계속 반복할 것이기 때문이다.)

function getTime() {
  const today = new Date();
  // console.log(today);
  const getHour = today.getHours();
  const getMin = today.getMinutes();
  const getSec = today.getSeconds();
  // console.log(getHour, getMin, getSec);

  // 5. 1:1:1을 01:01:01로 변경시켜주고 싶다.

  if (getHour < 10) {
    if (getMin < 10) {
      if (getSec < 10) {
        clockShow.innerText = `0${getHour} : 0${getMin} : 0${getSec}`;
      } else {
        // getSec > 10
        clockShow.innerText = `0${getHour} : 0${getMin} : ${getSec}`;
      }
    } else {
      // getMin > 10
      if (getSec < 10) {
        clockShow.innerText = `0${getHour} : ${getMin} : 0${getSec}`;
      } else {
        // getSec > 10
        clockShow.innerText = `0${getHour} : ${getMin} : ${getSec}`;
      }
    }
  } else {
    // getHour > 10
    if (getMin < 10) {
      if (getSec < 10) {
        clockShow.innerText = `${getHour} : 0${getMin} : 0${getSec}`;
      } else {
        clockShow.innerText = `${getHour} : 0${getMin} : ${getSec}`;
      }
    } else {
      // getMin > 10
      if (getSec < 10) {
        clockShow.innerText = `${getHour} : ${getMin} : 0${getSec}`;
      } else {
        // getSec > 10
        clockShow.innerText = `${getHour} : ${getMin} : ${getSec}`;
      }
    }
  }
}
// console.log(getTime());

// 3. 1초마다 넘어가도록 지정해준다.

setInterval(getTime, 1000); // "1000 밀리세컨츠 = 1초" 이다.

// 4. 처음에 1초 정도 00:00:00이 되는 것을 방지해준다.
function init() {
  getTime();
}

init();
