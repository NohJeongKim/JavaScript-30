window.addEventListener("keydown", playSound);

// console.log(event.keyCode);
// data 속성에 접근하기.
// console.log(audio);
// app drumKit.js:4 Uncaught DOMException: Failed to execute 'querySelector' on 'Document': 'audio[data-key=65]' is not a valid selector.
// 따옴표를 붙여주면 그런 Error가 등장하지 않는다.
// no audio === null

function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`); // 따옴표가 중요하다.
  const key = document.querySelector(`section[data-key="${event.keyCode}"]`); // 오타가 진짜 중요하다. ㅈㅂ 오타오타.... 조심하자...

  if (!audio) {
    return; // stop the function from running all together.
    // 되감기를 해서 연속적으로 연타가 가능하도록 만들어준다.
  } else {
    audio.currentTime = 0; // rewind to the start.
    audio.play();
    // console.log(key);
    key.classList.add("playing"); // 왜 안 돌아가니..? -> 오타...
  }
}

// 실제 해당 함수를 만들어야 한다.
function removeTransition(event) {
  // console.log(event);
  if (event.propertyName !== "transform") {
    return;
  } else {
    // console.log(event.propertyName); // transform 이라는 단어를 기록하고 있다.
    // console.log(this);
    // 여기서 this는 key를 가르킨다.
    this.classList.remove("playing");
  }
}

// const keys = Array.from(document.querySelectorAll('.key'));
// Array.from 이용해서 하나씩 가져오기.
const keys = document.querySelectorAll(".key"); // 모두 가져오기.
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
// 각각의 key 이벤트 리스너가 추가되어, 전환이 종료될 때 removeTransition 함수가 실행된다.
