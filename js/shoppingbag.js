const baseUrl = "https://sunnyday.one/rainydays/wp-json/wc/v3/products";
const key =
  "?consumer_key=ck_d7eb5b35d919fb3bd9e8c577544b21f97d082894&consumer_secret=cs_ceb97c2780d7259b4c1f6754a58dc08b808a3f3d";
const id = JSON.parse(localStorage.getItem("product"));
const size = JSON.parse(localStorage.getItem("productSize"));
const baseURL = baseUrl + "/" + id + key;

const productWrapper = document.querySelector(".product__wrapper");
const summary = document.querySelector(".summmary__section");
const totalProducts = document.querySelector(".total-products");
let totProducts = 0;

async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();
  console.log(products);
  createBag(products);
  createSummary(products);
}

function createBag(product) {
  if (id === null) {
    productWrapper.innerHTML = `<h3 class="empty-bag">There are no products in your shopping bag</h3>`;
  } else {
    productWrapper.innerHTML += `
              <div class="product-added">
                  <div style="background-image: url(${product.images[0].src})" class="shopping-cart__img"></div>
                  <div class="product-added__section"> 
                          <h3>${product.name}</h3>
                          <p>${product.description}</p>
                        </div>
                        <p>${product.attributes[0].options[0]}</p>
                        <p>Size: ${size}</p>
                        <p>Quantity: 1</p>
                        <p>${product.price}$</p>
              </div>`;
  }
}

getProducts(baseURL);

function createSummary(product) {
  let productPrice;
  if (id === null) {
    productPrice = 0;
  } else {
    productPrice = product.price;
  }

  summary.innerHTML = `
  <div class="summary">
      <h2>Order summary</h2>
      <div class="summary-row">
        <p>Products</p>
        <p>${productPrice}$</p>
      </div>
      <div class="summary-row">
        <p>Shipping costs</p>
        <p>0$</p>
      </div>
      <div class="summary-row">
        <p><strong>Total Prize</strong></p>
        <p>${productPrice}$</p>
      </div>
  </div>
  <a href="checkout-payment.html" class="cta summary-btn">Go to Payment</a>`;
}
