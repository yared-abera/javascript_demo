//sort - numerical array
var numericalArray = [ 56, 23, 6, 120, 3, 100 ];
var sortedNumericalArray = numericalArray.sort(
  (a, b) => {
    return (a - b) * -1;
  }
);
console.log(sortedNumericalArray);

//sort - string array
var stringArray = [ "Jane", "Allen", "Ford", "Smith", "Doe" ];
var sortedStringArray = stringArray.sort((a, b) => {
  let result;
  if (a > b)
  {
    result = 1;
  }
  else if (a < b)
  {
    result = -1;
  }
  else
  {
    result = 0;
  }
  return result * -1;
});
console.log(sortedStringArray);

//sort - object array
var products = [
  { id: 1, productName: 'TV', price: 5000 },
  { id: 2, productName: 'Monitor', price: 1200 },
  { id: 3, productName: 'iPad', price: 2000 },
  { id: 4, productName: 'Phone', price: 1800 }
];
var sortedProducts = products.sort((a, b) => {
  return (a.price - b.price) * -1;
});
console.log(sortedProducts);

var sortedProductsByProductName = products.sort((a, b) => {
  let result;
  if (a.productName > b.productName)
  {
    result = 1;
  }
  else if (a.productName < b.productName)
  {
    result = -1;
  }
  else
  {
    result = 0;
  }
  return result * -1;
});
console.log(sortedProductsByProductName);
