import axios from 'axios';


const URL_COMPONENTES = 'http://localhost:8096/v1/componentes/';



class ApiProductosService {
    
    
    getProductos(nroPage, nroElementos, orderType, orderBy){
        return axios.get(`${URL_COMPONENTES}listado?page=${nroPage}&size=${nroElementos}&sort=${orderType},${orderBy}`);
    }
    

    

}

export default new ApiProductosService();