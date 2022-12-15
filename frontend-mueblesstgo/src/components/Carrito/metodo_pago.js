const create_metodo_pago = (metodo_pago) => {
    localStorage.setItem("metodo_pago", metodo_pago);
  }


export default function add_to_metodo_pago(metodo_pago) {
    if(!localStorage.getItem("metodo_pago")) { 
      create_metodo_pago(metodo_pago);
    }
    else { 
      localStorage.setItem("metodo_pago", metodo_pago);
    }
    return localStorage.getItem("metodo_pago");
  }