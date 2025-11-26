//Loader//
showLoader()
window.addEventListener("load", () => {
    setTimeout(() => {
        hideLoader()
    }, 300)
})

//Get form and inputs//
const form = document.getElementById("loginForm")

const emailInput = form.email
const emailError = document.querySelector(".email-error")

// Validation - Checks if the email is standard format, if invalid shows error message and gets a red border, if valid gread border.//
emailInput.addEventListener("blur", () => {
    const email = emailInput.value

     if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = "Only stud.noroff.no emails are allowed to register."
        emailInput.classList.add("input-error")
        emailInput.classList.remove("input-success")
    } else {
        emailError.textContent = ""
        emailInput.classList.remove("input-error")
        emailInput.classList.add("input-success")
    }

})

const passwordInput = form.password
const passwordError = document.querySelector(".password-error")

// Validation - Checks if the password is valid, if invalid shows error message and gets a red border, if valid gread border. Must be letters, at least one number and min-lenght 8//
passwordInput.addEventListener("blur", () => {
    const password = passwordInput.value
    
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
        passwordError.textContent = "Password must be at least 8 characters and include a number."
        passwordInput.classList.add("input-error")
        passwordInput.classList.remove("input-success")
        } else {
            passwordError.textContent = ""
            passwordInput.classList.remove("input-error")
            passwordInput.classList.add("input-success")
        }
})
//Login//
form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const email = form.email.value
    const password = form.password.value
    showLoader()
    
    //POST reuest to API, save the token if login is successful and you stay logged in//
    try {
        const response = await fetch("https://v2.api.noroff.dev/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password})
        })

        const data = await response.json()
        if (!response.ok) {
            throw new Error(data.message || "Login failed! Please enter a valid email and password. Don't have a account? Sign up.")
        }

        localStorage.setItem("token", data.accessToken)
        setTimeout(() => {
            hideLoader()
            window.location.href = "/cart.html"
        }, 400) 
        } catch (err) {
            hideLoader()
            document.querySelector(".error").textContent = err.message
        }
})

//Log out - checks if the user is already logged in, if logged in it hides login form and shows logged in-message and logout-button//

const token = localStorage.getItem("token")
const loggedInMessage = document.getElementById("loggedInMessage")
const logoutButton = document.getElementById("logoutButton")

if (token) {
    form.style.display = "none"
    loggedInMessage.style.display ="block"
}

logoutButton.addEventListener("click", () => {
    localStorage.removeItem("token")
    window.location.reload()
})
