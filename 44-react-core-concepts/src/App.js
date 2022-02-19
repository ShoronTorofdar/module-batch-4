import './App.css';

function App() {
  return (
    <div className="App">
    <Friend name ="Rubel" nayike ="Moushumi"phone ="01635505724"></Friend>
    <Friend name ="Shoron Torofdar" nayike ="Bristi" phone ="01635505724"></Friend>
    <Friend name ="Hubel" nayike ="oushumi" phone ="01635505724"></Friend>
    </div>
  );
}


/* <a href="https://getbootstrap.com/">Bootstrap</a>
    <p id='title'>Title</p>
    <ShoronTorofdar name ="Rubel" nayike ="Moushumi"></ShoronTorofdar>
    <ShoronTorofdar name ="BappaRaz" nayike ="Chekha"></ShoronTorofdar>
    <ShoronTorofdar name="Kuber" nayike ="kopila"></ShoronTorofdar> */

function ShoronTorofdar(props) {
  console.log(props);
  return (
    <div className="ShoronTorofdar person">
      <h1>Allah will help me</h1>
      <h1>Name: {props.name}</h1>
      <h1>Name of Counterpart: {props.nayike}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque enim atque beatae tempore dolorem maiores quam! Natus vel quidem alias voluptatum, voluptate reiciendis? Deleniti maiores rem corrupti, ut assumenda nam!</p>
      </div> 

  )
}


function Friend(props){
  return(
    <div className='person'>
      <h3>Phone:</h3>
      <h5>Address:</h5>
      <h1>Name: {props.name}</h1>
      <h2>Name of Counterpart: {props.nayike}</h2>
      <h3>Phone Number of Counterpart: {props.phone}</h3>
    </div>
  )
} 

export default App;
