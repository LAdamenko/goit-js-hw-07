function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const creating = document.querySelector("[data-create]");
const destroying = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
const numInp = document.querySelector("input");

creating.addEventListener("click", createBoxes);
destroying.addEventListener("click", destroyBoxes);

function createBoxes() {
    const amount = numInp.value;
    if (amount >= 1 && amount <= 100) {
        boxes.innerHTML = "";
        let boxsize = 30;
        for (let i = 1; i <= amount; i += 1) {
            const newDiv = `<div style="width: ${boxsize}px; height: ${boxsize}px; background: ${getRandomHexColor()}"></div>`;
            boxes.insertAdjacentHTML("beforeend", newDiv);
            boxsize += 10;
        }
    }
}
    
function destroyBoxes() {
    numInp.value = "";
    boxes.innerHTML = "";
}
