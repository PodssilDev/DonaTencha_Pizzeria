import React, { Component } from "react";
import { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'
import productos from "./jsons/products.json";
import NavbarComponent3 from "./NavbarComponent3";
import Carrousel from "../components/Carrousel";
import delivery from "../imgs/delivery.png";
import Footer from "../components/Footer";
import Product from "./ProductComponent";
import add_to_cart from "../components/Carrito/add_to_cart";
import add_to_price from "./Carrito/add_to_price";
import swal from 'sweetalert';

export default function Home(){

    const [cart, setCart] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []);
    const[price, setPrice] = useState(localStorage.getItem("price") ? (localStorage.getItem("price")) : 0);

    const add = (id, nombre, descripcion, precio, img) =>{
        swal({
            title: "¿Está seguro de que desea agregar el producto al carrito de compras?",
            icon: "warning",
            buttons: ["Cancelar", "Agregar"],
            dangerMode: true
        }).then(respuesta=>{
            if(respuesta){
                swal("Producto agregado al carrito de compras.", {icon: "success"});
                setCart(add_to_cart({id, nombre, descripcion, precio, img}));
                setPrice(add_to_price(precio));
                window.location.reload();
            }
            else{
                swal({text: "Producto no agregado al carrito de compras.", icon: "error"});
            }
        });
    }



    return(
        <div>
            <GlobalStyle />
            <HomeStyle>
            <NavbarComponent3 />
            <div className = "carrousel"></div>
            <Carrousel></Carrousel>
            <hr></hr>
            <br>
            </br>
            <h1 className="text-center"> <b>Nuevos en el menú:</b></h1>
            <div class="box-area">
            <Product id={productos[3].id} nombre={productos[3].nombre} descripcion={productos[3].descripcion} precio={productos[3].precio} img={productos[3].img} add={() => add(productos[3].id, productos[3].nombre, productos[3].descripcion, productos[3].precio, productos[3].img)}></Product>
            <Product id={productos[4].id} nombre={productos[4].nombre} descripcion={productos[4].descripcion} precio={productos[4].precio} img={productos[4].img} add={() => add(productos[4].id, productos[4].nombre, productos[4].descripcion, productos[4].precio, productos[4].img)}></Product>
            <Product id={productos[5].id} nombre={productos[5].nombre} descripcion={productos[5].descripcion} precio={productos[5].precio} img={productos[5].img} add={() => add(productos[5].id, productos[5].nombre, productos[5].descripcion, productos[5].precio, productos[5].img)}></Product>
                    
                </div>
                <div className = "menu">
                <a href = "/menu"><button varian="primary">Revisa nuestro menú</button></a>
                </div>
                <br></br>
                    <hr></hr>
                    <div className = "delivery">
                        <img src = {delivery} width = "30%" height = "30%" alt = "" ></img>
                        <h1><b>Y si no puedes venir a retirar el pedido no te preocupes, ¡Te lo llevamos rápido!</b></h1>
                    </div>
            </HomeStyle>
            <Footer> </Footer>
            </div>
    )
}

const GlobalStyle = createGlobalStyle`
    body { 
        background-color: #CD6155;
`

const HomeStyle = styled.nav`

.carrousel{
    padding-top: 60px;
}

.text-center {
    text-align: center;
    justify-content: center;
    padding-top: 8px;
    color: #fff;
}

.box-area{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.single-box{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 360px;
    border-radius: 4px;
    background-color: #fff;
    text-align: center;
    margin: 20px;
    padding: 20px;
    transition: .3s
}

.img-area{
    justify-content: upper;
    align-items: upper;
    width: 290px;
    height: 170px;

    padding: 20px;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center center;
}



.header-text{
    font-size: 23px;
    font-weight: 500;
    line-height: 48px;
}
.img-text p{
    font-size: 15px;
    font-weight: 400;
    line-height: 30px;
}
.single-box:hover{
    background: #e84393;
    color: #fff;}

button{

    font-weight: 700;
    color: #1b3039;
    padding: 9px 25px;
    background: #7DCEA0;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
      }
button:hover{
    background-color: #e2f1f8;
    color: #ffbc0e;
    transform: scale(1.1);
      }
    
.delivery{
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #fff;
}
.menu{
    display: flex;
    justify-content: center;
    align-items: center;
    
}
`