import React from 'react';

//Images
//Crud
import detailsProd from '../../assets/images/icons-crud/details-product.svg';
import editProd from '../../assets/images/icons-crud/edit-product.svg';
import deleteProd from '../../assets/images/icons-crud/delete-product.svg';
import refresh from '../../assets/images/icons/refresh.png';
import addProduct from '../../assets/images/icons-crud/add-product.png';
import grafico from '../../assets/images/icons/graph.png';
import ayuda from '../../assets/images/icons/ayuda.png';
//Pagination
import arrowLastLeft from '../../assets/images/pagination/arrowLastLeft.png';
import arrowLeft from '../../assets/images/pagination/arrowLeft.png';
import arrowRight from '../../assets/images/pagination/arrowRight.png';
import arrowLastRight from '../../assets/images/pagination/arrowLastRight.png';

//Cards
import product from '../../assets/images/icons/product.png';
import price from '../../assets/images/icons/price-tag.png';


import { Modal, Button } from "react-bootstrap";
import { Table } from 'react-bootstrap';







import ApiProductosService from '../../services/productos/ProductosService';





export default class CardsProductos extends React.Component {

  constructor(props){
    super(props);

    
  this.state = {
    productos: [],
    isOpen:false,
    isOpenModalAyuda: false,
    productoSelect:0

  }


  this.openModal = () => this.setState({ isOpen: true });


  this.closeModal = () => this.setState({ isOpen: false });

  
  this.openModalAyuda = () => this.setState({ isOpenModalAyuda: true });


  this.closeModalAyuda = () => this.setState({ isOpenModalAyuda: false });


  }









  //Config Listados Paginados

  getProductosList(nroPage, nroElementos, orderType, orderBy) {
    ApiProductosService.getProductosList(nroPage, nroElementos, orderType, orderBy)
      .then((response) => {
        this.setState({ productos: response.data.content });
        console.log(response.data.content);
      })
      .catch(function (ex) {
        console.log('Response parsing failed. Error: ', ex);
      });;
  }


  getProductosFilter(orderField, orderFilter, nroPage, nroElementos, orderType, orderBy) {
    ApiProductosService.getProductosFilter(orderField, orderFilter, nroPage, nroElementos, orderType, orderBy)
      .then((response) => {
        this.setState({ productos: response.data.content });
        console.log(response.data.content);
      })
      .catch(function (ex) {
        console.log('Response parsing failed. Error: ', ex);
      });;
  }




  //cargamos el listado 
  componentDidMount() {
    this.getProductosList(0, 10, 'id', 'asc');
  }



  render() {
    return (

      <>

        <div className='d-flex d-row'>

          {/*FILTROS ASIDE*/}
          <div className=''>




            {/*Filtro por Categoría*/}
            <div className='me-0  bg-dark'>
              <a className="btn btn-dark" data-bs-toggle="offcanvas" href="#offcanvasCateg" role="button" aria-controls="offcanvasCateg">
                Categorías
              </a>
            </div>

            <div className="offcanvas offcanvas-start bg-dark text-white" tabindex="-1" id="offcanvasCateg" aria-labelledby="offcanvasCategLabel">
              <div className="offcanvas-header justify-content-end">

                <button type="button" className="btn-close btn-secondary text-reset text-white bg-secondary " data-bs-dismiss="offcanvas" aria-label="Close"></button>


              </div>
              <div className="offcanvas-body bg-dark text-white justify-content-left" id='buscadorAside'>
                <h5 className="offcanvas-title text-decoration-underline" id="offcanvasCategLabel mt-2 mb-4">Categorías de Productos</h5>
                <ul className='mt-3'>
                  <li className='bg-none'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.getProductosFilter('categoria', 'Transistores BJT', 0, 10, 'id', 'asc')}>
                      Transistores BJT
                    </button>
                  </li>


                  <li className='mt-1 p-1'>
                    <button type="button" className='btn p-1' data-bs-dismiss="offcanvas" onClick={() => this.getProductosFilter('categoria', 'Transistores MOSFET', 0, 10, 'id', 'asc')}>
                      Transistores Mosfet
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.getProductosFilter('categoria', 'Capacitores Electroliticos', 0, 10, 'id', 'asc')}>
                      Capacitores Electr.
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.getProductosFilter('categoria', 'Resistores de Alta Frecuencia', 0, 10, 'id', 'asc')}>
                      Resistores Alta Frec.
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.getProductosFilter('categoria', 'Microcontroladores PICS', 0, 10, 'id', 'asc')}>
                      Microcontroladores Pics.
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.getProductosFilter('categoria', 'Microcontroladores AVRS', 0, 10, 'id', 'asc')}>
                      Microcontroladores Avrs.
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.getProductosFilter('categoria', 'Placas Arduino', 0, 10, 'id', 'asc')}>
                      Placas Arduino.
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn"
                      data-bs-dismiss="offcanvas" onClick={() => this.getProductosFilter('categoria', 'Placas Esp8266', 0, 10, 'id', 'asc')}>
                      Placas Esp8266.
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn"
                      data-bs-dismiss="offcanvas" onClick={() => this.getProductosFilter('categoria', 'Placas Esp32', 0, 10, 'id', 'asc')}>
                      Placas Esp32.
                    </button>
                  </li>

                </ul>

              </div>
            </div>
            {/*Fin Filtro por Categoría*/}
            {/*Filtro por Tipos*/}
            <div className='me-0 mt-2 bg-dark'>
              <a className="btn btn-dark" data-bs-toggle="offcanvas" href="#offcanvasTipos" role="button" aria-controls="offcanvasTipos">
                Tipos
              </a>
            </div>

            <div className="offcanvas offcanvas-start bg-dark text-white" tabindex="-1" id="offcanvasTipos" aria-labelledby="offcanvasTiposLabel">
              <div className="offcanvas-header justify-content-end">

                <button type="button" className="btn-close btn-secondary text-reset text-white bg-secondary " data-bs-dismiss="offcanvas" aria-label="Close"></button>


              </div>
              <div className="offcanvas-body bg-dark text-white justify-content-left" id='buscadorAside'>
                <h5 className="offcanvas-title text-decoration-underline" id="offcanvasTiposLabel mt-2 mb-4">Tipos de Productos</h5>
                <ul className='mt-3'>
                  <li className='bg-none'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.getProductosFilter('descripcion', 'Transistor BJT NPN', 0, 10, 'id', 'asc')}>
                      Transistores BJT NPN
                    </button>
                  </li>
                  <li className='bg-none'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.getProductosFilter('descripcion', 'Transistor BJT PNP', 0, 10, 'id', 'asc')}>
                      Transistores BJT PNP
                    </button>
                  </li>


                  <li className='mt-1 p-1'>
                    <button type="button" className='btn p-1' data-bs-dismiss="offcanvas" onClick={() => this.getProductosFilter('descripcion', 'Transistor Mosfet NP', 0, 10, 'id', 'asc')}>
                      Transistores Mosfet NP
                    </button>
                  </li>

                  <li className='mt-1 p-1'>
                    <button type="button" className='btn p-1' data-bs-dismiss="offcanvas" onClick={() => this.getProductosFilter('descripcion', 'Transistor Mosfet N', 0, 10, 'id', 'asc')}>
                      Transistores Mosfet N
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.getProductosFilter('descripcion', 'Aluminio Radial', 0, 10, 'id', 'asc')}>
                      Capac. Electr. Alum. Radial
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.getProductosFilter('descripcion', 'Aluminio Axial', 0, 10, 'id', 'asc')}>
                      Capac. Electr. Alum. Axial
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.getProductosFilter('descripcion', 'Aluminio Terminal Roscado', 0, 10, 'id', 'asc')}>
                      Capac. Electr. Alum. Term. Rosc.
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.getProductosFilter('descripcion', 'Encaje a Presión', 0, 10, 'id', 'asc')}>
                      Capac. Electr. Alum. Encaj a Pres.
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.getProductosFilter('descripcion', 'Polimero Organico', 0, 10, 'id', 'asc')}>
                      Capac. Electr. Pol. Orgánico
                    </button>
                  </li>


                </ul>

              </div>
            </div>
            {/*Fin Filtro por Tipos*/}

            {/*Filtro por Fabricantes*/}
            <div className='me-0 bg-dark mt-2'>
              <a className="btn btn-dark" data-bs-toggle="offcanvas" href="#offcanvasFabric" role="button" aria-controls="offcanvasFabric">
                Fabricantes
              </a>
            </div>

            <div className="offcanvas offcanvas-start bg-dark text-white" tabindex="-1" id="offcanvasFabric" aria-labelledby="offcanvasFabricLabel">
              <div className="offcanvas-header justify-content-end">

                <button type="button" className="btn-close btn-secondary text-reset text-white bg-secondary " data-bs-dismiss="offcanvas" aria-label="Close"></button>


              </div>
              <div className="offcanvas-body bg-dark text-white justify-content-left" id='buscadorAside'>
                <h5 className="offcanvas-title text-decoration-underline" id="offcanvasFabricLabel mt-2 mb-4">Fabricantes de Productos</h5>
                <ul className='mt-3'>
                  <li className='bg-none'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.getProductosFilter('fabricante', 'SHANTOU HUASHAN', 0, 10, 'id', 'asc')}>
                      Shantou Huashan
                    </button>
                  </li>

                  <li className='bg-none'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.getProductosFilter('fabricante', 'Advanced Power', 0, 10, 'id', 'asc')}>
                      Advanced Power
                    </button>
                  </li>


                  <li className='mt-1 p-1'>
                    <button type="button" className='btn p-1' data-bs-dismiss="offcanvas" onClick={() => this.getProductosFilter('fabricante', 'INCHANGE SEMICONDUCTOR', 0, 10, 'id', 'asc')}>
                      Inchange Semiconductor
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.getProductosFilter('fabricante', 'CENTRAL SEMICONDUCTOR', 0, 10, 'id', 'asc')}>
                      Central Semiconductor
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.getProductosFilter('fabricante', 'STMicroelectronics', 0, 10, 'id', 'asc')}>
                      STMicroelectronics
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn"
                      data-bs-dismiss="offcanvas" onClick={() => this.getProductosFilter('fabricante', 'Renesas Electronics', 0, 10, 'id', 'asc')}>
                      Renesas Electronics
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.getProductosFilter('fabricante', 'Slkor', 0, 10, 'id', 'asc')}>
                      Slkor
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.getProductosFilter('fabricante', 'VISHAY', 0, 10, 'id', 'asc')}>
                      Vishay
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.getProductosFilter('fabricante', 'Quanshan', 0, 10, 'id', 'asc')}>
                      Quanshan
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.getProductosFilter('fabricante', 'Shenzhen', 0, 10, 'id', 'asc')}>
                      Shenzhen
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.getProductosFilter('fabricante', 'PANASONIC', 0, 10, 'id', 'asc')}>
                      Panasonic
                    </button>
                  </li>
                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.getProductosFilter('fabricante', 'HITACHI', 0, 10, 'id', 'asc')}>
                      Hitachi
                    </button>
                  </li>
                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.getProductosFilter('fabricante', 'ELNA', 0, 10, 'id', 'asc')}>
                      Elna
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.getProductosFilter('fabricante', 'RUBYCON', 0, 10, 'id', 'asc')}>
                      Rubycon
                    </button>
                  </li>

                </ul>

              </div>
            </div>
            {/*Fin Filtro por Fabricantes*/}

            {/*Refresh*/}
            <div className='me-0 bg-dark mt-2'>
              <button type="button" className='btn p-1' onClick={() => this.getProductosList(0, 10, 'id', 'asc')}>
                <img src={refresh} alt="" width="25" height="25" title="Limpiar Filtros" className="" />
              </button>
            </div>

            {/*Fin Refresh*/}


            {/*Add*/}
            <div className='me-0 bg-dark mt-5'>
              <button type="button" className='btn p-1' onClick={() => this.getProductosList(0, 10, 'id', 'asc')}>
                <img src={addProduct} alt="" width="25" height="25" title="Agregar Producto" className="" />
              </button>
            </div>

            {/*Fin Add*/}



            {/*Grafico*/}
            <div className='me-0 bg-dark mt-2'>
              <button type="button" className='btn p-1' onClick={() => this.getProductosList(0, 10, 'id', 'asc')}>
                <img src={grafico} alt="" width="25" height="25" title="Gráfico" className="" />
              </button>
            </div>

            {/*Fin Grafico*/}

                {/*Ayuda*/}
                <div className='me-0 bg-dark mt-2'>
              <button type="button" className='btn p-1' onClick={this.openModalAyuda}>
                <img src={ayuda} alt="" width="25" height="25" title="Ayuda" className="" />
              </button>
            </div>

            {/*Fin Ayuda*/}

          </div>
          {/*FIN FILTROS ASIDE*/}

          <div className="container row row-cols-1 row-m-1 row-cols-sm-2 row-cols-md-3  row-cols-lg-4 row-cols-xl-5 g-4 justify-content-center ms-0">

            {
              this.state.productos.map(producto =>

                <div className='col'>
                  <div className="card h-80 w-100 " id="cardsTable" key={producto.id}>
                    <p className='small m-0'>{producto.codigo.substring(0, 18)}..</p>
                    <img src={producto.imagen} target="_blank" width="120px" height="150px" className="card-img-top m-0" alt='imagen del componente' />
                    <div className="card-body text-center p-1">

                      <p className='small'>{producto.nroPieza} / {producto.categoria.substring(0, 18)}.. / {producto.fabricante}</p>

                      <hr />

                      <h6 className="card-title text-center">
                        {producto.descripcion.substring(0, 40)}...
                      </h6>

                      <div className='d-flex d-column justify-content-center'>
                        <button className="btn btn-outline-dark  text-white" >
                          <span class="badge bg-secondary m-2"><img src={product} width="20" height="20" alt="" /> {producto.stock}u
                          </span>

                          <span class="badge bg-secondary m-2 mt-1"><img src={price} width="20" height="20" alt="" />  US${producto.precio}
                          </span>
                        </button>
                      </div>





                      <div className="card-footer mt-3">
                        <div className="btn-group d-sm-block d-flex justify-content-center me-0 mb-0" role="group">
                          <div className="d-flex justify-content-center">
                            {/*Btn Modal Visualizar Producto*/}


                            {/*Btn Modal Visualizar Producto*/}
                            <Button type='button' className="btn btn-primary border-secondary alert-link m-1 p-1" onClick={this.openModal}>
                              <img src={detailsProd} alt="" width="25" height="25" title="Detalles Producto" />
                            </Button>
                            {/*Fin Icono Visualizar Producto*/}

                            <button className="btn btn-warning border-secondary alert-link m-1 p-1">
                              {/*Icono Editar Producto*/}
                              <img src={editProd} alt="" width="25" height="25" title="Editar Producto" className="" />
                              {/*Fin Icono Editar Producto*/}
                            </button>

                            {/* BTN MODAL DELETE CHECK  */}
                            <button type="button" className="btn btn-danger border-secondary alert-link m-1 p-1" data-bs-toggle="modal" data-bs-target="#modalDetailsProd02">
                              {/* Icono Eliminar Producto*/}
                              <img src={deleteProd} alt="" width="25" height="25" title="Eliminar Producto" className="" />
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

        {/* PAGINATION*/}
        <div className="container ms-2 mt-5 ">
          <div className="row col-12 justify-content-center  bg-none ms-5">
            {/*BTN'S PAGINATION*/}
            <div className=" col-6 justify-content-center mt-2" id="pagination">
              <nav aria-label="..." className="bg-none text-white">
                <ul className="pagination pagination-lg bg-none text-white border-light alert-link">
                  <li className="page-item bg-none text-white" >
                    <button className="btn btn-md btn-outline-dark border-light alert-link text-white" onClick={() => this.getProductosList(0, 10, 'id', 'asc')}>
                      <img src={arrowLastLeft} width="15" height="15" alt="" />
                    </button>
                  </li>
                  <li className="page-item">
                    <button className="btn btn-md btn-outline-dark border-light alert-link text-white">
                      <img src={arrowLeft} width="15" height="15" alt="" />
                    </button>
                  </li>
                  <li className="page-item">
                    <button className="btn btn-md btn-outline-dark border-light alert-link text-white" onClick={() => this.getProductosList(0, 10, 'id', 'asc')}>1</button>
                  </li>
                  <li className="page-item">
                    <button className="btn btn-md btn-outline-dark border-light alert-link text-white" onClick={() => this.getProductosList(1, 10, 'id', 'asc')}>2</button>
                  </li>
                  <li className="page-item"><button className="btn btn-md btn-outline-dark border-light alert-link text-white" onClick={() => this.getProductosList(2, 10, 'id', 'asc')}>3</button></li>
                  <li className="page-item">
                    <button className="btn btn-md btn-outline-dark border-light alert-link text-white">
                      <img src={arrowRight} width="15" height="15" alt="" />
                    </button>
                  </li>
                  <li className="page-item">
                    <button
                      className="btn btn-md btn-outline-dark border-light alert-link text-white">
                      <img src={arrowLastRight} width="15" height="15" alt="" />
                    </button>
                  </li>

                  <li className="page-item bg-none text-white ms-5">

                    <button className="btn btn-md btn-outline-dark border-light alert-link text-white"
                    >
                      Página:
                    </button>

                  </li>

                  <li>
                    <button className="btn btn-md btn-outline-dark bg-none border-light alert-link text-white">
                      Elementos:
                    </button>
                  </li>

                </ul>
              </nav>
            </div>
            {/*FIN BTN'S PAGINATION*/}

          </div>
        </div>

        {/* FIN PAGINATION*/}














        {/*MODAL Ayuda */}
   
          <Modal  show={this.state.isOpenModalAyuda} onHide={this.closeModalAyuda}>
            <Modal.Header className='bg-dark text-white' closeButton>
              <Modal.Title className='bg-dark text-white'>Guía Listado de Productos</Modal.Title>
            </Modal.Header>
            <Modal.Body className='bg-dark text-white'>
                  <h5>Acerca de la Gestión de Productos</h5>
                  <p>
                    En esta sección podemos visualizar los Productos según los requerimientos deseados, existe paginacion de productos, podemos aplicar filtros de búsqueda y las operaciones CRUD requeridas según el rol que se tenga. Los admins podrán
                    realizar todas las Operaciones, los usuarios solamente la visualización y búsquedas.
                  </p>
                  <br />
                  <h5>Buscador de Productos</h5>
                  <p>Es posible realizar la búsqueda de productos según filtros aplicados para cada campo del Listado. Es decir, las siglas o palabras ingresadas serán aplicadas para todos los campos.</p>
                  <br />
                  <h5>Campos del Listado</h5>
                  <p>
                    Cada campo describe una característica del producto específico por fila. El campo opciones nos permite visualizar, editar y eliminar el producto seleccionado. También podemos agregar un producto desde la barra de navegación.
                  </p>
                  <ul>
                    <li><strong>Código:</strong> Este código hace referencia al producto, no es posible que existan duplicados, es válido solo letras, números y ciertos caracteres. Además de un máximo de 10 digitos.</li>
                    <li><strong>Nombre:</strong> El nombre hace referencia mismo al producto. A comparación de la descripción, este es una acotación para la clasificación de los productos.</li>
                  </ul>
                  <div className="mt-5">
                    <strong>CONTENIDO PARCIALMENTE DISPONIBLE, CONTACTAR AL DESARROLLADOR</strong>
                  </div>
             
            </Modal.Body>
            <Modal.Footer className='bg-dark text-white'>
              <Button closeButton variant="dark">Cerrar</Button>
            </Modal.Footer>
          </Modal>
        
{/*Fin MODAL Ayuda */}







        {/*MODAL Detalle Productos */}
        <div>
          <Modal show={this.state.isOpen} onHide={this.closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Table striped bordered hover variant="dark" classNameNameName='table-condensed m-2'>
        <thead>
          <tr>
            <th>Código</th>
            <th>Imagen</th>
            <th>Datasheet</th>
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
                <td>{producto.codigo.substring(0, 12)}...</td>

                <td >
                  <div classNameName='border-rounded-circle bg-white'>
                  <img src={producto.imagen} target="_blank" width="40px" height="40px" alt="imagen del componente" />
                  </div>
                </td>
                <td >
                  <div classNameName='border-rounded-circle bg-white'>
                  <img src={producto.datasheet} target="_blank" width="40px" height="40px" alt="imagen del componente" />
                  </div>
                </td>

                <td>{producto.nroPieza}</td>
                <td>{producto.categoria}</td>
                <td>{producto.descripcion.substring(0, 20)}...</td>
                <td>{producto.fabricante}</td>
                <td>{producto.stock}u</td>
                <td>us${producto.precio}</td>
               
              </tr >
            )
          }
        </tbody >
      </Table >



            </Modal.Body>
            <Modal.Footer>
              <Button closeButton variant="dark">Cerrar</Button>
            </Modal.Footer>
          </Modal>
        </div>
{/*Fin MODAL Detalle Productos */}




















      </>

    );

  }



}
