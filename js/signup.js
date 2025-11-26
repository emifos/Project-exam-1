//loader//
showLoader()
window.addEventListener("load", () => {
    setTimeout(() => {
        hideLoader()
    }, 300)
})

const form = document.getElementById("signupForm")

const nameInput = form.name
const nameError = document.querySelector(".name-error")
//Checks if the name is valid, if invalid shows error message and gets a red border, if valid gread border.//
nameInput.addEventListener("blur", () => {
    const value = nameInput.value.trim()
    
    if (!/^[A-Za-z0-9_]{3,15}$/.test(value)) {
        nameError.textContent = "Name must be 3-15 characters, using only use letters, numbers, and underscores."
        nameInput.classList.add("input-error")
        nameInput.classList.remove("input-success")
    } else {
        nameError.textContent = ""
        nameInput.classList.remove("input-error")
        nameInput.classList.add("input-success")
    }
})

const emailInput = form.email
const emailError = document.querySelector(".email-error")
//Checks if the email is standard format, if invalid shows error message and gets a red border, if valid gread border.//
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
//Checks if the password is valid, if invalid shows error message and gets a red border, if valid gread border. Must be letters, at least one number and min-lenght 8//
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

form.addEventListener("submit", async (e) => {
    e.preventDefault()
    showLoader()

    const name = form.name.value
    const email = form.email.value
    const password = form.password.value

   
    const username = email.split("@")[0]
  //POST reuest to API, sends registration to API//
    try {
        const response = await fetch ("https://v2.api.noroff.dev/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"},
            body: JSON.stringify({
                name: form.name.value,
                email: form.email.value,
                password: form.password.value

            })
        })

        const data = await response.json()

        if (!response.ok) {
            throw new Error(data.message || "Signup failed! This email is already registered. Try loggin in instead.")
        }

        window.location.href = "/account/login.html"
        } catch (err) {
            document.querySelector(".error").textContent = err.message
    
        } finally {
            hideLoader()
        }
})