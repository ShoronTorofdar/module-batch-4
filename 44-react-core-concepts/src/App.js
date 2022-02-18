import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Yo Yo react mama</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi perspiciatis atque quae, eveniet voluptatem sit. Veniam quam inventore possimus hic accusamus, enim necessitatibus numquam consequuntur odio fuga nulla alias eveniet?</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
