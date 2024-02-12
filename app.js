document.addEventListener("DOMContentLoaded", function() {
  fetch("data.json")
    .then(response => response.json())
    .then(data => {
      const productCardsContainer = document.getElementById("product-cards");
      data.products.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">Price: $${product.price.toFixed(2)}</p>
            <p class="card-text">${product.description}</p>
            <button class="btn btn-primary">Add to Cart</button>
          </div>
        `;
        productCardsContainer.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Error fetching products:", error);
    });
});
