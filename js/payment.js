const form = document.querySelector("#paymentForm");

const cardName = document.querySelector("#cardName");
const cardNameError = document.querySelector("#paymentNameError");

const cardNumber = document.querySelector("#cardNumber");
const cardNumberError = document.querySelector("#paymentCardError");

const month = document.querySelector("#month");
const monthError = document.querySelector("#paymentMonthError");

const year = document.querySelector("#year");
const yearError = document.querySelector("#paymentYearError");

const securityCode = document.querySelector("#securityCode");
const securityError = document.querySelector("#paymentSecurityError");

let validName = false;
let validNumber = false;
let validMonth = false;
let validYear = false;
let validCode = false;


cardName.onblur = function(){
    if (cardName.value.trim().length > 3 && hasNumber(cardName.value) === false) {
        cardNameError.style.display = "none";
        validName = true;
    }else {
        cardNameError.style.display = "block";
        validName = false;
    }  
}

cardName.onfocus = function(){
    if(validName === false){
        cardNameError.style.display = "none";
    }
}


cardNumber.onblur = function(){
    if (cardNumber.value.trim().length === 16) {
        cardNumberError.style.display = "none";
        validNumber = true;
    }else {
        cardNumberError.style.display = "block";
        validNumber = false;
    }
}

cardNumber.onfocus = function(){
    if(validNumber === false){
        cardNumberError.style.display = "none";
    }
}

month.onblur = function(){
    if(month.value > 0 && month.value <= 12){
        monthError.style.display = "none";
        validMonth = true;
    }
    else{
        monthError.style.display = "block";
        validMonth = false;
    }
}

month.onfocus = function(){
    if(validMonth === false){
        monthError.style.display = "none";
    }
}

year.onblur = function(){
    if (year.value > 0 && year.value.trim().length === 2) {
        yearError.style.display = "none";
        validYear = true;
    } else {
        yearError.style.display = "block";
        validYear = false;
    }
}

year.onfocus = function(){
    if(validYear === false){
        yearError.style.display = "none";
    }
}

securityCode.onblur = function(){
    if (securityCode.value.trim().length === 3) {
        securityError.style.display = "none";
        validCode = true;
    } else {
        securityError.style.display = "block";
        validCode = false;
    }
}

securityCode.onfocus = function(){
    if(validCode === false){
        securityError.style.display = "none";
    }
}

function validateForm(event){
    event.preventDefault();
    if(validName === false){
        cardNameError.style.display = "block";
    }
    else{
        cardNameError.style.display = "none";
    }

    if(validNumber === false){
        cardNumberError.style.display = "block";
    }
    else{
        cardNumberError.style.display = "none";
    }

    if(validMonth === false){
        monthError.style.display = "block";
    }
    else{
        monthError.style.display = "none";
    }

    if(validYear === false){
        yearError.style.display = "block";
    }
    else{
        yearError.style.display = "none";
    }

    if(validCode === false){
        securityError.style.display = "block";
    }
    else{
        securityError.style.display = "none";
    }


    if(validName && validNumber && validMonth && validYear && validCode){
        window.location.href="contact-success.html";
    }
}

function hasNumber(myString) {
    return /\d/.test(myString);
}

form.addEventListener("submit", validateForm);
