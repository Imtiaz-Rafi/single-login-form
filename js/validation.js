let icon = `<svg
        aria-hidden="true"
        class="stUf5b qpSchb"
        fill="currentColor"
        focusable="false"
        width="16px"
        height="16px"
        viewBox="0 0 24 24"
        xmlns="https://www.w3.org/2000/svg"
    >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
    </svg>`;
function signUpSubmit() {
    let signUpForm = document.querySelector("#signUpForm");
    signUpForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let token = true;
        let mailText = document.querySelector("#mail-text");
        let passText = document.querySelector("#pass-text");
        let nameError = document.querySelector("#name-error");
        let mailError = document.querySelector("#mail-error");
        let passError = document.querySelector("#pass-error");

        let fname = document.querySelector("#fname");
        let lname = document.querySelector("#lname");
        let email = document.querySelector("#email");
        let pass = document.querySelector("#pass");
        let conPass = document.querySelector("#conpass");

        if (!fname.value && !lname.value) {
            fname.classList.add("error");
            lname.classList.add("error");
            nameError.classList.add("err-txt");
            nameError.innerHTML = icon + `<p>Enter first name and surname</p>`;
            token = false;
        } else if (!fname.value && lname.value) {
            fname.classList.add("error");
            lname.classList.remove("error");
            nameError.classList.add("err-txt");
            nameError.innerHTML = icon + `<p>Enter first name</p>`;
            token = false;
        } else if (!lname.value && fname.value) {
            lname.classList.add("error");
            fname.classList.remove("error");
            nameError.classList.add("err-txt");
            nameError.innerHTML = icon + `<p>Enter last name</p>`;
            token = false;
        } else {
            lname.classList.remove("error");
            fname.classList.remove("error");
            nameError.classList.remove("err-txt");
            nameError.innerHTML = "";
        }
        // EMAIL
        if (!email.value) {
            email.classList.add("error");
            mailError.classList.add("err-txt");
            mailError.innerHTML = icon + `<p>Choose a Gmail address</p>`;
            mailText.innerHTML = "";
            mailText.classList.remove("info-text");
            token = false;
        } else {
            // var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@gmail.com$/;
            if (!email.value.match(validRegex)) {
                email.classList.add("error");
                mailError.classList.add("err-txt");
                mailError.innerHTML = icon + `<p>Invalid Gmail address</p>`;
                mailText.innerHTML = "";
                mailText.classList.remove("info-text");
                token = false;
            } else {
                email.classList.remove("error");
                mailError.innerHTML = "";
            }
        }
        // PASSWORD
        if (!pass.value) {
            pass.classList.add("error");
            passError.classList.add("err-txt");
            passError.innerHTML = icon + `<p>Enter a password</p>`;
            passText.innerHTML = "";
            passText.classList.remove("info-text");
            conPass.classList.remove("error");
            token = false;
        } else {
            passText.innerHTML = "";
            passText.classList.remove("info-text");
            let passRegex = "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$";
            if (!pass.value.match(passRegex)) {
                pass.classList.add("error");
                passError.classList.add("err-txt");
                passError.innerHTML =
                    icon + `<p>Use 8 characters or more for your password</p>`;
                token = false;
            }
            // Confirm Password
            else if (!conPass.value) {
                conPass.classList.add("error");
                passError.classList.add("err-txt");
                passError.innerHTML = icon + `<p>Confirm your password</p>`;
                pass.classList.remove("error");
                token = false;
            } else {
                if (pass.value != conPass.value) {
                    pass.classList.remove("error");
                    conPass.classList.add("error");
                    passError.classList.add("err-txt");
                    passError.innerHTML =
                        icon +
                        `<p>Those passwords didn’t match. Try again.</p>`;
                    token = false;
                } else {
                    pass.classList.remove("error");
                    conPass.classList.remove("error");
                    passError.innerHTML = "";
                }
            }
        }

        if (token === true) {
            const user = localStorage.setItem(
                "name",
                fname.value + " " + lname.value
            );
            const mail = localStorage.setItem("mail", email.value);
            const pswd = localStorage.setItem("password", pass.value);
            location.href = signUpForm.action;
        }
    });
}

function mailSubmit() {
    let mailForm = document.querySelector("#mailForm");
    mailForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let token = true;
        let mailError = document.querySelector("#login-mail-error");
        let email = document.querySelector("#login-email");

        // EMAIL
        if (!email.value) {
            email.classList.add("error");
            mailError.classList.add("err-txt");
            mailError.innerHTML = icon + `<p>Choose a Gmail address</p>`;
            token = false;
        } else {
            // var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@gmail.com$/;
            if (!email.value.match(validRegex)) {
                email.classList.add("error");
                mailError.classList.add("err-txt");
                mailError.innerHTML = icon + `<p>Invalid Gmail address</p>`;
                token = false;
            } else {
                email.classList.remove("error");
                mailError.innerHTML = "";
            }
        }
        if (token === true) {
            // Email varification
            let validMail = localStorage.getItem("mail");
            if (validMail === email.value) {
                location.href = mailForm.action;
            } else {
                email.classList.add("error");
                mailError.classList.add("err-txt");
                mailError.innerHTML =
                    icon + `<p>Couldn't find your Google Account</p>`;
            }
        }
    });
}

function passSubmit() {
    let passForm = document.querySelector("#passForm");
    passForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let token = true;
        let passError = document.querySelector("#login-pass-error");
        let pass = document.querySelector("#login-pass");
        // PASSWORD
        if (!pass.value) {
            pass.classList.add("error");
            passError.classList.add("err-txt");
            passError.innerHTML = icon + `<p>Enter a password</p>`;
            token = false;
        } else {
            // Password verification

            let validPass = localStorage.getItem("password");
            if (validPass === pass.value) {
                location.href = passForm.action;
            } else {
                pass.classList.add("error");
                passError.classList.add("err-txt");
                passError.innerHTML =
                    icon +
                    `<p>Wrong password. Try again or click ‘Forgot password’ to reset it.</p>`;
                token = false;
            }
        }
    });
}
