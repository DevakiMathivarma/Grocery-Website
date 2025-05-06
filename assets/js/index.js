let cart = [];

        document.addEventListener("DOMContentLoaded", () => {
            // Load cart from localStorage if exists
            const savedCart = JSON.parse(localStorage.getItem("cart"));
            if (savedCart) {
                cart = savedCart;
                updateCartCount();
            }

            // Add to cart button click
            document.querySelectorAll(".add-to-cart").forEach(button => {
                button.addEventListener("click", () => {
                    const name = button.closest('.featured-product-items-list').querySelector('.featured-product-name h5').textContent;
                    const weight = button.closest('.featured-product-items-list').querySelector('.featured-product-name p').textContent;
                    const dollarPrice = button.closest('.featured-product-items-list').querySelector('.featured-product-price span').textContent;
                    const image =  button.closest('.featured-product-items-list').querySelector('.featured-product-items-list-image img').getAttribute('src');

                    const price = dollarPrice.replace(/[^\d.]/g, '');
                    const existing = cart.find(item => item.name === name);
                    if (existing) {
                        existing.count++;
                    } else {
                        cart.push({ name, price, weight, image,count: 1 });
                    }

                    localStorage.setItem("cart", JSON.stringify(cart));
                    updateCartCount();
                });
            });

            // Toggle cart popup
            const cartIcon = document.getElementById("cart-icon");
            cartIcon.addEventListener("click", () => {
                const popup = document.getElementById("cart-popup");
                popup.classList.toggle("hidden");
                renderCart();
            });
        });

        function updateCartCount() {
            const count = cart.reduce((sum, item) => sum + item.count, 0);
            document.getElementById("cart-count").innerText = count;
        }

        function renderCart() {
            const cartItemsList = document.getElementById("cart-items");
            const totalEl = document.getElementById("cart-total");
            cartItemsList.innerHTML = "";

            let total = 0;

            cart.forEach(item => {
                const li = document.createElement("li");
                li.innerText = `${item.name} x ${item.count} - ${item.price * item.count}`;
                cartItemsList.appendChild(li);
                total += item.price * item.count;
            });

            totalEl.innerText = total;
        }

        function clearCart() {
            cart = [];
            localStorage.removeItem("cart");
            updateCartCount();
            renderCart();
        }
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        const toast = document.getElementById('itempopup');

        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Add to cart logic here if needed...
                // Show toast
                toast.classList.remove('hidden');
                toast.classList.add('show');

                // Hide toast after 2 seconds
                setTimeout(() => {
                    toast.classList.remove('show');
                    toast.classList.add('hidden');
                }, 2000);
            });
        });
        document.getElementById("cart-icon").addEventListener("click", function () {
            window.location.href = "shoppingcart.html";
        });
        document.getElementById("wishlist-icon").addEventListener("click", function () {
            window.location.href = "wishlist.html";
        });
        const readMoreBtns = document.querySelectorAll('.read-more');
        const moreContents = document.querySelectorAll('.more-content');

        readMoreBtns.forEach((btn, index) => {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                moreContents[index].classList.toggle('show');
                btn.textContent = moreContents[index].classList.contains('show') ? 'Read less' : 'Read more';
            });
        });


                    // Add to cart button click
                    document.querySelectorAll(".wishlist-btn").forEach(button => {
                        button.addEventListener("click", () => {
                            const name = button.closest('.featured-product-items-list').querySelector('.featured-product-name h5').textContent;
                            const weight = button.closest('.featured-product-items-list').querySelector('.featured-product-name p').textContent;
                            const dollarPrice = button.closest('.featured-product-items-list').querySelector('.featured-product-price span').textContent;
                            const image =  button.closest('.featured-product-items-list').querySelector('.featured-product-items-list-image img').getAttribute('src');
        
                            const price = dollarPrice.replace(/[^\d.]/g, '');
                            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
                            const existing = wishlist.find(item => item.name === name);
                            if (existing) {
                                alert('Already in wishlist!');
                            } else {
                                wishlist.push({ name, price, weight, image,count: 1 });
                                localStorage.setItem('wishlist', JSON.stringify(wishlist));
                                alert('Added to wishlist!');
                            }
                        });
                    });

        document.querySelectorAll('.accordion-title').forEach(title => {
            title.addEventListener('click', () => {
                const content = title.nextElementSibling;
                const icon = title.querySelector('.icon');

                // Toggle active class
                title.classList.toggle('active');

                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                    content.classList.remove('open');
                    icon.textContent = '+';
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                    content.classList.add('open');
                    icon.textContent = '−';
                }
            });
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
  document.getElementById('fruits-shop').addEventListener('click', function() {
    window.location.href = 'fruits.html';
  });
  document.getElementById('shop').addEventListener('click', function() {
    window.location.href = 'shop.html';
  });
  document.getElementById('veg-shop').addEventListener('click', function() {
    window.location.href = 'vegetable.html';
  });
  document.getElementById('browse').addEventListener('click', function() {
    window.location.href = 'shop.html';
    });

    document.getElementById("categorySelect").addEventListener("change", function () {
        const selectedPage = this.value;
        window.location.href = selectedPage; // Redirect to the selected page
    });
