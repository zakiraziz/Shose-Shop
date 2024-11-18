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
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    });
});
