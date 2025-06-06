document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            id: 1,
            name: '#RoflWithRakesh Graphic Tee',
            price: 19.99,
            image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Black', 'White', 'Navy Blue'],
            description: 'Rock the #RoflWithRakesh vibe with this hilarious graphic tee! Made from 100% soft cotton, this funny T-shirt keeps you comfy all day, whether you’re chilling with friends or pulling off epic pranks. Available in Black, White, and Navy Blue, it’s perfect for fans of Rakesh Arya Vlog’s comedy. Machine washable, no-fuss care. Grab yours and make everyone LOL! Sizes: S–XXL.'
        },
        {
            id: 2,
            name: 'Haste Raho India Crew Neck',
            price: 22.99,
            image: 'https://images.unsplash.com/photo-1583743814966-8936f970b74c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Red', 'Grey', 'Black'],
            description: 'Celebrate the spirit of India with the Haste Raho India Crew Neck! Crafted from a breathable cotton-poly blend, this vibrant T-shirt is your go-to for casual outings or festive vlogs. Its bold design screams fun and positivity, perfect for Rakesh Arya fans. Available in Red, Grey, and Black. Easy to wash, hard to resist. Sizes: S–XXL.'
        },
        {
            id: 3,
            name: 'Comedy King Vlog Tee',
            price: 18.99,
            image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            colors: ['White', 'Blue', 'Green'],
            description: 'Wear your love for comedy with the Comedy King Vlog Tee! This 100% cotton shirt is super soft and perfect for everyday adventures. Featuring a quirky design inspired by Rakesh Arya’s epic vlogs, it’s a must-have for fans who live to laugh. Available in White, Blue, and Green. Toss it in the wash and keep the vibes high! Sizes: S–XXL.'
        },
        {
            id: 4,
            name: 'Antakshari Madness T-Shirt',
            price: 24.99,
            image: 'https://images.unsplash.com/photo-1622290671821-2b0a40ae9e57?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Yellow', 'Black', 'White'],
            description: 'Sing your heart out with the Antakshari Madness T-Shirt! Inspired by Rakesh Arya’s epic road trip vlogs, this premium cotton tee is comfy, durable, and packed with fun. Perfect for music lovers and vlog fans alike. Available in vibrant Yellow, Black, and White. Machine washable for easy care. Get ready to steal the show! Sizes: S–XXL.'
        },
        {
            id: 5,
            name: 'Rakesh Arya Vlog Fan Tee',
            price: 20.99,
            image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            colors: ['Grey', 'Navy Blue', 'Red'],
            description: 'Show off your fandom with the Rakesh Arya Vlog Fan Tee! This cozy cotton-blend T-shirt is designed for ultimate comfort and style, perfect for binge-watching vlogs or hanging out with friends. Its bold print says you’re part of the #RoflWithRakesh crew. Available in Grey, Navy Blue, and Red. Easy-care fabric keeps it fresh. Sizes: S–XXL.'
        }
    ];

    const productList = document.getElementById('product-list');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card bg-gray-100 p-4 rounded-lg shadow-lg text-center';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3 class="text-xl font-semibold mt-4">${product.name}</h3>
            <p class="text-lg text-gray-600">$${product.price.toFixed(2)}</p>
            <p class="text-sm text-gray-700 mt-2">${product.description}</p>
            <button class="bg-red-600 text-white px-4 py-2 mt-4 rounded-full hover:bg-red-700 transition" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });
});

function addToCart(productId) {
    alert(`Product ${productId} added to cart!`);
    // Add e-commerce cart logic here (e.g., integrate with a backend or payment gateway)
}