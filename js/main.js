
/*Loader*/
function showLoader() {
    const loader = document.getElementById("global-loader")
    if (loader) loader.classList.remove("hidden")
}

function hideLoader() {
    const loader = document.getElementById("global-loader")
    if(loader) loader.classList.add("hidden")
}


/*hamburger-menu*/

const hamburgerButton = document.getElementById("hamburgerButton")
const mobileMenu = document.getElementById("mobileMenu")

hamburgerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active")

    const icon = hamburgerButton.querySelector("i")
    icon.classList.toggle("fa-bars")
    icon.classList.toggle("fa-xmark")

      updateCartCount()
})

/*Cart-count*/
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    const count = cart.reduce((acc, item) => acc + item.quantity, 0)
    const cartCountElements = document.querySelectorAll(".cart-count")
    cartCountElements.forEach(el=> {
        el.textContent = count > 0 ? count : ""
    })
 
}

document.addEventListener("DOMContentLoaded", () => {
    updateCartCount()
})

