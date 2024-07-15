//private properties and private methods
class Customer
{
  customerId;
  customerName;
  #creditCardNumber;

  constructor(customerId, customerName, creditCardNumber)
  {
    this.customerId = customerId;
    this.customerName = customerName;
    this.#creditCardNumber = creditCardNumber;
    console.log(this.#getCreditCardNumber());
  }

  #getCreditCardNumber = function()
  {
    return this.#creditCardNumber;
  }
}

var customer1 = new Customer(101, "Smith", 1234);
console.log(customer1.customerId);
console.log(customer1.customerName);
//console.log(customer1.#getCreditCardNumber());
console.log(customer1);
