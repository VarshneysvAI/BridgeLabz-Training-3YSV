// Q4: setAttribute() stores the selected theme on the body element.
const themeButtons = document.querySelectorAll(".theme-button");

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedTheme = button.dataset.themeValue;
    document.body.setAttribute("data-theme", selectedTheme);
  });
});
