import axios from "axios";

class JustificativoService {
    
    IngresarJustificativo(justificativo, token){
        return axios.post(`http://localhost:8080/justificativo`, justificativo, {
            headers: { 'Authorization': `Bearer ${token}` }
          });
    }
}

export default new JustificativoService();