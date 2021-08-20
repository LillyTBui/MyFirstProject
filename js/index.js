const baseURL = "https://sunnyday.one/rainydays/wp-json/wc/store/products";
const productContainer = document.querySelector(".popular-products");

localStorage.clear();

async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();
  console.log(products);
  products.forEach(createHTML);
  const selectedProduct = document.querySelector(".popular-products");
  selectedProduct.onclick = function (event) {
    const id = event.target.dataset.id;
    console.log(id);
    localStorage.setItem("id", JSON.stringify(id));
  };
}

function createHTML(product) {
  productContainer.innerHTML += `<a href="products/product.html" data-id=${product.id}>
        <div class="product" data-id="${product.id}">
            <div style="background-image:url(${product.images[0].src})" class="product-image" data-id=${product.id}></div>
            <h3 data-id=${product.id}>${product.name}</h3>
            <p data-id="${product.id}">${product.description}</p>
            <p data-id="${product.id}">${product.prices.price}${product.prices.currency_symbol}</p>
        </div>
        </a>`;
}

const indexURL = baseURL + "?featured=true&";
getProducts(indexURL);
