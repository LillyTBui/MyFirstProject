//const baseURL = "https://sunnyday.one/rainydays/wp-json/wc/store/products?category=18";
const productContainer = document.querySelector(".popular-products");
const sizeChoice = document.querySelector("#size");

const baseUrl = "https://sunnyday.one/rainydays/wp-json/wc/v3/products";
const key = "consumer_key=ck_d7eb5b35d919fb3bd9e8c577544b21f97d082894";
const secret = "consumer_secret=cs_ceb97c2780d7259b4c1f6754a58dc08b808a3f3d";

const baseURL = baseUrl + "?" + key + "&" + secret + "&category=18";

localStorage.clear();

async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();
  productContainer.innerHTML = "";
  let message;
  let numbOfItems = 0;

  for(let i = 0; i < products.length; i++){
    numbOfItems++;
    if (products[i].attributes.length === 3) {
      message = createHTML(products[i], numbOfItems);
      productContainer.innerHTML += message;
      createDiscount(products[i], numbOfItems);

    }
    else{
      message = createHTML(products[i], numbOfItems);
      productContainer.innerHTML += message;
    }
  }

  const selectedProduct = document.querySelector(".popular-products");
  selectedProduct.onclick = function (event) {
    const id = event.target.dataset.id;
    localStorage.setItem("id", JSON.stringify(id));
  };
}

getProducts(baseURL);

sizeChoice.onchange = function (event) {
  let choice = event.target.value;
  let term = "";
  if (choice === "XS") {
    term = "19";
  } else if (choice === "S") {
    term = "20";
  } else if (choice === "M") {
    term = "21";
  } else if (choice === "L") {
    term = "22";
  } else if (choice === "XL") {
    term = "23";
  } else {
    term = "";
  }
  const attribute = "&attribute=pa_size";
  const attribute_term = "&attribute_term=" + term;
  const newUrl = baseURL + attribute + attribute_term;
  getProducts(newUrl);
};
