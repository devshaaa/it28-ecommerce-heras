function addToCart(productName, price) {
    // Make AJAX request to add item to cart
    fetch('/api/add-to-cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'data.json'
        },
        body: JSON.stringify({ productName, price })
    })
    .then(response => {
        // Handle response (e.g., show success message)
    })
    .catch(error => {
        // Handle error
    });
}

function buyNow(productName, price) {
    // Make AJAX request to initiate payment process
    fetch('/api/checkout', {
        method: 'POST',
        headers: {
            'Content-Type': 'data.json'
        },
        body: JSON.stringify({ productName, price })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to initiate payment process');
        }
        return response.json(); // assuming response is JSON
    })
    .then(data => {
        // Redirect user to payment gateway's checkout page
        window.location.href = `payment.html${encodeURIComponent(data.redirectUrl)}`;
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle error
    });
}


document.addEventListener("DOMContentLoaded", function() {
  // Function to process payment and accounting
  function processPaymentAndAccounting() {
      // Replace this with your actual payment and accounting logic
      alert("Payment processed successfully and accounting updated!");
  }

  // Example: Add event listener to a payment button
  const paymentButton = document.getElementById("paymentButton");
  if (paymentButton) {
      paymentButton.addEventListener("click", function(event) {
          event.preventDefault(); // Prevent default form submission
          processPaymentAndAccounting(); // Call the function to process payment and accounting
      });
  }
  
  // Function to process payment
  function processPayment() {
    var paymentAmount = document.getElementById('payment-amount').value;
    // Here you would add code to process the payment
    alert("Payment processed for amount: $" + paymentAmount);
  }

  // Function to view financial reports
  function viewReports() {
    // Here you would add code to fetch and display financial reports
    alert("Viewing financial reports");
  }
  document.addEventListener("DOMContentLoaded", function() {
    // Function to process payment
    function processPayment() {
        // Replace this with your actual payment logic
        alert("Payment processed successfully!");
        // You can also redirect the user to a payment gateway or perform other actions here
    }

    // Event listener for the button to trigger payment process
    const processPaymentBtn = document.getElementById("processPaymentBtn");
    if (processPaymentBtn) {
        processPaymentBtn.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default form submission
            processPayment(); // Call the function to process payment
        });
    }
    function addToCart(productName, price) {
        // Here you can implement your logic to add the product to the cart
        // For demonstration purposes, let's just log the product details to console
        console.log("Product added to cart:");
        console.log("Name: " + productName);
        console.log("Price: $" + price);
        // You can also redirect the user to the cart page or show a notification confirming the addition
    }
     // Function to handle buy now button
     function buyNow(productName, price) {
        // Here you can implement your logic for the buy now functionality
        // For demonstration purposes, let's just log the product details to console
        console.log("Buy now clicked:");
        console.log("Name: " + productName);
        console.log("Price: $" + price);
        // You can also redirect the user to the checkout page or proceed with the purchase process
    }
     // JavaScript function to handle logistics process
     function selectShippingMethod(method) {
        document.getElementById('selected-method').innerHTML = `<p>Selected Shipping Method: <strong>${method}</strong></p>`;
      }
});

});
