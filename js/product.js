//Loader//
showLoader()
window.addEventListener("load", () => {
    setTimeout(() => {
        hideLoader()
    }, 300)
})
//Get products from API with ID//
const API_URL = "https://v2.api.noroff.dev/online-shop"

const params = new URLSearchParams(window.location.search)
const productId = params.get("id")

async function getProduct() {
    showLoader()
    if (!productId) {
        console.error("No product-ID in URL")
        document.querySelector(".product-specific-container").innerHTML = 
        "<p class='error'>No product found. Please go back to homepage.</p>"
        return
    }

    try {
        const response = await fetch (`${API_URL}/${productId}`)
        if (!response.ok) {
            (`HTTP error ${response.status}`)
        } 

        const data = await response.json()
        const product = data.data

        renderProduct(product)
    } catch (error) {
        console.error("Error fetching products:", error)
        document.querySelector(".product-specific-container").innerHTML = "<p class='error'>Error loading product. Please try again later.</p>"
    } finally {
        hideLoader()
    }
}
//Productdata from API, building html with js showing image, title, prices, tags, rating, reviews. 
function renderProduct(product) {
    const container = document.querySelector(".product-specific-container")
    container.innerHTML = ""

    const imageDiv = document.createElement("div")
    const image = document.createElement("img")
    const detailsDiv = document.createElement("div")
    const title = document.createElement("h1")
    const description = document.createElement("p")
    const pricesDiv = document.createElement("div")
    const price = document.createElement("span")
    const discountedPrice = document.createElement("span")
    const rating = document.createElement("p")
    const tagList = document.createElement("ul")
    const shareSection = document.createElement("div")
    const shareButton = document.createElement("button")
    const shareInput = document.createElement("input")
    const shareMessage = document.createElement("span")
    const reviewList = document.createElement("ul")

    const reviewHeader = document.createElement("h2")
    reviewHeader.textContent = "Reviews"
    reviewHeader.className = "reviews-header"

    imageDiv.className = "product-spesific-image"
    image.className = "product-image"
    detailsDiv.className = "product-specific-details"
    title.className = "product-title"
    description.className = "product-description"
    pricesDiv.className = "product-specific-prices"
    price.className = "product-price"
    discountedPrice.className = "product-discounted-price"
    rating.className = "product-rating"
    tagList.className = "product-tags"
    shareSection.className = "share-section"
    shareButton.className = "copy-button"
    shareSection.className = "share-section"
    shareInput.className = "share-url"
    shareMessage.className = "copy-message hidden"
    reviewList.className = "product-reviews"

    image.src = product.image?.url || ""
    image.alt = product.image?.alt || product.title
    title.textContent = product.title
    description.textContent = product.description 

    if (product.discountedPrice < product.price) {
        price.textContent = `$ ${product.price}`
        price.classList.add("product-price-old")
        discountedPrice.textContent = ` $ ${product.discountedPrice}`
        discountedPrice.classList.add("product-price-new")
    } else {
        price.textContent = `$ ${product.price}`
    }

    rating.innerHTML = createRatingStars(product.rating)

    if (Array.isArray(product.tags) && product.tags.length > 0) {
        product.tags.forEach(tag => {
            const li = document.createElement("li")
            li.textContent = tag
            tagList.appendChild(li)
        })
    } else {
        const li = document.createElement("li")
        li.textContent = "No tags avaiable."
        li.classList.add("no-info")
        tagList.appendChild(li)
    }

    if (Array.isArray(product.reviews) && product.reviews.length > 0) {
        product.reviews.forEach(review => {
            const li = document.createElement("li")
            li.textContent = `${review.username || "Anonymous"}: "${review.description}" (${review.rating}/5)`
            reviewList.appendChild(li)
        })
    } else {
        const li = document.createElement("li")
        li.textContent = "Not reviewed yet."
        li.classList.add("no-info")
        reviewList.appendChild(li)
    }

    shareInput.type = "text"
    shareInput.readOnly = true
    shareInput.value = window.location.href
    shareInput.id = "shareUrl"
    shareInput.name = "shareUrl"
    shareButton.innerHTML = `<i class="fa-solid fa-share"></i>`
    shareMessage.textContent = "Link copied!"

    shareButton.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(shareInput.value)
            shareMessage.classList.remove("hidden")
            setTimeout(() => shareMessage.classList.add("hidden"), 2000)
        } catch (err) {
            console.error("Failed to copy:", err)
        }
    })

    const addToCartButton = document.createElement("button")
    addToCartButton.className = "add-to-cart-button"
    addToCartButton.textContent = "Add to cart"

//If the user is NOT logged in and tries to add item to cart, you will get redirected to login page//
     addToCartButton.addEventListener("click", () => {
        const token = localStorage.getItem("token")
        if (!token) {
            window.location.href = "account/login.html"
            return
        }
         addToCart(product)
    })


    imageDiv.appendChild(image)
    pricesDiv.appendChild(price)
    if (discountedPrice.textContent) pricesDiv.appendChild(discountedPrice)
    shareSection.append(shareButton, shareInput, shareMessage)

    detailsDiv.append(
        title,
        description,  
        pricesDiv,
        rating,
        tagList,
        shareSection,
        addToCartButton,
        reviewHeader,
        reviewList
    )

     container.append(imageDiv, detailsDiv)
 }

   
    getProduct()

//Number rating that converts in to star icons and also shows number, returns the star rating as a html string.//
function createRatingStars(rating) {
    if (!rating) return "<p class='no-info'>Not rated yet.</>"
    
    const maxStars = 5
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.25 && rating % 1 < 0.75
    const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0)

    let starsHTML = ""

    for (let i = 0; i < fullStars; i++) {
        starsHTML += `<i class="fa-solid fa-star"></i>`
    }

    if (hasHalfStar) {
        starsHTML += `<i class="fa-solid fa-star-half-stroke"></i>`
    }

    for(let i = 0; i < emptyStars; i++) {
        starsHTML += `<i class="fa-regular fa-star"></i>`
    }

    return `<div class="rating-stars">${starsHTML}<span class="rating-number">${rating.toFixed(1)} / 5</span></div>`
    
}
//Using localstorage the item gets added to cart or add quantity if the product is alredy in the cart, the cart-count gets updated and a toast displays//
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    const existing = cart.find(item => item.id === product.id)

    if (existing) {
        existing.quantity += 1
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            discountedPrice: product.discountedPrice,
            image: product.image?.url,
            quantity: 1
        })
    }

    localStorage.setItem("cart", JSON.stringify(cart))
    
    updateCartCount()
    showCartToast()
}


//Toast notification after adding item to cart, you can view cart or continue shopping, this toast displays for 4 seconds, then disappear//
function showCartToast() {
    const toast = document.getElementById("cart-toast")
    toast.classList.remove("hidden")
    toast.classList.add("show")
    setTimeout(() => {
        toast.classList.remove("show")
    }, 4000)
}

document.addEventListener("DOMContentLoaded", () => {
    const toast = document.getElementById("cart-toast")
    const continueBtn = document.querySelector(".toast-continue")
    if ( continueBtn) {
        continueBtn.addEventListener("click", () => {
            toast.classList.remove("show")
        })
    }
})
 
