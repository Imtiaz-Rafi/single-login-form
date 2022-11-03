function isActive() {
    let inputBox = document.querySelectorAll(".input");
    inputBox.forEach((e) => {
        if (e.value) {
            e.classList.add("active");
        } else {
            e.classList.remove("active");
        }
    });
}

let togglePass = true;
function showPass() {
    var pass = document.querySelector("#pass");
    var conPass = document.querySelector("#conpass");
    if (togglePass) {
        pass.type = "text";
        if (conPass) conPass.type = "text";
    } else {
        pass.type = "password";
        if (conPass) conPass.type = "password";
    }
    togglePass = !togglePass;
}
let togglePass2 = true;
function showPass2() {
    var pass = document.querySelector("#login-pass");
    if (togglePass2) {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
    togglePass2 = !togglePass2;
}

function showName(){
    let name = document.querySelector("#show-name");
    let validName = localStorage.getItem("name");
    name.innerHTML = validName;
}
function showMail() {
    let mail = document.querySelector("#mail-name");
    let validMail = localStorage.getItem("mail");
    mail.innerHTML = validMail;
}

function toggleDisplay() {
    var index = document.querySelector("#index");
    var signUp = document.querySelector("#signup");
    var mailLogin = document.querySelector("#mail-login");
    var passLogin = document.querySelector("#pass-login");
    var welcome = document.querySelector("#welcome");

    var url = window.location.href;

    if (url.includes("signup")) {
        signUp.classList.add("active");
    } else if (url.includes("mail-login")) {
        mailLogin.classList.add("active");
    } else if (url.includes("pass-login")) {
        passLogin.classList.add("active");
        showMail();
    } else if (url.includes("welcome")) {
        welcome.classList.add("active");
        showName()
    } else {
        index.classList.add("active");
    }
}
