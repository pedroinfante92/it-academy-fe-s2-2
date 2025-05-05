// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

function uploadCounter() {

    counter = 0

    for(let i = 0; i < cart.length; i++) {
        counter += cart[i].quantity
    }

    console.log(counter)

    document.getElementById('count_product').innerHTML = counter
}


// Exercise 1

    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array

function buy(id) {       

    for (let i = 0; i < products.length; i++) {
            
    if (products[i].id == id) {
            
            let productExistsInCart = false

            for (let j = 0; j < cart.length; j++) {
                
                if (cart[j].id == id) {
                    cart[j].quantity++
                    console.log(`Product ${cart[j].name} quantity increased to ${cart[j].quantity}`)
                    productExistsInCart = true
                    console.log(cart)
                    break
                }
            }

            if (!productExistsInCart) {
                const productToAdd = { ...products[i], quantity: 1 }
                cart.push(productToAdd)
                console.log(`Product ${productToAdd.name} added to the cart`)
                console.log(cart)
            }

            uploadCounter()

            return
        }
    }

    console.log('Product not found')
    

}

// cart -> {} 

// Exercise 2
function cleanCart() {

    const tableBody = document.getElementById('cart_list')
    const totalPrice = document.getElementById('total_price')
    
    while (tableBody.hasChildNodes()) {
        tableBody.removeChild(tableBody.firstChild);
    }

    while (totalPrice.hasChildNodes()) {
        totalPrice.removeChild(totalPrice.firstChild);
    }
    
    
    for (let i = cart.length; i > 0 ; i--) {
        cart.pop()
    }

    uploadCounter()
    console.log(cart)
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array

    for(let i = 0; i < cart.length; i++) {
        total += cart[i].price
    }

    console.log(total)
}


// Exercise 4
function applyPromotionsCart() {
    let oilDiscount = 0
    let cakeDiscount = 0

    // Apply promotions to each item in the array "cart"
    for(let i = 0; i < cart.length; i++) {
        
        if(cart[i].id == 1 && cart[i].quantity >= 3) {
            oilDiscount += cart[i].price * 0.2 * cart[i].quantity
            
        }
        
        if(cart[i].id == 3 && cart[i].quantity >= 10) {
            cakeDiscount += cart[i].price * 0.3 * cart[i].quantity
        }   
    }

    let totalDiscount = oilDiscount + cakeDiscount
    let subtotalWithDiscount = total - totalDiscount

    console.log(`Total Discount: ${totalDiscount}`)
    console.log(`Subtotal with Discount: ${subtotalWithDiscount}`)

    return totalDiscount

}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom

    const tableBody = document.getElementById('cart_list')
    const totalPrice = document.getElementById('total_price')
    const discount = applyPromotionsCart()


    let totalCartPrice = 0
    
    while (tableBody.hasChildNodes()) {
        tableBody.removeChild(tableBody.firstChild);
    }

    for (let i = 0; i < cart.length; i++) {
        
        const product = cart[i].name
        const price = cart[i].price
        const quantity = cart[i].quantity
        const totalWithDiscount = cart[i].price * cart[i].quantity - discount

        const tableRow = document.createElement("tr")
        const tableHeader = document.createElement("th")
        const productElement = document.createElement("td")
        const priceElement = document.createElement("td")
        const quantityElement = document.createElement("td")
        const totalElement = document.createElement("td")

        const productText = document.createTextNode(product)
        const priceText = document.createTextNode(`${price.toFixed(2)}€`)
        const quantityText = document.createTextNode(quantity)
        const totalText = document.createTextNode(`${totalWithDiscount.toFixed(2)}€`)

        tableHeader.setAttribute("scope", "row");

        tableHeader.appendChild(productText)
        productElement.appendChild(priceText)
        priceElement.appendChild(quantityText)
        quantityElement.appendChild(totalText)

        tableRow.appendChild(tableHeader)
        tableRow.appendChild(productElement)
        tableRow.appendChild(priceElement)
        tableRow.appendChild(quantityElement)
        tableRow.appendChild(totalElement)

        tableBody.appendChild(tableRow)

        totalCartPrice += totalWithDiscount

    }

    totalPrice.innerHTML = totalCartPrice.toFixed(2)

    console.log(cart)
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
    
    const productIndex = cart.findIndex(product => product.id === id)

    if (productIndex !== -1) {
        
        if (cart[productIndex].quantity > 1) {
            cart[productIndex].quantity--
        
        } else {
            cart.splice(productIndex, 1)
        }
    
    } else {
        console.log('Product not found')
    }
}

function open_modal() {
    printCart()
}