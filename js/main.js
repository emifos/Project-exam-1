

/*hamburger-menu*/

const hamburgerButton = document.getElementById("hamburgerButton")
const mobileMenu = document.getElementById("mobileMenu")

hamburgerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active")

    const icon = hamburgerButton.querySelector("i")
    icon.classList.toggle("fa-bars")
    icon.classList.toggle("fa-xmark")
})