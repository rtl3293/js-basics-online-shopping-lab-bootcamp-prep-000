var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 var itemCost = {}
 var max = Math.floor(100)
 itemCost[itemName] = parseInt(Math.random(1,101) * max + 1)

 cart.push(itemCost)

 console.log(`${itemName} has been added to your cart.`)
 return cart
}

function viewCart() {
  var cartSpread = ``
  var output = 'In your cart, you have'
  if (cart.length > 0){
    for (var i = 0; i < cart.length; i++){
      if (cart.length === 1){
        for (var key in cart[i]){
          var val = cart[i][key]
        }
        cartSpread = `${key} at $${val}`
        console.log(`${output} ${cartSpread}.`)
      } else if (cart.length === 2) {
          for (var key in cart[i]){
            var val = cart[i][key]
              if (i === 0) {
                cartSpread = `${key} at $${val} and `
              } else {
                cartSpread =  cartSpread + `${key} at $${val}`
              }
            }
            console.log(`${output} ${cartSpread}.`)
          } else if (cart.length > 2) {
              for (var key in cart[i]){
                var val = cart[i][key]
                if (i < cart.length -1){
                  cartSpread = cartSpread + `${key} at $${val}, `
                } else {
                  cartSpread = cartSpread + `and ${key} at $${val}`
                }
              }
              console.log(`${output} ${cartSpread}.`)
            }
          }
        } else {
          console.log("Your shopping cart is empty.")
        }



}

function total() {
  var total = 0
  for (var i = 0; i < cart.length; i++){
    for (var key in cart[i]){
      total = total + cart[i][key]
    }
  }
  return total
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++){
      var pair = cart[i]
      if (pair.hasOwnProperty(item) === true){
        cart.splice(i)
        return cart
      } else {
        console.log('That item is not in your cart.')
      }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}

addToCart("apples")
addToCart("pears")
viewCart()
removeFromCart("pears")
viewCart()
