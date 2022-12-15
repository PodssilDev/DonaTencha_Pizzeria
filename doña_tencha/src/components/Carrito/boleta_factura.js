const create_boleta_factura = (boleta_factura) => {
    localStorage.setItem("boleta_factura", boleta_factura);
  }


export default function add_to_boleta_factura(boleta_factura) {
    if(!localStorage.getItem("boleta_factura")) { 
      create_boleta_factura(boleta_factura);
    }
    else { 
      localStorage.setItem("boleta_factura", boleta_factura);
    }
    return localStorage.getItem("boleta_factura");
  }