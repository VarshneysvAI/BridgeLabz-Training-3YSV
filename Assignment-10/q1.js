// Q1: Run `json-server --watch q1/db.json --port 3001` from this folder.
const API_URL = "http://localhost:3001";
let latestSearchId = 0;

function renderProducts(products) {
  const results = document.querySelector("#search-results");
  results.replaceChildren();

  if (products.length === 0) {
    results.textContent = "No products found";
    return;
  }

  products.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;
    image.loading = "lazy";

    const name = document.createElement("h2");
    name.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = `$${Number(product.price).toFixed(2)}`;

    card.append(image, name, price);
    results.append(card);
  });
}

function searchProducts(searchTerm) {
  const requestId = ++latestSearchId;
  $("#loading-indicator").show();
  $("#search-error").text("");

  $.ajax({
    url: `${API_URL}/products`,
    method: "GET",
    data: { q: searchTerm },
    dataType: "json",
  })
    .done((products) => {
      // Ignore older responses if a later search has already been sent.
      if (requestId === latestSearchId) {
        renderProducts(products);
      }
    })
    .fail((_, status, error) => {
      if (requestId === latestSearchId) {
        $("#search-error").text("Could not load products. Check that JSON Server is running.");
        console.error("Product search failed:", status, error);
      }
    })
    .always(() => {
      if (requestId === latestSearchId) {
        $("#loading-indicator").hide();
      }
    });
}

$(function () {
  $("#search-input").on("input", function () {
    searchProducts($(this).val().trim());
  });

  searchProducts("");
});