document.addEventListener("DOMContentLoaded", function() {
  fetch("data.json")
    .then(response => response.json())
    .then(data => {
      const productCardsContainer = document.getElementById("product-cards");
      const cartItemsContainer = document.getElementById("cart-items");
      const cart = {}; // Object to store cart items and their quantities

      data.products.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">Price: $${product.price.toFixed(2)}</p>
            <p class="card-text">${product.description}</p>
            <button class="btn btn-primary add-to-cart" data-product="${product.name}">Add to Cart</button>
          </div>
        `;
        productCardsContainer.appendChild(card);
      });

      // Event listener for Add to Cart buttons
      productCardsContainer.addEventListener("click", function(event) {
        if (event.target.classList.contains("add-to-cart")) {
          const productName = event.target.getAttribute("data-product");
          if (cart[productName]) {
            cart[productName]++;
          } else {
            cart[productName] = 1;
          }
          updateCartDisplay();
        }
      });

      // Function to update the cart display
      function updateCartDisplay() {
        cartItemsContainer.innerHTML = "";
        Object.keys(cart).forEach(productName => {
          const quantity = cart[productName];
          const li = document.createElement("li");
          li.textContent = `${productName}: ${quantity}`;
          cartItemsContainer.appendChild(li);
        });
      }
    })
    .catch(error => {
      console.error("Error fetching products:", error);
    });
});
