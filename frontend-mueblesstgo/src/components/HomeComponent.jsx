import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'
import productos from "./jsons/products.json";
import NavbarComponent3 from "./NavbarComponent3";
import Button from 'react-bootstrap/Button';
import logo from "../imgs/logo.png"
import Carrousel from "../components/Carrousel";
import delivery from "../imgs/delivery.png";
import Footer from "../components/Footer";

export default function Home(){
    return(
        <div>
            <GlobalStyle />
            <NavbarComponent3 />
            <HomeStyle>
            <div className = "carrousel"></div>
            <Carrousel></Carrousel>
            <hr></hr>
            <br>
            </br>
            <h1 className="text-center"> <b>Nuevos en el menú:</b></h1>
            <div class="box-area">
                    <div class="single-box" key = {productos[3].id}>
                            <div class="img-area">
                                <img src = {productos[3].img} width = "150" height = "160" alt = "" ></img>
                            </div>
                        <div class="img-text">
                            <span class="header-text"><strong>{productos[3].nombre}</strong></span>
                            <br></br>
                            <span >{productos[3].descripcion}</span>
                            <br></br>
                            <span ><strong>{productos[3].precio}</strong></span>
                            <br></br>
                            <button varian="primary">Añadir al carrito </button>
                        </div>
                    </div>
                    <div class="single-box" key = {productos[4].id}>
                            <div class="img-area">
                                <img src = {productos[4].img} width = "150" height = "160" alt = "" ></img>
                            </div>
                        <div class="img-text">
                            <span class="header-text"><strong>{productos[4].nombre}</strong></span>
                            <br></br>
                            <span >{productos[4].descripcion}</span>
                            <br></br>
                            <span ><strong>{productos[4].precio}</strong></span>
                            <br></br>
                            <button varian="primary">Añadir al carrito </button>
                        </div>
                    </div>
                    <div class="single-box" key = {productos[5].id}>
                            <div class="img-area">
                                <img src = {productos[5].img} width = "150" height = "160" alt = "" ></img>
                            </div>
                        <div class="img-text">
                            <span class="header-text"><strong>{productos[5].nombre}</strong></span>
                            <br></br>
                            <span >{productos[5].descripcion}</span>
                            <br></br>
                            <span ><strong>{productos[5].precio}</strong></span>
                            <br></br>
                            <button varian="primary">Añadir al carrito </button>
                        </div>
                    </div>
                    
                </div>
                <div className = "menu">
                <button varian="primary">Revisa nuestro menú</button>
                </div>
                <br></br>
                    <hr></hr>
                    <div className = "delivery">
                        <img src = {delivery} width = "30%" height = "30%" alt = "" ></img>
                        <h1><b>Y si no puedes venir a retirar el pedido no te preocupes, ¡Te lo llevamos rapido!</b></h1>
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
    padding-top: 8px;
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