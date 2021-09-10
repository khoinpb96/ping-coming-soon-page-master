const $ = document.querySelector.bind(document);
const inputBtn = $(".input__btn");
const input = $("#input");
const warning = $(".warning-mb");

function checkEmail() {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regex.test(input.value)) {
    return undefined;
  } else {
    warning.style.maxHeight = "20vh";
    input.classList.add("red");
  }
}

inputBtn.addEventListener("click", checkEmail);
