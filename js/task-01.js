

const listById = document.querySelectorAll('.item');

console.log(`В списке ${listById.length} категории.`);

const items = [...listById]
    .map(
    categories => `\nКатегория: ${categories.children[0].textContent}\nКоличество элементов: ${categories.children[1].children.length}\n`    
  )
console.log(...items)

