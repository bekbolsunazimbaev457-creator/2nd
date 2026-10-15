let name = document.querySelector("#input");
let button = document.querySelector("#button");
let text = document.querySelector(".text");

button.addEventListener("click", function() {
text.textContent = "Привет, " + name.value + "!";
});

