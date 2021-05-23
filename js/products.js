/** @format */

import { productArray } from "./constants/productList.js";
const productContainer = document.querySelector(".example-list");

productArray.forEach(createHTML);
    
function createHTML(product){
  productContainer.innerHTML += 
  `<div>
    <div style="background-image: url(${product.image})" class="example-image)></div>
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <p>${product.price}</p>
  </div>`;
};
