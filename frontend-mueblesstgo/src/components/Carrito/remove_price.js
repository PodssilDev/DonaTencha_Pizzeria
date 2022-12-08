export default function remove_price(precio){
    if(localStorage.getItem("price")) {
      let price = Number(localStorage.getItem("price"));
      price -= precio;
      if(price < 0) {price = 0}
      localStorage.setItem("price", price);
    }
    return localStorage.getItem("price");
}