# **Project Exam 1**

NovaLane Online Shop.

---

## **Description**

The project is a responsive front-end interface built for the Noroff Online Shop API.
This application allows users to browse products, view detailed product information (title, description, price, rating, tags and reviews), register an account, log in and add items to their cart- then complete a checkout flow.

## **Table of Contents**

---

- [Client](#Fictional Client)
- [Installation](#Installation)
- [Usage](#Usage)
- [Resources/References](#Resources/References)

## **Fictional client**

- Name:
  Nova Lane

- Theme:
  Modern urban lifestyle, online store combining fashion, tech and lifestyle products.
  Products including shoes, watches, gadgets, headset perfumes and other trendy everyday items.
  Focus on minimalist, clean design with a monochrome color palette (white, black, grey).

- Backstory:
  Nova Lane was created to make shopping for modern lifestyle products simple, stylish and inspiring.
  From headphones to watches and sneakers - every product is carefully selected for young adults who want modern, trendy and functional items.
  The store combines urban style with simplicity: products should be easy to discover, easy to purchase and stylish to own.

## **Installation**

1. Clone or download the repository
2. Open the project folder in code editor (VS Code)
3. Open index.html using Live Server Extension
4. The site will load and connect to Noroff API automatically.

---

## **Usage**

This application allows users to browse products, view product details, and simulate purchase items using a simple checkout flow.

### Home Page

- Displays a interactive banner carousel showing three featured products that is clickable to linking to products detail on product page.
- Displays a responsive thumbail with 12 products, each product is clikable and links to its product page.

### Product Page

- Displays products title, description, price, discounted price, rating, tags, sharebutton and reviews.
- If user is logged in you can add item to cart. When adding item to cart a toast message appear, you can then chose to view cart or continue shopping. If user is not logged in, you will be directed to log in page when you click add to cart button.

### Login page / Signup Page

- User must log in before adding items to the cart.
- Login and registration include input validation.
- User can register with @stud.noroff.no email only.

### Cart Page

- Users can view products added to cart, adjust item quantities or remove products from cart.
- Displays a updated total price.
- Checkout button leads to the checkout page.

### Checkout Page

- Users can select a payment method (Klarna or Card), card selection reveals additonal input fields.
- Delivery adress form must be filled out before submitting.
- The form supports input validation and error highlihting.

### Success Page

- Displays success message after sumbitting payment and delivery adress.
- User can choose to log out.

---

## **Resources/References**

### Home-page:

Function on how to get product from API with ID is inspired from code from https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

Part of the carousel is inspired from code from https://www.geeksforgeeks.org/html/building-a-carousel-with-vanilla-javascript/?utm_source
and https://dev.to/min11benja/how-to-make-a-horizontal-moving-carousel-with-vanilla-js-ts-elc?utm_source and I have also got assistanse from ChatGPT.

For the thumbnail - innerHTML I have used this for inspiration https://mollify.noroff.dev/content/feu1/javascript-1/module-4/create-html?nav=course.
I have also got assistanse from ChatGPT.

### Product-page:

When making function renderProduct I got inspiration and modifed some of the code from https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement, https://www.w3schools.com/js/js_htmldom_nodes.asp, https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild, I also got assistanse from ChatGPT.

For function createRatingStars I used article for help/inspiration https://stackoverflow.com/questions/46130122/good-key-props-for-a-list-of-rating-stars.

For function showCartToast i red this article https://developer.mozilla.org/en-US/docs/Web/API/Element/classList and used and modiefied my code, also using ChatGpt for guidance.

### Cart-page:

For functions on cart-page i used https://www.digitalocean.com/community/tutorials/js-introduction-localstorage-sessionstorage, https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener, https://blog.logrocket.com/localstorage-javascript-complete-guide/, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find for inspiration, borrowed but modified code and also used ChatGpt for guidance.

### Login-page and Signup-page:

To check if valid/not valid email I borrowed but modiefied code from https://www.geeksforgeeks.org/javascript/javascript-program-to-validate-an-email-address/.

To check if valid/not valid password I borrowed but modiefied codefrom https://www.geeksforgeeks.org/javascript/javascript-program-to-validate-password-using-regular-expressions/.

HTTP POST request method https://mollify.noroff.dev/content/feu1/javascript-1/module-5/api-methods/http-post-request-method?nav=course

Blur, https://www.geeksforgeeks.org/html/html-dom-onblur-event/?utm_source

On main.js, I have the function updateCartCount, I have used this video for inspiration https://www.youtube.com/watch?v=gXWohFYrI0M as well as ChatGpt for gudiance.

### Images

Image:
Klarna logo from https://www.pngegg.com/en/png-ventu/download.
