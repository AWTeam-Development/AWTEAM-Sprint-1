import React from "react";


export default class AccordionModalAyuda extends React.Component {

    render() {
        return (
    
    <>
    


                {/*ACCORDION CAMPOS*/}
              <div className='mt-5 ms-5 me-5'>

                <div class="accordion ms-3 me-3" id="accordionPanelsStayOpenExample">
                  <div class="accordion-item bg-dark text-white">
                    <h2 class="accordion-header " id="panelsStayOpen-headingOne">
                      <button class="accordion-button bg-secondary text-white p-1" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        <strong> <li>Código</li></strong>
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                      <div class="accordion-body">
                        Este código hace referencia al Componente, no es posible que existan duplicados, es válido solo letras, números y ciertos caracteres.<code> Además de un máximo de 100 caracteres.</code>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item bg-dark text-white">
                    <h2 class="accordion-header bg-secondary text-white" id="panelsStayOpen-headingTwo">
                      <button class="accordion-button collapsed bg-secondary text-white p-1" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        <strong> <li>Imagen</li></strong>
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse bg-dark text-white" aria-labelledby="panelsStayOpen-headingTwo">
                      <div class="accordion-body bg-dark text-white">
                        La imagen del Componente se almacena en los servidores del repositorio del proyecto<code>. Solo se permiten caracteres formato URL.</code>
                      </div>
                    </div>
                  </div>


                  <div class="accordion-item bg-dark text-white">
                    <h2 class="accordion-header bg-dark text-white" id="panelsStayOpen-headingThree">
                      <button class="accordion-button collapsed bg-secondary text-white p-1" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        <strong> <li>Datasheet</li></strong>
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse bg-dark text-white" aria-labelledby="panelsStayOpen-headingThree">
                      <div class="accordion-body bg-dark text-white">La Hoja de datos representa todas las específicaciones técnicas del componente en <code>formato pdf.</code>
                      </div>
                    </div>
                  </div>



                  <div class="accordion-item bg-dark text-white">
                    <h2 class="accordion-header bg-dark text-white" id="panelsStayOpen-headingFour">
                      <button class="accordion-button collapsed bg-secondary text-white p-1" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                        <strong> <li>Nro.Pieza</li></strong>
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse bg-dark text-white" aria-labelledby="panelsStayOpen-headingFour">
                      <div class="accordion-body bg-dark text-white">   El nro de pieza hace referencia mismo al Componente. A comparación de la código, este
                        <code> es una acotación para la clasificación de los Componentes.</code>
                      </div>
                    </div>
                  </div>



                  <div class="accordion-item bg-dark text-white">
                    <h2 class="accordion-header bg-dark text-white" id="panelsStayOpen-headingFive">
                      <button class="accordion-button collapsed bg-secondary text-white p-1" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                        <strong> <li>Categoría</li></strong>
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse bg-dark text-white" aria-labelledby="panelsStayOpen-headingFive">
                      <div class="accordion-body bg-dark text-white">Todos los componentes se almacenan en el sistema según su categoría. Diferenciadas según el componente y tipo <code> (Transistores BJT, Transistores Mosfet, etc).</code>
                      </div>
                    </div>
                  </div>



                  <div class="accordion-item bg-dark text-white">
                    <h2 class="accordion-header bg-dark text-white" id="panelsStayOpen-headingSix">
                      <button class="accordion-button collapsed bg-secondary text-white p-1" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                        <strong> <li>Descripción</li></strong>
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse bg-dark text-white" aria-labelledby="panelsStayOpen-headingSix">
                      <div class="accordion-body bg-dark text-white">Nos indica el Nombre y Tipo detallado del componente . <code> Este campo no podrá exceder los 200 carácteres.</code>
                      </div>
                    </div>
                  </div>



                  <div class="accordion-item bg-dark text-white">
                    <h2 class="accordion-header bg-dark text-white" id="panelsStayOpen-headingSeven">
                      <button class="accordion-button collapsed bg-secondary text-white p-1" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven">
                        <strong> <li>Fabricante</li></strong>
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseSeven" class="accordion-collapse collapse bg-dark text-white" aria-labelledby="panelsStayOpen-headingSeven">
                      <div class="accordion-body bg-dark text-white">Existen inumerables fabricantes para el listado de componentes. Algunos de ellos son  <code> Hitachi, Panasonic, Slkor, Microchip, etc.</code>
                      </div>
                    </div>
                  </div>


                  <div class="accordion-item bg-dark text-white">
                    <h2 class="accordion-header bg-dark text-white" id="panelsStayOpen-headingEight">
                      <button class="accordion-button collapsed bg-secondary text-white p-1" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false" aria-controls="panelsStayOpen-collapseEight">
                        <strong> <li>Stock</li></strong>
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseEight" class="accordion-collapse collapse bg-dark text-white" aria-labelledby="panelsStayOpen-headingEight">
                      <div class="accordion-body bg-dark text-white">El stock no puede ser cero y debe estar por arriba de los 10 componentes.  <code> Su Máximo son 10.000 unidades.</code>
                      </div>
                    </div>
                  </div>



                  <div class="accordion-item bg-dark text-white">
                    <h2 class="accordion-header bg-dark text-white" id="panelsStayOpen-headingNine">
                      <button class="accordion-button collapsed bg-secondary text-white p-1" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseNine" aria-expanded="false" aria-controls="panelsStayOpen-collapseNine">
                        <strong> <li>Precio</li></strong>
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseNine" class="accordion-collapse collapse bg-dark text-white" aria-labelledby="panelsStayOpen-headingNine">
                      <div class="accordion-body bg-dark text-white">Todos los precios de se manejan en dolares. Es posible que se agregue una <code> nueva funcionalidad para la conversión de tipo de moneda.</code>
                      </div>
                    </div>
                  </div>



                </div>

              </div>

              {/*FIN ACCORDION CAMPOS*/}





    </>

    );

  }



}
