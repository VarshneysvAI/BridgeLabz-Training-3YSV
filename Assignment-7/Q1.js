// Q1: Use one event listener on the list to handle all item buttons.
const productInput = document.querySelector("#product-input");
const productList = document.querySelector("#product-list");
const addProductButton = document.querySelector("#add-product-button");
let productNumber = 1;
let editingItem = null;

function saveEditedProduct(item) {
  const editInput = item.querySelector(".edit-input");
  const productName = editInput.value.trim();

  if (productName) {
    item.querySelector(".product-name").textContent = productName;
  }
  item.querySelector(".edit-input").remove();
  item.querySelector(".product-name").hidden = false;
  item.querySelector(".edit-button").textContent = "Edit";
  editingItem = null;
}

function startEditing(item) {
  if (editingItem && editingItem !== item) {
    saveEditedProduct(editingItem);
  }

  const productName = item.querySelector(".product-name");
  const editInput = document.createElement("input");
  editInput.className = "edit-input";
  editInput.value = productName.textContent;
  productName.hidden = true;
  item.insertBefore(editInput, productName);
  item.querySelector(".edit-button").textContent = "Save";
  editInput.focus();
  editingItem = item;
}

addProductButton.addEventListener("click", () => {
  const productName = productInput.value.trim();
  if (!productName) return;

  const item = document.createElement("li");
  item.className = "product-item";
  item.dataset.productId = productNumber;
  item.innerHTML = `
    <span class="product-name"></span>
    <button class="edit-button" type="button">Edit</button>
    <button class="delete-button" type="button">Delete</button>
  `;
  item.querySelector(".product-name").textContent = productName;
  productList.appendChild(item);
  productNumber += 1;
  productInput.value = "";
});

productList.addEventListener("click", (event) => {
  const item = event.target.closest(".product-item");
  if (!item) return;

  if (event.target.classList.contains("edit-button")) {
    if (editingItem === item) saveEditedProduct(item);
    else startEditing(item);
  }

  if (event.target.classList.contains("delete-button")) {
    if (editingItem === item) editingItem = null;
    item.remove();
  }
});

document.addEventListener("click", (event) => {
  if (editingItem && !editingItem.contains(event.target)) {
    saveEditedProduct(editingItem);
  }
});
