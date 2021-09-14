// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ]
// const ul = document.getElementById("ingredients");

// const ingredient = ingredients.reduce((element, index) => element + "\n" + `<li>${index}</li>`, "")

// ul.innerHTML = ingredient;

// console.log(ingredient)


  


const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];
const foods = document.querySelector("#ingredients");
const food = ingredients.forEach(ingredient => {
  const li = document.createElement("li");
    const text = document.createElement('text');
    li.appendChild(text);
    foods.appendChild(li)
    text.textContent = ingredient;
    
    console.log(ingredient);
});
  
