var cart = [];

function getCart() {
 return cart;
}

function setCart(newC) {
  cart = newC;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100 + 1)
  var nameItem = {}
  nameItem[item] = price
  cart.push(nameItem) 
  console.log(`${item} has been added to your cart.`)
  return cart
  
 
 
}

function viewCart() {
  var items = []
  if (cart.length === 0){
    console.log ('Your shopping cart is empty.')
    for (var i = 0, i < cart.length, i++)
    
   }else if (cart.length === 1)
   var oneItem = `In your cart, you have ${cart[0]} at $ ${cart[0]}.`
   console.log (oneItem) }


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
