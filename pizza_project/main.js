/* 
    Main Logic for Headless Pizza
    Data Management, UI Rendering, and Search Filtering
*/

document.addEventListener('DOMContentLoaded', () => {

    
    // 1. Pizza Data (Matching the reference site's menu)
    const pizzaData = [
        {
            id: 1,
            name: "BBQ Chicken Pizza",
            price: 16.25,
            rating: 4.6,
            image: "https://cdn.shortpixel.ai/spai/q_lossy+w_794+h_794+to_webp+ret_img/www.mtolivepickles.com/wp-content/uploads/2024/05/ABC_MtOlive_BBQChickenPizza-1-copy_square.jpg"
        },
        {
            id: 2,
            name: "Hawaiian Pizza",
            price: 14.00,
            rating: 4.0,
            image: "https://dinnerthendessert.com/wp-content/uploads/2024/07/Hawaiian-Pizza-1-3-1.jpg"
        },
        {
            id: 3,
            name: "Vegetarian Pizza",
            price: 13.00,
            rating: 4.2,
            image: "https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2024/12/veggie-pizza-recipe-09.jpg?resize=1365%2C2048&ssl=1"
        },
        {
            id: 4,
            name: "Pepperoni Pizza",
            price: 15.75,
            rating: 5.0,
            image: "https://media.istockphoto.com/id/521403691/photo/hot-homemade-pepperoni-pizza.jpg?s=2048x2048&w=is&k=20&c=Ui3r4_i0tjlb-skTSB0_vlpIqUP7EnfgkPZhnaRXdx8="
        },
        {
            id: 5,
            name: "Margherita Pizza",
            price: 12.50,
            rating: 4.8,
            image: "https://au.ooni.com/cdn/shop/articles/20220211142645-margherita-9920.jpg?v=1737368217&width=2048"
        },
        {
            id: 6,
            name: "Onion Pizza",
            price: 11.00,
            rating: 3.9,
            image: "https://tuduu-prd-assets-fde-ghdcd5e6baagctam.z01.azurefd.net/recipesimages/recipe-18899.jpg?v=2"
        },
        {
            id: 7,
            name: "Garlic Pizza",
            price: 10.50,
            rating: 4.5,
            image: "https://www.recipetineats.com/tachyon/2023/05/Garlic-cheese-pizza_9.jpg?resize=900%2C1125&zoom=0.72"
        },
        {
            id: 8,
            name: "Cheesy Pizza",
            price: 14.25,
            rating: 4.7,
            image: "https://5.imimg.com/data5/AP/JI/MY-6672214/cheese-pizza-1000x1000.jpg"
        }
    ];

    // 2. Selectors
    const pizzaGrid = document.getElementById('pizza-grid');
    const searchInput = document.getElementById('pizza-search');
    const subscribeBtn = document.getElementById('subscribe-btn');
    const subscribeEmail = document.getElementById('subscribe-email');

    // 3. Render Function
    function renderPizzas(items) {
        // Clear grid
        pizzaGrid.innerHTML = '';
        
        // Handle empty state
        if (items.length === 0) {
            pizzaGrid.innerHTML = `
                <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #888;">
                    <i class="fa-solid fa-pizza-slice" style="font-size: 3rem; margin-bottom: 1rem; display: block; opacity: 0.3;"></i>
                    <p>No pizzas found matching your search.</p>
                </div>
            `;
            return;
        }

        // Create cards
        items.forEach(pizza => {
            const card = document.createElement('div');
            card.classList.add('pizza-card');
            
            card.innerHTML = `
                <img src="${pizza.image}" alt="${pizza.name}" class="pizza-img" loading="lazy">
                <div class="pizza-info">
                    <h2 class="pizza-name">${pizza.name}</h2>
                    <div class="pizza-meta">
                        <div class="rating">
                            <i class="fa-solid fa-star"></i>
                            <span>${pizza.rating}</span>
                        </div>
                        <div class="price">
                            $${pizza.price.toFixed(2)}
                        </div>
                    </div>
                </div>
            `;
            
            // Add click event for "Detail" simulation
            card.addEventListener('click', () => {
                alert(`Redirecting to ${pizza.name} details...`);
            });

            pizzaGrid.appendChild(card);
        });
    }

    // 4. Initial Render
    renderPizzas(pizzaData);

    // 5. Search Filtering Logic
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        const filteredPizzas = pizzaData.filter(pizza => 
            pizza.name.toLowerCase().includes(searchTerm)
        );
        
        renderPizzas(filteredPizzas);
    });

    // 6. Subscribe Logic (Minor interaction)
    subscribeBtn.addEventListener('click', () => {
        const email = subscribeEmail.value.trim();
        if (email && email.includes('@')) {
            alert(`Thank you for subscribing, ${email.split('@')[0]}!`);
            subscribeEmail.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // 7. Sticky Header Shadow on Scroll
    window.addEventListener('scroll', () => {
        const header = document.getElementById('site-header');
        if (window.scrollY > 20) {
            header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
        } else {
            header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.04)';
        }
    });

});