function calculate(discount, product) {
  discount = (parseInt(product.price) * parseInt(discount)) / 100;
  discount = parseInt(product.price) - discount;
  return discount;
}

function createDiscount(product, numb) {
  console.log(product);
  let number = `.product-price${numb}`;
  
  const productDiscount = document.querySelector(`.product${numb}`);
  const productPrice = document.querySelector(number);
  console.log(productDiscount);
  console.log(productPrice);
  
  let messagePrice;
  let discount = product.attributes[2].options[0];
  let discountPrice = calculate(discount, product);

  messagePrice = `<div class="price-message">
      <p data-id="${product.id}" class="oldPrice">${product.price}$</p>
      <p data-id="${product.id}" class="newPrice">${discountPrice}$</p>
      </div>`;


  productPrice.innerHTML = messagePrice;

  productDiscount.innerHTML += `<img src="../images/discount.png" class="discount-tag">
    <h4 class="discount-price">${discount}%</h4>`;

}

function createHTML(product, numbOfDiscount) {
  let index = numbOfDiscount;
  let message = `<a href="products/product.html" data-id=${product.id}>
        <div class="product${index}" data-product=${product.id}>
            <div style="background-image:url(${product.images[0].src})" class="product-image" data-id=${product.id}></div>
            <h3 data-id=${product.id}>${product.name}</h3>
            <p data-id=${product.id}>${product.description}</p>
            <p data-id=${product.id} class="product-price${index}">${product.price}$</p>
        </div>
        </a>`;
  return message;
}
