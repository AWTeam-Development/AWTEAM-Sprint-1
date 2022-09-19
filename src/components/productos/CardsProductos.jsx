
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

//Bootstrap-React
import { Modal, Button } from "react-bootstrap";
import { Table } from 'react-bootstrap';



//Componentes
import React from 'react';
import ApiProductosService from '../../services/productos/ProductosService';
import AccordionModalAyuda from './AccordionModalAyuda';





export default class CardsProductos extends React.Component {



  constructor(props) {
    super(props);


    this.state = {

      //Productos
      productos: [],
      productoSelect: 0,

      //ultimos Prod
      lastProductos: [],

      //Pagination
      isFirstPage: false,
      isLastPage: false,
      nroPage: 0,
      nroTotalPages: 0,
      nroGetElements: 10,
      nroCurrentElements: 0,
      nroTotalElements: 0,
      orderType: 'id',
      orderBy: 'asc',

      //Filters
      filterBy: '',
      filterField: '',


      //Modals
      isOpen: false,
      isOpenModalAyuda: false,


    }


    this.openModal = () => this.setState({ isOpen: true });


    this.closeModal = () => this.setState({ isOpen: false });


    this.openModalAyuda = () => this.setState({ isOpenModalAyuda: true });


    this.closeModalAyuda = () => this.setState({ isOpenModalAyuda: false });




  }


  //Listado Ultimos Productos

  listarLastComp() {
    ApiProductosService.getProductosList(this.state.nroTotalPages, ((this.state.nroTotalElements) - (this.state.nroTotalElements - 2)), this.state.orderType, this.state.orderBy)
      .then((response) => {
        this.setState({
          lastProductos: response.data.content,

        });

        console.log(response.data.content);
      })
      .catch(function (ex) {
        console.log('No se ha podido listar los ultimos componentes agregados. Causado por : ', ex);
      });;
  }




  //====== LISTADOS PAGINADOS ==========

  listarComp() {
    ApiProductosService.getProductosList(this.state.nroPage, this.state.nroGetElements, this.state.orderType, this.state.orderBy)
      .then((response) => {
        this.setState({
          productos: response.data.content,
          nroTotalPages: response.data.totalPages,
          nroCurrentElements: response.data.numberOfElements,
          nroTotalElements: response.data.totalElements,
          isFirstPage: response.data.first,
          isLastPage: response.data.last
        });

        console.log(response.data.content);
      })
      .catch(function (ex) {
        console.log('No se ha podido listar los componentes. Causado por : ', ex);
      });;
  }


  listarCompFilter(filterField, filterBy) {
    ApiProductosService.getProductosFilter(filterField, filterBy, this.state.nroPage, this.state.nroGetElements, this.state.orderType, this.state.orderBy)
      .then((response) => {
        this.setState({
          productos: response.data.content,
          nroTotalPages: response.data.totalPages,
          nroCurrentElements: response.data.numberOfElements,
          nroTotalElements: response.data.totalElements,
          isFirstPage: response.data.first,
          isLastPage: response.data.last

        });
        console.log(response.data.content);
      })
      .catch(function (ex) {
        console.log('No se ha podido listar los componentes con filtro. Causado por : ', ex);
      });;
  }










  //cargamos el listado 
  componentDidMount() {
    this.listarComp();
    this.listarLastComp();
  }



  render() {
    return (

      <>

      <div className='ms-5 me-5'>
<div class="bg-dark text-white d-flex d-row mb-4 mt-2 ms-5 me-5" >
  <div className='d-flex justify-content-start text-left p-2 me-3'>
  MicroElectrónica / Productos / Filtrados por {this.state.filterField.toString}
  </div>

  <div className='d-flex justify-content-start text-left p-2 ms-5'>
    <ul className='d-flex d-row list-unstyled'>
      <li className='ms-3'>Transistores</li>
      <li className='ms-3'>Capacitores</li>
      <li className='ms-3'>Resistores</li>
      
    </ul>
    
  </div>


</div>
</div>

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
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.listarCompFilter('categoria', 'Transistores BJT')}>
                      Transistores BJT
                    </button>
                  </li>


                  <li className='mt-1 p-1'>
                    <button type="button" className='btn p-1' data-bs-dismiss="offcanvas" onClick={() => this.listarCompFilter('categoria', 'Transistores MOSFET')}>
                      Transistores Mosfet
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.listarCompFilter('categoria', 'Capacitores Electroliticos')}>
                      Capacitores Electr.
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.listarCompFilter('categoria', 'Resistores de Alta Frecuencia')}>
                      Resistores Alta Frec.
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.listarCompFilter('categoria', 'Microcontroladores PICS')}>
                      Microcontroladores Pics.
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.listarCompFilter('categoria', 'Microcontroladores AVRS')}>
                      Microcontroladores Avrs.
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.listarCompFilter('categoria', 'Placas Arduino')}>
                      Placas Arduino.
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn"
                      data-bs-dismiss="offcanvas" onClick={() => this.listarCompFilter('categoria', 'Placas Esp8266')}>
                      Placas Esp8266.
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn"
                      data-bs-dismiss="offcanvas" onClick={() => this.listarCompFilter('categoria', 'Placas Esp32')}>
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
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.listarCompFilter('descripcion', 'Transistor BJT NPN')}>
                      Transistores BJT NPN
                    </button>
                  </li>
                  <li className='bg-none'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.listarCompFilter('descripcion', 'Transistor BJT PNP')}>
                      Transistores BJT PNP
                    </button>
                  </li>


                  <li className='mt-1 p-1'>
                    <button type="button" className='btn p-1' data-bs-dismiss="offcanvas" onClick={() => this.listarCompFilter('descripcion', 'Transistor Mosfet NP')}>
                      Transistores Mosfet NP
                    </button>
                  </li>

                  <li className='mt-1 p-1'>
                    <button type="button" className='btn p-1' data-bs-dismiss="offcanvas" onClick={() => this.listarCompFilter('descripcion', 'Transistor Mosfet N')}>
                      Transistores Mosfet N
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.listarCompFilter('descripcion', 'Aluminio Radial')}>
                      Capac. Electr. Alum. Radial
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.listarCompFilter('descripcion', 'Aluminio Axial')}>
                      Capac. Electr. Alum. Axial
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.listarCompFilter('descripcion', 'Aluminio Terminal Roscado')}>
                      Capac. Electr. Alum. Term. Rosc.
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.listarCompFilter('descripcion', 'Encaje a Presión')}>
                      Capac. Electr. Alum. Encaj a Pres.
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.listarCompFilter('descripcion', 'Polimero Organico')}>
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
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.listarCompFilter('fabricante', 'SHANTOU HUASHAN')}>
                      Shantou Huashan
                    </button>
                  </li>

                  <li className='bg-none'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.listarCompFilter('fabricante', 'Advanced Power')}>
                      Advanced Power
                    </button>
                  </li>


                  <li className='mt-1 p-1'>
                    <button type="button" className='btn p-1' data-bs-dismiss="offcanvas" onClick={() => this.listarCompFilter('fabricante', 'INCHANGE SEMICONDUCTOR')}>
                      Inchange Semiconductor
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.listarCompFilter('fabricante', 'CENTRAL SEMICONDUCTOR')}>
                      Central Semiconductor
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.listarCompFilter('fabricante', 'STMicroelectronics')}>
                      STMicroelectronics
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn"
                      data-bs-dismiss="offcanvas" onClick={() => this.listarCompFilter('fabricante', 'Renesas Electronics')}>
                      Renesas Electronics
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.listarCompFilter('fabricante', 'Slkor')}>
                      Slkor
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.listarCompFilter('fabricante', 'VISHAY')}>
                      Vishay
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.listarCompFilter('fabricante', 'Quanshan')}>
                      Quanshan
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.listarCompFilter('fabricante', 'Shenzhen')}>
                      Shenzhen
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.listarCompFilter('fabricante', 'PANASONIC')}>
                      Panasonic
                    </button>
                  </li>
                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.listarCompFilter('fabricante', 'HITACHI')}>
                      Hitachi
                    </button>
                  </li>
                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.listarCompFilter('fabricante', 'ELNA')}>
                      Elna
                    </button>
                  </li>

                  <li className='mt-1'>
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={() => this.listarCompFilter('fabricante', 'RUBYCON')}>
                      Rubycon
                    </button>
                  </li>

                </ul>

              </div>
            </div>
            {/*Fin Filtro por Fabricantes*/}

            {/*Refresh*/}
            <div className='me-0 bg-dark mt-2'>
              <button type="button" className='btn p-1' onClick={() => this.listarComp()}>
                <img src={refresh} alt="" width="25" height="25" title="Limpiar Filtros" className="" />
              </button>
            </div>

            {/*Fin Refresh*/}


            {/*Add*/}
            <div className='me-0 bg-dark mt-5'>
              <button type="button" className='btn p-1' onClick={() => this.listarComp(0, 10, 'id', 'asc')}>
                <img src={addProduct} alt="" width="25" height="25" title="Agregar Producto" className="" />
              </button>
            </div>

            {/*Fin Add*/}



            {/*Grafico*/}
            <div className='me-0 bg-dark mt-2'>
              <button type="button" className='btn p-1' onClick={() => this.listarComp(0, 10, 'id', 'asc')}>
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


















          {/*CARDS PRODUCTOS*/}
          <div className="container row  row-cols-sm-1 row-cols-md-2  row-cols-lg-3 row-cols-xl-5 g-4 justify-content-center ms-0 ">






            {
              this.state.productos.map(producto =>

                <div className='col me-0 '>
                  <div className="card h-70 w-100 " id="cardsProductos" key={producto.id}>
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

          {/*FIN CARDS PRODUCTOS*/}





{/*ULTIMOS AGREGADOS*/}
          <div className='justify-content-end me-0'>


            <div class="col-sm-12 me-0">

              <div class="col-sm-10 ">

              <div class="alert alert-primary" role="alert">
                  Últimos Agregados
                </div>
                {
                  this.state.lastProductos.map(producto =>


                    <div class="card text-bg-dark mb-2" key={producto.id}>

                      <img src={producto.imagen} class="card-img" target="_blank" width="120px" height="100px" alt="..." />
                      <div class="card-footer bg-dark">

                        <div className="d-flex justify-content-center bg-dark">

                          {/*Btn Modal Visualizar Producto*/}
                          <Button type='button' className="btn btn-primary border-secondary bg-dark alert-link m-1 p-1" onClick={this.openModal}>
                            <img src={detailsProd} alt="" width="25" height="25" title="Detalles Producto" />
                          </Button>
                          {/*Fin Icono Visualizar Producto*/}

                          <button className="btn btn-warning bg-dark border-secondary alert-link m-1 p-1">
                            {/*Icono Editar Producto*/}
                            <img src={editProd} alt="" width="25" height="25" title="Editar Producto" className="" />
                            {/*Fin Icono Editar Producto*/}
                          </button>

                          {/* BTN MODAL DELETE CHECK  */}
                          <button type="button" className="btn btn-danger border-secondary bg-dark  alert-link m-1 p-1" data-bs-toggle="modal" data-bs-target="#modalDetailsProd02">
                            {/* Icono Eliminar Producto*/}
                            <img src={deleteProd} alt="" width="25" height="25" title="Eliminar Producto" className="" />
                            {/* Fin Icono Eliminar Producto*/}
                          </button>
                          {/*  FIN BTN MODAL DELETE CHECK */}

                        </div>


                      </div>
                    </div>
                  )}
              </div>
            </div>
          </div>
{/*FIN ULTIMOS AGREGADOS*/}





        </div>








        {/* PAGINATION*/}
        <div className="container ms-2 mt-5 ">
          <div className="row col-12 justify-content-center  bg-none ms-5">
            {/*BTN'S PAGINATION*/}
            <div className=" col-6 justify-content-center mt-2" id="pagination">
              <nav aria-label="..." className="bg-none text-white">
                <ul className="pagination pagination-lg bg-none text-white border-light alert-link">
                  <li className="page-item bg-none text-white" >
                    <button className="btn btn-md btn-outline-dark border-light alert-link text-white" onClick={() => this.listarComp(0, 10, 'id', 'asc')}>
                      <img src={arrowLastLeft} width="15" height="15" alt="" />
                    </button>
                  </li>
                  <li className="page-item">
                    <button className="btn btn-md btn-outline-dark border-light alert-link text-white">
                      <img src={arrowLeft} width="15" height="15" alt="" />
                    </button>
                  </li>
                  <li className="page-item">
                    <button className="btn btn-md btn-outline-dark border-light alert-link text-white" onClick={() => this.listarComp(0, 10, 'id', 'asc')}>1</button>
                  </li>
                  <li className="page-item">
                    <button className="btn btn-md btn-outline-dark border-light alert-link text-white" onClick={() => this.listarComp(1, 10, 'id', 'asc')}>2</button>
                  </li>
                  <li className="page-item"><button className="btn btn-md btn-outline-dark border-light alert-link text-white" onClick={() => this.listarComp(2, 10, 'id', 'asc')}>3</button></li>
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
                      Página: {this.state.nroPage + 1} / {this.state.nroTotalPages}
                    </button>

                  </li>

                  <li>
                    <button className="btn btn-md btn-outline-dark bg-none border-light alert-link text-white">
                      Elementos: {this.state.nroCurrentElements} / {this.state.nroTotalElements}
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

        <div className='bg-dark'>
          <Modal size='lg' show={this.state.isOpenModalAyuda} onHide={this.closeModalAyuda}>

            <Modal.Body className='bg-dark text-white border-dark'>
              <h5>
                <div class="bg-secondary text-white text-center p-1 ms-2 me-2" role="alert">
                  Acerca de la Gestión de Componentes
                </div>

              </h5>
              <p className=' p-1 ms-2 me-2'>
                En esta sección podemos visualizar los Componentes según los requerimientos deseados, existe paginacion de Componentes, podemos aplicar filtros de búsqueda y las operaciones CRUD requeridas según el rol que se tenga. Los admins podrán
                realizar todas las Operaciones, los usuarios solamente la visualización y búsquedas.
              </p>
              <br />
              <h5>
                <div className="bg-secondary text-white  text-center p-1 ms-2 me-2" role="alert">
                  Filtros/Búsquedas de Componentes
                </div>

              </h5>
              <p className=' p-1 ms-2 me-2'>
                Podemos realizar búsquedas de componentes según la categoría deseada (transistores Mosfet, Capacitores, etc), a través de sus Tipos (Transis. NPN/PNP/Mosfet N/ Mosfet NP, etc). También es posible la búsqueda según su fabricante (Hitachi, Panasonic, etc). Por último se incluye la funcionalidad de búsquedas a través del buscador de componentes.
              </p>
              <br />

              <h5>  <div class="bg-secondary text-white text-center p-1 ms-2 me-2" role="alert">
                Campos de Componentes
              </div>
              </h5>
              <p className=' p-1 ms-2 me-2'>
                Cada campo describe una característica del Componentes específico por fila. Cada Componente posee la funcionalidad de visualizar, editar y eliminar. También podemos agregar un Componentes desde la barra de navegación izquierda de la app.
              </p>


              {/*ACCORDION CAMPOS*/}
              <AccordionModalAyuda />
              {/*FIN ACCORDION CAMPOS*/}

              <div className="text-left mt-5 ms-0 ">
                <strong className='text-decoration-underline p-1 ms-2 me-2'>Soporte Técnico</strong> : andres96energy@hotmail.com
              </div>
            </Modal.Body>
            <Modal.Footer className='bg-dark text-white border-dark'>

              <Button variant="secondary" onClick={this.closeModalAyuda} >Cerrar</Button>
            </Modal.Footer>
          </Modal>

        </div>

        {/*Fin MODAL Ayuda */}






        {/*MODAL Detalle Productos */}
        <div>
          <Modal size='lg' show={this.state.isOpen} onHide={this.closeModal}>
            <Modal.Header variant="dark" closeButton>
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
