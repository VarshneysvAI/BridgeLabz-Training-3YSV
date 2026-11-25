// Q6: Fetch products from Fake Store API and print their key details.

async function displayProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}.`);
    }

    const products = await response.json();

    products.forEach((product) => {
      console.log(`Product: ${product.title}`);
      console.log(`Price: $${product.price}`);
      console.log(`Image: ${product.image}`);
      console.log("");
    });
  } catch (error) {
    console.error("Failed to load products. Please try again.", error.message);
  }
}

displayProducts();
