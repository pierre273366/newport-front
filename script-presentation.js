document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector(".animated-text");
  const text = textElement.innerHTML;
  textElement.innerHTML = "";
  textElement.style.visibility = "visible";

  let index = 0;

  function typeWritter() {
    if (index < text.length) {
      textElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWritter, 50);
    }
  }
  typeWritter();
});
