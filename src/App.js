
import './App.css';
import FooterReact from './components/FooterReact';
import NavbarReact from './components/NavbarReact';
import TablaProductos from './components/productos/TablaProductos';


function App() {


  return (
    <div className="App">


     {/*<header className="App-header"></header>*/} 

      <NavbarReact/>
   
      <div className='container'>

      <TablaProductos/>

      </div>

      <FooterReact/>



    </div>
  );
}

export default App;
