let cart = [];
document.addEventListener("DOMContentLoaded", () => {
    // Load cart from localStorage if exists
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
        cart = savedCart;
        updateCartCount();
    }
});
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.count, 0);
    document.getElementById("cart-count").innerText = count;
}
document.getElementById('userIcon').addEventListener('click', function() {
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

document.getElementById("cart-icon").addEventListener("click", function () {
    window.location.href = "shoppingcart.html";
});
document.getElementById("wishlist-icon").addEventListener("click", function () {
    window.location.href = "wishlist.html";
});