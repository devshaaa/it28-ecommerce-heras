document.addEventListener("DOMContentLoaded", function() {
  fetch("data.json")
    .then(response => response.json())
    .then(data => {
      const productCardsContainer = document.getElementById("product-cards");
      const cartItemsContainer = document.getElementById("cart-items");
      const cart = {}; // Object to store cart items and their quantities

      productCardsContainer.classList.add("mx-auto"); // Centering the cards

      data.products.forEach(product => {
        const card = document.createElement("div");
        card.className = "card mb-3";
        card.style.maxWidth = "540px";
        card.innerHTML = `
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${product.product_image}" class="img-fluid rounded-start" alt="${product.product_name}">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${product.product_name}</h5>
                <p class="card-text">Price: $${product.product_price.toFixed(2)}</p>
                <p class="card-text">${product.product_description}</p>
                <p class="card-text">Date Added: ${product.product_dateAdded}</p>
                <p class="card-text">Expiration Date: ${product.product_ExpirationDate}</p>
                <button class="btn btn-primary add-to-cart" data-product="${product.product_name}">Add to Cart</button>
              </div>
            </div>
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
