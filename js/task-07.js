// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

let input = document.querySelector('#font-size-control')
let span = document.querySelector('#text')

input.addEventListener('input', function (e) {
    const size = input.value;
    span.style.fontSize = size + "px";
})

