// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//   после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM - узлов
// используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
]
const ul = document.getElementById("ingredients");

// ingredients.forEach(el => { return ul.insertAdjacentHTML(`beforebegin`, `<li>${el}</li>`) } )


// const ingredient = ingredients.reduce((element, index) => element + `<li>${index}</li>`, "")

// ul.innerHTML = ingredient;

// console.log(ingredient)
  
  
const markup = ingredients
  
  .map(el => { return `<li>${el}</li>` })
  .join('')

ul.insertAdjacentHTML('beforebegin', markup)