  fetch('data/data.json')
    .then(response => response.json())
    .then(data => {
            const productListContainer = document.getElementById{'productList'};

    data.forEach(product =>{
        const listItem= document.createElement('p');
        listItem.textContent= '
        ${product.product_name} -  ${product.product_price} |  ${product.product_description} |  added on ${product.product_date_added}';
        productListContainer.appendChild(listItem);
    });
})
    .catch(error => {
      console.error('Error fetching data:', error);
    });