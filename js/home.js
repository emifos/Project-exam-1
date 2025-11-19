//Get products from API with ID//
const API_URL = "https://v2.api.noroff.dev/online-shop"

async function fetchProductById(id) {
    try {
        const response = await fetch (`${API_URL}/${id}`)
        if (!response.ok) throw new Error(`HTTP error ${response.status}`)
        const data = await response.json()
        return data.data
    } catch (error) {
        console.error(`Error fetching product ${id}`, error)
        return null
    }
}




/*Carousel */
//Carousel that gets three products from API with ID, one for each slide, with a next and prev button and automatic looping. Image is clickable.//
document.addEventListener("DOMContentLoaded", async () => {
    const productIds = [
        "f7bdd538-3914-409d-bd71-8ef962a9a9dd",
        "c0d245f1-58fa-4b15-aa0c-a704772a122b",
        "83111322-05a9-4a93-bc81-7d6b58f1a707"
    ]


const track = document.querySelector(".carousel-track")
const slides = Array.from(document.querySelectorAll(".carousel-slide"))
const nextButton = document.querySelector(".next")
const prevButton = document.querySelector(".prev")

let currentIndex = 0

function updateCarousel() {
    const offset = -currentIndex * 100
    track.style.transform = `translateX(${offset}%)`
    track.style.transition = "transform 0.8s ease"
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length
    updateCarousel()
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length
    updateCarousel()
}

let autoSlideInterval
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 4000)
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval)
    startAutoSlide
}


nextButton.addEventListener("click", () => {
    nextSlide()
    resetAutoSlide()
})

prevButton.addEventListener("click", () => {
    prevSlide()
    resetAutoSlide()
})


async function fillCarousel() {
    showLoader()
    for (let i = 0; i < productIds.length; i++) {
        const product = await fetchProductById(productIds[i])
        const slide = slides[i]
        slide.dataset.id = product.id

        if (!product || !slide) continue 

            const imgContainer = slide.querySelector(".slide-image")
            const title = slide.querySelector(".slide-h2")

            imgContainer.innerHTML = ""

            const link = document.createElement("a")
            link.href = `product.html?id=${product.id}`
            link.classList.add("product-link")

            const img = document.createElement("img")
            img.src = product.image?.url || ""
            img.alt = product.image?.alt || product.title
            img.classList.add("carousel-image")

            link.appendChild(img)
            imgContainer.appendChild(link)
           
            title.textContent = product.title
        }

        hideLoader()
    }

    fillCarousel()
    startAutoSlide()
    
//When clicking shop now button on carousel on desktop you will be directed to product-specific page for product showing on the carousel//
    const shopNowButtons = document.querySelectorAll(".shop-now-button")
    shopNowButtons.forEach(button => {
        button.addEventListener("click", () => {
            const activeSlide = slides[currentIndex]
            if (!activeSlide) return
            const productId = activeSlide.dataset.id
            window.location.href = `product.html?id=${productId}`
        })
    })
//When clicking learn more button you will get directed to coming-soon page//
    const learnMoreButtons = document.querySelectorAll(".button-home:not(.shop-now-button")
    learnMoreButtons.forEach(button => {
        button.addEventListener("click", () => {
            window.location.href = "coming-soon.html"
        })
    })

//Buttons for mobile, when clicking shop now you will be directed to product-specific page for product in carousel//
    const mobileButtons = document.querySelectorAll(".button-home-mobile")
    const mobileLearnMore = mobileButtons[0]
    const mobileShopNow = mobileButtons[1]

//When clicking learn now button you will be directed to coming soon page//
    mobileLearnMore.addEventListener("click", () => {
        window.location.href = "coming-soon.html"
    })

//Buttons for mobile, when clicking shop now you will be directed to product-specific page for product in carousel//
    mobileShopNow.addEventListener("click", () => {
        const activeSlide = slides[currentIndex]
        if (!activeSlide) return
        const productId = activeSlide.dataset.id
        window.location.href = `product.html?id=${productId}`
    })

})




/* Thumbnail*/
//This function shows 12 products from API using ID. Each product have image, title, price and discounted price and is clickable//
async function thumbnailProducts() {
    showLoader()
    const container = document.querySelector(".products")
    if (!container) { 
        console.error("Did not find .products-container HTML")
        hideLoader()
        return
    }

    container.innerHTML = ""

    const thumbnailProductIds = [
    "f99cafd2-bd40-4694-8b33-a6052f36b435",
    "109566af-c5c2-4f87-86cb-76f36fb8d378",
    "7238397e-0ee5-4d5c-9e82-bda666dd2470",
    "f2d44fba-09a7-4ccb-9ceb-a6212bf5c213",
    "ce5b64e3-440d-46e5-952f-bfdbad8a48d2",
    "159fdd2f-2b12-46de-9654-d9139525ba87",
    "3b43b2e4-62b0-4c02-9166-dffa46a0388c",
    "3f328f02-715e-477f-9738-7934af4bc5b0",
    "31e3a66f-2dbe-47ae-b80d-d9e5814f3e32",
    "9be4812e-16b2-44e6-bc55-b3aef9db2b82",
    "10d6cc02-b282-46bb-b35c-dbc4bb5d91d9",
    "be5e376d-e657-4035-8916-1580c52f4e98"
    ]


    for (let id of thumbnailProductIds) {
        const product = await fetchProductById(id)
        if (!product) continue 
            
            const isDiscounted = product.discountedPrice < product.price

            const card = document.createElement("div")
            card.classList.add("product-card")

            const link = document.createElement("a")
            link.href = `product.html?id=${product.id}`
            link.classList.add("product-link")


            link.innerHTML = `
            <img src="${product.image.url}" alt="${product.image.alt || product.title}">
            <p class="product-title">${product.title}</p>
            <p class="product-prices">${isDiscounted ? `<span class="product-discount">$ ${product.price}</span>
            <span class="product-price">$ ${product.discountedPrice}</span>`
           :`<span class="product-price-regular">$ ${product.price}</span>`
            
            }
            </p>`

            card.appendChild(link)
            container.appendChild(card)
        }

        hideLoader()
    }


thumbnailProducts()
