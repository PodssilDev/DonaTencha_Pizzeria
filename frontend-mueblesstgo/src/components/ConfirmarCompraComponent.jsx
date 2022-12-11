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
import ConfirmarCardComponent from "./ConfirmarCardComponent";
import remove_price from "../components/Carrito/remove_price";
import Form from 'react-bootstrap/Form';

export default function ConfirmarCompra(){
    const [show, setShow] = useState(false);

    
    const [cart, setCart] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []);

    const[price, setPrice] = useState(localStorage.getItem("price") ? (localStorage.getItem("price")) : 0);
    const[show2, setShow2] = useState("none");

    const handleChange1 = ()=> {
        setShow2("retiro")
        console.log(show2)
    }

    const handleChange2 = ()=> {
        setShow2("despacho")
        console.log(show2)
    }

    const add = (id, nombre, descripcion, precio, img) =>{
        setCart(add_to_cart({id, nombre, descripcion, precio, img}));
        console.log(precio);
        setPrice (add_to_price(precio));
    }

    const remove_i = (id, precio) =>{
        setCart(remove_from_cart(id, false));
        setPrice(remove_price(precio));
    }

    return(
        
        <div>
        <NavbarComponent3></NavbarComponent3>
        <GlobalStyle />
        <HomeStyle>
        <h1 className="text-center"> <b>Mi carrito de compras</b></h1>
        <h2 className = "text-center2"><u>Total a pagar: ${price}</u></h2>
        <div className = "separacion">
        <div className = "box-area">
        {cart.items.map(itemm => {
                return(
                   
                    
        <ConfirmarCardComponent id={itemm.id} nombre={itemm.nombre} descripcion = {itemm.descripcion} precio={itemm.precio} img={itemm.img} cantidad = {itemm.quantity} add={() => add(itemm.id, itemm.nombre, itemm.descripcion, itemm.precio, itemm.img)} remove_item = {() => remove_i(itemm.id, itemm.precio)}></ConfirmarCardComponent>
       
        );
        })}
         </div>
        
        <div className = "sector-pago">
        <div className="mainclass">
                        <div className="form1">
                            <h1 className="text-pago"><b>Mis Datos Personales</b></h1>
                            <div className="formcontainer">
                                <hr></hr>
                                <div className="container">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="rut">
                                            <Form.Label>Nombre Completo</Form.Label>
                                            <Form.Control type="rut" placeholder="Ingrese su nombre completo"  required = "true"/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="fecha">
                                            <Form.Label>Correo de Contacto</Form.Label>
                                            <Form.Control type="fecha" placeholder="Ingrese su correo de contacto" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="fecha">
                                            <Form.Label>Número de Celular</Form.Label>
                                            <Form.Control type="fecha" placeholder="Ingrese su número de celular (Incluya +569)" />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Seleccione como quiere recibir su pedido</Form.Label> <br></br>
                                            <Form.Check type="radio" label="Retiro en tienda" name="formHorizontalRadios" id="formHorizontalRadios1" onChange={handleChange1}/>
                                            <Form.Check type="radio" label="Despacho a domicilio" name="formHorizontalRadios" id="formHorizontalRadios2" onChange={handleChange2}/>
                                        </Form.Group>
                           
                                    </Form>
                                </div>
                                <br></br>
                                {show2 == "retiro" ?            <><Form.Group className="mb-3" controlId="fecha">
                                        <Form.Label>Seleccione el local donde retirará su pedido</Form.Label>
                                        <br></br>
                                        <Form.Select>
        <option>Av. Libertador Bernardo O'Higgins, 3363</option>
        <option>Av. Victor Jara, 3524</option>
        <option>Av. Tingeso, 1312</option>
      </Form.Select>
      <br></br>
      Su pedido estara listo en: {Math.round(Math.random()*100)} minutos
                                        </Form.Group> <Button className="boton">Ir a pagar</Button> </> : null}
                                {show2 == "despacho" ?            <><Form.Group className="mb-2" controlId="fecha">
                                        <Form.Label>Ingrese su dirección de despacho</Form.Label>
                                        <Form.Control type="fecha" placeholder="Ingrese su dirección de despacho"  required/>
                                        Su pedido estará listo en: {Math.round(Math.random()*100)} minutos
                                        </Form.Group><Button className="boton">Ir a pagar</Button> </> : null}
                                
                            </div>
                        </div>
                    </div>
                
        </div>
        </div>
         </HomeStyle>
         <Footer></Footer>
         
        </div>
        
    )
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
.text-pago {
    text-align: center;
    justify-content: center;
    padding-top: 20px;

}

.text-center2 {
    text-align: center;
    justify-content: center;
    
    color: #fff;

}

.separacion{
    display: flex;
    flexDirection: row;

.sector-pago{
    width: 50%;
}

.box-area{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 50%;
}
.mainclass{
    margin-top: 50px;
    display: flex;
    justify-content: center;
    font-family: Roboto, Arial, sans-serif;
    font-size: 15px;
}

.form1{
    border: 15px solid #DC7633;
    background-color: #fff;


}

input[type=rut], input[type=fecha] {
    width: 100%;
    padding: 16px 8px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}





.formcontainer {
    text-align: left;
    margin: 2px 90px 15px;
}

.container {
    padding: 2px 0;
    text-align:left;
}

span.psw {
    float: right;
    padding-top: 0;
    padding-right: 15px;
}
`