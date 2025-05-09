const buttons = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');
const form = document.getElementById('infoForm');
const errorMsg = document.getElementById('errorMsg');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        contents.forEach(content => content.classList.add('hidden'));
        document.getElementById(button.getAttribute('data-target')).classList.remove('hidden');
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    errorMsg.innerText = '';

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const gender = document.getElementById('gender').value.trim();

    if (!firstName || !lastName || !email || !phone || !gender) {
        errorMsg.innerText = "All fields are required.";
        return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        errorMsg.innerText = "Enter a valid email.";
        return;
    }
    if (!/^\d{10}$/.test(phone)) {
        errorMsg.innerText = "Enter a valid 10-digit phone number.";
        return;
    }

    alert('Form submitted successfully!');
    form.reset();
});



// Get the orders array from localStorage
const orders = JSON.parse(localStorage.getItem('orders')) || [];

const orderListContainer = document.getElementById('order-list');
let itemsHTML ="";
const header = `
<div class="order-header">
<div>Order ID: <span>12DHSSKSFDF</span></div>
<div>Payment Method: <span>GPAY</span></div>
<div>Estimated Delivery Date: <span>May 25th 2025</span></div>
</div>
`;
let orderCard;
orders.forEach(order => {
    orderCard = document.createElement('div');
    orderCard.className = 'order-card';

    // Create the order header


    // Create the order items
    itemsHTML = '<div class="order-items">';
    orders.forEach(item => {
        itemsHTML += `
<div class="order-item">
  <div>${item.name} (${item.weight} | ${item.count} qty)</div>
</div>
`;
    });

    // Add status
    if (order.status === 'Accepted') {
        itemsHTML += `<div class="order-status status-accepted">Accepted - Your order has been accepted</div>`;
        itemsHTML += `
<div class="order-actions">
  <button class="track-order-btn">Track Order</button>
  <button class="invoice-btn">Invoice</button>
  <button class="cancel-order-btn">Cancel Order</button>
</div>
`;
    } else if (order.status === 'Delivered') {
        itemsHTML += `<div class="order-status status-delivered">Delivered - Your order has been delivered</div>`;
        itemsHTML += `
<div class="order-actions">
  <button class="add-review-btn">Add Review</button>
  <button class="invoice-btn">Invoice</button>
</div>
`;
    }

    itemsHTML += `</div>`; // Closing order-items div


});

    // Combine and set the HTML
    orderCard.innerHTML = header + itemsHTML;

    // Append to the container
    orderListContainer.appendChild(orderCard);
document.getElementById('logoutbtn').addEventListener('click', function () {
    window.location.href = 'login.html';
});
document.getElementById('userIcon').addEventListener('click', function () {
    window.location.href = 'about.html';
});
document.getElementById("cart-icon").addEventListener("click", function () {
    window.location.href = "shoppingcart.html";
});
document.getElementById("wishlist-icon").addEventListener("click", function () {
    window.location.href = "wishlist.html";
});




document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("addressForm");
    const savedAddressList = document.getElementById("savedAddressList");
    let editIndex = -1;

    const fields = [
        { id: "addressFirstName", error: "error-addressFirstName" },
        { id: "addressLastName", error: "error-addressLastName" },
        { id: "country", error: "error-country" },
        { id: "streetAddress", error: "error-streetAddress" },
        { id: "city", error: "error-city" },
        { id: "state", error: "error-state" },
        { id: "zipCode", error: "error-zipCode" },
        { id: "addressPhone", error: "error-addressPhone" },
        { id: "addressEmail", error: "error-addressEmail" }
    ];

    fields.forEach(field => {
        const input = document.getElementById(field.id);
        input.addEventListener("input", () => {
            validateField(input, field.error);
        });
    });

    function validateField(input, errorId) {
        const errorEl = document.getElementById(errorId);
        if (!input.value.trim()) {
            errorEl.textContent = "This field is required.";
            return false;
        } else {
            errorEl.textContent = "";
            return true;
        }
    }

    function getFormData() {
        return {
            firstName: document.getElementById("addressFirstName").value.trim(),
            lastName: document.getElementById("addressLastName").value.trim(),
            company: document.getElementById("companyName").value.trim(),
            country: document.getElementById("country").value.trim(),
            street: document.getElementById("streetAddress").value.trim(),
            city: document.getElementById("city").value.trim(),
            state: document.getElementById("state").value.trim(),
            zip: document.getElementById("zipCode").value.trim(),
            phone: document.getElementById("addressPhone").value.trim(),
            email: document.getElementById("addressEmail").value.trim(),
        };
    }

    function clearForm() {
        form.reset();
        editIndex = -1;
        document.getElementById("addAddressBtn").textContent = "Add Address";
    }

    function renderAddressCard(data, index) {
        const div = document.createElement("div");
        div.className = "address-card";
        div.innerHTML = `
    <strong>${data.firstName} ${data.lastName}</strong>
    <p>${data.street}, ${data.city}, ${data.state}, ${data.zip}</p>
    <p>${data.country} | ${data.phone} | ${data.email}</p>
    <div class="address-actions">
        <a href="#" onclick="editAddress(${index})">Edit</a> |
        <a href="#" onclick="deleteAddress(${index})">Delete</a>
    </div>
`;
        return div;
    }

    const addresses = [];

    window.editAddress = function (index) {
        const data = addresses[index];
        document.getElementById("addressFirstName").value = data.firstName;
        document.getElementById("addressLastName").value = data.lastName;
        document.getElementById("companyName").value = data.company;
        document.getElementById("country").value = data.country;
        document.getElementById("streetAddress").value = data.street;
        document.getElementById("city").value = data.city;
        document.getElementById("state").value = data.state;
        document.getElementById("zipCode").value = data.zip;
        document.getElementById("addressPhone").value = data.phone;
        document.getElementById("addressEmail").value = data.email;
        editIndex = index;
        document.getElementById("addAddressBtn").textContent = "Update Address";
    };

    window.deleteAddress = function (index) {
        addresses.splice(index, 1);
        updateAddressList();
        clearForm();
    };

    function updateAddressList() {
        savedAddressList.innerHTML = "";
        const noAddressMsg = document.createElement("div");
        noAddressMsg.id = "noAddressMsg";
        noAddressMsg.className = "no-address-msg";

        if (addresses.length === 0) {
            noAddressMsg.textContent = "No address added";
            savedAddressList.appendChild(noAddressMsg);
        } else {
            addresses.forEach((address, i) => {
                savedAddressList.appendChild(renderAddressCard(address, i));
            });
        }
    }


    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let allValid = true;
        fields.forEach(field => {
            const valid = validateField(document.getElementById(field.id), field.error);
            if (!valid) allValid = false;
        });

        if (!allValid) return;

        const data = getFormData();

        if (editIndex >= 0) {
            addresses[editIndex] = data;
        } else {
            addresses.push(data);
        }

        updateAddressList();
        clearForm();
    });


});




const currentPwd = document.querySelector('#password-manager input[placeholder="Enter current password"]');
const newPwd = document.querySelector('#password-manager input[placeholder="Enter new password"]');
const confirmPwd = document.querySelector('#password-manager input[placeholder="Confirm new password"]');
const updateBtn = document.querySelector('#password-manager .update-btn');

// Add/remove error class
function markInvalid(input) {
    input.classList.add("input-error");
}
function clearInvalid(input) {
    input.classList.remove("input-error");
}

// Real-time validation
[newPwd, confirmPwd].forEach(input => {
    input.addEventListener("input", () => {
        if (newPwd.value.length < 6) {
            markInvalid(newPwd);
        } else {
            clearInvalid(newPwd);
        }

        if (confirmPwd.value !== newPwd.value || confirmPwd.value === "") {
            markInvalid(confirmPwd);
        } else {
            clearInvalid(confirmPwd);
        }
    });
});

// Submit validation
updateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let valid = true;

    if (currentPwd.value.trim() === "") {
        markInvalid(currentPwd);
        valid = false;
    } else {
        clearInvalid(currentPwd);
    }

    if (newPwd.value.length < 6) {
        markInvalid(newPwd);
        valid = false;
    } else {
        clearInvalid(newPwd);
    }

    if (confirmPwd.value !== newPwd.value || confirmPwd.value === "") {
        markInvalid(confirmPwd);
        valid = false;
    } else {
        clearInvalid(confirmPwd);
    }

    if (valid) {
        alert("Password updated successfully!");

        // Remove red borders
        [currentPwd, newPwd, confirmPwd].forEach(clearInvalid);
    } else {
        alert("Please fix the errors before submitting.");
    }
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
document.getElementById('userIcon').addEventListener('click', function () {
    window.location.href = 'about.html';
});

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
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    // const count = cart.reduce((sum, item) => sum + item.count, 0);
    document.getElementById("cart-count").innerText = cart.length;
}
document.getElementById("cart-icon").addEventListener("click", function () {
    window.location.href = "shoppingcart.html";
});
document.getElementById("wishlist-icon").addEventListener("click", function () {
    window.location.href = "wishlist.html";
});
document.getElementById("categorySelect").addEventListener("change", function () {
    const selectedPage = this.value;
    window.location.href = selectedPage; // Redirect to the selected page
});
document.getElementById('browse').addEventListener('click', function() {
    window.location.href = 'shop.html';
    });