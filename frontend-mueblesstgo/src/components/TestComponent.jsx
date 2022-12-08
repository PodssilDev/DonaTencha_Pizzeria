import React from "react";
import {useState, useEffect} from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import {Drawer} from "@mui/material"
import add_to_cart from "../components/Carrito/add_to_cart";
import remove_cart from "../components/Carrito/remove_cart";
import remove_from_cart from "../components/Carrito/remove_from_cart";
import ProductCartComponent from "./ProductCartComponent";
export default function Test(){
    const [show, setShow] = useState(false);

    
    const [cart, setCart] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []);

    const add = (id, nombre, descripcion, precio, img) =>{
        console.log(cart)
        console.log(nombre)
        setCart(add_to_cart({id, nombre, descripcion, precio, img}));
        console.log(cart);
    }

    const remove_i = (id) =>{
        setCart(remove_from_cart(id, false));
        console.log(cart);
        console.log("a");
    }
    
    return(
        <div className="test">
            <Button onClick= {() => setShow(true)}>Offcanvas</Button>
            <Drawer anchor = "left" open = {show} onClose = {() => setShow(false)}> 
            <div className = "asd">
            {cart.length === 0 ? <h1>Carrito vacío</h1> :
            cart.items.map(itemm => {
                return(
                    <>
                    <ProductCartComponent id={itemm.id} nombre={itemm.nombre} precio={itemm.precio} img={itemm.img} cantidad = {itemm.quantity} add={() => add(itemm.id, itemm.nombre, itemm.descripcion, itemm.precio, itemm.img)} remove_item = {() => remove_i(itemm.id)}></ProductCartComponent>

                    
                        </>
            );
            })}
            </div>
            </Drawer>
            {cart.items[0].nombre}
        </div>
        
    );
}