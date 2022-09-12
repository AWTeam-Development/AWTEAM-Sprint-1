import React, {useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';



function TablaProductos() {

  const [productos, setProductos] = useState([]);

  const url = 'http://localhost:8096/v1/componentes/listado';
  const nroPage=0;
  const nroElementos=10;
  const orderType='id';
  const orderBy='asc';

 
  const listarProductos = () => {
    axios.get(url+'?page='+nroPage+'&size='+nroElementos+'&sort='+orderType+','+orderBy)
    //.then(({data})=> setProductos({data}));
    .then(response => {
      console.log(response.data.results)

      setProductos({
        productos: response.data.results
    })
   
    })
    .catch(error => {
      console.log(error)
    });


  }



  useEffect(listarProductos,[]);


  return (
    <>
    <Table striped bordered hover variant="dark" className='table-condensed m-2'>
      <thead>
        <tr>
          <th>Código</th>
          <th>Imagen</th>
          <th>NroPieza</th>
          <th>Categoría</th>
          <th>Descripción</th>
          <th>Fabricante</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Opciones</th>
          

        </tr>
      </thead>
      <tbody>
     {productos.map(producto =>
            <tr key={producto.id}>
              <td>{producto.codigo}</td>
              <td>{producto.imagen}</td>
              <td>{producto.nroPieza}</td>
              <td>{producto.categoria}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.fabricante}</td>
              <td>{producto.stock}</td>
              <td>{producto.precio}</td>

            </tr>
      )}

      </tbody>
    </Table>
    </>
  );
}

export default TablaProductos;