
import './App.scss';

//Rutas
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";


//Componentes
import FooterReact from './components/FooterReact';
import NavbarReact from './components/NavbarReact';
import CardsProductos from './components/productos/CardsProductos';

import DetalleProductos from './components/productos/DetalleProductos';



function App() {


  return (
    <div className="App">


      {/*<header className="App-header"></header>*/}

    
      <NavbarReact />
  

      <Router>
                   <Routes>
                         <Route path = "/listado" element={<CardsProductos />}></Route>

                         <Route path = "/detalle" element={<DetalleProductos/>}></Route>
                         
                   </Routes>       
     </Router>



     <FooterReact />

    </div>
  );
}

export default App;
