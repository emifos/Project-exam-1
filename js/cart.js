//Loader//
showLoader()
window.addEventListener("load", () => {
    setTimeout(() => {
        hideLoader()
    }, 300)
})

//Loads cart from localstorage, displays cart items and calculate the total price, you can also decrease, increase and remove items//
function loadCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    const container = document.querySelector(".cart-items")
    const totalElement = document.getElementById("cartTotal")

    container.innerHTML = ""
//If cart it empy, displays message//
    if (cart.length === 0) {
        container.innerHTML = '<p class="empty-cart">Your cart is empty.</p>'
        totalElement.textContent = "Total sum: $0.00"
        return
    }

    let total = 0
//Loops through each item in cart and create HTML//
    cart.forEach(item => {
        const productDiv = document.createElement("div")
        productDiv.className = "cart-item"

        productDiv.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="cart-image">
        <div class="cart-info">
            <h3 class="cart-title">${item.title}</h3>
            <p class="cart-description">${item.description}</p>
            <div class="quantity-controls">
            <button class="decrease" data-id="${item.id}">-</button>
            <span class="quantity">${item.quantity}</span>
            <button class="increase" data-id="${item.id}">+</button>
            </div>
            <div class="cart-prices">
            ${item.discountedPrice && item.discountedPrice < item.price
                ?`
                <span class="cart-price-old">$ ${item.price}</span>
                <span class="cart-price-new">$ ${item.discountedPrice}</span>
                `
            : ` <span class="cart-price-normal">$${item.price}</span>
                `
            }
            </div>
        </div>
        <button class="remove-button" data-id="${item.id}">
        <i class="fa-regular fa-trash-can"></i>
        </button>
        `
//Increases total price and updates//
        container.appendChild(productDiv)
        const finalPrice = item.discountedPrice ?? item.price
        total += finalPrice * item.quantity
    });

    totalElement.textContent = `Total sum: $ ${total.toFixed(2)}`

//When you click the product gets removed from cart//
    container.querySelectorAll(".remove-button").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = e.target.closest(".remove-button").getAttribute("data-id")
            removeFromCart(id)
        })
    })

//Increace quantity of the product//  
     container.querySelectorAll(".increase").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = e.target.getAttribute("data-id")
            changeQuantity(id, 1)
        })
    })

//Decrease quantity of the product//
    container.querySelectorAll(".decrease").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = e.target.getAttribute("data-id")
            changeQuantity(id, -1)
        })
    }) 

}
//Increases or decreases quantity of the speciic product, finds product with id. If the quantity reach zero the product is removed from cart//
function changeQuantity(id, amount) {
    showLoader()
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    const item = cart.find(item => item.id === id)
    if (!item) return

    item.quantity += amount
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== id)
    }

    localStorage.setItem("cart", JSON.stringify(cart))
    loadCart()
    updateCartCount()
    hideLoader()
}

function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart = cart.filter(item => item.id !== id)
    localStorage.setItem("cart", JSON.stringify(cart))
    loadCart()
    updateCartCount()
}


//Checkout button that will lead you to checkout-page and the cart gets cleared.//
function setupCheckoutButton() {
    const checkOutButton = document.getElementById("checkoutButton")
    if (checkOutButton) {
        checkOutButton.textContent = "Check out"
        checkOutButton.addEventListener("click", () => {
            window.location.href = "checkout.html"
            loadCart()
            updateCartCount()
        })
    }
}

document.addEventListener("DOMContentLoaded", () => {
    showLoader()
    loadCart()
    hideLoader()
    updateCartCount()
    setupCheckoutButton()
})