/** @format */

import { productArray } from "./constants/productList.js";
const productContainer = document.querySelector(".popular-products");

productArray.forEach(createHTML);
    
function createHTML(product){
  productContainer.innerHTML += 
  `<a href="products/product.html" data-product=${product.id}>
    <div class="product" data-product=${product.id}>
        <div style="background-image: url(${product.image})" class="product-image" data-product=${product.id}></div>
        <h3 data-product=${product.id}>${product.name}</h3>
        <p data-product=${product.id}>${product.description}</p>
        <p data-product=${product.id}>${product.price},-</p>
    </div>
  </a>`;
};

const selectedProduct = document.querySelector(".popular-products");
selectedProduct.onclick = function(event){
    const item = productArray.find(item => item.id === event.target.dataset.product);
    localStorage.setItem("product", JSON.stringify(item));
}



