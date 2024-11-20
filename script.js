// Parse URL parameters to load product data dynamically
const params = new URLSearchParams(window.location.search);
const shoeName = params.get("name");

// Product data
const shoeData = {
    "running-shoes": {
        title: "Running Shoes",
        description: "High-performance shoes designed for speed and comfort.",
        price: "$120",
        mainImage: "https://cdn.thewirecutter.com/wp-content/media/2023/09/running-shoes-2048px-5960.jpg",
        gallery: [
            "https://via.placeholder.com/150?text=Image+1",
            "https://via.placeholder.com/150?text=Image+2",
        ],
    },
    "casual-shoes": {
        title: "Casual Shoes",
        description: "Comfortable and stylish for everyday wear.",
        price: "$90",
        mainImage: "https://www.devoguestore.com/cdn/shop/products/image_30bb6b35-1603-4ed9-b2f5-ad6377ebb687.jpg?v=16712181010",
        gallery: [
            "https://via.placeholder.com/150?text=Image+1",
            "https://via.placeholder.com/150?text=Image+2",
        ],
    },
    "luxury-shoes": {
        title: "Luxury Shoes",
        description: "Exclusive designs with luxurious finishes for special occasions.",
        price: "$300",
        mainImage: "https://s.alicdn.com/@sc04/kf/Hfa9ba617b6494f9b8ce524af5ba2c4671.jpg_720x720q50.jpg",
        gallery: [
            "https://via.placeholder.com/150?text=Image+1",
            "https://via.placeholder.com/150?text=Image+2",
        ],
    },
};

// Populate product details if on product page
if (shoeName && shoeData[shoeName]) {
    const product = shoeData[shoeName];
    document.getElementById("main-image").src = product.mainImage;
    document.getElementById("shoe-name").textContent = product.title;
    document.getElementById("shoe-description").textContent = product.description;
    document.getElementById("shoe-price").textContent = product.price;

    const gallery = document.getElementById("gallery");
    product.gallery.forEach((image) => {
        const img = document.createElement("img");
        img.src = image;
        img.alt = product.title;
        img.classList.add("img-thumbnail");
        gallery.appendChild(img);
    });
}
