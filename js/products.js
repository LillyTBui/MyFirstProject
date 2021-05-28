/** @format */

import { productArray } from "./constants/productList.js";
const productContainer = document.querySelector(".popular-products");
const numberOfProductContainer = document.querySelector(".product__Number");
let isEmpty;
let number;

productArray.forEach(createHTML);
numberOfProducts(4);

function createHTML(product){
  number++;
  isEmpty = false;
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

function clearHTML(){
  productContainer.innerHTML = ``;
  isEmpty = true;
}

function errorMessage(){
  productContainer.innerHTML = `
  <div class="error-message">
    <p>Unfortunately we do not have any products matching your criterias</p>
  </div>`;
}

const selectedProduct = document.querySelector(".popular-products");
selectedProduct.onclick = function(event){
    const item = productArray.find(item => item.id === event.target.dataset.product);
    localStorage.setItem("product", JSON.stringify(item));
}

/* Categories */
const form = document.querySelector("#filter-form");
const size = document.querySelector("#size");
const color = document.querySelector("#color");
const price = document.querySelector("#prices");
let calculatedPrice;

form.addEventListener("submit", function(event){
  event.preventDefault();
  const sizeChoice = size.options[size.selectedIndex];
  const colorChoice = color.options[color.selectedIndex];
  const priceChoice = price.options[price.selectedIndex];
  clearHTML();
  number = 0;
  productArray.forEach(function(item){
    if(sizeChoice.value === "size" && colorChoice.value === "Color" && priceChoice.value === "prices") {
      createHTML(item);
    }
    else if(sizeChoice.value !== "size"){
      for(let i = 0; i < item.size.length; i++){
        if(item.size[i] === sizeChoice.value){
          const productPrice = comparePrice(item.price);
          if(colorChoice.value === "Color" && priceChoice.value === "prices"){
            createHTML(item);
          }
          else if(colorChoice.value === "Color" && priceChoice.value === productPrice){
            createHTML(item);
          }
          else if(colorChoice.value === item.color && priceChoice.value === "prices"){
            createHTML(item);
          }
          else if(colorChoice.value === item.color && priceChoice.value === productPrice){
            createHTML(item);
          }
          else if(colorChoice.value === "Black" || priceChoice.value === "minPrice"){
            errorMessage();
          }
        }
      }
    }
    else if(colorChoice.value !== "Color"){
      const productPrice = comparePrice(item.price);
      if(sizeChoice.value === "size"){
        if(colorChoice.value === item.color && priceChoice.value === "prices"){
          createHTML(item);
        }
        else if(colorChoice.value === item.color && priceChoice.value === productPrice){
          createHTML(item);
        }
      }
    }
    else if(priceChoice.value !== "prices"){
      const productPrice = comparePrice(item.price);
      if(priceChoice.value === productPrice){
        if(sizeChoice.value === "size" && colorChoice.value === "Color"){
          createHTML(item);
        }
      }
    }
  })
  if(isEmpty === true){
    errorMessage();
  }

  numberOfProducts(number);

})

function comparePrice(price){
  if(price < 1000){
    calculatedPrice = "minPrice";
  }
  else if(price > 1000 && price < 2000){
    calculatedPrice = "midPrice";
  }
  else{
    calculatedPrice = "maxPrice";
  }
  return calculatedPrice;
}

function numberOfProducts(number){
  numberOfProductContainer.innerHTML = `
  <div>
    <p>Number of products: ${number}</p>
  </div>`;
}