import axios from 'axios';


const URL_COMPONENTES = 'http://localhost:8096/v1/componentes/';
const nroPage=0;
const nroElementos=10;
const orderType='id';
const orderBy='asc';


class ApiProductosService {
    
    
    getProductos(){
        return axios.get(`${URL_COMPONENTES}listado?page=${nroPage}&size=${nroElementos}&sort=${orderType},${orderBy}`);
    }
    

    /*
     getProductos = () => {
        axios.get(`${URL_COMPONENTES}listado?page=${nroPage}&size=${nroElementos}&sort=${orderType},${orderBy}`)
        .then(response => {
          console.log(response.data.results);
        })
        .catch(error => {
          console.log(error)
        });
    
    
      }

      */

}

export default new ApiProductosService();