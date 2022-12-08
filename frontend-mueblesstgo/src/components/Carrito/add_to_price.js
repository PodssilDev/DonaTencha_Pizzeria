const create_price = () => {
    localStorage.setItem("price", JSON.stringify({price: [{...0}]}));
  }


export default function add_to_price(precio) {
    if(!localStorage.getItem("price")) { 
      create_price();
    }
    else { 
      const price = JSON.parse(localStorage.getItem("price"));
        price.price += precio;
      localStorage.setItem("price", JSON.stringify(price));
    }
    return JSON.parse(localStorage.getItem("price")).price;
  }