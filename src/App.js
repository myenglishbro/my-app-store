import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/Hero/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
  <NavBar/>
  

  <ItemListContainer greetings="Bienvenidos a mi ecommerce"/>
    </div>
  );
};


export default App;
