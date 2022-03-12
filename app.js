// const loadCartFromLocal = () =>{
//     const data = getCart();
//     for(item in data){
//         displayItem(item);
//     }
// }
// const addtoItem = () => {
//     //add item into diplay cart
//     const item = document.getElementById('input-product').value;
//     document.getElementById('input-product').value = '';
//     if(!item){
//         return;
//     }
//     displayItem(item);

//     //add item into local
//     addProductToCart(item);
// }

// const displayItem = (item) => {
//     const display = document.getElementById('addtoCart');
//     const li = document.createElement('li');
//     li.innerText = item;
//     display.append(li);
// }

// const getCart = () => {
//     const cart = localStorage.getItem('cart');
//     let cartObj;
//     if (cart){
//         cartObj = JSON.parse(cart);
//     }
//     else{
//         cartObj = {};
//     }
//     return cartObj;
// }

// const addProductToCart = (name) =>{
//     const cartItem = getCart();
//     if(cartItem[name]){
//         cartItem[name] = cartItem[name] + 1;
//     }
//     else{
//         cartItem[name] = 1;
//     }
//     const cartIstringyfy = JSON.stringify(cartItem);
//     localStorage.setItem('cart',cartIstringyfy); 
// }
// loadCartFromLocal();

// const placeOrder = () =>{
//     const display = document.getElementById('addtoCart');
//     display.textContent = '';
//     localStorage.removeItem('cart');
// }

const addtoItem = () => {
    let itemValue = document.getElementById('input-product').value;
    if (!itemValue) return;
    else {
        //add to display
        document.getElementById('input-product').value = '';
        //add to localStorage
        addProductTOLocalcart(itemValue);
        displayproductfromLocal();
    }
}

const addItemToDisplay = (key,value) => {
    const addtoUl = document.getElementById('addtoCart');
    const li = document.createElement('li');
    li.innerText = `${key}:${value}`;
    addtoUl.append(li);
}
const createCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    cart ? cartObj = JSON.parse(cart) : cartObj = {};
    return cartObj;
}

const addProductTOLocalcart = (item) => {
    const cartItem = createCart();
    if (cartItem[item]) {
        cartItem[item] = cartItem[item] + 1;
    }
    else {
        cartItem[item] = 1;
    }
    const itemStringify = JSON.stringify(cartItem);
    localStorage.setItem('cart', itemStringify);
}

const displayproductfromLocal = () => {
    const addtoUl = document.getElementById('addtoCart');
    addtoUl.innerText = '';
    const item = createCart();
    for (product in item) {
        addItemToDisplay(product,item[product]);
    }
}
displayproductfromLocal()

const placeOrder = () => {
    const ul = document.getElementById('addtoCart');
    ul.textContent = '';
    localStorage.removeItem('cart');
}