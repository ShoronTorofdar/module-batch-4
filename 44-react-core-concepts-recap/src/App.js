import './App.css';
import React, {useState} from 'react';
import './App.css';
function App() {
 
  return (
    <div className="App">
   <Counter/>
    </div>
    
  );
};

function Counter (){
  const [count, setCount] = useState(0);
  return(
<div>
  <h1>Allah is great</h1>
  <h2>Count: </h2>
  <button className='btn-class'>Increase</button>
</div>
  )
}









// array
// const Products = [
//   {name: 'Photoshop', price: '$99.99'},
//   {name: 'Illustrator', price: '$69.99'},
//   {name:'Iphone', price: '$399.99'},
//   {name: 'Macbook', price: '$999.99'},
//   {name: 'Laptop', price: '$1299.99'},
//   {name: 'charger', price: '$9.99'},
//   {name: 'headphones', price: '$49.99'},
//   {name: 'watch', price: '$199.99'},
//   {name: 'TV', price: '$499.99'},
//   {name: 'Macbook pro', price: '$1999.99'},
//   {name: 'Macbook air 3', price: '$1499.99'},
//   {name: 'Macbook air 6', price: '$1499.99'},
//   {name: 'Macbook air 9', price: '$1499.99'},
// ];



// {
//   Products.map(product => <Friends name={product.name} price={product.price}/>)
//   }



// function Friends(props){
//   return (
//     <div className='product'>
//       <h1>Name: {props.name}</h1>
//       <h2>Price: {props.price}</h2>
//       <button>Buy Now</button>
//     </div>
//   );
// }

export default App;
