//Loader//
showLoader()
window.onload = () => {
    hideLoader()
}
//When you click card, cardfields will show, when click on klarna cardfields hide//
document.addEventListener("DOMContentLoaded", () => {
    const cardOption = document.querySelector("input[value='card']")
    const klarnaOption = document.querySelector("input[value='klarna']")
    const cardFields = document.getElementById("card-fields")

    function updateCardFields() {
        if (cardOption.checked) {
            cardFields.classList.remove("hidden")
        } else {
            cardFields.classList.add("hidden")
        }
    }

    cardOption.addEventListener("change", updateCardFields)
    klarnaOption.addEventListener("change", updateCardFields)
    updateCardFields()

    setTimeout(() => {
        hideLoader()
    }, 300)
})

const checkoutForm = document.getElementById("checkoutForm")
checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault()

    showLoader()
    setTimeout(() => {
        hideLoader()
    
    localStorage.removeItem("cart")
    window.location.href="success.html"

    }, 600)
})

//Payment info validation//

const cardNumber = document.getElementById("cardNumber")
const cardNumberError = document.querySelector(".cardnumber-error")

const expiry = document.getElementById("cardExpirydate")
const expiryError = document.querySelector(".expiry-error")

const cvc = document.getElementById("cardCVC")
const cvcError = document.querySelector(".cvc-error")



cardNumber.addEventListener("blur", () => {
     if(!/^\d{16}$/.test(cardNumber.value)) {
        cardNumberError.textContent = "Card number must be 16 digits."
        cardNumber.classList.add("input-error")
        cardNumber.classList.remove("input-success")
    } else {
        cardNumberError.textContent = ""
        cardNumber.classList.remove("input-error")
        cardNumber.classList.add("input-success")
    }

})

expiry.addEventListener("blur", () => {
     if(!/^\d{2}\/\d{2}$/.test(expiry.value)) {
        expiryError.textContent = "Must be MM/YY."
        expiry.classList.add("input-error")
        expiry.classList.remove("input-success")
    } else {
        expiryError.textContent = ""
        expiry.classList.remove("input-error")
        expiry.classList.add("input-success")
    }

})

cvc.addEventListener("blur", () => {
     if(!/^\d{3}$/.test(cvc.value)) {
        cvcError.textContent = "CVC must be three digits."
        cvc.classList.add("input-error")
        cvc.classList.remove("input-success")
    } else {
        cvcError.textContent = ""
        cvc.classList.remove("input-error")
        cvc.classList.add("input-success")
    }

})



//Delivery form validation//

const email = checkoutForm.email
const emailError = document.querySelector(".email-error")

const mobile = checkoutForm.number
const mobileError = document.querySelector(".mobile-error")

const adress = checkoutForm.adress
const adressError = document.querySelector(".adress-error")

const zipcode = checkoutForm.zipcode
const zipcodeError = document.querySelector(".zipcode-error")

const info = checkoutForm.information



email.addEventListener("blur", () => {
     if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        emailError.textContent = "Please enter a valid email."
        email.classList.add("input-error")
        email.classList.remove("input-success")
    } else {
        emailError.textContent = ""
        email.classList.remove("input-error")
        email.classList.add("input-success")
    }

})

mobile.addEventListener("blur", () => {
     if(!/^\d{8}$/.test(mobile.value)) {
        mobileError.textContent = "Mobile number must be 8 digits."
        mobile.classList.add("input-error")
        mobile.classList.remove("input-success")
    } else {
        mobileError.textContent = ""
        mobile.classList.remove("input-error")
        mobile.classList.add("input-success")
    }

})

adress.addEventListener("blur", () => {
     if(adress.value.trim().length < 3) {
        adressError.textContent = "Adress must be at least 3 characters."
        adress.classList.add("input-error")
        adress.classList.remove("input-success")
    } else {
        adressError.textContent = ""
        adress.classList.remove("input-error")
        adress.classList.add("input-success")
    }

})

zipcode.addEventListener("blur", () => {
     if(!/^\d{4}$/.test(zipcode.value)) {
        zipcodeError.textContent = "Zipcode must be 4 digits."
        zipcode.classList.add("input-error")
        zipcode.classList.remove("input-success")
    } else {
        zipcodeError.textContent = ""
        zipcode.classList.remove("input-error")
        zipcode.classList.add("input-success")
    }

})


