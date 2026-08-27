let jsData = [];
fetch('https://fakestoreapi.com/products')
    .then(Response => {
        return Response.json();
    })
    .then(data => {
        jsData = data;
        displayProductCount(jsData.length);
        createCategoryButtons(jsData);
        displayProducts(jsData);
    });


// Task 1
function displayProducts(products) {
    const apiCard = document.querySelector('.apicard');
    apiCard.innerHTML = '';

    // Task 5
    displayProductCount(products.length);

    products.forEach(product => {
        const card = document.createElement('div');

        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}" width="100" height="100">
            <h3>${product.title}</h3>
            <p><b>Category:</b> ${product.category}</p>
            <p><b>Price:</b> $${product.price}</p>
            <p>${product.description}</p>
            <button>View Product</button>
        `;

        apiCard.appendChild(card);
    });
}


// Task 2
//displayProducts(jsData.slice(0, 5));


// Task 3
//displayProducts(jsData.filter(c => c.price > 50));


// Task 4
// displayProducts(jsData.filter(c => c.category === "men's clothing"));


// Task 5
function displayProductCount(count) {
    const totalCount = document.querySelector('#totalProducts');
    totalCount.innerText = `Total products: ${count}`;
}


// Task 6
const searchInput = document.querySelector('#searchInput');
const searchBtn = document.querySelector('#searchBtn');

searchBtn.addEventListener('click', () => {
    const searchValue = searchInput.value.toLowerCase();
    const filteredProducts = jsData.filter(product =>
        product.title.toLowerCase().includes(searchValue)
    );
    displayProducts(filteredProducts);
});


// Task 7
const lowToHighBtn = document.querySelector('#lowToHigh');
const highToLowBtn = document.querySelector('#highToLow');

lowToHighBtn.addEventListener('click', () => {
    const sorted = [...jsData].sort((a, b) => a.price - b.price);
    displayProducts(sorted);
});

highToLowBtn.addEventListener('click', () => {
    const sorted = [...jsData].sort((a, b) => b.price - a.price);
    displayProducts(sorted);

});


// Task 8
function createCategoryButtons(data) {
    const categoryContainer = document.querySelector('#categoryButtons');
    categoryContainer.innerHTML = '';

    // Unique categories
    const categories = ['All'];
    data.forEach(item => {
        if (!categories.includes(item.category)) {
            categories.push(item.category);
        }
    });

    // Dynamic Category Buttons
    categories.forEach(category => {
        const btn = document.createElement('button');
        btn.innerText = category;
        btn.style.marginRight = '5px';

        btn.addEventListener('click', () => {
            if (category === 'All') {
                displayProducts(jsData);
            } else {
                const filtered = jsData.filter(item => item.category === category);
                displayProducts(filtered);
            }
        });

        categoryContainer.appendChild(btn);
    });
} 