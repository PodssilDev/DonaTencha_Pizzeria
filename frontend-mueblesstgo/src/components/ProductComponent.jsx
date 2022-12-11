import React, { Component } from "react";
import styled from "styled-components";

export default function Product({id, img, nombre, descripcion, precio, add}) {
    return (
        <HomeStyle>
            <div class="single-box" key={id}>
                <div class="img-area">
                    <img src={img} width="150" height="160" alt="" ></img>
                </div>
                <div class="img-text">
                    <span class="header-text"><strong>{nombre}</strong></span>
                    <br></br>
                    <span >{descripcion}</span>
                    <br></br>
                    <span ><strong>{"$" + Intl.NumberFormat().format(precio)}</strong></span>
                    <br></br>
                    <button varian="primary" onClick={add}>Añadir al carrito </button>
                </div>
            </div>
        </HomeStyle>
    );
}

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
    width: 360px;
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