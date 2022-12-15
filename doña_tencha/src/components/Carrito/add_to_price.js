const create_price = (precio) => {
    localStorage.setItem("price", precio);
  }


export default function add_to_price(precio) {
    if(!localStorage.getItem("price")) { 
      create_price(precio);
    }
    else { 
      let price = Number(localStorage.getItem("price"));
       price += precio;
      localStorage.setItem("price", price);
    }
    return localStorage.getItem("price");
  }