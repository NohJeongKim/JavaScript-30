const items = document.querySelectorAll(".flex-item");
// console.log(items);

function toggleOpen(event) {
  // console.log(event);
  // console.log(this);
  // console.log("hello"); 클릭 시 함수가 잘 돌아가고 있다.
  // console.log(this.classList.toggle("open")); true -> false -> true -> false .. 잘 뜨고 있다.
  // 근데 문제는 클릭하는 순간 true가 뜨기는 하지만, 작아진다!
  this.classList.toggle("open");
}

// items.forEach((item) => console.log(item)); // typeof item : object
items.forEach((item) => item.addEventListener("click", toggleOpen));
