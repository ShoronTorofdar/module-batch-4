// javascript object Notation
// JSON

const user = {id:11, name:'Gorib Amir',job:'actor'};
const stringified = JSON.stringify(user);
console.log(stringified);
console.log(user);

const shop ={
  name:'Alia Store',
  address:'Ranbir road',
  products:['laptop','mobile','tablet','camera','headphone','speaker','charger','watch', 'pepsi'],
  profit:1500,
  owner:{
  name: 'Alia bhatt',
  age:25,
  profession:'actor',
  },
  isExpensive: false
};

const shopStringified = JSON.stringify(shop);
console.log(shop); 
console.log(shopStringified);

// conver into normal javascript object

const converted = JSON.parse(shopStringified);
console.log(converted);
