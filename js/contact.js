const form = document.querySelector("#contactForm");

const nameElement = document.querySelector("#name");
const nameError = document.querySelector("#nameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const address = document.querySelector("#message");
const addressError = document.querySelector("#messageError");

let validName = false;
let validEmail = false;
let validSubject = false;
let validAdress = false;

nameElement.onblur = function(){
    if (nameElement.value.trim().length > 3 && hasNumber(nameElement.value) === false) {
        nameError.style.display = "none";
        validName = true;
    }else {
        nameError.style.display = "block";
        validName = false;
    }  
}

nameElement.onfocus = function(){
    if(validName === false){
        nameError.style.display = "none";
    }
}


email.onblur = function(){
    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
        validEmail = true;
    }else {
        emailError.style.display = "block";
        validEmail = false;
    }
}

email.onfocus = function(){
    if(validEmail === false){
        emailError.style.display = "none";
    }
}

subject.onblur = function(){
    const opt = subject.options[subject.selectedIndex];
    if(opt.value.trim().length === 0){
        subjectError.style.display = "block";
        validSubject = false;
    }
    else{
        subjectError.style.display = "none";
        validSubject = true;
    }
}

subject.onfocus = function(){
    if(validSubject === false){
        subjectError.style.display = "none";
    }
}

address.onblur = function(){
    if (address.value.trim().length >= 25) {
        addressError.style.display = "none";
        validAdress = true;
    } else {
        addressError.style.display = "block";
        validAdress = false;
    }
}

address.onfocus = function(){
    if(validAdress === false){
        addressError.style.display = "none";
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function validateForm(event){
    event.preventDefault();
    if(validName === false){
        nameError.style.display = "block";
    }
    else{
        nameError.style.display = "none";
    }

    if(validEmail === false){
        emailError.style.display = "block";
    }
    else{
        emailError.style.display = "none";
    }

    if(validSubject === false){
        subjectError.style.display = "block";
    }
    else{
        subjectError.style.display = "none";
    }

    if(validAdress === false){
        addressError.style.display = "block";
    }
    else{
        addressError.style.display = "none";
    }

    if(validName && validEmail && validSubject && validAdress){
        window.location.href="contact-success.html";
    }
}

function hasNumber(myString) {
    return /\d/.test(myString);
}

form.addEventListener("submit", validateForm);

