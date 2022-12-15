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
import swal from 'sweetalert';

export default function CrearPizza(){

    const [cart, setCart] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []);
    const[price, setPrice] = useState(localStorage.getItem("price") ? (localStorage.getItem("price")) : 0);

    const add = () =>{
        swal({
            title: "¿Está seguro de que desea agregar el producto al carrito de compras?",
            icon: "warning",
            buttons: ["Cancelar", "Agregar"],
            dangerMode: true
        }).then(respuesta=>{
            if(respuesta){
                swal("Producto agregado al carrito de compras.", {icon: "success"});
                let id = 20;
                let nombre = "Pizza Personalizada";
                let descripcion = "Pizza personalizada por el usuario";
                let precio = 10000;
                let img = "https://i.pinimg.com/originals/01/43/b9/0143b9cf8da70915d71d2c01eff53031.jpg"
                setCart(add_to_cart({id, nombre, descripcion, precio, img}));
                setPrice(add_to_price(precio));
                window.location.reload();
            }
            else{
                swal({text: "Producto no agregado al carrito de compras.", icon: "error"});
            }
        });
    }

    const [masa, setMasa] = useState("");
    const [tamano, setTamano] = useState("");
    const [carne, setCarne] = useState("");
    const [vegetal, setVegetal] = useState("");
    const [queso, setQueso] = useState("");
    const [cantQueso, setCantQueso] = useState("");

    const handleMasa = (e) =>{
        setMasa(e.target.name);
        console.log(masa)
    }
    return(
        <div>
            <NavbarComponent3/>
            <GlobalStyle/>
            <HomeStyle>
            <div className="mainclass">
                        <div className="form1">
                            <h1 className="text-center"><b>¡Crea tu propia Pizza! Selecciona tus preferencias {masa}</b></h1>
                            <div className="formcontainer">
                                <hr></hr>
                                <div className="container">
                                <div className = "separacion">
                                    <div className = "sector1">
                                        <Form>
                                    <Form.Group className="mb-3" controlId="fecha">
                                    <Form.Label>Seleccione su tipo de Masa 🍕:</Form.Label> <br></br>
                                            <Form.Check type="radio" label="Normal" name="Masas" id="Masa1" onChange = {handleMasa}/>
                                            <Form.Check type="radio" label="Delgada" name="Masas" id="Masa2" onChange = {handleMasa} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="fecha">
                                    <Form.Label>Seleccione su tamaño de Pizza 🍕:</Form.Label> <br></br>
                                            <Form.Check type="radio" label="Familiar" name="Tipo" id="Tipo1" />
                                            <Form.Check type="radio" label="Mediana" name="Tipo" id="Tipo2" />
                                            <Form.Check type="radio" label="Personal" name="Tipo" id="Tipo3" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="fecha">
                                    <Form.Label>Seleccione que carnes desea incluir 🥩:</Form.Label> <br></br>
                                            <Form.Check type="checkbox" label="Carne" name="Carne1" id="Carne1" />
                                            <Form.Check type="checkbox" label="Carne Mechada" name="Carne2" id="Carne2" />
                                            <Form.Check type="checkbox" label="Salchicha" name="Carne3" id="Carne4" />
                                            <Form.Check type="checkbox" label="Jamón" name="Carne4" id="Carne5" />
                                            <Form.Check type="checkbox" label="Pollo" name="Carne5" id="Carne6" />
                                            <Form.Check type="checkbox" label="Tocino" name="Carne6" id="Carne7" />
                                        </Form.Group>
                                        </Form>
                                    </div>
                                    <div className = "sector2">
                                    <Form>
                                    <Form.Group className="mb-3" controlId="fecha">
                                    <Form.Label>Seleccione que vegetales desea incluir🥑:</Form.Label> <br></br>
                                            <Form.Check type="checkbox" label="Aceitunas" name="Vegetal1" id="Vegetal1" />
                                            <Form.Check type="checkbox" label="Choclo" name="Vegetal2" id="Vegetal2" />
                                            <Form.Check type="checkbox" label="Piña" name="Vegetal3" id="Vegetal3" />
                                            <Form.Check type="checkbox" label="Cebolla" name="Vegetal4" id="Vegetal4" />
                                            <Form.Check type="checkbox" label="Pimiento" name="Vegetal5" id="Vegetal5" />
                                            <Form.Check type="checkbox" label="Tomate" name="Vegetal6" id="Vegetal6" />
                                            <Form.Check type="checkbox" label="Champiñones" name="Vegetal7" id="Vegetal7" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="fecha">
                                    <Form.Label>Seleccione su tipo de queso 🧀:</Form.Label> <br></br>
                                            <Form.Check type="radio" label="Queso Gouda" name="Queso" id="Queso1" />
                                            <Form.Check type="radio" label="Queso Mozzarella" name="Queso" id="Queso2" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="fecha">
                                    <Form.Label>Seleccione su cantidad de queso 🧀:</Form.Label> <br></br>
                                            <Form.Check type="radio" label="Normal" name="QuesoCant" id="QuesoCant1" />
                                            <Form.Check type="radio" label="Extra" name="QuesoCant" id="QuesoCant2" />
                                            <Form.Check type="radio" label="Dible" name="QuesoCant" id="QuesoCant3" />
                                        </Form.Group>
                                        </Form>
                                        </div>
                                </div>
                                </div>
                                <div className = "button">
                                <Button onClick = {add}>Agregar al carrito de compras</Button>
                                </div>
                            </div>
                        </div>
                    </div>
            </HomeStyle>

            <br></br>
            <br></br>

            <Footer/>
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
    padding-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
}

.separacion{
    display: flex;
    flexDirection: row;
}

.sector1{
    width: 50%;
}

.sector2{
    width: 50%;
}

.mainclass{
    margin-top: 120px;
    display: flex;
    justify-content: center;
    font-family: Roboto, Arial, sans-serif;
    font-size: 15px;
}

.form1{
    border: 15px solid #DC7633;
    background-color: #fff;
}

.formcontainer {
    text-align: left;
    margin: 2px 90px 15px;
}

.container {
    padding: 2px 0;
    text-align:left;
}

.button{
    display: flex;
    justify-content: center;
    align-items: center;   
}

input[type=rut], input[type=fecha] {
    width: 100%;
    padding: 16px 8px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

.button{
    display: flex;
    justify-content: center;
    align-items: center;
    
}
`