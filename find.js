//find
var products = [
  { id: 1, productName: 'Samsung TV', price: 2300, brand: "Samsung" },
  { id: 2, productName: 'Apple iPod', price: 774, brand: "Apple" },
  { id: 3, productName: 'LG Monitor', price: 1200, brand: "LG" },
  { id: 4, productName: 'Apple iPad', price: 3500, brand: "Apple" },
  { id: 5, productName: 'Apple iPhone', price: 1800, brand: "Apple" }
];

var firstExpensiveProduct = products.find((p) => {
  return p.price >= 2000
});

console.log(firstExpensiveProduct);
