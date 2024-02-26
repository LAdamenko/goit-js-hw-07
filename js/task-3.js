const userName = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

userName.addEventListener("input", handleInput);
function handleInput(event) {
    const currentName = event.currentTarget.value.trim();
    const displayName = currentName === "" ? "Anonymous" : currentName;
    outputText.textContent = displayName;
}
