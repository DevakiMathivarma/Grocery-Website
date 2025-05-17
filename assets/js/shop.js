// let currentPage = 1;
// const itemsPerPage = 9;


// // Safe parse to avoid crashing if productList is undefined
// let productList = [];
// try {
//     productList = JSON.parse(localStorage.getItem("productList") || "[]");
// } catch (e) {
//     console.error("Failed to parse productList from localStorage", e);
// }
// let filteredProducts = productList;

// let cart = JSON.parse(localStorage.getItem('cart')) || [];
// const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
// if (savedCart) {
//     cart = savedCart;
//     updateCartCount();
// }
// // function updateCartCount() {
// //     // const count = cart.reduce((sum, item) => sum + item.count, 0);
// //     document.getElementById("cart-count").innerText = cart.length;
// // }

//  function updateCartCount() {
//             const count = cart.reduce((sum, item) => sum + item.count, 0);
//              document.getElementById("cart-count").innerText = count;
//             // document.getElementById("cart-count").innerText = cart.length;
//         }

// const productGrid = document.getElementById("product-grid");
// document.getElementById("prev-page").addEventListener("click", () => {
//     if (currentPage > 1) {
//         currentPage--;
//         renderProducts(filteredProducts);
//     }
// });

// document.getElementById("next-page").addEventListener("click", () => {
//     const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
//     if (currentPage < totalPages) {
//         currentPage++;
//         renderProducts(filteredProducts);
//     }
// });

// // Update renderProducts to use only paginatedItems
// function renderProducts(products) {
//     filteredProducts = products;
//     const start = (currentPage - 1) * itemsPerPage;
//     const end = start + itemsPerPage;
//     const paginatedItems = products.slice(start, end);
//     productGrid.innerHTML = "";

//     paginatedItems.forEach(product => {
//         // Create the product card as you were doing
//         const card = document.createElement("div");
//         card.className = "featured-product-items";
//         card.innerHTML = `
// <div class="featured-product-items-list">
//     <div class="featured-product-items-list-dicount">
//         <div><h3>${product.discount}</h3></div>
//                     <div>        <button class="wishlist-btn" data-product='${JSON.stringify(product)}'><i class="far fa-heart"></i></button>
//     </div> </div>
//     <div class="featured-product-items-list-image add-to-cart" >
//         <img src="${product.image}">
//     </div>
//     <div class="featured-product-text">
//         <div><p>${product.category}</p></div>
//         <div><span>${product.rating}</span><i class='bx bxs-star'></i></div>
//     </div>
//     <div class="featured-product-name">
//         <h5>${product.name}</h5>
//         <p>${product.weight}</p>
//     </div>
//     <div class="featured-product-price">
//         <div>
//             <span>&#8377 ${product.originalPrice}</span>
//             <small>₹ ${product.price}</small>
//         </div>
//         <div><button class="add-to-cart" data-id="${product.id}"><i class='bx bx-shopping-bag'></i>ADD</button></div>
//     </div>
// </div>`;

//         // Ensure the button exists after the card is created
//         const addToCartButton = card.querySelector('.add-to-cart');

//         // Add the event listener inside the loop so the correct `product` is passed
//         addToCartButton.addEventListener("click", () => {
//             // Use console.log to ensure the correct product object is passed
//             console.log("Product being added:", product);

//             // Store the selected product in localStorage
//             localStorage.setItem("selectedProduct", JSON.stringify(product));

//             // Redirect to the description page
//             window.location.href = "description.html";
//         });

   

//         // Append the card to the product grid
//         productGrid.appendChild(card);
//     });

//     // // Update page info
//     // document.getElementById("page-info").textContent = `Page ${currentPage} of ${Math.ceil(products.length / itemsPerPage)}`;

//     // // Disable buttons at bounds
//     // document.getElementById("prev-page").disabled = currentPage === 1;
//     // document.getElementById("next-page").disabled = currentPage >= Math.ceil(products.length / itemsPerPage);
//     // ✅ Correctly update page info
//     const totalPages = Math.ceil(products.length / itemsPerPage);
//     document.getElementById("page-info").textContent = `Page ${currentPage} of ${totalPages}`;

//     // ✅ Handle button disable state
//     document.getElementById("prev-page").disabled = currentPage === 1;
//     document.getElementById("next-page").disabled = currentPage >= totalPages;

// }



// renderProducts(productList);

// // Price range input elements
// const priceMinInput = document.getElementById("price-min");
// const priceMaxInput = document.getElementById("price-max");

// // Display span elements (same ID used in both labels)
// const minPriceSpan = document.querySelectorAll("#min-price");
// const maxPriceSpan = document.querySelectorAll("#max-price");

// // Function to update all matching span elements
// function updatePriceDisplay() {
//     const min = parseInt(priceMinInput.value);
//     const max = parseInt(priceMaxInput.value);

//     minPriceSpan.forEach(span => span.textContent = min);
//     maxPriceSpan.forEach(span => span.textContent = max);
// }

// // Event listeners for live update while dragging
// priceMinInput.addEventListener("input", updatePriceDisplay);
// priceMaxInput.addEventListener("input", updatePriceDisplay);

// // Initial display setup
// updatePriceDisplay()








// document.querySelector('.submit-btn button').addEventListener('click', () => {
//     const selectedBrands = Array.from(document.querySelectorAll('.brand-checkbox:checked')).map(cb => cb.value);
//     const selectedCategories = Array.from(document.querySelectorAll('#category-selection input:checked')).map(cb => cb.nextElementSibling.textContent.trim());
//     const selectedRatings = Array.from(document.querySelectorAll('.star-checkbox:checked')).map(cb => parseFloat(cb.value));
//     const selectedAvailability = Array.from(document.querySelectorAll('.availability-checkbox:checked')).map(cb => cb.value);

//     const minPrice = parseFloat(priceMinInput.value);
//     const maxPrice = parseFloat(priceMaxInput.value);

//     const brandMap = {
//         "Fresh Harvest": "Vegetables",
//         "Farm Fresh": "Vegetables",
//         "Nature’s products": "Fruits",
//         "Frozen Foods": "Dairy",
//         "Good Grains": "Spices"
//     };

//     const filtered = productList.filter(product => {
//         const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
//         const brandMatch = selectedBrands.length === 0 || selectedBrands.some(brand => brandMap[brand] === product.category);
//         const availabilityMatch = selectedAvailability.length === 0 || selectedAvailability.includes(product.availability || "In Stock");
//         const ratingMatch = selectedRatings.length === 0 || selectedRatings.some(r => product.rating <= r);
//         const priceMatch = product.price >= minPrice && product.price <= maxPrice;

//         console.log({ product, categoryMatch, brandMatch, availabilityMatch, ratingMatch, priceMatch });

//         return categoryMatch && brandMatch && availabilityMatch && ratingMatch && priceMatch;
//     });

//     console.log(filtered)
//    currentPage = 1;
//     renderProducts(filtered);
//     // Render filtered products...
// });
// document.getElementById("cart-icon").addEventListener("click", function () {
//     window.location.href = "shoppingcart.html";
// });
// document.getElementById("wishlist-icon").addEventListener("click", function () {
//     window.location.href = "wishlist.html";
// });
// document.addEventListener('click', function (e) {
//     if (e.target.classList.contains('fa-heart') || e.target.closest('.wishlist-btn')) {
//         const btn = e.target.closest('.wishlist-btn');
//         const productData = JSON.parse(btn.getAttribute('data-product'));

//         // Get existing wishlist or initialize empty array
//         let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

//         // Check for duplicates based on product name (or id, if available)
//         const isAlreadyAdded = wishlist.some(item => item.name === productData.name);
//         if (!isAlreadyAdded) {
//             wishlist.push(productData);
//             localStorage.setItem('wishlist', JSON.stringify(wishlist));
//             alert('Added to wishlist!');
//         } else {
//             alert('Already in wishlist!');
//         }
//     }
// });


// // newsletter
// const subscribeBtn = document.querySelector(".newsletter button");

// subscribeBtn.addEventListener("click", function () {
//     const emailInput = document.querySelector(".newsletter input");
//     if (emailInput.value.trim() !== "") {
//         alert("Subscribed");
//         emailInput.value = "";
//     } else {
//         alert("Please enter your email address.");
//     }
// });
// // toggle
// const menuToggle = document.querySelector(".menu-toggle");
// const mainMenu = document.querySelector(".main-menu");
// const dropdown = document.querySelector(".dropdown");

// menuToggle.addEventListener("click", () => {
//     mainMenu.classList.toggle("open");
// });

// dropdown.addEventListener("click", () => {
//     dropdown.classList.toggle("active");
// });
// document.getElementById('userIcon').addEventListener('click', function() {
// window.location.href = 'about.html';
// });
// document.getElementById("categorySelect").addEventListener("change", function () {
//     const selectedPage = this.value;
//     window.location.href = selectedPage; // Redirect to the selected page
// });
// document.getElementById('browse').addEventListener('click', function() {
//     window.location.href = 'shop.html';
//     });
//     // document.getElementById('imagedescription').addEventListener('click', function() {
//     // window.location.href = 'description.html';
//     // });
  

// document.addEventListener("DOMContentLoaded", () => {
//     const searchInput = document.querySelector('.search-container input');
  
//     if (!searchInput) return;
  
//     searchInput.addEventListener("input", () => {
//       const query = searchInput.value.trim().toLowerCase();
  
//       const productCards = document.querySelectorAll(".featured-product-items-list");
  
//       productCards.forEach(card => {
//         const nameElement = card.querySelector(".featured-product-name h5");
  
//         if (!nameElement) return;
  
//         const name = nameElement.textContent.trim().toLowerCase();
  
//         if (name.includes(query)) {
//           card.classList.remove("hidden");
//         } else {
//           card.classList.add("hidden");
//         }
//       });
//     });
//   });
  
  
  


// let currentPage = 1;
// const itemsPerPage = 9;
// let quantitycount = 1;

// // Safe parse to avoid crashing if productList is undefined
// let productList = [];
// try {
//     productList = JSON.parse(localStorage.getItem("productList") || "[]");
// } catch (e) {
//     console.error("Failed to parse productList from localStorage", e);
// }
// let filteredProducts = productList;

// let cart = JSON.parse(localStorage.getItem('cart')) || [];
// const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
// if (savedCart) {
//     cart = savedCart;
//     updateCartCount();
// }

// // function updateCartCount() {
// //     // const count = cart.reduce((sum, item) => sum + item.count, 0);
// //     document.getElementById("cart-count").innerText = cart.length;
// // }

//  function updateCartCount() {
//             const count = cart.reduce((sum, item) => sum + item.count, 0);
//              document.getElementById("cart-count").innerText = count;
//             // document.getElementById("cart-count").innerText = cart.length;
//         }

// const productGrid = document.getElementById("product-grid");
// document.getElementById("prev-page").addEventListener("click", () => {
//     if (currentPage > 1) {
//         currentPage--;
//         renderProducts(filteredProducts);
//     }
// });

// document.getElementById("next-page").addEventListener("click", () => {
//     const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
//     if (currentPage < totalPages) {
//         currentPage++;
//         renderProducts(filteredProducts);
//     }
// });

// // Update renderProducts to use only paginatedItems
// function renderProducts(products) {
//     filteredProducts = products;
//     const start = (currentPage - 1) * itemsPerPage;
//     const end = start + itemsPerPage;
//     const paginatedItems = products.slice(start, end);
//     productGrid.innerHTML = "";

//     paginatedItems.forEach(product => {
//         // Create the product card as you were doing
//         const itemincart = cart.find(item=> item.name === product.name);
// if (itemincart){
//     quantitycount = itemincart.count;
// }
//         const card = document.createElement("div");
//         card.className = "featured-product-items";
//         card.innerHTML = `
// <div class="featured-product-items-list">
//     <div class="featured-product-items-list-dicount">
//         <div><h3>${product.discount}</h3></div>
//                     <div>        <button class="wishlist-btn" data-product='${JSON.stringify(product)}'><i class="far fa-heart"></i></button>
//     </div> </div>
//     <div class="featured-product-items-list-image" >
//         <img src="${product.image}">
//     </div>
//     <div class="featured-product-text">
//         <div><p>${product.category}</p></div>
//         <div><span>${product.rating}</span><i class='bx bxs-star'></i></div>
//     </div>
//     <div class="featured-product-name">
//         <h5>${product.name}</h5>
//         <p>${product.weight}</p>
//     </div>
//     <div class="featured-product-price">
//         <div>
//             <span>&#8377 ${product.originalPrice}</span>
//             <small>₹ ${product.price}</small>
//         </div>
//         <div><button class="add-to-cart" data-id="${product}"><i class='bx bx-shopping-bag'></i>ADD</button></div>
//     </div>
// </div>`;

//         // Ensure the button exists after the card is created
//         const addToCartButton = card.querySelector('.add-to-cart');

//         // Add the event listener inside the loop so the correct `product` is passed
//         addToCartButton.addEventListener("click", () => {
//             const name = product.name;
//                 const weight = product.weight
//                 const price = product.price;
//                 const image = product.image;
//                 const existing = cart.find(item => item.name === name);
//                 if (existing) {
//                     existing.count = quantitycount;
//                 } else {
//                     cart.push({ name, price, weight, image, count: quantitycount == 0 ? 1 : quantitycount });
//                 }

//                 localStorage.setItem("cart", JSON.stringify(cart));
//                 updateCartCount();
//         });

   

//         // Append the card to the product grid
//         productGrid.appendChild(card);
//     });

//     // // Update page info
//     // document.getElementById("page-info").textContent = `Page ${currentPage} of ${Math.ceil(products.length / itemsPerPage)}`;

//     // // Disable buttons at bounds
//     // document.getElementById("prev-page").disabled = currentPage === 1;
//     // document.getElementById("next-page").disabled = currentPage >= Math.ceil(products.length / itemsPerPage);
//     // ✅ Correctly update page info
//     const totalPages = Math.ceil(products.length / itemsPerPage);
//     document.getElementById("page-info").textContent = `Page ${currentPage} of ${totalPages}`;

//     // ✅ Handle button disable state
//     document.getElementById("prev-page").disabled = currentPage === 1;
//     document.getElementById("next-page").disabled = currentPage >= totalPages;

// }



// renderProducts(productList);

// // Price range input elements
// const priceMinInput = document.getElementById("price-min");
// const priceMaxInput = document.getElementById("price-max");

// // Display span elements (same ID used in both labels)
// const minPriceSpan = document.querySelectorAll("#min-price");
// const maxPriceSpan = document.querySelectorAll("#max-price");

// // Function to update all matching span elements
// function updatePriceDisplay() {
//     const min = parseInt(priceMinInput.value);
//     const max = parseInt(priceMaxInput.value);

//     minPriceSpan.forEach(span => span.textContent = min);
//     maxPriceSpan.forEach(span => span.textContent = max);
// }

// // Event listeners for live update while dragging
// priceMinInput.addEventListener("input", updatePriceDisplay);
// priceMaxInput.addEventListener("input", updatePriceDisplay);

// // Initial display setup
// updatePriceDisplay()








// document.querySelector('.submit-btn button').addEventListener('click', () => {
//     const selectedBrands = Array.from(document.querySelectorAll('.brand-checkbox:checked')).map(cb => cb.value);
//     const selectedCategories = Array.from(document.querySelectorAll('#category-selection input:checked')).map(cb => cb.nextElementSibling.textContent.trim());
//     const selectedRatings = Array.from(document.querySelectorAll('.star-checkbox:checked')).map(cb => parseFloat(cb.value));
//     const selectedAvailability = Array.from(document.querySelectorAll('.availability-checkbox:checked')).map(cb => cb.value);

//     const minPrice = parseFloat(priceMinInput.value);
//     const maxPrice = parseFloat(priceMaxInput.value);

//     const brandMap = {
//         "Fresh Harvest": "Vegetables",
//         "Farm Fresh": "Vegetables",
//         "Nature’s products": "Fruits",
//         "Frozen Foods": "Dairy",
//         "Good Grains": "Spices"
//     };

//     const filtered = productList.filter(product => {
//         const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
//         const brandMatch = selectedBrands.length === 0 || selectedBrands.some(brand => brandMap[brand] === product.category);
//         const availabilityMatch = selectedAvailability.length === 0 || selectedAvailability.includes(product.availability || "In Stock");
//         const ratingMatch = selectedRatings.length === 0 || selectedRatings.some(r => product.rating <= r);
//         const priceMatch = product.price >= minPrice && product.price <= maxPrice;

//         console.log({ product, categoryMatch, brandMatch, availabilityMatch, ratingMatch, priceMatch });

//         return categoryMatch && brandMatch && availabilityMatch && ratingMatch && priceMatch;
//     });

//     console.log(filtered)
//    currentPage = 1;
//     renderProducts(filtered);
//     // Render filtered products...
// });
// document.getElementById("cart-icon").addEventListener("click", function () {
//     window.location.href = "shoppingcart.html";
// });
// document.getElementById("wishlist-icon").addEventListener("click", function () {
//     window.location.href = "wishlist.html";
// });
// document.addEventListener('click', function (e) {
//     if (e.target.classList.contains('fa-heart') || e.target.closest('.wishlist-btn')) {
//         const btn = e.target.closest('.wishlist-btn');
//         const productData = JSON.parse(btn.getAttribute('data-product'));

//         // Get existing wishlist or initialize empty array
//         let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

//         // Check for duplicates based on product name (or id, if available)
//         const isAlreadyAdded = wishlist.some(item => item.name === productData.name);
//         if (!isAlreadyAdded) {
//             wishlist.push(productData);
//             localStorage.setItem('wishlist', JSON.stringify(wishlist));
//             alert('Added to wishlist!');
//         } else {
//             alert('Already in wishlist!');
//         }
//     }
// });


// // newsletter
// const subscribeBtn = document.querySelector(".newsletter button");

// subscribeBtn.addEventListener("click", function () {
//     const emailInput = document.querySelector(".newsletter input");
//     if (emailInput.value.trim() !== "") {
//         alert("Subscribed");
//         emailInput.value = "";
//     } else {
//         alert("Please enter your email address.");
//     }
// });
// // toggle
// const menuToggle = document.querySelector(".menu-toggle");
// const mainMenu = document.querySelector(".main-menu");
// const dropdown = document.querySelector(".dropdown");

// menuToggle.addEventListener("click", () => {
//     mainMenu.classList.toggle("open");
// });

// dropdown.addEventListener("click", () => {
//     dropdown.classList.toggle("active");
// });
// document.getElementById('userIcon').addEventListener('click', function() {
// window.location.href = 'about.html';
// });
// document.getElementById("categorySelect").addEventListener("change", function () {
//     const selectedPage = this.value;
//     window.location.href = selectedPage; // Redirect to the selected page
// });
// document.getElementById('browse').addEventListener('click', function() {
//     window.location.href = 'shop.html';
//     });
//     // document.getElementById('imagedescription').addEventListener('click', function() {
//     // window.location.href = 'description.html';
//     // });
  

// document.addEventListener("DOMContentLoaded", () => {
//     const searchInput = document.querySelector('.search-container input');
  
//     if (!searchInput) return;
  
//     searchInput.addEventListener("input", () => {
//       const query = searchInput.value.trim().toLowerCase();
  
//       const productCards = document.querySelectorAll(".featured-product-items-list");
  
//       productCards.forEach(card => {
//         const nameElement = card.querySelector(".featured-product-name h5");
  
//         if (!nameElement) return;
  
//         const name = nameElement.textContent.trim().toLowerCase();
  
//         if (name.includes(query)) {
//           card.classList.remove("hidden");
//         } else {
//           card.classList.add("hidden");
//         }
//       });
//     });
//   });

let currentPage = 1;
const itemsPerPage = 9;
let quantitycount = 1;

// Safe parse to avoid crashing if productList is undefined
let productList = [];
try {
    productList = JSON.parse(localStorage.getItem("productList") || "[]");
} catch (e) {
    console.error("Failed to parse productList from localStorage", e);
}
let filteredProducts = productList;

let cart = JSON.parse(localStorage.getItem('cart')) || [];
const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
if (savedCart) {
    cart = savedCart;
    updateCartCount();
}

// function updateCartCount() {
//     // const count = cart.reduce((sum, item) => sum + item.count, 0);
//     document.getElementById("cart-count").innerText = cart.length;
// }

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.count, 0);
    document.getElementById("cart-count").innerText = count;
    // document.getElementById("cart-count").innerText = cart.length;
}

const productGrid = document.getElementById("product-grid");
document.getElementById("prev-page").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderProducts(filteredProducts);
    }
});

document.getElementById("next-page").addEventListener("click", () => {
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderProducts(filteredProducts);
    }
});

// Update renderProducts to use only paginatedItems
function renderProducts(products) {
    filteredProducts = products;
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = products.slice(start, end);
    productGrid.innerHTML = "";

    paginatedItems.forEach(product => {
        // Create the product card as you were doing

        const card = document.createElement("div");
        card.className = "featured-product-items";
        card.innerHTML = `
<div class="featured-product-items-list">
    <div class="featured-product-items-list-dicount">
        <div><h3>${product.discount}</h3></div>
                    <div>        <button class="wishlist-btn" data-product='${JSON.stringify(product)}'><i class="far fa-heart"></i></button>
    </div> </div>
    <div class="featured-product-items-list-image add-to-cart" >
        <img src="${product.image}">
    </div>
    <div class="featured-product-text">
        <div><p>${product.category}</p></div>
        <div><span>${product.rating}</span><i class='bx bxs-star'></i></div>
    </div>
    <div class="featured-product-name">
        <h5>${product.name}</h5>
        <p>${product.weight}</p>
    </div>
    <div class="featured-product-price">
        <div>
            <span>&#8377 ${product.originalPrice}</span>
            <small>₹ ${product.price}</small>
        </div>
        <div><button class="add-product-cart" data-id="${product}"><i class='bx bx-shopping-bag'></i>ADD</button></div>
    </div>
</div>`;

        // Ensure the button exists after the card is created
        const addToCartButton = card.querySelector('.add-product-cart');

        // Add the event listener inside the loop so the correct `product` is passed
        addToCartButton.addEventListener("click", () => {
            cart = JSON.parse(localStorage.getItem('cart')) || [];
            const itemincart = cart.find(item => item.name === product.name);
               alert('Added to cart!');
            if (itemincart) {
                quantitycount = itemincart.count;
                
            }
            // const quantityInput = card.querySelector('.quantity-input');
            // const quantitycount = parseInt(quantityInput.value) || 1; // Default to 1 if not a number
            const name = product.name;
            const weight = product.weight
            const price = product.price;
            const image = product.image;
            const existing = cart.find(item => item.name === name);
            if (existing) {
                existing.count = quantitycount+1;
            } else {
                cart.push({ name, price, weight, image, count: quantitycount == 0 ? 1 : quantitycount });
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartCount();
        });

        //  Ensure the button exists after the card is created
        const addCartButton = card.querySelector('.add-to-cart');

        // Add the event listener inside the loop so the correct `product` is passed
        addCartButton.addEventListener("click", () => {
            // Use console.log to ensure the correct product object is passed
            console.log("Product being added:", product);

            // Store the selected product in localStorage
            localStorage.setItem("selectedProduct", JSON.stringify(product));

            // Redirect to the description page
            window.location.href = "description.html";
        });
        // Append the card to the product grid
        productGrid.appendChild(card);
    });

    
    // ✅ Correctly update page info
    const totalPages = Math.ceil(products.length / itemsPerPage);
    document.getElementById("page-info").textContent = `Page ${currentPage} of ${totalPages}`;

    // ✅ Handle button disable state
    document.getElementById("prev-page").disabled = currentPage === 1;
    document.getElementById("next-page").disabled = currentPage >= totalPages;

}



renderProducts(productList);

// Price range input elements
const priceMinInput = document.getElementById("price-min");
const priceMaxInput = document.getElementById("price-max");

// Display span elements (same ID used in both labels)
const minPriceSpan = document.querySelectorAll("#min-price");
const maxPriceSpan = document.querySelectorAll("#max-price");

// Function to update all matching span elements
function updatePriceDisplay() {
    const min = parseInt(priceMinInput.value);
    const max = parseInt(priceMaxInput.value);

    minPriceSpan.forEach(span => span.textContent = min);
    maxPriceSpan.forEach(span => span.textContent = max);
}

// Event listeners for live update while dragging
priceMinInput.addEventListener("input", updatePriceDisplay);
priceMaxInput.addEventListener("input", updatePriceDisplay);

// Initial display setup
updatePriceDisplay()








document.querySelector('.submit-btn button').addEventListener('click', () => {
    const selectedBrands = Array.from(document.querySelectorAll('.brand-checkbox:checked')).map(cb => cb.value);
    const selectedCategories = Array.from(document.querySelectorAll('#category-selection input:checked')).map(cb => cb.nextElementSibling.textContent.trim());
    const selectedRatings = Array.from(document.querySelectorAll('.star-checkbox:checked')).map(cb => parseFloat(cb.value));
    const selectedAvailability = Array.from(document.querySelectorAll('.availability-checkbox:checked')).map(cb => cb.value);

    const minPrice = parseFloat(priceMinInput.value);
    const maxPrice = parseFloat(priceMaxInput.value);

    const brandMap = {
        "Fresh Harvest": "Vegetables",
        "Farm Fresh": "Vegetables",
        "Nature’s products": "Fruits",
        "Frozen Foods": "Dairy",
        "Good Grains": "Spices"
    };

    const filtered = productList.filter(product => {
        const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        const brandMatch = selectedBrands.length === 0 || selectedBrands.some(brand => brandMap[brand] === product.category);
        const availabilityMatch = selectedAvailability.length === 0 || selectedAvailability.includes(product.availability || "In Stock");
        const ratingMatch = selectedRatings.length === 0 || selectedRatings.some(r => product.rating <= r);
        const priceMatch = product.price >= minPrice && product.price <= maxPrice;

        console.log({ product, categoryMatch, brandMatch, availabilityMatch, ratingMatch, priceMatch });

        return categoryMatch && brandMatch && availabilityMatch && ratingMatch && priceMatch;
    });

    console.log(filtered)
    currentPage = 1;
    renderProducts(filtered);
    // Render filtered products...
});
document.getElementById("cart-icon").addEventListener("click", function () {
    window.location.href = "shoppingcart.html";
});
document.getElementById("wishlist-icon").addEventListener("click", function () {
    window.location.href = "wishlist.html";
});
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('fa-heart') || e.target.closest('.wishlist-btn')) {
        const btn = e.target.closest('.wishlist-btn');
        const productData = JSON.parse(btn.getAttribute('data-product'));

        // Get existing wishlist or initialize empty array
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

        // Check for duplicates based on product name (or id, if available)
        const isAlreadyAdded = wishlist.some(item => item.name === productData.name);
        if (!isAlreadyAdded) {
            wishlist.push(productData);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            alert('Added to wishlist!');
        } else {
            alert('Already in wishlist!');
        }
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
document.getElementById("categorySelect").addEventListener("change", function () {
    const selectedPage = this.value;
    window.location.href = selectedPage; // Redirect to the selected page
});
document.getElementById('browse').addEventListener('click', function () {
    window.location.href = 'shop.html';
});
// document.getElementById('imagedescription').addEventListener('click', function() {
// window.location.href = 'description.html';
// });


document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector('.search-container input');

    if (!searchInput) return;

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.trim().toLowerCase();

        const productCards = document.querySelectorAll(".featured-product-items-list");

        productCards.forEach(card => {
            const nameElement = card.querySelector(".featured-product-name h5");

            if (!nameElement) return;

            const name = nameElement.textContent.trim().toLowerCase();

            if (name.includes(query)) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });
    });
});