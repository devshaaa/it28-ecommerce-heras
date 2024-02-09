document.addEventListener("DOMContentLoaded", function() {
  fetch("products.json")
    .then(response => response.json())
    .then(data => {
      const productsContainer = document.getElementById("products");
      data.products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.innerHTML = `
          <h2>${product.name}</h2>
          <p>Price: ${product.price}</p>
          <p>Description: ${product.description}</p>
        `;
        productsContainer.appendChild(productElement);
      });
    })
    .catch(error => {
      console.error("Error fetching products:", error);
    });
});
