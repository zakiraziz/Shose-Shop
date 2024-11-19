// script.js
const params = new URLSearchParams(window.location.search);
const shoeName = params.get('name');

const shoeData = {
    'running-shoes': {
        title: 'Running Shoes',
        description: 'High-performance shoes designed for speed and comfort.',
        price: '$120',
        mainImage: 'https://cdn.thewirecutter.com/wp-content/media/2023/09/running-shoes-2048px-5960.jpg',
        gallery: [
            'https://cdn.thewirecutter.com/wp-content/media/2023/09/running-shoes-2048px-5960.jpg',
            'https://via.placeholder.com/150?text=Additional+Image+1',
            'https://via.placeholder.com/150?text=Additional+Image+2',
        ]
    },
    'casual-shoes': {
        title: 'Casual Shoes',
        description: 'Comfortable and stylish for everyday wear.',
        price: '$90',
        mainImage: 'https://www.devoguestore.com/cdn/shop/products/image_30bb6b35-1603-4ed9-b2f5-ad6377ebb687.jpg?v=16712181010',
        gallery: [
            'https://via.placeholder.com/150?text=Additional+Image+1',
            'https://via.placeholder.com/150?text=Additional+Image
