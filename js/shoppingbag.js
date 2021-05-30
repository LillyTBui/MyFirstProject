/** @format */

const product = JSON.parse(localStorage.getItem("cartList"));
console.log(product);

const productWrapper = document.querySelector(".product__wrapper");
const summary = document.querySelector(".summmary__section");
const totalProducts = document.querySelector(".total-products");
let totalCost = 0;
let totProducts = 0;

if (product === null) {
  productWrapper.innerHTML = `<h3 class="empty-bag">There are no products in your shopping bag</h3>`;
} else {
  product.forEach(function (product) {
    productWrapper.innerHTML += `
        <div class="product-added">
            <div style="background-image: url(${product.image})" class="shopping-cart__img"></div>
            <div class="product-added__section"> 
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                  </div>
                  <p>${product.color}</p>
                  <p>Size: ${product.chosenSize}</p>
                  <p>Quantity: 1</p>
                  <p>${product.price},-</p>
                  <i class="fas fa-trash-alt" data-product="${product.index}"></i>
        </div>`;
    totalCost += product.price;
    totProducts++;
  });
}

if(totProducts === 0){
  productWrapper.innerHTML = `<h3 class="empty-bag">There are no products in your shopping bag</h3>`;
  localStorage.removeItem("cartList");
  localStorage.removeItem("index");
  localStorage.removeItem("numb1");
  localStorage.removeItem("numb2");
  localStorage.removeItem("numb3");
  localStorage.removeItem("numb4");
}

const removeItem = document.querySelectorAll(".fa-trash-alt");
console.log(removeItem);
removeItem.forEach(function(icon) {
    icon.onclick = function(event) {
      const oldList = JSON.parse(localStorage.getItem("cartList"));
      const indexNumber = parseInt(event.target.dataset.product);
      const itemToRemove = oldList.findIndex(item => parseInt(item.index) === indexNumber);
      const remove = oldList.find(item => parseInt(item.index) === indexNumber);
      oldList.splice(itemToRemove, 1);
      console.log(oldList);
      removeProduct(remove);
      localStorage.setItem("cartList", JSON.stringify(oldList));
      window.location.reload();
    };
})

totalProducts.innerHTML = `<p>Total products: ${totProducts}</p>`;

summary.innerHTML = `
    <div class="summary">
        <h2>Order summary</h2>
        <div class="summary-row">
          <p>Products</p>
          <p>${totalCost}</p>
        </div>
        <div class="summary-row">
          <p>Shipping costs</p>
          <p>0 NOK</p>
        </div>
        <div class="summary-row">
          <p><strong>Total Prize</strong></p>
          <p>${totalCost}</p>
        </div>
    </div>
    <a href="checkout-payment.html" class="cta summary-btn">Go to Payment</a>`;

function removeProduct(product){
  const findproduct = parseInt(product.id);
  console.log(findproduct);
  let currentProduct;
  if (findproduct === 1) {
    currentProduct = JSON.parse(localStorage.getItem("numb1"));
    currentProduct--;
    localStorage.setItem("numb1", currentProduct);
  } else if (findproduct === 2) {
    currentProduct = JSON.parse(localStorage.getItem("numb2"));
    currentProduct--;
    localStorage.setItem("numb2", currentProduct);
  } else if (findproduct === 3) {
    currentProduct = JSON.parse(localStorage.getItem("numb3"));
    currentProduct--;
    localStorage.setItem("numb3", currentProduct);
  } else {
    currentProduct = JSON.parse(localStorage.getItem("numb4"));
    currentProduct--;
    localStorage.setItem("numb4", currentProduct);
  }
  parseInt(currentProduct);
}

