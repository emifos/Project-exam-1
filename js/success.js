//Loader//
window.addEventListener("DOMContentLoaded", () => {
    showLoader()

    setTimeout(() => {
        hideLoader()
    }, 300)
})


//Logout-button on success page after order is placed, when you click log out button a logout message views and you are logged out.//

const logoutSuccessButton = document.getElementById("logoutSuccessButton")
const logoutMessage = document.getElementById("logoutMessage")

if(!logoutSuccessButton) {
    console.error("Logout button not found on succes page")
}

logoutSuccessButton.addEventListener("click", () => {
    showLoader()
        setTimeout(() => {
            localStorage.removeItem("token")

            //Hide logout button//
            logoutSuccessButton.style.display = "none"

              //Show logout message//
            logoutMessage.style.display = "block"

            hideLoader()
        }, 300)
    

})