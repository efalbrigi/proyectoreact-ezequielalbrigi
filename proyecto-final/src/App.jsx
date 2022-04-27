import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemsListContainer';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer greeting='Hola Coder!'/>
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
