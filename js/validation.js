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
        // Name
        if (!fname.value && !lname.value) {
            fname.classList.add("error");
            lname.classList.add("error");
            nameError.classList.add("err-txt");

            let err = document.querySelector("#both-name-empty");
            if (err) err.classList.add("active");
            err = document.querySelector("#fname-empty");
            if (err) err.classList.remove("active");
            err = document.querySelector("#lname-empty");
            if (err) err.classList.remove("active");

            token = false;
        } else if (!fname.value && lname.value) {
            fname.classList.add("error");
            lname.classList.remove("error");
            nameError.classList.add("err-txt");

            let err = document.querySelector("#both-name-empty");
            if (err) err.classList.remove("active");
            err = document.querySelector("#fname-empty");
            if (err) err.classList.add("active");
            err = document.querySelector("#lname-empty");
            if (err) err.classList.remove("active");

            token = false;
        } else if (!lname.value && fname.value) {
            lname.classList.add("error");
            fname.classList.remove("error");
            nameError.classList.add("err-txt");

            let err = document.querySelector("#both-name-empty");
            if (err) err.classList.remove("active");
            err = document.querySelector("#fname-empty");
            if (err) err.classList.remove("active");
            err = document.querySelector("#lname-empty");
            if (err) err.classList.add("active");

            token = false;
        } else {
            lname.classList.remove("error");
            fname.classList.remove("error");
            nameError.classList.remove("err-txt");

            let err = document.querySelector("#both-name-empty");
            if (err) err.classList.remove("active");
            err = document.querySelector("#fname-empty");
            if (err) err.classList.remove("active");
            err = document.querySelector("#lname-empty");
            if (err) err.classList.remove("active");
        }
        // EMAIL
        if (!email.value) {
            email.classList.add("error");
            mailError.classList.add("err-txt");
            let err = document.querySelector("#empty-mail");
            if (err) err.classList.add("active");
            err = document.querySelector("#invalid-mail");
            if (err) err.classList.remove("active");

            mailText.innerHTML = "";
            mailText.classList.remove("info-text");
            token = false;
        } else {
            // var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@gmail.com$/;
            if (!email.value.match(validRegex)) {
                email.classList.add("error");
                mailError.classList.add("err-txt");

                let err = document.querySelector("#empty-mail");
                if (err) err.classList.remove("active");
                err = document.querySelector("#invalid-mail");
                if (err) err.classList.add("active");

                mailText.innerHTML = "";
                mailText.classList.remove("info-text");
                token = false;
            } else {
                email.classList.remove("error");
                mailError.classList.remove("err-txt");
                let err = document.querySelector("#empty-mail");
                if (err) err.classList.remove("active");
                err = document.querySelector("#invalid-mail");
                if (err) err.classList.remove("active");
            }
        }
        // PASSWORD
        if (!pass.value) {
            pass.classList.add("error");
            passError.classList.add("err-txt");

            let err = document.querySelector("#empty-pass");
            if (err) err.classList.add("active");
            err = document.querySelector("#invalid-pass");
            if (err) err.classList.remove("active");
            err = document.querySelector("#empty-conpass");
            if (err) err.classList.remove("active");
            err = document.querySelector("#diff-pass");
            if (err) err.classList.remove("active");

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

                let err = document.querySelector("#empty-pass");
                if (err) err.classList.remove("active");
                err = document.querySelector("#invalid-pass");
                if (err) err.classList.add("active");
                err = document.querySelector("#empty-conpass");
                if (err) err.classList.remove("active");
                err = document.querySelector("#diff-pass");
                if (err) err.classList.remove("active");

                token = false;
            }
            // Confirm Password
            else if (!conPass.value) {
                conPass.classList.add("error");
                passError.classList.add("err-txt");

                let err = document.querySelector("#empty-pass");
                if (err) err.classList.remove("active");
                err = document.querySelector("#invalid-pass");
                if (err) err.classList.remove("active");
                err = document.querySelector("#empty-conpass");
                if (err) err.classList.add("active");
                err = document.querySelector("#diff-pass");
                if (err) err.classList.remove("active");

                pass.classList.remove("error");
                token = false;
            } else {
                if (pass.value != conPass.value) {
                    pass.classList.remove("error");
                    conPass.classList.add("error");
                    passError.classList.add("err-txt");

                    let err = document.querySelector("#empty-pass");
                    if (err) err.classList.remove("active");
                    err = document.querySelector("#invalid-pass");
                    if (err) err.classList.remove("active");
                    err = document.querySelector("#empty-conpass");
                    if (err) err.classList.remove("active");
                    err = document.querySelector("#diff-pass");
                    if (err) err.classList.add("active");

                    token = false;
                } else {
                    pass.classList.remove("error");
                    conPass.classList.remove("error");
                    passError.classList.remove("err-txt");

                    let err = document.querySelector("#empty-pass");
                    if (err) err.classList.remove("active");
                    err = document.querySelector("#invalid-pass");
                    if (err) err.classList.remove("active");
                    err = document.querySelector("#empty-conpass");
                    if (err) err.classList.remove("active");
                    err = document.querySelector("#diff-pass");
                    if (err) err.classList.remove("active");
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

            let err = document.querySelector("#empty-login-mail");
            if (err) err.classList.add("active");
            err = document.querySelector("#invalid-login-mail");
            if (err) err.classList.remove("active");
            err = document.querySelector("#notfound-mail");
            if (err) err.classList.remove("active");

            token = false;
        } else {
            // var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@gmail.com$/;
            if (!email.value.match(validRegex)) {
                email.classList.add("error");
                mailError.classList.add("err-txt");

                let err = document.querySelector("#empty-login-mail");
                if (err) err.classList.remove("active");
                err = document.querySelector("#invalid-login-mail");
                if (err) err.classList.add("active");
                err = document.querySelector("#notfound-mail");
                if (err) err.classList.remove("active");

                token = false;
            } else {
                email.classList.remove("error");
                mailError.classList.remove("err-txt");

                let err = document.querySelector("#empty-login-mail");
                if (err) err.classList.remove("active");
                err = document.querySelector("#invalid-login-mail");
                if (err) err.classList.remove("active");
                err = document.querySelector("#notfound-mail");
                if (err) err.classList.remove("active");
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

                let err = document.querySelector("#empty-login-mail");
                if (err) err.classList.remove("active");
                err = document.querySelector("#invalid-login-mail");
                if (err) err.classList.remove("active");
                err = document.querySelector("#notfound-mail");
                if (err) err.classList.add("active");
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

            let err = document.querySelector("#empty-login-pass");
            if (err) err.classList.add("active");
            err = document.querySelector("#wrong-pass");
            if (err) err.classList.remove("active");

            token = false;
        } else {
            // Password verification

            let validPass = localStorage.getItem("password");
            if (validPass === pass.value) {
                location.href = passForm.action;
            } else {
                pass.classList.add("error");
                passError.classList.add("err-txt");

                let err = document.querySelector("#empty-login-pass");
                if (err) err.classList.remove("active");
                err = document.querySelector("#wrong-pass");
                if (err) err.classList.add("active");

                token = false;
            }
        }
    });
}
