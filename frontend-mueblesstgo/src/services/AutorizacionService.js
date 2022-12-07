import axios from "axios";

class AutorizacionService {
    
    IngresarAutorizacion(autorizacion, token){
        return axios.post(`http://localhost:8080/autorizacion`, autorizacion, {
            headers: { 'Authorization': `Bearer ${token}` }
          });
    }
}

export default new AutorizacionService();