const faqData = {
    general: [
      { question: "Are the products fresh and of high quality?", answer: "Yes, we ensure all products meet our quality standards." },
      { question: "Do you source products locally?", answer: "We support local farmers and vendors for many items." },
      { question: "How often do you restock items?", answer: "We restock essential items daily." },
      { question: "Do you offer organic options?", answer: "Yes, we have a wide range of organic products." },
      { question: "Are prices competitive?", answer: "We strive to offer the best prices in the market." }
    ],
    payment: [
      { question: "What payment methods do you accept?", answer: "We accept credit cards, debit cards, UPI, and wallets." },
      { question: "Is Cash on Delivery available?", answer: "Yes, Cash on Delivery is available on eligible orders." },
      { question: "Are payments secure?", answer: "All transactions are secured with encryption protocols." },
      { question: "Do you provide invoices?", answer: "Invoices are emailed after purchase and available in your account." },
      { question: "Can I save payment methods?", answer: "Yes, securely save payment details for faster checkout." }
    ],
    delivery: [
      { question: "What are your delivery hours?", answer: "We deliver from 7 AM to 9 PM every day." },
      { question: "Can I schedule my delivery?", answer: "Yes, choose a convenient delivery slot during checkout." },
      { question: "Do you charge for delivery?", answer: "Free delivery on orders above a certain amount." },
      { question: "Do you deliver in my area?", answer: "Enter your PIN code to check service availability." },
      { question: "How do I track my order?", answer: "Tracking info is available in your order details." }
    ],
    products: [
      { question: "Do you offer any discounts or promotions?", answer: "Yes, check our home page and banners for ongoing offers." },
      { question: "Are all items always available?", answer: "Availability may vary, but we update inventory regularly." },
      { question: "Can I suggest a product?", answer: "Yes, use our feedback form to request a new item." },
      { question: "Do you have imported goods?", answer: "We offer a curated selection of international products." },
      { question: "Are frozen foods available?", answer: "Yes, we stock a range of frozen and ready-to-eat items." }
    ],
    account: [
      { question: "How can I update my profile?", answer: "Go to Account Settings to update your details." },
      { question: "How to change my password?", answer: "Use the Forgot Password option or change from profile settings." },
      { question: "How do I delete my account?", answer: "Contact support to initiate account deletion." },
      { question: "How do I view my order history?", answer: "Log in and visit My Orders from the account menu." },
      { question: "Can I add multiple addresses?", answer: "Yes, add and manage multiple addresses from your profile." }
    ]
  };

  const faqContainer = document.getElementById("faqContent");
  const buttons = document.querySelectorAll(".faq-buttons button");

  function renderFAQs(category) {
    faqContainer.innerHTML = "";
    faqData[category].forEach((item) => {
      const faq = document.createElement("div");
      faq.className = "faq";
      faq.innerHTML = `
        <div class="faq-question">
          <span>${item.question}</span>
          <span class="toggle">+</span>
        </div>
        <div class="faq-answer">${item.answer}</div>
      `;
      faq.querySelector(".faq-question").addEventListener("click", () => {
        faq.classList.toggle("active");
        faq.querySelector(".toggle").textContent = faq.classList.contains("active") ? "−" : "+";
      });
      faqContainer.appendChild(faq);
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-category");
      renderFAQs(category);
    });
  });

  renderFAQs("general"); 
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

let cart = [];
document.addEventListener("DOMContentLoaded", () => {
   // Load cart from localStorage if exists
   const savedCart = JSON.parse(localStorage.getItem("cart"));
   if (savedCart) {
       cart = savedCart;
       updateCartCount();
   }
});
// function updateCartCount() {
//   // const count = cart.reduce((sum, item) => sum + item.count, 0);
//   document.getElementById("cart-count").innerText = cart.length;
// }

   function updateCartCount() {
            const count = cart.reduce((sum, item) => sum + item.count, 0);
             document.getElementById("cart-count").innerText = count;
            // document.getElementById("cart-count").innerText = cart.length;
        }
document.getElementById("wishlist-icon").addEventListener("click", function () {
  window.location.href = "wishlist.html";
});
document.getElementById("cart-icon").addEventListener("click", function () {
  window.location.href = "shoppingcart.html";
});
document.getElementById("categorySelect").addEventListener("change", function () {
  const selectedPage = this.value;
  window.location.href = selectedPage; // Redirect to the selected page
});
document.getElementById('browse').addEventListener('click', function() {
  window.location.href = 'shop.html';
  });