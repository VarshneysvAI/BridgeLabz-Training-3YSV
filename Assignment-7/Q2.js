// Q2: Keep the counter synchronized with the textarea and enforce the limit.
const characterTextarea = document.querySelector("#character-textarea");
const characterCounter = document.querySelector("#character-counter");
const resetCharacterButton = document.querySelector("#reset-character-button");
const maximumCharacters = 100;

function updateCharacterCounter() {
  const remainingCharacters = maximumCharacters - characterTextarea.value.length;
  characterCounter.textContent = `${remainingCharacters} characters remaining`;
  characterCounter.classList.toggle("warning", remainingCharacters <= 20 && remainingCharacters > 0);
  characterCounter.classList.toggle("limit-reached", remainingCharacters === 0);
}

characterTextarea.addEventListener("beforeinput", (event) => {
  if (event.inputType === "insertText" && characterTextarea.value.length >= maximumCharacters) {
    event.preventDefault();
  }
});

characterTextarea.addEventListener("input", updateCharacterCounter);
resetCharacterButton.addEventListener("click", () => {
  characterTextarea.value = "";
  updateCharacterCounter();
});
