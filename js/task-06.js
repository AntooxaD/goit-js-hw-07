let inputEl = document.querySelector('#validation-input');

let inputLength = inputEl.dataset.length;


inputEl.oninput = function () {

  if (inputEl.value.length === +inputLength) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');   
  }
};

