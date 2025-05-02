let currentPage = 1;
        const itemsPerPage = 10;
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
            if (savedCart) {
                cart = savedCart;
                updateCartCount();
            }
            function updateCartCount() {
            const count = cart.reduce((sum, item) => sum + item.count, 0);
            document.getElementById("cart-count").innerText = count;
        }

        // Safe parse to avoid crashing if productList is undefined
        let productList = [];
        try {
            productList = JSON.parse(localStorage.getItem("productList") || "[]");
        } catch (e) {
            console.error("Failed to parse productList from localStorage", e);
        }
        productList = productList.filter(product => product.category === "Fruits");
        let filteredProducts = productList;

        cart = JSON.parse(localStorage.getItem("cart") || "[]");
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
                const card = document.createElement("div");
                card.className = "featured-product-items";
                card.innerHTML = `
                    <div class="featured-product-items-list">
                        <div class="featured-product-items-list-dicount">
                            <div><h3>${product.discount}</h3></div>
                            <div>        <button class="wishlist-btn" data-product='${JSON.stringify(product)}'><i class="far fa-heart"></i></button>
</div>
                        </div>
                        <div class="featured-product-items-list-image">
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
                            <div><button class="add-to-cart" data-id="${product.id}"><i class='bx bx-shopping-bag'></i>ADD</button></div>
                        </div>
                    </div>`;
                // Ensure the button exists after the card is created
                const addToCartButton = card.querySelector('.add-to-cart');

                // Add the event listener inside the loop so the correct `product` is passed
                addToCartButton.addEventListener("click", () => {
                    // Use console.log to ensure the correct product object is passed
                    console.log("Product being added:", product);

                    // Store the selected product in localStorage
                    localStorage.setItem("selectedProduct", JSON.stringify(product));

                    // Redirect to the description page
                    window.location.href = "description.html";
                });
                productGrid.appendChild(card);
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

            // // Update page info
            // document.getElementById("page-info").textContent = `Page ${currentPage} of ${Math.ceil(products.length / itemsPerPage)}`;

            // // Disable buttons at bounds
            // document.getElementById("prev-page").disabled = currentPage === 1;
            // document.getElementById("next-page").disabled = currentPage >= Math.ceil(products.length / itemsPerPage);
            // ✅ Correctly update page info
            const totalPages = Math.ceil(products.length / itemsPerPage);
            document.getElementById("page-info").textContent = `Page ${currentPage} of ${totalPages}`;

            // ✅ Handle button disable state
            document.getElementById("prev-page").disabled = currentPage === 1;
            document.getElementById("next-page").disabled = currentPage >= totalPages;

        }



        renderProducts(productList);

        document.querySelector('.submit-btn button').addEventListener('click', () => {
            const selectedBrands = Array.from(document.querySelectorAll('.brand-checkbox:checked')).map(cb => cb.value);
            const selectedCategories = Array.from(document.querySelectorAll('#category-selection input:checked')).map(cb => cb.nextElementSibling.textContent.trim());
            const selectedRatings = Array.from(document.querySelectorAll('.star-checkbox:checked')).map(cb => parseFloat(cb.value));
            const selectedAvailability = Array.from(document.querySelectorAll('.availability-checkbox:checked')).map(cb => cb.value);

            const minPrice = parseFloat(document.getElementById("price-min").value);
            const maxPrice = parseFloat(document.getElementById("price-max").value);



            const brandMap = {
                "Fresh Harvest": "Vegetables",
                "Farm Fresh": "Vegetables",
                "Nature’s products": "Fruits",
                "Frozen Foods": "Dairy",
                "Good Grains": "Spices"
            };

            const filtered = productList.filter(product => {
                const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);


                const brandMatch = selectedBrands.length === 0 || selectedBrands.some(brand => {
                    return brandMap[brand] === product.category;
                });
                const availabilityMatch = selectedAvailability.length === 0 || selectedAvailability.includes(product.availability || "In Stock");
                const ratingMatch = selectedRatings.length === 0 || selectedRatings.some(r => product.rating <= r);
                const priceMatch = product.price >= minPrice && product.price <= maxPrice;

                console.log({ product, categoryMatch, brandMatch, availabilityMatch, ratingMatch, priceMatch });

                return categoryMatch && brandMatch && availabilityMatch && ratingMatch && priceMatch;
            });

            console.log(filtered)
            currentPage = 1; // Add this before renderProducts(filtered);
            renderProducts(filtered);
        });

        document.getElementById("cart-icon").addEventListener("click", function () {
            window.location.href = "shoppingcart.html";
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