const form = document.querySelector(".login__form");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");

const message = document.querySelector(".welcome-message");

let validEmail = false;
let validPassword = false;

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

password.onblur = function(){
    if (password.value.trim() === "123456"){
        passwordError.style.display = "none";
        validPassword = true;
    }else {
        passwordError.style.display = "block";
        validPassword = false;
    }
}

password.onfocus = function(){
    if(validPassword === false){
        passwordError.style.display = "none";
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function validateForm(event){
    event.preventDefault();
    if(validEmail === false){
        emailError.style.display = "block";
    }
    else{
        emailError.style.display = "none";
    }

    if(validPassword === false){
        passwordError.style.display = "block";
    }
    else{
        passwordError.style.display = "none";
    }

    if(validEmail && validPassword){
        message.style.display = "block";
    }
}

form.addEventListener("submit", validateForm);