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

function toggleDisplay() {
    var index = document.querySelector("#index");
    var signUp = document.querySelector("#signup");
    var mailLogin = document.querySelector("#mail-login");
    var passLogin = document.querySelector("#pass-login");
    var welcome = document.querySelector("#welcome");
    index.classList.add("disp-none");
    signUp.classList.add("disp-none");
    mailLogin.classList.add("disp-none");
    passLogin.classList.add("disp-none");
    welcome.classList.add("disp-none");
    var url = window.location.href;
    if (url.includes("signup")) {
        signUp.classList.remove("disp-none");
    } else if (url.includes("mail-login")) {
        mailLogin.classList.remove("disp-none");
    } else if (url.includes("pass-login")) {
        passLogin.classList.remove("disp-none");
        function mailName() {
            let mail = document.querySelector("#mail-name");
            let validMail = localStorage.getItem("mail");
            mail.innerHTML = validMail;
        }
        mailName();
    } else if (url.includes("welcome")) {
        welcome.classList.remove("disp-none");
    } else {
        index.classList.remove("disp-none");
        console.log("false");
    }
}
