import React from "react";
import styled from "styled-components";
import logo from "../imgs/logo.png"
import {useState, useEffect} from "react";
import {Drawer} from "@mui/material"
import add_to_cart from "../components/Carrito/add_to_cart";
import remove_cart from "../components/Carrito/remove_cart";
import remove_from_cart from "../components/Carrito/remove_from_cart";
import ProductCartComponent from "./ProductCartComponent";
import Button from 'react-bootstrap/Button';
import sinProductos from "../imgs/sinProductos.png";
import add_to_price from "../components/Carrito/add_to_price";

export default function NavbarComponent3(){
  const [show, setShow] = useState(false);

    
    const [cart, setCart] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []);

    const[price, setPrice] = useState(localStorage.getItem("price") ?  JSON.parse(localStorage.getItem("price")) : 2);

    const add = (id, nombre, descripcion, precio, img) =>{
        setCart(add_to_cart({id, nombre, descripcion, precio, img}));
        setPrice (add_to_price(precio));
    }

    const remove_i = (id) =>{
        setCart(remove_from_cart(id, false));
    }
    

  
    return(
      <NavStyle>
        <div></div>
        <nav className="sticky">
            <header class="header">
                <div class="logo">
                    <h1>Doña Tencha</h1>
                </div>
                <a class="btn" href="/"><button>Homepage</button></a>
                <a class="btn" href="/menu"><button>Menú</button></a>
                <a class="btn" href="/"><button>Arma tu Pizza</button></a>
                <Button onClick= {() => setShow(true)}>Mi carrito
                <img src = "https://cdn-icons-png.flaticon.com/512/107/107831.png" height={"25px"}></img></Button>
                <Drawer anchor = "left" open = {show} onClose = {() => setShow(false)}>
                  <HomeStyle>
                  
            <div className = "carrito1">
              <h1> <b><i>Mi carrito</i></b></h1>
              {cart.length !== 0 ? <h2>Total: ${price[0]}</h2>  : <></>}
              {cart.length !== 0 ? <a class="btn" href="/pagar"><button>Ir a la vista de pago</button></a> : <></>}
            {cart.length === 0 ? 
            <>
            <img src = {sinProductos} alt = ""></img>
            <br></br>
            <a class="btn" href="/menu"><button>Recargar Carrito</button></a>
            
            </>
            :
            cart.items.map(itemm => {
                return(
                    <>
                    <ProductCartComponent id={itemm.id} nombre={itemm.nombre} precio={itemm.precio} img={itemm.img} cantidad = {itemm.quantity} add={() => add(itemm.id, itemm.nombre, itemm.descripcion, itemm.precio, itemm.img)} remove_item = {() => remove_i(itemm.id)}></ProductCartComponent>
                    
                        </>
                        
            );
            })}
            </div>
            </HomeStyle> 
            </Drawer>
            </header>
            </nav>
            </NavStyle>
        
    )
}



const HomeStyle = styled.nav`
.text-center{

  padding-top: 300px;
}
.carrito1{

  text-align: center;
  justify-content: center;
  padding-top: 100px;
}
.btn button{

  font-weight: 700;
  color: #1b3039;
  padding: 9px 25px;
  background: #eceff1;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
}
.btn button:hover{
    background-color: #e2f1f8;
    color: #ffbc0e;
    transform: scale(1.1);
}
`
const NavStyle = styled.nav`

nav {
  position: fixed;
  top: 0;
  z-index: 99999;
  width: 100%;
  
}
nav.sticky {
  position: fixed;
  top: 0;
  z-index: 99999;
  width: 100%;
}
.header{
    background-color: #DC7633;
    display: flex;
    justify-content: flex-end;

    align-items: center;
    height: 85px;
    padding: 5px 10%;
  }

.header .logo{
    margin-right: auto;
    color: white;
    font-family: 'Pacifico',serif;
  }
.header .imageLogo{
  margin-right: auto;
}
.header .btn button{
    margin-left: 20px;
    font-weight: 700;
    color: #1b3039;
    padding: 9px 25px;
    background: #eceff1;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
  }
.header .btn button:hover{
    background-color: #e2f1f8;
    color: #ffbc0e;
    transform: scale(1.1);
  }


`