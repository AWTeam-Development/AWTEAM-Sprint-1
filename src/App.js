
import './App.css';
import NavbarReact from './components/NavbarReact';
import TablaProductosReact from './components/TablaProductosReact';

function App() {


  return (
    <div className="App">


     {/*<header className="App-header"></header>*/} 

      <NavbarReact></NavbarReact>
   
      <div className='content'>
      <TablaProductosReact></TablaProductosReact>

      </div>


    </div>
  );
}

export default App;
