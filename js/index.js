const baseURL = "https://sunnyday.one/rainydays/wp-json/wc/store/products";
const productContainer = document.querySelector(".popular-products");

async function getProducts(url){
    const response = await fetch(url);
    const products = await response.json();
    console.log(products);
    products.forEach(createHTML);
}

function createHTML(product){
    console.log(product.prices.price);
    productContainer.innerHTML += `
        <div class="product" data-product=${product.id}>
            <div style="background-image:url(${product.images[0].src})" class="product-image"></div>
            <h3>${product.name}</h3>
            <p data-product=${product.id}>${product.prices.price}${product.prices.currency_symbol}</p>
        </div>
        `;
  }

getProducts(baseURL);