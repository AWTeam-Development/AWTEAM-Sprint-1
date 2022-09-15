import axios from 'axios';


const URL_COMPONENTES = 'http://localhost:8096/api/v1/componentes/';



class ApiProductosService {
    
    getProductosList(nroPage, nroElementos, orderType, orderBy){
        return axios
        .get(`${URL_COMPONENTES}listado?page=${nroPage}&size=${nroElementos}&sort=${orderType},${orderBy}`);
    }
   
    getProductosFilter(orderField, orderFilter,nroPage, nroElementos, orderType, orderBy){
        return axios
        .get(`${URL_COMPONENTES}${orderField}/${orderFilter}?page=${nroPage}&size=${nroElementos}&sort=${orderType},${orderBy}`);
    }
    

    

}

export default new ApiProductosService();