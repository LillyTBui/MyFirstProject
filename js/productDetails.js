const item = JSON.parse(localStorage.getItem("product"));

const productDetailsContainer = document.querySelector(".product-specification");
const productImageContainer = document.querySelector(".product__img2");
const breadcrumb = document.querySelector(".breadcrumb");
const button = document.querySelector(".cart-btn");

const cartList = document.querySelector(".cart-wrapper");
let cartArray = [];
let totalAddedItems = 0;

function createDetails(product){
    productDetailsContainer.innerHTML +=
    `<div>
        <h1>${product.name}</h1>
        <h2>${product.description}</h2>
    </div>`;
}

function addImage(product){
    productImageContainer.innerHTML +=
    `<div style="background-image: url(${product.image})" class="product-details__image"></div>`;
}

function updateBreadcrumb(product){
    breadcrumb.innerHTML = `
    <a href="../index.html">Home</a> >>
    <a href="../shop-women.html">Women rain jackets</a> 
    >> ${product.name} - ${product.description}`;
}

function addButton(item){
    button.innerHTML = `<button class="cta-green cta-cart" data-product="${item.id}">Add to cart</button>`;
}

addButton(item);
const buttonToAdd = document.querySelector(".cta-cart");

buttonToAdd.onclick = function(event){
    cartArray.push(item);
    localStorage.setItem("cartList", JSON.stringify(cartArray));
}


/*
button.onclick = function(event){
    totalAddedItems ++;
    console.log(totalAddedItems);
    showCart(item);
    const removeButton = document.querySelectorAll(".fa-times");
    removeButton.forEach(function(button){
        button.onclick = function(event){
            cartList.style.display = "none";
        }
    })
    setTimeout(timer, 9000);
    cartList.style.display = "block";
    cartArray.push(item);
    localStorage.setItem("cartList", JSON.stringify(cartArray));
}*/

function showCart(cartItems){
    let totalPrice = cartItems.price*totalAddedItems;
    cartList.innerHTML = `<div class="cart">
        <div style="background-image: url(${cartItems.image})" class="cart-image"></div>
        <div class="cart-description">
            <h4>Added to cart</h4>
            <h5 class="cart-description_items"><b>${totalAddedItems}x</b> ${cartItems.name}</h5>
            <h3><b>${totalPrice},-</b></h3>
        </div>

        <i class="fas fa-times"></i>
    </div>`;
}

function timer(){
    cartList.style.display = "none";
}

updateBreadcrumb(item);
createDetails(item);
addImage(item);

