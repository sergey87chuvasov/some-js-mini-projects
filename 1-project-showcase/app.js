const products = [
    {
        id: 1,
        title: 'Lenovo Yoga',
        price: 3000,
    },
    {
        id: 2,
        title: 'Acer Aspire',
        price: 1800,
    },
    {
        id: 3,
        title: 'Dell Vostro',
        price: 3400
    },
];

let order = [];

function addToBasket(productId) {
    // check only unicue good
    if (order.find(el => el.id ===productId)) return alert('Good already in the cart')
    
    // get undefined if nothing found or element from [] collection
    const product = products.find((item) => item.id === productId)
    // add new obj of good (new arr // no mutation)
    order = [...order, product]

    // render page
    renderCart();
    rerenderTotalPrice();
}

function removeFromBasket(productId) {
    // del
    order = order.filter(item => item.id !== productId)

    // render page
    renderCart();
    rerenderTotalPrice();
}


function rerenderTotalPrice() {
    // count common price
    const totalPrice = order.reduce((acc, item) => {
        return acc + item.price
    }, 0)

    document.getElementById('total').innerText = totalPrice;
}

// Этот метод остается без изменений
function renderCart() {
    const cart = document.getElementById('basket-items');

    cart.innerHTML = '';
    order.forEach(item => {
        const el = document.createElement('li');
        el.innerText = item.title;
        el.onclick = () => removeFromBasket(item.id);
        cart.appendChild(el);
    })
}