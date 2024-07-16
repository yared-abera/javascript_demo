//filter
var products = [
  { id: 1, productName: 'Samsung TV', price: 5000, brand: "Samsung" },
  { id: 2, productName: 'Apple iPod', price: 774, brand: "Apple" },
  { id: 3, productName: 'LG Monitor', price: 1200, brand: "LG" },
  { id: 4, productName: 'Apple iPad', price: 2000, brand: "Apple" },
  { id: 5, productName: 'Apple iPhone', price: 1800, brand: "Apple" }
];

var appleProducts = products.filter(
  (p) => {
    return p.brand == "Apple";
  }
);

console.log(appleProducts);
for (let i = 0; i < appleProducts.length; i++) {
  console.log(`${appleProducts[i].id}, ${appleProducts[i].productName}, ${appleProducts[i].price}, ${appleProducts[i].brand}`);
}
