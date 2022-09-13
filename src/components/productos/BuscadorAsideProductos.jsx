import React from 'react';

//Images



export default class BuscadorAsideProductos extends React.Component {


    render() {
        return (
            <>
            <div className='me-0'>
                <a className="btn btn-dark" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                    Filtro de Productos
                </a>
                </div>

                <div className="offcanvas offcanvas-start bg-dark text-white" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Categoría de Productos</h5>
                        <button type="button" className="btn-close btn-secondary text-reset text-white bg-secondary" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body bg-dark text-white" id='buscadorAside'>
                    <ul className=''>
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
                                Resistores Alta Frec.
                            </button>
                        </li>

                    </ul>
               
                    </div>
                </div>

            </>
        );
    }
}