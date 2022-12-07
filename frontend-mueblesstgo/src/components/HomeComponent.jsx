import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'
import productos from "../components/jsons/products.json";
import NavbarComponent3 from "./NavbarComponent3";
import Button from 'react-bootstrap/Button';



export default function Home(){
    return (
        <div>
            <GlobalStyle />
            <HomeStyle>
                <NavbarComponent3 />
                <h1 className="text-center"> <b>Menú - ¿Que vas a querer?</b></h1>
                <div class="box-area">
                {productos.map(products => {
                            return (
                    <div class="single-box" key = {products.id}>
                            <div class="img-area">
                                <img src = {products.img} width = "150" height = "160" alt = "" ></img>
                            </div>
                        <div class="img-text">
                            <span class="header-text"><strong>{products.nombre}</strong></span>
                            <br></br>
                            <span >{products.descripcion}</span>
                            <br></br>
                            <span ><strong>{products.precio}</strong></span>
                            <br></br>
                            <button varian="primary">Añadir al carrito </button>
                        </div>
                    </div>
                            );})}
                </div>
            </HomeStyle>

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

`