// Variable
let number = document.getElementById('number');
let counter = 0;
let numberCart = document.getElementById('spanContainer');
let newCounter = 0;
let emptyBasket = document.getElementById('empty-basket');
let fullBasket = document.getElementById('full-basket');
let totalItemPrice = document.getElementById('textAndPrice-price');
let totalPrice = document.getElementById('total-price');
let thanksText = document.getElementById('empty-text');


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon in the mobile version */
function myFunction() {
    let x = document.getElementById("navigation");
    let img = document.getElementById('icon-openClose');
    if (x.style.display === "flex") {
        x.style.display = "none";
        img.src = "/images/icon-menu.svg";
    } else {
        x.style.display = "flex";
        img.src = "/images/icon-close.svg";
    }
}

/* Count the number of items up */
function countItemUp() {
    number.innerHTML++;
    counter++;
}

/* Count the number of items down */
function countItemDown() {  
    if(number.innerHTML === '0') {
        number.innerHTML = '0';
    }
    else {
        number.innerHTML--;
        counter--;
    }
}

/* Add number of items to the cart-span-container */
function addToCart() {
    newCounter += counter;
    let convert = newCounter.toString();
    numberCart.innerHTML = convert;
    emptyBasket.style.display = 'none';
    fullBasket.style.display = 'flex';
    number.innerHTML = '0';
    showPrice();
}

/* open and close the basket */
function opBasket() {
    let cartDiv = document.getElementById('cart-div');
    if(cartDiv.style.display === 'flex') {
        cartDiv.style.display = 'none';
    }
    else {
        cartDiv.style.display = 'flex';
    }
}

/* add the price to the number of items in the basket */
function showPrice() {
    let price = 125 * newCounter;
    totalItemPrice.innerHTML = '$125.00 x ' + newCounter;
    totalPrice.innerText = 'Total Price: $' + price + '.00';
}

/* delete all items in the basket */
function deleteBasket() {
    numberCart.innerHTML = '0';
    newCounter = 0;
    emptyBasket.style.display = 'flex';
    fullBasket.style.display = 'none';
}

/* after press the buy button */
function buying() {
    emptyBasket.style.display = 'flex';
    fullBasket.style.display = 'none';
    thanksText.innerHTML = 'Thank you for buying our Product';
    numberCart.innerHTML = '0';
    newCounter = 0;
}
