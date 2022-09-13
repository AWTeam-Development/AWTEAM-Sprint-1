import React from 'react';
import ApiProductosService from '../../services/productos/ProductosService';

//Images
import detailsProdSvg from '../../assets/images/icons-crud/details-product.svg';
import editProdSvg from '../../assets/images/icons-crud/edit-product.svg';
import deleteProdSvg from '../../assets/images/icons-crud/delete-product.svg';




export default class CardsProductos extends React.Component {

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

<div className='container'>
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3  row-cols-lg-4 row-cols-xl-5 g-4 justify-content-center">

        {
          this.state.productos.map(producto =>
            
            <div className='col'>
            <div className="card h-100 w-100 " id="cardsTable" key={producto.id}>
            <strong>{producto.codigo}</strong>
              <img src={producto.imagen} target="_blank" width="120px" height="150px" className="card-img-top m-0" alt='imagen del componente'/>
              <div className="card-body text-center p-1">
          
                <p>{producto.nroPieza} / {producto.categoria.substring(0,18)}.. / {producto.fabricante}</p>

                <hr />
                
                <h6 className="card-title text-center">
                  {producto.descripcion.substring(0, 40)}...
                </h6>
         
                <br/>

                <h6><strong>Stock : </strong><span class="badge bg-secondary">{producto.stock}u</span>
                </h6>
                <h6><strong>Precio : </strong>
                <span class="badge bg-secondary m-1">UD$ {producto.precio}</span>
                </h6>

                

                <div className="card-footer mt-3">
                  <div className="btn-group d-sm-block d-flex justify-content-center me-0 mb-0" role="group">
                    <div className="d-flex justify-content-center">
                      <button className="btn btn-primary border-secondary alert-link m-1 p-1">
                        {/*Icono Visualizar Producto*/}
                        <img src={detailsProdSvg} alt="" width="25" height="25" title="Detalles Producto" className="" />
                        {/*Fin Icono Visualizar Producto*/}
                      </button>
                      <button className="btn btn-warning border-secondary alert-link m-1 p-1">
                        {/*Icono Editar Producto*/}
                        <img src={editProdSvg} alt="" width="25" height="25" title="Editar Producto" className="" />
                        {/*Fin Icono Editar Producto*/}
                      </button>

                      {/* BTN MODAL DELETE CHECK  */}
                      <button type="button" className="btn btn-danger border-secondary alert-link m-1 p-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop02">
                        {/* Icono Eliminar Producto*/}
                        <img src={deleteProdSvg} alt="" width="25" height="25" title="Eliminar Producto" className="" />
                        {/* Fin Icono Eliminar Producto*/}
                      </button>
                      {/*  FIN BTN MODAL DELETE CHECK */}

                    </div>
                  </div>
                </div>

              </div>

              </div>
              </div>
      
        )}
</div>

</div>




          );

  }



}
