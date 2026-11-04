// Q5: Open the clicked image in a modal and stop inner clicks from bubbling.
const imageGallery = document.querySelector("#image-gallery");
const imageModal = document.querySelector("#image-modal");
const modalContent = document.querySelector("#modal-content");
const modalImage = document.querySelector("#modal-image");

imageGallery.addEventListener("click", (event) => {
  if (event.target.tagName !== "IMG") return;
  modalImage.src = event.target.src;
  modalImage.alt = event.target.alt;
  imageModal.classList.add("open");
});

imageModal.addEventListener("click", () => {
  imageModal.classList.remove("open");
});

modalContent.addEventListener("click", (event) => {
  event.stopPropagation();
});
