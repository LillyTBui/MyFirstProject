const baseURL = "https://sunnyday.one/rainydays/wp-json/wc/store/products";
const productContainer = document.querySelector(".popular-products");
let newPrice = 0;

localStorage.clear();

async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();
  products.forEach(createHTML);
  console.log(products);

  for (let i = 0; i < products.length; i++) {
    if (products[i].attributes.length === 3) {
      createDiscount(products[i]);
    }
  }

  const selectedProduct = document.querySelector(".popular-products");
  selectedProduct.onclick = function (event) {
    const id = event.target.dataset.id;
    localStorage.setItem("id", JSON.stringify(id));
  };
}

function createHTML(product) {
  productContainer.innerHTML += `<a href="products/product.html" data-id=${product.id}>
        <div class="product" data-id="${product.id}">
            <div style="background-image:url(${product.images[0].src})" class="product-image" data-id=${product.id}></div>
            <h3 data-id=${product.id}>${product.name}</h3>
            <p data-id="${product.id}">${product.description}</p>
            <p data-id="${product.id}" class="product-price">${product.prices.price}${product.prices.currency_symbol}</p>
        </div>
  </a>`;
}


function createDiscount(product) {
  const productDiscount = document.querySelector(".product");
  const productPrice = document.querySelector(".product-price");
  let messagePrice;

  let discount = product.attributes[2].terms[0].name;

  discount = parseInt(discount);

  newPrice = (parseInt(product.prices.price) * discount) / 100;
  newPrice = parseInt(product.prices.price) - newPrice;

  messagePrice = `<div class="price-message">
    <p data-id="${product.id}" class="oldPrice">${product.prices.price}${product.prices.currency_symbol}</p>
    <p data-id="${product.id}" class="newPrice">${newPrice}$</p>
    </div>`;

  productPrice.innerHTML = messagePrice;

  productDiscount.innerHTML += `<img src="../images/discount.png" class="discount-tag">
  <h4 class="discount-price">${discount}%</h4>`;

}
const indexURL = baseURL + "?featured=true";
getProducts(indexURL);
