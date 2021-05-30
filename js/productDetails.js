/** @format */

const item = JSON.parse(localStorage.getItem("product"));

const productDetailsContainer = document.querySelector(
  ".product-specification"
);
const productImageContainer = document.querySelector(".product__img2");
const breadcrumb = document.querySelector(".breadcrumb");
const button = document.querySelector(".cart-btn");
const cartList = document.querySelector(".cart-wrapper");
let indexNumber;

function createDetails(product) {
  productDetailsContainer.innerHTML += `<div>
        <h1>${product.name}</h1>
        <h2>${product.description}</h2>
    </div>`;
}

function addImage(product) {
  productImageContainer.innerHTML += `<div style="background-image: url(${product.image})" class="product-details__image"></div>`;
}

function updateBreadcrumb(product) {
  breadcrumb.innerHTML = `
    <a href="../index.html">Home</a> >>
    <a href="../shop-women.html">Women rain jackets</a> 
    >> ${product.name} - ${product.description}`;
}

function addButton(item) {
  button.innerHTML = `<button class="cta-green cta-cart" data-product="${item.id}">Add to cart</button>`;
}

updateBreadcrumb(item);
createDetails(item);
addImage(item);
addButton(item);

const buttonToAdd = document.querySelector(".cta-cart");
const sizeButton = document.querySelector("#productSize");
const sizeError = document.querySelector(".productSize__style");

function hasChoosenProduct(size) {
  if (size === "size") {
    return false;
  } else {
    return true;
  }
}

buttonToAdd.onclick = function (event) {
  const sizeChoice = sizeButton.options[sizeButton.selectedIndex];
  if (!hasChoosenProduct(sizeChoice.value)) {
    sizeError.style.display = "block";
  } else {
    sizeError.style.display = "none";
    let hasSize = false;
    for (let i = 0; i < item.size.length; i++) {
      if (item.size[i] === sizeChoice.value) {
        hasSize = true;
      }
    }

    if (hasSize === false) {
      sizeError.style.display = "block";
      sizeError.innerHTML = `<p>Unfortunately we dont have this product in this size</p>`;
    } else {
      const findproduct = parseInt(item.id);
      let currentProduct;

      switch (findproduct) {
        case 1:
          let firstProduct = JSON.parse(localStorage.getItem("numb1"));
          firstProduct++;
          localStorage.setItem("numb1", JSON.stringify(firstProduct));
          break;
        case 2:
          let secondProduct = JSON.parse(localStorage.getItem("numb2"));
          secondProduct++;
          localStorage.setItem("numb2", JSON.stringify(secondProduct));
          break;
        case 3:
          let thirdProduct = JSON.parse(localStorage.getItem("numb3"));
          thirdProduct++;
          localStorage.setItem("numb3", JSON.stringify(thirdProduct));
          break;
        default:
          let forthProduct = JSON.parse(localStorage.getItem("numb4"));
          forthProduct++;
          localStorage.setItem("numb4", JSON.stringify(forthProduct));
          break;
      }

      if (findproduct === 1) {
        currentProduct = JSON.parse(localStorage.getItem("numb1"));
      } else if (findproduct === 2) {
        currentProduct = JSON.parse(localStorage.getItem("numb2"));
      } else if (findproduct === 3) {
        currentProduct = JSON.parse(localStorage.getItem("numb3"));
      } else {
        currentProduct = JSON.parse(localStorage.getItem("numb4"));
      }
      parseInt(currentProduct);
      showCart(item, currentProduct);

      const removeButton = document.querySelectorAll(".fa-times");
      removeButton.forEach(function (button) {
        button.onclick = function (event) {
          cartList.style.display = "none";
        };
      });
      setTimeout(timer, 9000);
      cartList.style.display = "block";

      let oldIndex = JSON.parse(localStorage.getItem("index"));
      oldIndex++;
      const number = oldIndex.toString();
      item["index"] = number;
      item["chosenSize"] = sizeChoice.value;
      localStorage.setItem("index", number);

      const oldCart = JSON.parse(localStorage.getItem("cartList"));

      if (oldCart === null) {
        const newCart = [item];
        localStorage.setItem("cartList", JSON.stringify(newCart));
      } else {
        oldCart.push(item);
        localStorage.setItem("cartList", JSON.stringify(oldCart));
      }
    }
  }
};

function showCart(cartItems, productNumber) {
  cartList.innerHTML = `<div class="cart">
        <div style="background-image: url(${
          cartItems.image
        })" class="cart-image"></div>
        <div class="cart-description">
            <h4>Added to cart</h4>
            <h5 class="cart-description_items"><b>${productNumber}x</b> ${
    cartItems.name
  }</h5>
            <h3><b>${cartItems.price * productNumber},-</b></h3>
            <a href="../shopping-bag.html" class="to-cart">
                  Go to cart
            </a>
        </div>

        <i class="fas fa-times"></i>
    </div>`;
}

function timer() {
  cartList.style.display = "none";
}