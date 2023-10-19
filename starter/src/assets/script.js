/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

products =[]


/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

const cherries = {
  name: 'Carton of Cherries',
  price: 4,
  quantity: 0,
  productId: 100,
  image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80/images/cherry.jpg'
};

const strawberries = {
  name: 'Carton of Strawberries',
  price: 5,
  quantity: 0,
  productId: 101,
  image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RyYXdiZXJyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60/images/strawberry.jpg' 
};

const oranges = {
  name: 'Bag of Oranges',
  price: 10,
  quantity: 0,
  productId:102,
  image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2130&q=80/images/orange.jpg'
};

products.push(cherries);
products.push(strawberries);
products.push(oranges);

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */

const cart = []


/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

const addProductToCart = function(productId){
  let cherryIndex = cart.indexOf(cherries);
  let strawberryIndex = cart.indexOf(strawberries);
  let orangeIndex = cart.indexOf(oranges);
  
   if ((productId === 100) && (cherryIndex === -1)){cart.push(cherries);
       cherries.quantity = 1}
   else if ((productId === 100) && (cherryIndex !== -1)){
    cart[cherryIndex].quantity += 1}
   
   else if ((productId === 101) && (strawberryIndex === -1)){cart.push(strawberries);
       strawberries.quantity = 1}
   else if ((productId === 101) && (strawberryIndex !== -1)){
    cart[strawberryIndex].quantity += 1}
   
   else if ((productId === 102) && (orangeIndex === -1)){cart.push(oranges);
       oranges.quantity = 1}
   else if ((productId === 102) && (orangeIndex !== -1)){
   cart[orangeIndex].quantity += 1}
 };


/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

const increaseQuantity = function(productId){
  let cherryIndex = cart.indexOf(cherries);
  let strawberryIndex = cart.indexOf(strawberries);
  let orangeIndex = cart.indexOf(oranges);
  
  if ((productId === 100) && (cherryIndex !== -1)){cart[cherryIndex].quantity += 1}
  
  else if ((productId === 101) && (strawberryIndex !== -1)){
   cart[strawberryIndex].quantity += 1}
  
  else if ((productId === 102) && (orangeIndex !== -1)){
   cart[orangeIndex].quantity += 1}
};


/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

const decreaseQuantity = function(productId){
  let cherryIndex = cart.indexOf(cherries);
  let strawberryIndex = cart.indexOf(strawberries);
  let orangeIndex = cart.indexOf(oranges);
  
  if ((productId === 100) && (cart.indexOf(cherries) !== -1) && (cart[cherryIndex].quantity >= 2)){cart[cherryIndex].quantity -= 1}
  
  else if ((productId === 100) && (cart.indexOf(cherries) !== -1) && (cart[cherryIndex].quantity = 1)){cart[cherryIndex].quantity = 0;
  cart.splice(cherryIndex, 1)}
  
  else if ((productId === 101) && (cart.indexOf(strawberries) !== -1) && (cart[strawberryIndex].quantity >= 2)){cart[strawberryIndex].quantity -= 1}
  
  else if ((productId === 101) && (cart.indexOf(strawberries) !== -1) && (cart[strawberryIndex].quantity = 1)){cart[strawberryIndex].quantity = 0; cart.splice(strawberryIndex, 1)}
  
  else if ((productId === 102) && (cart.indexOf(oranges) !== -1) && (cart[orangeIndex].quantity >= 2)){cart[orangeIndex].quantity -= 1}
  
  else if ((productId === 102) && (cart.indexOf(oranges) != -1) &&(cart[orangeIndex].quantity = 1)){cart[orangeIndex].quantity = 0; cart.splice(orangeIndex, 1)}
};

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

const removeProductFromCart = function(productId){
  if ((productId === 100) && (cart.indexOf(cherries) !== -1)){
  let cherryIndex = cart.indexOf(cherries); cart[cherryIndex].quantity = 0; 
      cart.splice(cherryIndex, 1)
  }
  
  else if ((productId === 101) && (cart.indexOf(strawberries) !== -1)){
  let strawberryIndex = cart.indexOf(strawberries); cart[strawberryIndex].quantity =0; cart.splice(strawberryIndex, 1)}
  
  else if ((productId === 102) && (cart.indexOf(oranges) !== -1)){
  let orangeIndex = cart.indexOf(oranges); cart[orangeIndex].quantity = 0; cart.splice(orangeIndex, 1)}
};

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/

const cartTotal = function(){
  let itemsExisting = cart.length;
  
  let totalCherries = 0; let totalstrawberries = 0; let totalOranges = 0;
  let totalCost = 0;
  
  for (let i=0; i < itemsExisting; i++){
    if (cart[i] === cherries){ totalCherries += 4 * cherries.quantity }
    else if (cart[i] === strawberries){ totalstrawberries += 5 * strawberries.quantity }
    else if (cart[i] === oranges){ totalOranges += 10 * oranges.quantity }
}
  totalCost = totalCherries + totalstrawberries + totalOranges
  return totalCost
};

/* Create a function called emptyCart that empties the products from the cart */

const emptyCart = function(){
  cart = []
};

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/

let totalPaid;

const pay = function(amount){
  if (totalPaid == undefined){ totalPaid = amount;
      return totalPaid-cartTotal()}
      
  else { totalPaid += amount;
     return totalPaid-cartTotal()}
};

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}


