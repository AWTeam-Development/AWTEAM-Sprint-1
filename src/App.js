
import './App.scss';
import FooterReact from './components/FooterReact';
import NavbarReact from './components/NavbarReact';
import CardsProductos from './components/productos/CardsProductos';


function App() {


  return (
    <div className="App">


     {/*<header className="App-header"></header>*/} 

      <NavbarReact/>

      <CardsProductos/>


      <FooterReact/>



    </div>
  );
}

export default App;
