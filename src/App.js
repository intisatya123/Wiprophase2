import logo from './logo.svg';
import './App.css';
import First from './components/first/first';
import Second from './components/second/second';
import Third from './components/third/third';
import ButtonEx from './components/buttonex/buttonex';
import Four from './components/four/four';
import Five from './components/five/five';

function App() {
  return (
    <div className="App">
       Welcome to Functional Components...Trainer Parana <br/>
     <First /> <br/>
     <Second /> <br/>
     <Third firstName="Jay" lastName="Kandagatla" company="Wipro" /> <br/> 
     <Four />
     <ButtonEx /> <hr/>
     <Five />
    </div>
  );
}

export default App;