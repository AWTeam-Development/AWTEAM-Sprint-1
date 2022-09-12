
import './App.css';
import FooterReact from './components/FooterReact';
import NavbarReact from './components/NavbarReact';
import TablaProductos from './components/TablaProductos';


function App() {


  return (
    <div className="App">


     {/*<header className="App-header"></header>*/} 

      <NavbarReact></NavbarReact>
   
      <div className='content'>


      <TablaProductos></TablaProductos>

      <FooterReact></FooterReact>

      </div>


    </div>
  );
}

export default App;
