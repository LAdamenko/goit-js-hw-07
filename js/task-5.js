function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const bgrColor = document.querySelector(".color");
button.addEventListener("click", () => {
    const color = getRandomHexColor();
    const body = document.querySelector("body");
    body.style = `background-color: ${color}`;
    bgrColor.textContent = color;
})