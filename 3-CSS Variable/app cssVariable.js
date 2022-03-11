/*
const spacingCtr = document.querySelector("#spacingCtr");
const blurCtr = document.querySelector("#blurCtr");
const baseColorCtr = document.querySelector("#baseColorCtr");

물론 이렇게 해도 되지만, querySelectorAll을 이용하는 것이 좋다.
*/

const inputs = document.querySelectorAll(".controller input");
// console.log(inputs);

// inputs.forEach((input) => console.log(input));
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
// input의 값이 변경되는 경우에 change를 이용한다.
// drag 되는 경우도 고려해야 하기 때문에, mousemove도 추가해주기.
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));

function handleUpdate(event) {
  // console.log(event);
  // console.log(this);
  // console.log(this.value);
  // console.log(this.dataset.sizing); 없는 경우에는 undefined가 출력된다.
  const unit = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + unit
  );
}
