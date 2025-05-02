// Retrieve cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const tbody = document.querySelector('.cart-table tbody');
const summaryBox = document.querySelector('.summary-box');

let totalQuantity = 0;
let totalPrice = 0;

tbody.innerHTML = '';

cart.forEach((item, index) => {
    // Convert price string "₹ 500" to 500
    const price = parseFloat(item.price.toString().replace(/[^0-9.]/g, ''));
    const subtotal = price * item.count;
    totalQuantity += item.count;
    totalPrice += subtotal;

    const row = document.createElement('tr');
    row.innerHTML = `
<td><img src="${item.image}" style="width:70px;",display:"inline-block;"><br>${item.name}<br><small >${item.weight}</small></td>
<td>₹${price.toFixed(2)}</td>
<td class="quantity">
<button class="quantity1" onclick="updateQuantity(${index}, -1)">-</button> 
${item.count} 
<button class="quantity2"onclick="updateQuantity(${index}, 1)">+</button>
</td>
<td>₹${subtotal.toFixed(2)}</td>
`;
    tbody.appendChild(row);
});

summaryBox.innerHTML = `
<h3>Order Summary</h3>
<p>Items: ${totalQuantity}</p>
<p>Sub Total: ₹${totalPrice.toFixed(2)}</p>
<p>Shipping: ₹20.00</p>
<p>Taxes: ₹0.00</p>
<p>Coupon Discount: ₹10.00</p>
<h4>Total: ₹${(totalPrice + 20 - 10).toFixed(2)}</h4>
<button class="checkout-btn payment">Proceed to Buy</button>
`;

function updateQuantity(index, change) {
    cart[index].count += change;
    if (cart[index].count <= 0) {
        cart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();
}
// billing validations

const form = document.getElementById("billingForm");

const fields = [
    { id: "firstName", name: "First Name" },
    { id: "lastName", name: "Last Name" },
    { id: "country", name: "Country" },
    { id: "street", name: "Street Address" },
    { id: "city", name: "City" },
    { id: "state", name: "State" },
    { id: "zip", name: "Zip Code", pattern: /^[0-9]{5,6}$/ },
    { id: "phone", name: "Phone", pattern: /^[0-9]{10}$/ },
    { id: "email", name: "Email", pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    { id: "delivery", name: "Delivery Address" }
];

fields.forEach(field => {
    const input = document.getElementById(field.id);
    const errorMsg = document.getElementById(`${field.id}Error`);

    input.addEventListener("input", () => validate(field));
    input.addEventListener("blur", () => validate(field));
});

function validate(field) {
    const input = document.getElementById(field.id);
    const errorMsg = document.getElementById(`${field.id}Error`);
    const value = input.value.trim();

    if (!value) {
        errorMsg.textContent = `${field.name} is required`;
        input.style.borderColor = "red";
    } else if (field.pattern && !field.pattern.test(value)) {
        errorMsg.textContent = `Enter a valid ${field.name}`;
        input.style.borderColor = "red";
    } else {
        errorMsg.textContent = "";
        input.style.borderColor = "#ccc";
    }
}

form.addEventListener("submit", (e) => {
    let valid = true;
    fields.forEach(field => {
        const input = document.getElementById(field.id);
        if (!input.value.trim() || (field.pattern && !field.pattern.test(input.value.trim()))) {
            validate(field);
            valid = false;
        }
    });

    if (!valid) {
        e.preventDefault();
    }
});


// let checkoutbtn = document.querySelector(".checkout-btn")
// checkoutbtn.addEventListener("click", (event) => {
//     document.querySelector(".billing-details").style.display = "block"
//     document.querySelector(".cart-table").style.display = "none"
//     document.querySelector(".checkout-btn").innerText = "Proceed To Checkout"

// })
// let checkoutbtn1 = document.querySelector(".payment")
// checkoutbtn.addEventListener("click", (event) => {
//     document.querySelector(".billing-details").style.display = "none"
//     document.querySelector(".cart-table").style.display = "none"
//     document.querySelector(".payment-method").style.display="block"
//     document.querySelector(".checkout-btn").innerText = "Proceed To Checkout"

// })
let checkoutBtn = document.querySelector(".checkout-btn");
let billingDetails = document.querySelector(".billing-details");
let cartTable = document.querySelector(".cart-table");
let paymentMethod = document.querySelector(".payment-method");
const billingForm = document.querySelector(".billing-details form");
let orderdetails = document.querySelector(".order-details")
let cartactions = document.querySelector(".cart-actions")

let step = 1; // Start at Step 1

checkoutBtn.addEventListener("click", () => {
    if (step === 1) {
        //     //         if (!billingForm.checkValidity()) {
        //     // alert("Please fill in all the required fields before proceeding to payment.");
        //     // billingForm.reportValidity(); 
        //     // return; 
        // }
        cartTable.style.display = "none";
        cartactions.style.display = "none";
        billingDetails.style.display = "block";
        paymentMethod.style.display = "none";
        checkoutBtn.innerText = "Proceed to Payment";
        step = 2;
    } else if (step === 2) {
        billingDetails.style.display = "none";
        paymentMethod.style.display = "block";
        checkoutBtn.innerText = "Place Order";
        checkoutBtn.style.width = "50%;"
        cart = JSON.parse(localStorage.getItem('cart')) || [];
        localStorage.setItem('orders', JSON.stringify(cart));
        localStorage.setItem('cart', JSON.stringify([]));
        step = 3;
    } else if (step === 3) {
        document.querySelector(".summary-box").style.display = "none"
        cartTable.style.display = "none";
        billingDetails.style.display = "none";
        paymentMethod.style.display = "none";
        orderdetails.style.display = "block"
        step = 4;
    }
});
cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderOrderDetails() {
    let subtotal = 0;
    let productHTML = "";

    cart.forEach(item => {
        subtotal += Number(item.price);

        productHTML += `
<div class="products">
  <div>
    <p><img src=${item.image} style="width:70px;" ,display:"inline-block;></p>
    <p>${item.name}</p>
    <p><small>${item.weight}</small></p>
  </div>
  <div>
    <p>₹${item.price}</p>
  </div>
</div>
`;
    });

    const totalPrice = subtotal + 20 - 10; // ₹20 Shipping, ₹10 Coupon Discount

    const html = `
<div class="order-details-text">
<h3 style="margin-bottom: 20px;">Your Order Is Completed !</h3>
<p class="order-text">Thank You. Your Order Has Been Completed</p>
</div>
<div class="order-details-completed">
<h3>Order Details</h3>
<hr>
<div class="titles">
  <div><h4>Products</h4></div>
  <div><p>Sub Total</p></div>
</div>
${productHTML}
<hr>
<div class="shipping">
  <div><p>Shipping</p></div>
  <div><p>₹20.00</p></div>
</div>
<div class="taxes">
  <div><p>Taxes</p></div>
  <div><p>₹00.00</p></div>
</div>
<div class="coupon-discount">
  <div><p>Coupon Discount</p></div>
  <div><p>₹10.00</p></div>
</div>
<hr>
<div class="Total">
  <div><p>Total</p></div>
  <div><p>₹${totalPrice.toFixed(2)}</p></div>
</div>
</div>
`;

    document.getElementById('orderDetailsContainer').innerHTML = html;
}

// Call the function to render
renderOrderDetails();

document.querySelector('.cart-actions').addEventListener('click', function (e) {
    if (confirm('Are you sure you want to clear the cart?')) {
        localStorage.removeItem('cart');
        location.reload();
    }
});

document.getElementById("wishlist-icon").addEventListener("click", function () {
    window.location.href = "wishlist.html";
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
document.getElementById('userIcon').addEventListener('click', function() {
window.location.href = 'about.html';
});