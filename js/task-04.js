
let incr = document.querySelector("[data-action='increment']");
let decr = document.querySelector("[data-action='decrement']");
let value = document.querySelector("#value")


let counterValue = 0;
const increment = () => {
  counterValue += 1;

 value.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

 value.textContent = counterValue;
};

incr.addEventListener("click", increment);
decr.addEventListener("click", decrement);