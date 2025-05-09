updateCartCount();
// Call the function to render
document.addEventListener('DOMContentLoaded', function () {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const tbody = document.getElementById('wishlistBody');

    if (wishlist.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5">Your wishlist is empty.</td></tr>';
        return;
    }

    wishlist.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
<td>${item.name}</td>
<td>₹ ${item.price}</td>
<td>${new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</td>
<td>In Stock</td>
<td><button class="add-to-cart-btn">Add to Cart</button></td>
`;

        const btn = row.querySelector('.add-to-cart-btn');
        btn.addEventListener('click', () => {
            const existing = cart.find(p => p.name === item.name);
            if (!existing) {
                item.count = 1;
                cart.push(item);
                localStorage.setItem('cart', JSON.stringify(cart));
                alert(`${item.name} added to cart!`);
            } else {
                alert(`${item.name} is already in cart!`);
            }
            updateCartCount();
        });

        tbody.appendChild(row);
    });
});

function copyLink() {
    const input = document.getElementById('wishlist-link');
    input.select();
    input.setSelectionRange(0, 99999); // mobile compatibility
    navigator.clipboard.writeText(input.value);
    alert("Link copied to clipboard!");
}

document.getElementById("cart-icon").addEventListener("click", function () {
    window.location.href = "shoppingcart.html";
});
document.getElementById("wishlist-icon").addEventListener("click", function () {
    window.location.href = "wishlist.html";
});
document.getElementById("order-track-btn").addEventListener("click", function () {
    window.location.href = "order-tracking.html";
});

// function updateCartCount() {
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const count = cart.reduce((sum, item) => sum + item.count, 0);
//     document.getElementById("cart-count").innerText = count;
// }

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    // const count = cart.reduce((sum, item) => sum + item.count, 0);
    document.getElementById("cart-count").innerText = cart.length;
}
document.getElementById('userIcon').addEventListener('click', function () {
    window.location.href = 'about.html';
});

// newsletter
const subscribeBtn = document.querySelector(".newsletter button");

subscribeBtn.addEventListener("click", function () {
const emailInput = document.querySelector(".newsletter input");
if (emailInput.value.trim() !== "") {
alert("Subscribed");
emailInput.value = "";
} else {
alert("Please enter your email address.");
}
});
// toggle
const menuToggle = document.querySelector(".menu-toggle");
const mainMenu = document.querySelector(".main-menu");
const dropdown = document.querySelector(".dropdown");

menuToggle.addEventListener("click", () => {
mainMenu.classList.toggle("open");
});

dropdown.addEventListener("click", () => {
dropdown.classList.toggle("active");
});
document.getElementById("categorySelect").addEventListener("change", function () {
    const selectedPage = this.value;
    window.location.href = selectedPage; // Redirect to the selected page
});
document.getElementById('browse').addEventListener('click', function() {
    window.location.href = 'shop.html';
    });