import React from "react";
import styled from "styled-components";
import {useState, useEffect} from "react";
import {Drawer} from "@mui/material"
import add_to_cart from "../components/Carrito/add_to_cart";
import remove_from_cart from "../components/Carrito/remove_from_cart";
import ProductCartComponent from "./ProductCartComponent";
import Button from 'react-bootstrap/Button';
import sinProductos from "../imgs/sinProductos.png";
import add_to_price from "../components/Carrito/add_to_price";
import remove_price from "../components/Carrito/remove_price";
import swal from 'sweetalert';

export default function NavbarComponent3(){
  const [show, setShow] = useState(false);

    
    const [cart, setCart] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []);

    const[price, setPrice] = useState(localStorage.getItem("price") ? (localStorage.getItem("price")) : 0);

    const add = (id, nombre, descripcion, precio, img) =>{
      swal({
        title: "¿Está seguro de que desea agregar otra unidad del producto al carrito de compras?",
        icon: "warning",
        buttons: ["Cancelar", "Agregar"],
        dangerMode: true
    }).then(respuesta=>{
        if(respuesta){
            swal("Producto agregado al carrito de compras.", {icon: "success"});
            setCart(add_to_cart({id, nombre, descripcion, precio, img}));
            console.log(precio);
            setPrice (add_to_price(precio));
        }
        else{
            swal({text: "Producto no agregado al carrito de compras.", icon: "error"});
        }
    });
    }

    const remove_i = (id, precio) =>{
      swal({
        title: "¿Está seguro de que desea eliminar una unidad del producto del carrito de compras?",
        icon: "warning",
        buttons: ["Cancelar", "Agregar"],
        dangerMode: true
    }).then(respuesta=>{
        if(respuesta){
            swal("Producto eliminado del carrito de compras.", {icon: "success"});
            setCart(remove_from_cart(id, false));
            setPrice(remove_price(precio));
        }
        else{
            swal({text: "No se ha eliminado el producto del carrito de compras.", icon: "error"});
        }
    });
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
                <a class="btn" href="/crear-pizza"><button>Arma tu Pizza</button></a>
                <Button onClick= {() => setShow(true)}>Mi carrito
                <img src = "https://cdn-icons-png.flaticon.com/512/107/107831.png" height={"25px"}></img></Button>
                <Drawer anchor = "left" open = {show} onClose = {() => setShow(false)}>
                  <HomeStyle>
                  
            <div className = "carrito1">
              <h1> <b><i>Mi carrito</i></b></h1>
              {cart.length !== 0 ? <h2>Total: ${price}</h2>  : <></>}
              {cart.length !== 0 ? <a class="btn" href="/confirmar-compra"><button>Ir a confirmar la compra</button></a> : <></>}
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
                    <ProductCartComponent id={itemm.id} nombre={itemm.nombre} precio={itemm.precio} img={itemm.img} cantidad = {itemm.quantity} add={() => add(itemm.id, itemm.nombre, itemm.descripcion, itemm.precio, itemm.img)} remove_item = {() => remove_i(itemm.id, itemm.precio)}></ProductCartComponent>
                    
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