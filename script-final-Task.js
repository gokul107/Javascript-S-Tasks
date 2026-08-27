let storeProducts = [];

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        storeProducts = data;
        updateProductCount(storeProducts.length);
        renderCategoryButtons(storeProducts);
        renderProducts(storeProducts);
    })
    .catch(err => console.error('Error fetching products:', err));

const renderProducts = (products) => {
    const productsContainer = document.querySelector('.apicard');
    productsContainer.innerHTML = '';

    updateProductCount(products.length);

    products.forEach(product => {
        const card = document.createElement('div');

        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p><b>Category:</b> ${product.category}</p>
            <p><b>Price:</b> $${product.price}</p>
            <p>${product.description.slice(0, 80)}...</p>
            <button class="add-cart-btn">Add to Cart</button>
        `;

        productsContainer.appendChild(card);
    });
}

function updateProductCount(count) {
    const totalCountElement = document.querySelector('#totalProducts');
    if (totalCountElement) {
        totalCountElement.innerText = `Total Products: ${count}`;
    }
}

// Search
const searchInput = document.querySelector('#searchInput');
const searchBtn = document.querySelector('#searchBtn');

searchBtn.addEventListener('click', () => {
    const searchValue = searchInput.value.toLowerCase();
    const filteredProducts = storeProducts.filter(product =>
        product.title.toLowerCase().includes(searchValue) ||
        product.description.toLowerCase().includes(searchValue)
    );
    renderProducts(filteredProducts);
});

searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.toLowerCase();
    const filteredProducts = storeProducts.filter(product =>
        product.title.toLowerCase().includes(searchValue) ||
        product.description.toLowerCase().includes(searchValue)
    );
    renderProducts(filteredProducts);
});

// Sorting
const lowToHighBtn = document.querySelector('#lowToHigh');
const highToLowBtn = document.querySelector('#highToLow');

lowToHighBtn.addEventListener('click', () => {
    const sorted = [...storeProducts].sort((a, b) => a.price - b.price);
    renderProducts(sorted);
});

highToLowBtn.addEventListener('click', () => {
    const sorted = [...storeProducts].sort((a, b) => b.price - a.price);
    renderProducts(sorted);
});

//dynamic category buttons
function renderCategoryButtons(data) {
    const categoryContainer = document.querySelector('#categoryButtons');
    categoryContainer.innerHTML = '';

    const categories = ['All'];
    data.forEach(item => {
        if (!categories.includes(item.category)) {
            categories.push(item.category);
        }
    });

    categories.forEach(category => {
        const btn = document.createElement('button');
        btn.innerText = category === 'All' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1);
        btn.style.marginRight = '5px';

        btn.addEventListener('click', () => {
            if (category === 'All') {
                renderProducts(storeProducts);
            } else {
                const filtered = storeProducts.filter(item => item.category === category);
                renderProducts(filtered);
            }
        });

        categoryContainer.appendChild(btn);
    });
}