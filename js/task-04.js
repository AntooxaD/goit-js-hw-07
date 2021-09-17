// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

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