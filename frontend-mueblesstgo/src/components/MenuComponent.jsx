import React, { Component } from "react";
import { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'
import productos from "./jsons/products.json";
import NavbarComponent3 from "./NavbarComponent3";
import Button from 'react-bootstrap/Button';
import Footer from "../components/Footer";
import add_to_cart from "../components/Carrito/add_to_cart";
import remove_cart from "../components/Carrito/remove_cart";
import remove_from_cart from "../components/Carrito/remove_from_cart";
import Product from "./ProductComponent";
import add_to_price from "./Carrito/add_to_price";
import swal from 'sweetalert';

export default function Menu(){

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

    const deleteCart = () =>{
        setCart(remove_cart());
    }

    const cInfo = () =>{
        console.log(cart);
    }

    return (
        <div>
            <GlobalStyle />
            <HomeStyle>
                <NavbarComponent3 />
                <h1 className="text-center"> <b>Menú - ¿Que vas a querer?</b></h1>
                <div class="box-area">
                {productos.map(products => {
                    return(
                                    <Product id={products.id} nombre={products.nombre} descripcion={products.descripcion} precio={products.precio} img={products.img} add={() => add(products.id, products.nombre, products.descripcion, products.precio, products.img)}></Product>
                            );})}
                </div>
                <button onClick = {deleteCart}></button>
                <button onClick = {cInfo}></button>
            </HomeStyle>
            <Footer></Footer>

        </div>
    );
}



const GlobalStyle = createGlobalStyle`
    body { 
        background-color: #CD6155;
`
const HomeStyle = styled.nav`

.text-center {
    text-align: center;
    justify-content: center;
    padding-top: 100px;
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

`