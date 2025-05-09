if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify([]));
}
let currentProductName = "";
let quantitycount = 1;

document.addEventListener("DOMContentLoaded", () => {
    const product = JSON.parse(localStorage.getItem("selectedProduct"));
    const section = document.querySelector(".product-details");
let cart = JSON.parse(localStorage.getItem('cart')) || []
const itemincart = cart.find(item=> item.name === product.name);
if (itemincart){
    quantitycount = itemincart.count;
}

    if (product && section) {
        currentProductName = product.name;
        section.innerHTML = `
        <div class="product-details-column">
            <div class="product-details-left-column">
                <img src="${product.image}" alt="${product.name}" style="margin-top:90px">
            </div>
            <div class="product-details-right-column">
                <p class="category">${product.category}</p>
                <h3 class="title">${product.name}</h3>
                <div class="rating">
                    <h3>⭐⭐⭐⭐⭐ ${product.rating}</h3>
                </div>
                <div class="price">
                    <span>&#8377; ${product.originalPrice}</span>
                    <small>&#8377; ${product.price}</small>
                </div>
                <div class="quantity-section">
<button class="quantity1">-</button> 
<span id="quantity-value">${quantitycount}</span>
<button class="quantity2">+</button>
                </div>
                <div class="actions">
                    <button class="add-cart">Add To Cart</button>
                    <button class="buy-now">Buy Now</button>
                </div>
                <p class="sku"><strong>SKU:</strong> ${product.sku || "NA"}</p>
                <p class="tags"><strong>Tags:</strong> ${product.tags || "Fresh"}</p>
                <div class="share">
                    <strong>Share:</strong>
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-pinterest"></i>
                </div>
            </div>
        </div>

        <div class="product-tab">
            <div class="tab-buttons">
                <button class="tab-btn active">Description</button>
                <button class="tab-btn">Additional information</button>
                <button class="tab-btn">Review</button>
            </div>
            <div class="tab-content-desc">
                <p>${product.description?.paragraph || ""}</p>
                <p>${product.detail || ""}</p>
                <ul>
                    ${product.description?.bullets?.map(
            (bullet) => `<li><span class="dot"></span> ${bullet}</li>`
        ).join('') || ""
            }
                </ul>
            </div>
            <div class="tab-content-info">
                <p><strong>Customer Review:</strong> ${product.review || "No reviews yet."}</p>
            </div>
        </div>
        `;

        // Load cart from localStorage if exists
        const savedCart = JSON.parse(localStorage.getItem("cart"));
        if (savedCart) {
            cart = savedCart;
            updateCartCount();
        }
        document.querySelectorAll(".buy-now").forEach(button => {
            button.addEventListener("click", () => {
                const name = product.name;
                const weight = product.weight
                const price = product.price;
                const image = product.image;


                const existing = cart.find(item => item.name === name);
                if (existing) {
                    existing.count = quantitycount;
                } else {
                    cart.push({ name, price, weight, image, count: quantitycount == 0 ? 1 : quantitycount });


                }

                localStorage.setItem("cart", JSON.stringify(cart));
                updateCartCount();
                window.location.href = "shoppingcart.html";
            });
        });
        document.querySelectorAll(".add-cart").forEach(button => {
            button.addEventListener("click", () => {
                const name = product.name;
                const weight = product.weight
                const price = product.price;
                const image = product.image;


                const existing = cart.find(item => item.name === name);
                if (existing) {
                    existing.count = quantitycount;
                } else {
                    cart.push({ name, price, weight, image, count: quantitycount == 0 ? 1 : quantitycount });


                }

                localStorage.setItem("cart", JSON.stringify(cart));
                updateCartCount();
            });
        });

        function updateCartCount() {
            // const count = cart.reduce((sum, item) => sum + item.count, 0);
            document.getElementById("cart-count").innerText = cart.length;
        }
    } else {
        section.innerHTML = "<p>Product not found in localStorage.</p>";
    }
});
// Add to cart button click

document.addEventListener("DOMContentLoaded", () => {
    const decreaseBtn = document.querySelector('.quantity1');
    const increaseBtn = document.querySelector('.quantity2');
    const quantityValue = document.getElementById('quantity-value');

    // Set initial quantity (can be set from localStorage count if needed)
    let quantity = parseInt(quantityValue.textContent) || 1;

    // Replace with your product's actual name (or set it dynamically)

    // Helper function to update cart count in localStorage
    function updateCartQuantity(newQuantity) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Find the product in the cart
        const productIndex = cart.findIndex(p => p.name === currentProductName);
        console.log("productIndex " + productIndex)

        if (productIndex !== -1) {
            cart[productIndex].count = newQuantity;

            // Remove product if quantity goes below 1
            if (cart[productIndex].count < 1) {
                cart.splice(productIndex, 1);
            }

            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }

    decreaseBtn.addEventListener('click', () => {
        if (quantity > 1) {
            quantitycount--;
            quantityValue.textContent = quantitycount;

        }
    });

    increaseBtn.addEventListener('click', () => {
        quantitycount++;
        quantityValue.textContent = quantitycount;

    });
});

document.getElementById("cart-icon").addEventListener("click", function () {
    window.location.href = "shoppingcart.html";
});
document.getElementById("wishlist-icon").addEventListener("click", function () {
    window.location.href = "wishlist.html";
});
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