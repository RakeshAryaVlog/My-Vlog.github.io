document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            id: 582,
            name: '#Rakesh Jokes Graphic Tee',
            price: 19.99,
            image: 'https://images.unsplash.com/image-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80',
            description: 'Rock the #RakeshVibes with this funny graphic tee! 100% cotton, perfect for fans of Rakesh Arya Vlog’s comedy. Available in Black, White, Green. Sizes: S–XXL.'
        },
        {
            id: 683,
            name: 'Haste Raho India Crew Neck',
            price: 22.99,
            image: 'https://images.unsplash.com/photo-1583743814966-8936f970b74c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80',
            description: 'Celebrate India with this vibrant T-shirt! Cotton blend, great for vlogs. Available in Red, Grey, Black. Sizes: S–XXL.'
        },
        {
            id: 784,
            name: 'Comedy Club Vlog Tee',
            price: 18.99,
            image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80',
            description: 'Wear your comedy love! Soft cotton, quirky design. Available in White, Blue, Green. Sizes: S–XXL.'
        },
        {
            id: 885,
            name: 'Antakshari Party T-Shirt',
            price: 24.99,
            image: 'https://images.unsplash.com/photo-1622290671821-2b0a40ae9e57?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80',
            description: 'Sing loud with this tee! Premium cotton, inspired by Rakesh’s vlogs. Available in Yellow, Black, White. Sizes: S–XXL.'
        },
        {
            id: 986,
            name: 'Rakesh Vlog Fan Tee',
            price: 20.99,
            image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80',
            description: 'Show your fandom! Cozy cotton-blend tee for vlog fans. Available in Grey, Navy, Red. Sizes: S–XXL.'
        }
    ];

    const productList = document.getElementById('product-card');
    if (productList) {
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
    }

    const cartItemsContainer = document.getElementById('cart-items');
    const cartEmptyMessage = document.getElementById('cart-empty');
    const clearCartButton = document.getElementById('clear-cart-button');

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} added to cart!`);
    }

    function displayCart() {
        if (!cartItemsContainer || !cartEmptyMessage) return;

        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartEmptyMessage.classList.remove('hidden');
            clearCartButton.classList.add('hidden');
        } else {
            cartEmptyMessage.classList.add('hidden');
            clearCartButton.classList.remove('hidden');
            cart.forEach((item, index) => {
                const cartCard = document.createElement('div');
                cartCard.className = 'cart-card';
                cartCard.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <h3 class="text-xl font-semibold mt-4">${item.name}</h3>
                    <p class="text-lg text-gray-600">$${item.price.toFixed(2)}</p>
                    <p class="text-sm text-gray-700 mt-2">${item.description}</p>
                    <button class="bg-red-600 text-white px-4 py-2 mt-4 rounded-full hover:bg-red-700 transition" onclick="removeFromCart(${index})">Remove</button>
                `;
                cartItemsContainer.appendChild(cartCard);
            });
        }
    }

    function removeFromCart(index) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
    }

    if (clearCartButton) {
        clearCartButton.addEventListener('click', () => {
            localStorage.removeItem('cart');
            displayCart();
        });
    }

    if (cartItemsContainer) {
        displayCart();
    }

    window.addToCart = addToCart;
    window.removeFromCart = removeFromCart;
});