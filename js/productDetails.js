const baseUrl = "https://sunnyday.one/rainydays/wp-json/wc/v3/products";
const key =
  "?consumer_key=ck_d7eb5b35d919fb3bd9e8c577544b21f97d082894&consumer_secret=cs_ceb97c2780d7259b4c1f6754a58dc08b808a3f3d";
const id = JSON.parse(localStorage.getItem("id"));
const baseURL = baseUrl + "/" + id + key;

const productDetailsContainer = document.querySelector(".product-specification");
const productImageContainer = document.querySelector(".product__img2");
const productSizeDropdown = document.querySelector("#productSize");
const button = document.querySelector(".cart-btn");
const cartList = document.querySelector(".cart-wrapper");

const sizeButton = document.querySelector("#productSize");
const sizeError = document.querySelector(".productSize__style");

async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();
  console.log(products);
  createDetails(products);
  createDrop(products.attributes[1].options);
  addImage(products);
  const buttonToAdd = document.querySelector(".cta-cart");
  buttonToAdd.onclick = function (event) {
    const sizeChoice = sizeButton.options[sizeButton.selectedIndex];
    if (!hasChoosenProduct(sizeChoice.value)) {
      sizeError.style.display = "block";
    } else {
      sizeError.style.display = "none";
      const productID = products.id;
      localStorage.setItem("productSize", JSON.stringify(sizeChoice.value));
      localStorage.setItem("product", JSON.stringify(productID));
      showCart(products, sizeChoice.value);
      const removeButton = document.querySelectorAll(".fa-times");
      removeButton.forEach(function (button) {
        button.onclick = function (event) {
          cartList.style.display = "none";
        };
      });
      setTimeout(timer, 9000);
      cartList.style.display = "block";
    }
  };
}

function createDetails(product) {
  productDetailsContainer.innerHTML += `<div>
          <h1>${product.name}</h1>
          <h2>${product.description}</h2>
          <p>${product.short_description}</p>
          <h3>Color</h3>
          <div><i style="color:${product.attributes[0].options[0]}" class="fas fa-circle fa-3x "></i></div>
      </div>`;
  button.innerHTML = `<button class="cta-green cta-cart" data-product="${product.id}">Add to cart</button>`;
}

function createDrop(size) {
  for (let i = 0; i < size.length; i++) {
    productSizeDropdown.innerHTML += `<option value="${size[i]}">${size[i]}</option>`;
  }
}

function addImage(product) {
  productImageContainer.innerHTML += `
  <div style="background-image:url(${product.images[0].src})" class="product-details__image"></div>`;
}

getProducts(baseURL);

function hasChoosenProduct(size) {
  if (size === "size") {
    return false;
  } else {
    return true;
  }
}

function showCart(product, size) {
  cartList.innerHTML = `<div class="cart">
        <div style="background-image: url(${product.images[0].src})" class="cart-image"></div>
        <div class="cart-description">
            <h3>Added to cart</h3>
            <h4 class="cart-description_items">${product.name}</h4>
            <p>Size: ${size}</p>
            <p>${product.price}$</p>
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
