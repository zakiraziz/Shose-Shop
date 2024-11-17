// script.js

// Handle Add to Cart functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        alert("Item added to cart!");
        e.target.innerText = "Added to Cart";
        e.target.disabled = true;
    });
});
