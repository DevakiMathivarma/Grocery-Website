
window.addEventListener('DOMContentLoaded', function () {
 
const productList = [
    {
        "name": "Apple",
        "price": 113,
        "originalPrice": 213,
        "weight": "250g",
        "image": "assets/images/homepage-images/apple.jpg",
        "rating": 3.9,
        "discount": "47% Off",
        "category": "Fruits",
        "detail": "High-quality fruits to elevate your meals.",
        "description": {
            "paragraph": "This apple is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Banana",
        "price": 245,
        "originalPrice": 311,
        "weight": "1000g",
        "image": "assets/images/homepage-images/banana1.jpg",
        "rating": 4.3,
        "discount": "21% Off",
        "category": "Fruits",
        "detail": "High-quality fruits to elevate your meals.",
        "description": {
            "paragraph": "This banana is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Peach",
        "price": 387,
        "originalPrice": 480,
        "weight": "750g",
        "image": "assets/images/homepage-images/peach.jpg",
        "rating": 4.5,
        "discount": "19% Off",
        "category": "Fruits",
        "detail": "High-quality fruits to elevate your meals.",
        "description": {
            "paragraph": "This peach is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Strawberry",
        "price": 382,
        "originalPrice": 412,
        "weight": "250g",
        "image": "assets/images/homepage-images/straw.jpg",
        "rating": 4.6,
        "discount": "7% Off",
        "category": "Fruits",
        "detail": "High-quality fruits to elevate your meals.",
        "description": {
            "paragraph": "This strawberry is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Guava",
        "price": 263,
        "originalPrice": 280,
        "weight": "500g",
        "image": "assets/images/homepage-images/guava.jpg",
        "rating": 2.0,
        "discount": "6% Off",
        "category": "Fruits",
        "detail": "High-quality fruits to elevate your meals.",
        "description": {
            "paragraph": "This guava is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Watermelon",
        "price": 300,
        "originalPrice": 371,
        "weight": "500g",
        "image": "assets/images/homepage-images/watermelon.jpg",
        "rating": 2.3,
        "discount": "19% Off",
        "category": "Fruits",
        "detail": "High-quality fruits to elevate your meals.",
        "description": {
            "paragraph": "This watermelon is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Lychee",
        "price": 480,
        "originalPrice": 558,
        "weight": "750g",
        "image": "assets/images/homepage-images/lychee.PNG",
        "rating": 4.8,
        "discount": "14% Off",
        "category": "Fruits",
        "detail": "High-quality fruits to elevate your meals.",
        "description": {
            "paragraph": "This lychee is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Pineapple",
        "price": 130,
        "originalPrice": 220,
        "weight": "750g",
        "image": "assets/images/homepage-images/pineapple.jpg",
        "rating": 2.0,
        "discount": "41% Off",
        "category": "Fruits",
        "detail": "High-quality fruits to elevate your meals.",
        "description": {
            "paragraph": "This pineapple is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Papaya",
        "price": 418,
        "originalPrice": 437,
        "weight": "750g",
        "image": "assets/images/homepage-images/papaya.PNG",
        "rating": 3.7,
        "discount": "4% Off",
        "category": "Fruits",
        "detail": "High-quality fruits to elevate your meals.",
        "description": {
            "paragraph": "This papaya is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Mango",
        "price": 216,
        "originalPrice": 293,
        "weight": "250g",
        "image": "assets/images/homepage-images/mango.jpg",
        "rating": 3.9,
        "discount": "26% Off",
        "category": "Fruits",
        "detail": "High-quality fruits to elevate your meals.",
        "description": {
            "paragraph": "This mango is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Carrot",
        "price": 319,
        "originalPrice": 356,
        "weight": "500g",
        "image": "assets/images/homepage-images/carrot1.jpg",
        "rating": 4.4,
        "discount": "10% Off",
        "category": "Vegetables",
        "detail": "High-quality vegetables to elevate your meals.",
        "description": {
            "paragraph": "This carrot is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Broccoli",
        "price": 279,
        "originalPrice": 353,
        "weight": "250g",
        "image": "assets/images/homepage-images/broccoli.jpg",
        "rating": 2.0,
        "discount": "21% Off",
        "category": "Vegetables",
        "detail": "High-quality vegetables to elevate your meals.",
        "description": {
            "paragraph": "This broccoli is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Spinach",
        "price": 173,
        "originalPrice": 211,
        "weight": "1000g",
        "image": "assets/images/homepage-images/spinach.jpg",
        "rating": 3.9,
        "discount": "18% Off",
        "category": "Vegetables",
        "detail": "High-quality vegetables to elevate your meals.",
        "description": {
            "paragraph": "This spinach is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Cabbage",
        "price": 369,
        "originalPrice": 397,
        "weight": "1000g",
        "image": "assets/images/homepage-images/cabbage.jpg",
        "rating": 4.9,
        "discount": "7% Off",
        "category": "Vegetables",
        "detail": "High-quality vegetables to elevate your meals.",
        "description": {
            "paragraph": "This cabbage is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Cauliflower",
        "price": 453,
        "originalPrice": 528,
        "weight": "750g",
        "image": "assets/images/homepage-images/cauli.jpg",
        "rating": 3.8,
        "discount": "14% Off",
        "category": "Vegetables",
        "detail": "High-quality vegetables to elevate your meals.",
        "description": {
            "paragraph": "This cauliflower is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Potato",
        "price": 282,
        "originalPrice": 317,
        "weight": "250g",
        "image": "assets/images/homepage-images/potato.jpg",
        "rating": 4.1,
        "discount": "11% Off",
        "category": "Vegetables",
        "detail": "High-quality vegetables to elevate your meals.",
        "description": {
            "paragraph": "This potato is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Tomato",
        "price": 119,
        "originalPrice": 134,
        "weight": "500g",
        "image": "assets/images/homepage-images/tomato.jpg",
        "rating": 2.5,
        "discount": "11% Off",
        "category": "Vegetables",
        "detail": "High-quality vegetables to elevate your meals.",
        "description": {
            "paragraph": "This tomato is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Cucumber",
        "price": 489,
        "originalPrice": 509,
        "weight": "1000g",
        "image": "assets/images/homepage-images/cucumber.jpg",
        "rating": 4.3,
        "discount": "4% Off",
        "category": "Vegetables",
        "detail": "High-quality vegetables to elevate your meals.",
        "description": {
            "paragraph": "This cucumber is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Turnip",
        "price": 159,
        "originalPrice": 224,
        "weight": "250g",
        "image": "assets/images/homepage-images/turnip.jpg",
        "rating": 4.2,
        "discount": "29% Off",
        "category": "Vegetables",
        "detail": "High-quality vegetables to elevate your meals.",
        "description": {
            "paragraph": "This turnip is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Onion",
        "price": 292,
        "originalPrice": 318,
        "weight": "250g",
        "image": "assets/images/homepage-images/onion1.jpg",
        "rating": 2.5,
        "discount": "8% Off",
        "category": "Vegetables",
        "detail": "High-quality vegetables to elevate your meals.",
        "description": {
            "paragraph": "This onion is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Milk",
        "price": 460,
        "originalPrice": 556,
        "weight": "750g",
        "image": "assets/images/homepage-images/milk.PNG",
        "rating": 4.9,
        "discount": "17% Off",
        "category": "Dairy",
        "detail": "High-quality dairy to elevate your meals.",
        "description": {
            "paragraph": "This milk is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Cheese",
        "price": 114,
        "originalPrice": 152,
        "weight": "1000g",
        "image": "assets/images/homepage-images/cheese.PNG",
        "rating": 3.9,
        "discount": "25% Off",
        "category": "Dairy",
        "detail": "High-quality dairy to elevate your meals.",
        "description": {
            "paragraph": "This cheese is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Butter",
        "price": 151,
        "originalPrice": 207,
        "weight": "750g",
        "image": "assets/images/homepage-images/butter.PNG",
        "rating": 2.6,
        "discount": "27% Off",
        "category": "Dairy",
        "detail": "High-quality dairy to elevate your meals.",
        "description": {
            "paragraph": "This butter is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Yogurt",
        "price": 225,
        "originalPrice": 242,
        "weight": "500g",
        "image": "assets/images/homepage-images/yogurt.PNG",
        "rating": 2.0,
        "discount": "7% Off",
        "category": "Dairy",
        "detail": "High-quality dairy to elevate your meals.",
        "description": {
            "paragraph": "This yogurt is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Cream",
        "price": 193,
        "originalPrice": 274,
        "weight": "250g",
        "image": "assets/images/homepage-images/cream.PNG",
        "rating": 2.1,
        "discount": "30% Off",
        "category": "Dairy",
        "detail": "High-quality dairy to elevate your meals.",
        "description": {
            "paragraph": "This cream is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Paneer",
        "price": 453,
        "originalPrice": 498,
        "weight": "250g",
        "image": "assets/images/homepage-images/paneer.PNG",
        "rating": 3.1,
        "discount": "9% Off",
        "category": "Dairy",
        "detail": "High-quality dairy to elevate your meals.",
        "description": {
            "paragraph": "This paneer is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Curd",
        "price": 176,
        "originalPrice": 233,
        "weight": "750g",
        "image": "assets/images/homepage-images/curd.PNG",
        "rating": 3.3,
        "discount": "24% Off",
        "category": "Dairy",
        "detail": "High-quality dairy to elevate your meals.",
        "description": {
            "paragraph": "This curd is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Ghee",
        "price": 428,
        "originalPrice": 521,
        "weight": "500g",
        "image": "assets/images/homepage-images/ghee.PNG",
        "rating": 2.3,
        "discount": "18% Off",
        "category": "Dairy",
        "detail": "High-quality dairy to elevate your meals.",
        "description": {
            "paragraph": "This ghee is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Condensed Milk",
        "price": 345,
        "originalPrice": 384,
        "weight": "1000g",
        "image": "assets/images/homepage-images/condensed.PNG",
        "rating": 3.7,
        "discount": "10% Off",
        "category": "Dairy",
        "detail": "High-quality dairy to elevate your meals.",
        "description": {
            "paragraph": "This condensed milk is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Kefir",
        "price": 261,
        "originalPrice": 297,
        "weight": "750g",
        "image": "assets/images/homepage-images/kefir.PNG",
        "rating": 4.0,
        "discount": "12% Off",
        "category": "Dairy",
        "detail": "High-quality dairy to elevate your meals.",
        "description": {
            "paragraph": "This kefir is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Olive Oil",
        "price": 276,
        "originalPrice": 292,
        "weight": "500g",
        "image": "assets/images/homepage-images/oliveoil.PNG",
        "rating": 2.4,
        "discount": "5% Off",
        "category": "Oil",
        "detail": "High-quality oil to elevate your meals.",
        "description": {
            "paragraph": "This olive oil is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Sunflower Oil",
        "price": 219,
        "originalPrice": 235,
        "weight": "750g",
        "image": "assets/images/homepage-images/sunflower.PNG",
        "rating": 2.4,
        "discount": "7% Off",
        "category": "Oil",
        "detail": "High-quality oil to elevate your meals.",
        "description": {
            "paragraph": "This sunflower oil is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Canola Oil",
        "price": 443,
        "originalPrice": 473,
        "weight": "250g",
        "image": "assets/images/homepage-images/canola.PNG",
        "rating": 4.7,
        "discount": "6% Off",
        "category": "Oil",
        "detail": "High-quality oil to elevate your meals.",
        "description": {
            "paragraph": "This canola oil is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Coconut Oil",
        "price": 359,
        "originalPrice": 417,
        "weight": "250g",
        "image": "assets/images/homepage-images/coconut.PNG",
        "rating": 2.6,
        "discount": "14% Off",
        "category": "Oil",
        "detail": "High-quality oil to elevate your meals.",
        "description": {
            "paragraph": "This coconut oil is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Mustard Oil",
        "price": 172,
        "originalPrice": 198,
        "weight": "250g",
        "image": "assets/images/homepage-images/mustard.PNG",
        "rating": 2.7,
        "discount": "13% Off",
        "category": "Oil",
        "detail": "High-quality oil to elevate your meals.",
        "description": {
            "paragraph": "This mustard oil is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Groundnut Oil",
        "price": 295,
        "originalPrice": 327,
        "weight": "250g",
        "image": "assets/images/homepage-images/groundnut.PNG",
        "rating": 2.8,
        "discount": "10% Off",
        "category": "Oil",
        "detail": "High-quality oil to elevate your meals.",
        "description": {
            "paragraph": "This groundnut oil is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Sesame Oil",
        "price": 173,
        "originalPrice": 269,
        "weight": "1000g",
        "image": "assets/images/homepage-images/sesame.PNG",
        "rating": 2.1,
        "discount": "36% Off",
        "category": "Oil",
        "detail": "High-quality oil to elevate your meals.",
        "description": {
            "paragraph": "This sesame oil is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Soybean Oil",
        "price": 234,
        "originalPrice": 300,
        "weight": "500g",
        "image": "assets/images/homepage-images/soybean.PNG",
        "rating": 3.7,
        "discount": "22% Off",
        "category": "Oils",
        "detail": "High-quality oil to elevate your meals.",
        "description": {
            "paragraph": "This soybean oil is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Almond Oil",
        "price": 457,
        "originalPrice": 479,
        "weight": "500g",
        "image": "assets/images/homepage-images/almond.PNG",
        "rating": 2.6,
        "discount": "5% Off",
        "category": "Oils",
        "detail": "High-quality oil to elevate your meals.",
        "description": {
            "paragraph": "This almond oil is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Avocado Oil",
        "price": 215,
        "originalPrice": 272,
        "weight": "250g",
        "image": "assets/images/homepage-images/avocado.PNG",
        "rating": 4.8,
        "discount": "21% Off",
        "category": "Oils",
        "detail": "High-quality oil to elevate your meals.",
        "description": {
            "paragraph": "This avocado oil is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Milk Chocolate",
        "price": 163,
        "originalPrice": 193,
        "weight": "250g",
        "image": "assets/images/homepage-images/milkchocolate.PNG",
        "rating": 4.2,
        "discount": "16% Off",
        "category": "Chocolate",
        "detail": "High-quality chocolates to elevate your meals.",
        "description": {
            "paragraph": "This milk chocolate is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Dark Chocolate",
        "price": 83,
        "originalPrice": 149,
        "weight": "250g",
        "image": "assets/images/homepage-images/darkchocolate.PNG",
        "rating": 2.7,
        "discount": "44% Off",
        "category": "Chocolate",
        "detail": "High-quality chocolates to elevate your meals.",
        "description": {
            "paragraph": "This dark chocolate is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "White Chocolate",
        "price": 137,
        "originalPrice": 226,
        "weight": "750g",
        "image": "assets/images/homepage-images/whitechocolate.PNG",
        "rating": 4.2,
        "discount": "39% Off",
        "category": "Chocolate",
        "detail": "High-quality chocolates to elevate your meals.",
        "description": {
            "paragraph": "This white chocolate is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Hazelnut Chocolate",
        "price": 382,
        "originalPrice": 423,
        "weight": "500g",
        "image": "assets/images/homepage-images/hazelnut.PNG",
        "rating": 4.7,
        "discount": "10% Off",
        "category": "Chocolate",
        "detail": "High-quality chocolates to elevate your meals.",
        "description": {
            "paragraph": "This hazelnut chocolate is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Caramel Chocolate",
        "price": 439,
        "originalPrice": 480,
        "weight": "500g",
        "image": "assets/images/homepage-images/caramel.PNG",
        "rating": 3.4,
        "discount": "9% Off",
        "category": "Chocolate",
        "detail": "High-quality chocolates to elevate your meals.",
        "description": {
            "paragraph": "This caramel chocolate is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Mint Chocolate",
        "price": 389,
        "originalPrice": 413,
        "weight": "250g",
        "image": "assets/images/homepage-images/mintchocolate.PNG",
        "rating": 4.5,
        "discount": "6% Off",
        "category": "Chocolate",
        "detail": "High-quality chocolates to elevate your meals.",
        "description": {
            "paragraph": "This mint chocolate is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Strawberry Chocolate",
        "price": 128,
        "originalPrice": 185,
        "weight": "750g",
        "image": "assets/images/homepage-images/strawberry.PNG",
        "rating": 4.0,
        "discount": "31% Off",
        "category": "Chocolate",
        "detail": "High-quality chocolates to elevate your meals.",
        "description": {
            "paragraph": "This strawberry chocolate is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Almond Chocolate",
        "price": 379,
        "originalPrice": 434,
        "weight": "1000g",
        "image": "assets/images/homepage-images/almondchocolate.PNG",
        "rating": 2.8,
        "discount": "13% Off",
        "category": "Chocolate",
        "detail": "High-quality chocolates to elevate your meals.",
        "description": {
            "paragraph": "This almond chocolate is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Coconut Chocolate",
        "price": 316,
        "originalPrice": 374,
        "weight": "750g",
        "image": "assets/images/homepage-images/coconutchocolate.PNG",
        "rating": 4.8,
        "discount": "16% Off",
        "category": "Chocolate",
        "detail": "High-quality chocolates to elevate your meals.",
        "description": {
            "paragraph": "This coconut chocolate is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Orange Chocolate",
        "price": 308,
        "originalPrice": 366,
        "weight": "250g",
        "image": "assets/images/homepage-images/orangechocolate.PNG",
        "rating": 4.8,
        "discount": "16% Off",
        "category": "Chocolate",
        "detail": "High-quality chocolates to elevate your meals.",
        "description": {
            "paragraph": "This orange chocolate is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Groundnut Oil",
        "price": 143,
        "originalPrice": 185,
        "weight": "750g",
        "image": "assets/images/homepage-images/groundnut.PNG",
        "rating": 3.2,
        "discount": "23% Off",
        "category": "Oil",
        "detail": "High-quality oil to elevate your meals.",
        "description": {
            "paragraph": "This groundnut oil is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Cream",
        "price": 322,
        "originalPrice": 374,
        "weight": "1000g",
        "image": "assets/images/homepage-images/cream.PNG",
        "rating": 2.2,
        "discount": "14% Off",
        "category": "Dairy",
        "detail": "High-quality dairy to elevate your meals.",
        "description": {
            "paragraph": "This cream is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Banana",
        "price": 422,
        "originalPrice": 493,
        "weight": "250g",
        "image": "assets/images/homepage-images/banana1.jpg",
        "rating": 3.7,
        "discount": "14% Off",
        "category": "Fruits",
        "detail": "High-quality fruits to elevate your meals.",
        "description": {
            "paragraph": "This banana is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Almond Chocolate",
        "price": 300,
        "originalPrice": 382,
        "weight": "750g",
        "image": "assets/images/homepage-images/almondchocolate.PNG",
        "rating": 3.8,
        "discount": "21% Off",
        "category": "Chocolate",
        "detail": "High-quality chocolates to elevate your meals.",
        "description": {
            "paragraph": "This almond chocolate is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Turnip",
        "price": 145,
        "originalPrice": 227,
        "weight": "1000g",
        "image": "assets/images/homepage-images/turnip.jpg",
        "rating": 2.6,
        "discount": "36% Off",
        "category": "Vegetables",
        "detail": "High-quality vegetables to elevate your meals.",
        "description": {
            "paragraph": "This turnip is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Broccoli",
        "price": 306,
        "originalPrice": 361,
        "weight": "250g",
        "image": "assets/images/homepage-images/broccoli.jpg",
        "rating": 4.6,
        "discount": "15% Off",
        "category": "Vegetables",
        "detail": "High-quality vegetables to elevate your meals.",
        "description": {
            "paragraph": "This broccoli is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Olive Oil",
        "price": 404,
        "originalPrice": 464,
        "weight": "250g",
        "image": "assets/images/homepage-images/oliveoil.PNG",
        "rating": 3.4,
        "discount": "13% Off",
        "category": "Oil",
        "detail": "High-quality oil to elevate your meals.",
        "description": {
            "paragraph": "This olive oil is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Lychee",
        "price": 431,
        "originalPrice": 527,
        "weight": "500g",
        "image": "assets/images/homepage-images/lychee.PNG",
        "rating": 4.3,
        "discount": "18% Off",
        "category": "Fruits",
        "detail": "High-quality fruits to elevate your meals.",
        "description": {
            "paragraph": "This lychee is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Paneer",
        "price": 246,
        "originalPrice": 322,
        "weight": "750g",
        "image": "assets/images/homepage-images/paneer.PNG",
        "rating": 4.7,
        "discount": "24% Off",
        "category": "Dairy",
        "detail": "High-quality dairy to elevate your meals.",
        "description": {
            "paragraph": "This paneer is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Ghee",
        "price": 380,
        "originalPrice": 408,
        "weight": "500g",
        "image": "assets/images/homepage-images/ghee.PNG",
        "rating": 2.4,
        "discount": "7% Off",
        "category": "Dairy",
        "detail": "High-quality dairy to elevate your meals.",
        "description": {
            "paragraph": "This ghee is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Groundnut Oil",
        "price": 292,
        "originalPrice": 318,
        "weight": "1000g",
        "image": "assets/images/homepage-images/groundnut.PNG",
        "rating": 3.2,
        "discount": "8% Off",
        "category": "Oil",
        "detail": "High-quality oil to elevate your meals.",
        "description": {
            "paragraph": "This groundnut oil is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Caramel Chocolate",
        "price": 256,
        "originalPrice": 304,
        "weight": "500g",
        "image": "assets/images/homepage-images/caramel.PNG",
        "rating": 4.2,
        "discount": "16% Off",
        "category": "Chocolates",
        "detail": "High-quality chocolates to elevate your meals.",
        "description": {
            "paragraph": "This caramel chocolate is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Groundnut Oil",
        "price": 151,
        "originalPrice": 182,
        "weight": "1000g",
        "image": "assets/images/homepage-images/groundnut.PNG",
        "rating": 4.2,
        "discount": "17% Off",
        "category": "Oil",
        "detail": "High-quality oil to elevate your meals.",
        "description": {
            "paragraph": "This groundnut oil is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Mustard Oil",
        "price": 324,
        "originalPrice": 349,
        "weight": "750g",
        "image": "assets/images/homepage-images/mustard.PNG",
        "rating": 2.8,
        "discount": "7% Off",
        "category": "Oil",
        "detail": "High-quality oil to elevate your meals.",
        "description": {
            "paragraph": "This mustard oil is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Milk Chocolate",
        "price": 173,
        "originalPrice": 231,
        "weight": "250g",
        "image": "assets/images/homepage-images/milkchocolate.PNG",
        "rating": 2.4,
        "discount": "25% Off",
        "category": "Chocolates",
        "detail": "High-quality chocolates to elevate your meals.",
        "description": {
            "paragraph": "This milk chocolate is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Cheese",
        "price": 199,
        "originalPrice": 220,
        "weight": "250g",
        "image": "assets/images/homepage-images/cheese.PNG",
        "rating": 3.8,
        "discount": "10% Off",
        "category": "Dairy",
        "detail": "High-quality dairy to elevate your meals.",
        "description": {
            "paragraph": "This cheese is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Mango",
        "price": 488,
        "originalPrice": 544,
        "weight": "750g",
        "image": "assets/images/homepage-images/mango.jpg",
        "rating": 3.4,
        "discount": "10% Off",
        "category": "Fruits",
        "detail": "High-quality fruits to elevate your meals.",
        "description": {
            "paragraph": "This mango is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Pineapple",
        "price": 407,
        "originalPrice": 441,
        "weight": "250g",
        "image": "assets/images/homepage-images/pineapple.jpg",
        "rating": 4.3,
        "discount": "8% Off",
        "category": "Fruits",
        "detail": "High-quality fruits to elevate your meals.",
        "description": {
            "paragraph": "This pineapple is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Paneer",
        "price": 118,
        "originalPrice": 132,
        "weight": "750g",
        "image": "assets/images/homepage-images/paneer.PNG",
        "rating": 3.6,
        "discount": "11% Off",
        "category": "Dairy",
        "detail": "High-quality dairy to elevate your meals.",
        "description": {
            "paragraph": "This paneer is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Mustard Oil",
        "price": 290,
        "originalPrice": 302,
        "weight": "750g",
        "image": "assets/images/homepage-images/mustard.PNG",
        "rating": 3.5,
        "discount": "4% Off",
        "category": "Oil",
        "detail": "High-quality oil to elevate your meals.",
        "description": {
            "paragraph": "This mustard oil is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Soybean Oil",
        "price": 170,
        "originalPrice": 249,
        "weight": "1000g",
        "image": "assets/images/homepage-images/soybean.PNG",
        "rating": 3.1,
        "discount": "32% Off",
        "category": "Oil",
        "detail": "High-quality oil to elevate your meals.",
        "description": {
            "paragraph": "This soybean oil is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Cabbage",
        "price": 140,
        "originalPrice": 188,
        "weight": "1000g",
        "image": "assets/images/homepage-images/cabbage.jpg",
        "rating": 2.4,
        "discount": "26% Off",
        "category": "Vegetables",
        "detail": "High-quality vegetables to elevate your meals.",
        "description": {
            "paragraph": "This cabbage is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Soybean Oil",
        "price": 239,
        "originalPrice": 325,
        "weight": "1000g",
        "image": "assets/images/homepage-images/soybean.PNG",
        "rating": 4.9,
        "discount": "26% Off",
        "category": "Oil",
        "detail": "High-quality oil to elevate your meals.",
        "description": {
            "paragraph": "This soybean oil is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Peach",
        "price": 91,
        "originalPrice": 138,
        "weight": "250g",
        "image": "assets/images/homepage-images/peach.jpg",
        "rating": 4.0,
        "discount": "34% Off",
        "category": "Fruits",
        "detail": "High-quality fruits to elevate your meals.",
        "description": {
            "paragraph": "This peach is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Cabbage",
        "price": 91,
        "originalPrice": 178,
        "weight": "1000g",
        "image": "assets/images/homepage-images/cabbage.jpg",
        "rating": 2.2,
        "discount": "49% Off",
        "category": "Vegetables",
        "detail": "High-quality vegetables to elevate your meals.",
        "description": {
            "paragraph": "This cabbage is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Groundnut Oil",
        "price": 280,
        "originalPrice": 339,
        "weight": "1000g",
        "image": "assets/images/homepage-images/groundnut.PNG",
        "rating": 3.9,
        "discount": "17% Off",
        "category": "Oil",
        "detail": "High-quality oil to elevate your meals.",
        "description": {
            "paragraph": "This groundnut oil is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "White Chocolate",
        "price": 182,
        "originalPrice": 243,
        "weight": "750g",
        "image": "assets/images/homepage-images/whitechocolate.PNG",
        "rating": 4.8,
        "discount": "25% Off",
        "category": "Chocolates",
        "detail": "High-quality chocolates to elevate your meals.",
        "description": {
            "paragraph": "This white chocolate is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Coconut Oil",
        "price": 278,
        "originalPrice": 359,
        "weight": "250g",
        "image": "assets/images/homepage-images/coconut.PNG",
        "rating": 2.9,
        "discount": "23% Off",
        "category": "Oil",
        "detail": "High-quality oil to elevate your meals.",
        "description": {
            "paragraph": "This coconut oil is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Kefir",
        "price": 357,
        "originalPrice": 375,
        "weight": "250g",
        "image": "assets/images/homepage-images/kefir.PNG",
        "rating": 3.3,
        "discount": "5% Off",
        "category": "Dairy",
        "detail": "High-quality dairy to elevate your meals.",
        "description": {
            "paragraph": "This kefir is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Potato",
        "price": 321,
        "originalPrice": 410,
        "weight": "250g",
        "image": "assets/images/homepage-images/potato.jpg",
        "rating": 4.9,
        "discount": "22% Off",
        "category": "Vegetables",
        "detail": "High-quality vegetables to elevate your meals.",
        "description": {
            "paragraph": "This potato is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Banana",
        "price": 217,
        "originalPrice": 253,
        "weight": "750g",
        "image": "assets/images/homepage-images/banana1.jpg",
        "rating": 2.2,
        "discount": "14% Off",
        "category": "Fruits",
        "detail": "High-quality fruits to elevate your meals.",
        "description": {
            "paragraph": "This banana is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Milk",
        "price": 290,
        "originalPrice": 346,
        "weight": "500g",
        "image": "assets/images/homepage-images/milk.PNG",
        "rating": 4.6,
        "discount": "16% Off",
        "category": "Dairy",
        "detail": "High-quality dairy to elevate your meals.",
        "description": {
            "paragraph": "This milk is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Strawberry Chocolate",
        "price": 449,
        "originalPrice": 493,
        "weight": "1000g",
        "image": "assets/images/homepage-images/strawberry.PNG",
        "rating": 2.7,
        "discount": "9% Off",
        "category": "Chocolates",
        "detail": "High-quality chocolates to elevate your meals.",
        "description": {
            "paragraph": "This strawberry chocolate is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "White Chocolate",
        "price": 409,
        "originalPrice": 490,
        "weight": "750g",
        "image": "assets/images/homepage-images/whitechocolate.PNG",
        "rating": 4.6,
        "discount": "17% Off",
        "category": "Chocolates",
        "detail": "High-quality chocolates to elevate your meals.",
        "description": {
            "paragraph": "This white chocolate is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Mango",
        "price": 251,
        "originalPrice": 287,
        "weight": "750g",
        "image": "assets/images/homepage-images/mango.jpg",
        "rating": 4.9,
        "discount": "13% Off",
        "category": "Fruits",
        "detail": "High-quality fruits to elevate your meals.",
        "description": {
            "paragraph": "This mango is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Peach",
        "price": 205,
        "originalPrice": 254,
        "weight": "250g",
        "image": "assets/images/homepage-images/peach.jpg",
        "rating": 3.0,
        "discount": "19% Off",
        "category": "Fruits",
        "detail": "High-quality fruits to elevate your meals.",
        "description": {
            "paragraph": "This peach is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Tomato",
        "price": 193,
        "originalPrice": 257,
        "weight": "250g",
        "image": "assets/images/homepage-images/tomato.jpg",
        "rating": 3.9,
        "discount": "25% Off",
        "category": "Vegetables",
        "detail": "High-quality vegetables to elevate your meals.",
        "description": {
            "paragraph": "This tomato is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Carrot",
        "price": 365,
        "originalPrice": 438,
        "weight": "1000g",
        "image": "assets/images/homepage-images/carrot1.jpg",
        "rating": 2.8,
        "discount": "17% Off",
        "category": "Vegetables",
        "detail": "High-quality vegetables to elevate your meals.",
        "description": {
            "paragraph": "This carrot is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Cream",
        "price": 264,
        "originalPrice": 285,
        "weight": "1000g",
        "image": "assets/images/homepage-images/cream.PNG",
        "rating": 3.6,
        "discount": "7% Off",
        "category": "Dairy",
        "detail": "High-quality dairy to elevate your meals.",
        "description": {
            "paragraph": "This cream is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Cheese",
        "price": 207,
        "originalPrice": 240,
        "weight": "500g",
        "image": "assets/images/homepage-images/cheese.PNG",
        "rating": 3.6,
        "discount": "14% Off",
        "category": "Dairy",
        "detail": "High-quality dairy to elevate your meals.",
        "description": {
            "paragraph": "This cheese is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Pineapple",
        "price": 195,
        "originalPrice": 267,
        "weight": "750g",
        "image": "assets/images/homepage-images/pineapple.jpg",
        "rating": 2.6,
        "discount": "27% Off",
        "category": "Fruits",
        "detail": "High-quality fruits to elevate your meals.",
        "description": {
            "paragraph": "This pineapple is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Milk Chocolate",
        "price": 363,
        "originalPrice": 390,
        "weight": "500g",
        "image": "assets/images/homepage-images/milkchocolate.PNG",
        "rating": 4.7,
        "discount": "7% Off",
        "category": "Chocolates",
        "detail": "High-quality chocolates to elevate your meals.",
        "description": {
            "paragraph": "This milk chocolate is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Apple",
        "price": 234,
        "originalPrice": 281,
        "weight": "500g",
        "image": "assets/images/homepage-images/apple.jpg",
        "rating": 3.3,
        "discount": "17% Off",
        "category": "Fruits",
        "detail": "High-quality fruits to elevate your meals.",
        "description": {
            "paragraph": "This apple is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Groundnut Oil",
        "price": 205,
        "originalPrice": 278,
        "weight": "500g",
        "image": "assets/images/homepage-images/groundnut.PNG",
        "rating": 4.5,
        "discount": "26% Off",
        "category": "Oil",
        "detail": "High-quality oil to elevate your meals.",
        "description": {
            "paragraph": "This groundnut oil is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Cream",
        "price": 125,
        "originalPrice": 197,
        "weight": "250g",
        "image": "assets/images/homepage-images/cream.PNG",
        "rating": 2.1,
        "discount": "37% Off",
        "category": "Dairy",
        "detail": "High-quality dairy to elevate your meals.",
        "description": {
            "paragraph": "This cream is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Strawberry Chocolate",
        "price": 468,
        "originalPrice": 499,
        "weight": "1000g",
        "image": "assets/images/homepage-images/strawberry.PNG",
        "rating": 2.2,
        "discount": "6% Off",
        "category": "Chocolates",
        "detail": "High-quality chocolates to elevate your meals.",
        "description": {
            "paragraph": "This strawberry chocolate is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Pineapple",
        "price": 367,
        "originalPrice": 405,
        "weight": "250g",
        "image": "assets/images/homepage-images/pineapple.jpg",
        "rating": 3.4,
        "discount": "9% Off",
        "category": "Fruits",
        "detail": "High-quality fruits to elevate your meals.",
        "description": {
            "paragraph": "This pineapple is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Orange Chocolate",
        "price": 116,
        "originalPrice": 189,
        "weight": "750g",
        "image": "assets/images/homepage-images/orangechocolate.PNG",
        "rating": 3.2,
        "discount": "39% Off",
        "category": "Chocolates",
        "detail": "High-quality chocolates to elevate your meals.",
        "description": {
            "paragraph": "This orange chocolate is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Butter",
        "price": 254,
        "originalPrice": 304,
        "weight": "750g",
        "image": "assets/images/homepage-images/butter.PNG",
        "rating": 3.1,
        "discount": "16% Off",
        "category": "Dairy",
        "detail": "High-quality dairy to elevate your meals.",
        "description": {
            "paragraph": "This butter is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    },
    {
        "name": "Canola Oil",
        "price": 489,
        "originalPrice": 568,
        "weight": "250g",
        "image": "assets/images/homepage-images/canola.PNG",
        "rating": 2.9,
        "discount": "14% Off",
        "category": "Oil",
        "detail": "High-quality oil to elevate your meals.",
        "description": {
            "paragraph": "This canola oil is fresh, full of flavor, and packed with essential nutrients. Perfect for a healthy diet, it can be used in a wide variety of recipes.",
            "bullets": [
                "Rich in vitamins and minerals",
                "Boosts immunity",
                "Supports overall health",
                "Great for cooking or raw consumption",
                "Freshly harvested and hygienically packed"
            ]
        },
        "review": "Absolutely loved the quality and freshness! \u2014 Customer"
    }
];

    localStorage.setItem("productList", JSON.stringify(productList));
});
