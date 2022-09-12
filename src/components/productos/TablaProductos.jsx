import React from 'react';
import Table from 'react-bootstrap/Table';
import ApiProductosService from '../../services/productos/ProductosService';

//Images
import detailsProdSvg from '../../assets/images/icons-crud/details-product.svg';
import editProdSvg from '../../assets/images/icons-crud/edit-product.svg';
import deleteProdSvg from '../../assets/images/icons-crud/delete-product.svg';




export default class TablaProductos extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      productos: []
    }
  }

  //cargamos el listado 
  componentDidMount() {
    ApiProductosService.getProductos()
      .then((response) => {
        this.setState({ productos: response.data.content });
        console.log(response.data.content);
      })
      .catch(function (ex) {
        console.log('Response parsing failed. Error: ', ex);
      });;
  }




  render() {
    return (




      <Table striped bordered hover variant="dark" classNameName='table-condensed m-2'>
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
          {
            this.state.productos.map(producto =>
              <tr key={producto.id}>
                <td>{producto.codigo}</td>

                <td >
                  <div className='border-rounded-circle bg-white'>
                  <img src={producto.imagen} target="_blank" width="70px" height="70px" alt="imagen del componente" />
                  </div>
                </td>

                <td>{producto.nroPieza}</td>
                <td>{producto.categoria}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.fabricante}</td>
                <td>{producto.stock}u</td>
                <td>us${producto.precio}</td>
                <td>
                  <div className="btn-group d-sm-block " role="group">
                    <div className="d-flex justify-content-center">
                      <button className="btn btn-primary border-dark alert-link m-1 p-1">
                        {/*Icono Visualizar Producto*/}
                        <img src={detailsProdSvg} alt="" width="25" height="25" title="Detalles Producto" className="" />
                        {/*Fin Icono Visualizar Producto*/}
                      </button>
                      <button className="btn btn-warning border-dark alert-link m-1 p-1">
                        {/*Icono Editar Producto*/}
                        <img src={editProdSvg} alt="" width="25" height="25" title="Editar Producto" className="" />
                        {/*Fin Icono Editar Producto*/}
                      </button>
                      
                        {/* BTN MODAL DELETE CHECK  */}
                        <button type="button" className="btn btn-danger border-dark alert-link m-1 p-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop02">
                          {/* Icono Eliminar Producto*/}
                          <img src={deleteProdSvg} alt="" width="25" height="25" title="Eliminar Producto" className="" />
                          {/* Fin Icono Eliminar Producto*/}
                        </button>
                        {/*  FIN BTN MODAL DELETE CHECK */}
                     
                    </div>
                  </div>
                </td>
              </tr >
            )
          }
        </tbody >
      </Table >

    );

  }



}
