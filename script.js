let submit = document.querySelector(".button1");
let message = document.getElementById("message-output");
let passwordInput = document.querySelector(".passwordinput");

submit.addEventListener("click", () => {
  if (passwordInput.value === "test") {
    alert("Welcome!");
    message.textContent = "";
  } else {
    message.textContent = "Wrong password";
    message.style.color = "red";
  }
});
