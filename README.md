# **Project Exam 1**

NovaLane Online Shop.

---

## **Description**

The project is a responsive front-end interface built for the Noroff Online Shop API.
This application allows users to browse products, view detailed product information (title, description, price, rating, tags and reviews), register an account, log in and add items to their cart- then complete a checkout flow.

---

## **Table of Contents**

---
- [Fictional Client](#Fictional-client)
- [Screenshots](#Screenshots)
- [Built With](#Built With)
- [Installation](#Installation)
- [Usage](#Usage)
- [Licence](#License)
- [Resources/References](#Resources/References)

---

## **Fictional Client**

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

---

## **Screenshots**

![home-carousel](https://github.com/user-attachments/assets/6f3f064f-ad62-4026-afac-c86119e48e91)
![home-thumbnail](https://github.com/user-attachments/assets/ea02e003-33ce-4c2d-905b-f1365cc9f096)
![product-detail](https://github.com/user-attachments/assets/6e311ecf-98e1-4008-a90c-0f61331b88b2)
![cart-page](https://github.com/user-attachments/assets/e5427bf2-4aa5-4a6b-877c-d5c848f1e033)
![login-page](https://github.com/user-attachments/assets/55758b3b-ef8a-454e-ba21-57d164a6edb3)
![signup-page](https://github.com/user-attachments/assets/4351440a-c3ba-4cba-bc2f-c14fbbe42eca)
![success-page](https://github.com/user-attachments/assets/03be3f14-dcc6-40a3-ad67-c002db1f6dca)
![[mobile-menu](https://github.com/user-attachments/assets/f5a7eea8-4f7a-4a8e-8304-29fe0d87b4bd)

---

## **Built With**
-HTML
-CSS
-Javascript

---

## **Installation**

1. Clone the repository

```bash
  git clone https://github.com/emifos/Project-exam-1.git
```

2. Navigate to the project folder

```
 cd Project-exam-1
```

3. Open the project in code editor (VS Code)

```
 code .
```

4. Start the project using Live Server.

- Open index.html using Live Server Extension
- The site will load and connect to Noroff API automatically.

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

## **Licence**
This project is licensed under the MIT License. 

---

## **Contact**
Emilie Sofie Fosmo
emilie.fosmo@hotmail.com
[LinkdIn](https://www.linkedin.com/in/emilie-sofie-fosmo-1b9bb1228/)
[Project Link](https://github.com/emifos/Project-exam-1)

--- 

## **Resources/References**

### Home-page:

Function on how to get products from API with ID is inspired by
[MDN - Using the fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

Part of the carousel is inspired from code from
[GeeksForGeeks - Buidling a carousel](https://www.geeksforgeeks.org/html/building-a-carousel-with-vanilla-javascript/?utm_source)
and
[Dev.to - Horizontal Carousel Guide](https://dev.to/min11benja/how-to-make-a-horizontal-moving-carousel-with-vanilla-js-ts-elc?utm_source) and I have also got assistanse from ChatGPT.

For the thumbnail innerHTML I have used this for inspiration from
[Noroff - Create HTML](https://mollify.noroff.dev/content/feu1/javascript-1/module-4/create-html?nav=course.)
I have also got assistanse from ChatGPT.

### Product-page:

When making function renderProduct I got inspiration and modifed some of the code from
[MDN -createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement), [W3Schools - DOM Nodes](https://www.w3schools.com/js/js_htmldom_nodes.asp) and [MDN - appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild), I also got assistanse from ChatGPT.

For function createRatingStars I used article for help/inspiration [Stackoverflow - Good Keys for rating Stars](https://stackoverflow.com/questions/46130122/good-key-props-for-a-list-of-rating-stars.)

For function showCartToast i red this article [MDN - Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) and used and modiefied code, also using ChatGpt for guidance.

### Cart-page:

For functions on cart-page i used and got inspired by [DigitalOcean - localStorageGuide](https://www.digitalocean.com/community/tutorials/js-introduction-localstorage-sessionstorage), [MDN - EventTarget.addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener), [LogRocket -LocalStorage Complete Guide](https://blog.logrocket.com/localstorage-javascript-complete-guide/) and [MDN - Array.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) , borrowed but modified code and also used ChatGpt for guidance.

### Login-page and Signup-page:

To check if valid/not valid email I borrowed but modiefied code from [GeeksForGeeks - Validate Email in Javascript](https://www.geeksforgeeks.org/javascript/javascript-program-to-validate-an-email-address/.)

To check if valid/not valid password I borrowed but modiefied codefrom [GeeksForGeeks - validate Password with RegEx](https://www.geeksforgeeks.org/javascript/javascript-program-to-validate-password-using-regular-expressions/.)

HTTP POST request request method [Noroff - HTTP POST Request Method](https://mollify.noroff.dev/content/feu1/javascript-1/module-5/api-methods/http-post-request-method?nav=course)

Blur event Reference inspired by [GeeksForGeeks - onBlur Event](https://www.geeksforgeeks.org/html/html-dom-onblur-event/?utm_source)

On main.js, I have the function updateCartCount, I have used this video for inspiration [Youtube - Shopping Cart Tutorial](https://www.youtube.com/watch?v=gXWohFYrI0M) as well as ChatGpt for gudiance.

Token storage and logout function inspired by [MDN - Using thw web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) as well as ChatGpt for guidance.

### Images

Klarna Logo:
[PNGEgg - Klarna logo](https://www.pngegg.com/en/png-ventu/download.)

### Favicon

[Favicon.io - Generator](https://favicon.io/favicon-generator/)

### Icons

[Icons - Fontawesome](https://fontawesome.com/)
