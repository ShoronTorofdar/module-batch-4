import './App.css';

function App() {
  return (
    <div className="App">
      <Product name="Iphone" price="$1000"/>
      <Product name="Iphone" price="$1000"/>
      <Product name="Iphone" price="$1000"/>
      <Product name="Iphone" price="$1000"/>
    </div>
  );
}


function Product(props){
  return (
    <div className='product'>
      <h1>Name: {props.name}</h1>
      <h2>Price: {props.price}</h2>
      <button>Buy Now</button>
    </div>
  );
}

export default App;
