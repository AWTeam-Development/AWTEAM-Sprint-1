import React from 'react';
//Images




export default class BuscadorAsideProductos extends React.Component {


    render() {
        return (
            <>
                <div className='ms-0 bg-dark text-white' id='buscadorAside'>

                    <li className='bg-none'>
                    <button type="button" class="btn">
                        Transistores BJT
                    </button>
                    </li>


                    <li className='mt-1'>
                    <button type="button" class="btn">
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


                </div>

            </>
        );
    }

}
