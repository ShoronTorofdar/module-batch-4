const friends = [ 'Bob', 'Linda', 'Sue', 'Sally', 'Joe' ];
const friendsLength = friends.map(friend => friend.length);
console.log(friendsLength);

const products = [
  {name:'water bottle', price:1000, color:'yellow'},
  {name:'pen', price:100, color:'blue'},
  {name:'pencil', price:50, color:'red'},
  {name:'eraser', price:10, color:'black'},
  {name:'notebook', price:500, color:'white'},
  {name:'pencil case', price:200, color:'black'},
  {name:'sharpener', price:20, color:'black'},
]

const productNames = products.map(product => product.name);
console.log(productNames);

const productPrice = products.map(product => product.price);
console.log(productPrice);

const productColor = products.map(product => product.color);
console.log(productColor)


products.forEach(product => console.log(product.name));
