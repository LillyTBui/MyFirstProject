const product = JSON.parse(localStorage.getItem("cartList"));
console.log(product);

const productWrapper = document.querySelector(".product__wrapper");
const summary = document.querySelector(".summmary__section");
const totalProducts = document.querySelector(".total-products");
let totalCost = 0;
let totProducts = 0;

if(product === null){
    productWrapper.innerHTML = `<h3 class="empty-bag">There are no products in your shopping bag</h3>`;
}
else{
    product.forEach(function(product){
        productWrapper.innerHTML += `
        <div class="product-added">
            <div style="background-image: url(${product.image})" class="shopping-cart__img"></div>
            <div class="product-added__section"> 
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                  </div>
                  <p>Black</p>
                  <select name="size" id="size" class="dropdown">
                    <option value="size">Size</option>
                    <option value="x-small">X-small</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="Large">Large</option>
                  </select>
                  <select name="quantity" id="quantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  <p>${product.price},-</p>
                  <i class="fas fa-trash-alt"></i>
        </div>`;
        totalCost += product.price;
        totProducts++;
    })
}

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