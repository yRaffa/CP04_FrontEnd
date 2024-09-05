const inputs = document.querySelectorAll(".input");

function focusFunct() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunct() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunct);
  input.addEventListener("blur", blurFunct);
});