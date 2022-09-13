import React from 'react';

//Images
//Crud
import detailsProd from '../../assets/images/icons-crud/details-product.svg';
import editProd from '../../assets/images/icons-crud/edit-product.svg';
import deleteProd from '../../assets/images/icons-crud/delete-product.svg';
//Pagination
import arrowLastLeft from '../../assets/images/pagination/arrowLastLeft.png';
import arrowLeft from '../../assets/images/pagination/arrowLeft.png';
import arrowRight from '../../assets/images/pagination/arrowRight.png';
import arrowLastRight from '../../assets/images/pagination/arrowLastRight.png';





import ApiProductosService from '../../services/productos/ProductosService';





export default class CardsProductos extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      productos: []
    }
  }


  //Config Listados Paginados

  getProductosList(nroPage, nroElementos, orderType,orderBy){
    ApiProductosService.getProductosList(nroPage, nroElementos, orderType,orderBy)
    .then((response) => {
      this.setState({ productos: response.data.content });
      console.log(response.data.content);
    })
    .catch(function (ex) {
      console.log('Response parsing failed. Error: ', ex);
    });;
  }


  getProductosFilter(orderField,orderFilter,nroPage, nroElementos, orderType,orderBy){
    ApiProductosService.getProductosFilter(orderField,orderFilter,nroPage, nroElementos, orderType,orderBy)
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
    this.getProductosList(0,10,'id','asc');
   }
 


  render() {
    return (

      <>

        <div className='d-flex d-row'>

{/*FILTROS ASIDE*/}
          <div className=''>


            {/*Filtro por Tipos*/}
<div className='me-0 bg-dark'>
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
                            <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={()=>this.getProductosFilter('descripcion','Transistor BJT NPN',0,10,'id','asc')}>
                                Transistores BJT NPN
                            </button>
                        </li>
                        <li className='bg-none'>
                            <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={()=>this.getProductosFilter('descripcion','Transistor BJT PNP',0,10,'id','asc')}>
                                Transistores BJT PNP
                            </button>
                        </li>


                        <li className='mt-1 p-1'>
                            <button type="button" className='btn p-1' data-bs-dismiss="offcanvas" onClick={()=>this.getProductosFilter('descripcion','Transistor Mosfet NP',0,10,'id','asc')}>
                                Transistores Mosfet NP
                            </button>
                        </li>

                        <li className='mt-1 p-1'>
                            <button type="button" className='btn p-1' data-bs-dismiss="offcanvas" onClick={()=>this.getProductosFilter('descripcion','Transistor Mosfet N',0,10,'id','asc')}>
                                Transistores Mosfet N
                            </button>
                        </li>

                        <li className='mt-1'>
                            <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={()=>this.getProductosFilter('descripcion','Aluminio Radial',0,10,'id','asc')}>
                                Capac. Electr. Alum. Radial
                            </button>
                        </li>

                        <li className='mt-1'>
                            <button type="button" class="btn" data-bs-dismiss="offcanvas" onClick={()=>this.getProductosFilter('descripcion','Aluminio Axial',0,10,'id','asc')}>
                                Capac. Electr. Alum. Axial
                            </button>
                        </li>

                        <li className='mt-1'>
                            <button type="button" class="btn">
                                Capac. Electr. Alum. Terminal Roscado
                            </button>
                        </li>

                        <li className='mt-1'>
                            <button type="button" class="btn">
                                Capac. Electr. Alum. Encaje a Presión
                            </button>
                        </li>

                        <li className='mt-1'>
                            <button type="button" class="btn">
                                Capac. Electr. Pol. Orgánico
                            </button>
                        </li>

                       
                    </ul>
               
                    </div>
                </div>
{/*Fin Filtro por Tipos*/}

{/*Filtro por Categoría*/}
<div className='me-0 mt-2 bg-dark'>
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
                            <button type="button" class="btn">
                                Transistores BJT
                            </button>
                        </li>


                        <li className='mt-1 p-1'>
                            <button type="button" className='btn p-1'>
                                Transistores Mosfet
                            </button>
                        </li>

                        <li className='mt-1'>
                            <button type="button" class="btn">
                                Capacitores Electr.
                            </button>
                        </li>

                        <li className='mt-1'>
                            <button type="button" class="btn">
                                Resistores Alta Frec.
                            </button>
                        </li>

                        <li className='mt-1'>
                            <button type="button" class="btn">
                                Micros Pics.
                            </button>
                        </li>

                        <li className='mt-1'>
                            <button type="button" class="btn">
                                Micros Avrs.
                            </button>
                        </li>

                        <li className='mt-1'>
                            <button type="button" class="btn">
                               Placas Arduino.
                            </button>
                        </li>

                        <li className='mt-1'>
                            <button type="button" class="btn">
                               Placas Esp8266.
                            </button>
                        </li>

                        <li className='mt-1'>
                            <button type="button" class="btn">
                               Placas Esp32.
                            </button>
                        </li>

                    </ul>
               
                    </div>
                </div>
{/*Fin Filtro por Categoría*/}


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
                            <button type="button" class="btn">
                            SHANTOU HUASHAN
                            </button>
                        </li>


                        <li className='mt-1 p-1'>
                            <button type="button" className='btn p-1'>
                            INCHANGE SEMICONDUCTOR
                            </button>
                        </li>

                        <li className='mt-1'>
                            <button type="button" class="btn">
                            CENTRAL SEMICONDUCTOR
                            </button>
                        </li>

                        <li className='mt-1'>
                            <button type="button" class="btn">
                            STMicroelectronics
                            </button>
                        </li>

                        <li className='mt-1'>
                            <button type="button" class="btn">
                            Renesas Electronics
                            </button>
                        </li>

                        <li className='mt-1'>
                            <button type="button" class="btn">
                            Slkor
                            </button>
                        </li>

                        <li className='mt-1'>
                            <button type="button" class="btn">
                            VISHAY
                            </button>
                        </li>

                        <li className='mt-1'>
                            <button type="button" class="btn">
                            PANASONIC
                            </button>
                        </li>
                        <li className='mt-1'>
                            <button type="button" class="btn">
                            HITACHI
                            </button>
                        </li>
                        <li className='mt-1'>
                            <button type="button" class="btn">
                            ELNA
                            </button>
                        </li>

                        <li className='mt-1'>
                            <button type="button" class="btn">
                            RUBYCON
                            </button>
                        </li>

                    </ul>
               
                    </div>
                </div>
{/*Fin Filtro por Fabricantes*/}
</div>
{/*FIN FILTROS ASIDE*/}

          <div className="container row row-cols-2 row-cols-sm-2 row-cols-md-3  row-cols-lg-4 row-cols-xl-5 g-4 justify-content-center ms-0">

            {
              this.state.productos.map(producto =>

                <div className='col'>
                  <div className="card h-100 w-100 " id="cardsTable" key={producto.id}>
                    <p className='small m-0'>{producto.codigo.substring(0, 18)}..</p>
                    <img src={producto.imagen} target="_blank" width="120px" height="150px" className="card-img-top m-0" alt='imagen del componente' />
                    <div className="card-body text-center p-1">

                      <p className='small'>{producto.nroPieza} / {producto.categoria.substring(0, 18)}.. / {producto.fabricante}</p>

                      <hr />

                      <h6 className="card-title text-center">
                        {producto.descripcion.substring(0, 40)}...
                      </h6>

                      <br />

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
                              <img src={detailsProd} alt="" width="25" height="25" title="Detalles Producto" className="" />
                              {/*Fin Icono Visualizar Producto*/}
                            </button>
                            <button className="btn btn-warning border-secondary alert-link m-1 p-1">
                              {/*Icono Editar Producto*/}
                              <img src={editProd} alt="" width="25" height="25" title="Editar Producto" className="" />
                              {/*Fin Icono Editar Producto*/}
                            </button>

                            {/* BTN MODAL DELETE CHECK  */}
                            <button type="button" className="btn btn-danger border-secondary alert-link m-1 p-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop02">
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
                <button className="btn btn-outline-dark border-light alert-link text-white" onClick={()=>this.getProductosList(0,10,'id','asc')}>
                  <img src={arrowLastLeft} width="15" height="15" alt="" />
                </button>
              </li>
              <li className="page-item">
                <button className="btn btn-outline-dark border-light alert-link text-white">
                  <img src={arrowLeft} width="15" height="15" alt="" />
                </button>
              </li>
              <li className="page-item">
                <button className="btn btn-outline-dark border-light alert-link text-white" onClick={()=>this.getProductosList(0,10,'id','asc')}>1</button>
              </li>
              <li className="page-item">
                <button className="btn btn-outline-dark border-light alert-link text-white" onClick={()=>this.getProductosList(1,10,'id','asc')}>2</button>
              </li>
              <li className="page-item"><button className="btn btn-outline-dark border-light alert-link text-white" onClick={()=>this.getProductosList(2,10,'id','asc')}>3</button></li>
              <li className="page-item">
                <button className="btn btn-outline-dark border-light alert-link text-white">
                  <img src={arrowRight} width="15" height="15" alt="" />
                </button>
              </li>
              <li className="page-item">
                <button
                  className="btn btn-outline-dark border-light alert-link text-white">
                  <img src={arrowLastRight} width="15" height="15" alt="" />
                </button>
              </li>

              <li className="page-item bg-none text-white ms-5">
               
               <button className="btn btn-outline-dark border-light alert-link text-white"
               >
                 Página:
               </button>

               </li>

               <li>
               <button className="btn btn-outline-dark bg-none border-light alert-link text-white">
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



      </>

    );

  }



}
