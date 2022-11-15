// задача 1: Сделать кнопку при клике на которой появится alert "уря!"
button.addEventListener("click", () => alert("Уря!"));

// задача 2: Сделать инпут который при потере фокуса выдает alert "ждем возвращения"
input.addEventListener("focusout", () => alert("Ждём возращения!"));

// задача 3: Сделать поле ввода с кнопкой, при нажатии на которую текст из инпута 
// появляется в кнопке, дефолтный текст кнопки "опубликовать"
let input2 = document.getElementById("input2");
let button2 = document.getElementById("button2");

button2.addEventListener('click', function () {
  button2.textContent = input2.value;
  input2.value = "";
});