const button = document.querySelector(".button button");
const cube = document.querySelector(".cube");
const cube2 = document.querySelector(".cube2");

button.addEventListener("click", () => {
  if (cube.classList.contains("button-cube")) {
    cube.classList.remove("button-cube");
  } else {
    cube.classList.add("button-cube");
  }

  if (cube2.classList.contains("button-cube")) {
    cube2.classList.remove("button-cube");
  } else {
    cube2.classList.add("button-cube");
  }
});
