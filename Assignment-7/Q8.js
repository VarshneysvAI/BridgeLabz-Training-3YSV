// Q8: Use capture phase on the document to close the dropdown before target handling.
const customDropdown = document.querySelector("#custom-dropdown");
const dropdownButton = document.querySelector("#dropdown-button");
const dropdownOptions = document.querySelector("#dropdown-options");

dropdownButton.addEventListener("click", (event) => {
  event.stopPropagation();
  dropdownOptions.classList.toggle("open");
});

dropdownOptions.addEventListener("click", (event) => {
  const selectedOption = event.target.closest("[data-option]");
  if (!selectedOption) return;
  dropdownButton.textContent = selectedOption.dataset.option;
  dropdownOptions.classList.remove("open");
});

document.addEventListener(
  "click",
  (event) => {
    if (!customDropdown.contains(event.target)) {
      dropdownOptions.classList.remove("open");
    }
  },
  true
);
