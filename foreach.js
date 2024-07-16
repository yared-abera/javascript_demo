//forEach
function increaseQuantity()
{
  this.quantity++;
}

var products = [
  { id: 1, productName: 'TV', quantity: 0, increaseQuantity: increaseQuantity },
  { id: 2, productName: 'Monitor', quantity: 0, increaseQuantity: increaseQuantity },
  { id: 3, productName: 'iPad', quantity: 0, increaseQuantity: increaseQuantity },
  { id: 4, productName: 'Phone', quantity: 0, increaseQuantity: increaseQuantity }
];

//executes the callback for each element
products.forEach((p) => 
{
  p.increaseQuantity();
});

console.log(products);
