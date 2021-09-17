
let input = document.querySelector("#name-input");
let nameOutput = document.querySelector("#name-output");

input.oninput = function () {
    if (input.value === '') {
       nameOutput.innerHTML = 'незнакомец';
    } else{
    nameOutput.innerHTML = input.value;
    }
}