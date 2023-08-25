const homeContent = document.querySelector(".home-content");
const loginContent = document.querySelector(".login-content");
const signupContent = document.querySelector(".signup-content");
const loginBtn = document.querySelector(".home-content .btn-grp .login-btn");
const signupBtn = document.querySelector(".home-content .btn-grp .signup-btn");
const alreadySignup = document.querySelector(".login-content .already-account .link");
const alreadyLogin = document.querySelector(".signup-content .already-account .link");

// Cannot go back to index page 
// window.location.replace("http://127.0.0.1:5500/client/home.html");

// Can go back to index page
// window.location.href = "http://127.0.0.1:5500/client/home.html";

loginBtn.addEventListener("click", () => {
    homeContent.classList.add("display-none");
    loginContent.classList.remove("display-none");
});
signupBtn.addEventListener("click", () => {
    homeContent.classList.add("display-none");
    signupContent.classList.remove("display-none");
});
alreadyLogin.addEventListener("click", () => {
    signupContent.classList.add("display-none");
    loginContent.classList.remove("display-none");
});
alreadySignup.addEventListener("click", () => {
    loginContent.classList.add("display-none");
    signupContent.classList.remove("display-none");
});


// Signup form 
const signup = document.querySelector(".signup-content .btn-grp .signup-btn");
const signupUsername = document.querySelector(".signup-content #signup-username");
const signupEmail = document.querySelector(".signup-content #signup-email");
const signupPassword = document.querySelector(".signup-content #signup-password");

signup.addEventListener("click", async () => {
    const username = signupUsername.value.trim();
    const email = signupEmail.value.trim();
    const password = signupPassword.value.trim();

    const bodyObj = {
        username, email, password
    }

    const response = await fetch("http://127.0.0.1:3300/auth/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyObj),
    });

    const data = await response.json();
    if (response.status === 200) {
        signupUsername.value = "";
        signupEmail.value = "";
        signupPassword.value = "";
        window.location.replace("http://127.0.0.1:5500/client/home.html");

        sessionStorage.setItem("userData", JSON.stringify(data.savedNewUser));
        const newData = JSON.parse(sessionStorage.getItem("userData"));
    }
    else {
        const errorMessage = document.querySelector(".signup-content .error-message");
        errorMessage.textContent = data.error;
        errorMessage.style.visibility = "visible";

        setTimeout(() => {
            errorMessage.style.visibility = "hidden";
            errorMessage.textContent = "Error";
        }, 5000);
    }
})




// Login form
const login = document.querySelector(".login-content .btn-grp .login-btn");
const loginEmail = document.querySelector(".login-content #login-email");
const loginPassword = document.querySelector(".login-content #login-password");

login.addEventListener("click", async () => {
    const email = loginEmail.value.trim();
    const password = loginPassword.value.trim();

    const bodyObj = {
        email, password
    }

    const response = await fetch("http://127.0.0.1:3300/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyObj),
    });

    const data = await response.json();
    if (response.status === 200) {
        loginEmail.value = "";
        loginPassword.value = "";
        window.location.replace("http://127.0.0.1:5500/client/home.html");

        sessionStorage.setItem("userData", JSON.stringify(data.savedNewUser));
        const newData = JSON.parse(sessionStorage.getItem("userData"));
    }
    else {
        loginEmail.value = "";
        loginPassword.value = "";
        const errorMessage = document.querySelector(".login-content .error-message");
        errorMessage.textContent = data.error;
        errorMessage.style.visibility = "visible";

        setTimeout(() => {
            errorMessage.style.visibility = "hidden";
            errorMessage.textContent = "Error";
        }, 5000);
    }
})

