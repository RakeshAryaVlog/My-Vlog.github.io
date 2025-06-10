// --- Demo Products ---
const products = [
  {
    id: "tee1",
    name: "#RoflWithRakesh Graphic Tee",
    price: "₹499",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    description: "Make everyone LOL with this premium cotton T-shirt featuring the #RoflWithRakesh graphic! Soft, comfortable, and perfect for fans of comedy vlogs."
  },
  {
    id: "mug1",
    name: "Handmade Decorative Mug",
    price: "₹299",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    description: "Hand-painted ceramic mug with comic artwork. Limited edition, perfect for your morning chai or coffee!"
  },
  {
    id: "sticker1",
    name: "Comedy Sticker Pack",
    price: "₹99",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    description: "Pack of 10 hilarious stickers inspired by viral Rakesh Arya Vlog moments. Stick them anywhere!"
  },
  {
    id: "keychain1",
    name: "Artisan Jute Keychain",
    price: "₹149",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    description: "Handmade jute keychain from local artisans. Durable and unique, limited stock!"
  },
  {
    id: "tote1",
    name: "Minimalist Tote Bag",
    price: "₹399",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    description: "Eco-friendly tote bag with a funny vlog print. Carry your comedy everywhere!"
  }
];

// --- Cart Functions ---
function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart') || "[]");
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  alert("Added to cart!");
}

// --- Render Products on Shop Page ---
function renderProducts() {
  const productList = document.getElementById("product-list") || document.getElementById("product-card");
  if (!productList) return;
  productList.innerHTML = products.map(product => `
    <div class="bg-white border rounded-lg shadow-md p-4 flex flex-col items-center">
      <img src="${product.image}" alt="${product.name}" class="w-48 h-48 object-cover rounded mb-4" loading="lazy">
      <h3 class="text-xl font-semibold mb-2 text-center">${product.name}</h3>
      <p class="text-gray-600 mb-2 text-center">${product.description}</p>
      <div class="text-lg font-bold text-green-700 mb-2">${product.price}</div>
      <button onclick="addToCart('${product.id}')" class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition w-full mt-auto">
        Add to Cart
      </button>
    </div>
  `).join('');
}

// --- Render Cart on cart.html ---
function renderCart() {
  const cartList = document.getElementById("cart-list");
  const cartTotal = document.getElementById("cart-total");
  if (!cartList || !cartTotal) return;
  let cart = JSON.parse(localStorage.getItem('cart') || "[]");
  if (cart.length === 0) {
    cartList.innerHTML = `<div class="text-center text-gray-500">Your cart is empty.</div>`;
    cartTotal.textContent = "";
    return;
  }
  let total = 0;
  cartList.innerHTML = cart.map(item => {
    const price = parseInt(item.price.replace(/[^\d]/g, ''), 10) || 0;
    total += price * item.qty;
    return `
      <div class="flex items-center border-b py-4">
        <img src="${item.image}" class="w-24 h-24 object-cover rounded mr-4" alt="${item.name}">
        <div class="flex-1">
          <div class="font-bold mb-1">${item.name}</div>
          <div class="text-gray-700">${item.price} x ${item.qty}</div>
          <button onclick="removeFromCart('${item.id}')" class="text-red-500 mt-2 underline">Remove</button>
        </div>
      </div>
    `;
  }).join('');
  cartTotal.textContent = `Total: ₹${total}`;
}

function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart') || "[]");
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

function clearCart() {
  localStorage.removeItem('cart');
  renderCart();
}

// --- Auto-render on correct page ---
document.addEventListener('DOMContentLoaded', function() {
  renderProducts();
  if (document.getElementById("cart-list")) {
    renderCart();
    // Add clear cart button if exists
    const clearBtn = document.getElementById("clear-cart-btn");
    if (clearBtn) clearBtn.onclick = clearCart;
  }
});