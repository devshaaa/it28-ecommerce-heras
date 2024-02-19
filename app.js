document.addEventListener("DOMContentLoaded", function() {
  fetch("data.json")
    .then(response => response.json())
    .then(data => {
      const productCardsContainer = document.getElementById("product-cards");
      const cartItemsContainer = document.getElementById("cart-items");
      const cart = {}; // Object to store cart items and their quantities

      productCardsContainer.classList.add("card-group"); // Adding card-group class to productCardsContainer

      data.products.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <img src="${product.product_image}" class="card-img-top" alt="${product.product_name}">
          <div class="card-body">
            <h5 class="card-title">${product.product_name}</h5>
            <p class="card-text">${product.product_description}</p>
            <p class="card-text">Price: $${product.product_price.toFixed(2)}</p>
            <p class="card-text"><small class="text-body-secondary">Date Added: ${product.product_dateAdded}</small></p>
            <p class="card-text"><small class="text-body-secondary">Expiration Date: ${product.product_ExpirationDate}</small></p>
            <button class="btn btn-primary add-to-cart" data-product="${product.product_name}">Add to Cart</button>
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


        // Update the count element to display the number of unique items in the cart
        document.getElementById('count').style.display = 'flex'; // Assuming you're using flexbox
        document.getElementById('count').innerText = Object.keys(cart).length;
      }
    })
    .catch(error => {
      console.error("Error fetching products:", error);
    });



    const cartLink = document.querySelector('.cart');
    const cartItems = document.getElementById('cart-items');
    
    // Prevent default behavior on click
    cartLink.addEventListener('click', function(event) {
        event.preventDefault();
        // Toggle display of cart items
        if (cartItems.style.display === 'none') {
            cartItems.style.display = 'flex';
        } else {
            cartItems.style.display = 'none';
        }
    });


});
