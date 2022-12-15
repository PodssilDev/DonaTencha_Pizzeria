import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'
import NavbarComponent3 from "./NavbarComponent3";
import Button from 'react-bootstrap/Button';
import Footer from "../components/Footer";
import Form from 'react-bootstrap/Form';
import add_to_boleta_factura from "./Carrito/boleta_factura";
import add_to_metodo_pago from "./Carrito/metodo_pago";
import swal from 'sweetalert';
import remove_cart from "./Carrito/remove_cart";
import remove_price from "./Carrito/remove_price";

export default function Pago(){

    const [cart, setCart] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []);

    const[price, setPrice] = useState(localStorage.getItem("price") ? (localStorage.getItem("price")) : 0);

    const[siPropina, setPropina] = useState("0");

    const[boletaFactura, setBoletaFactura] = useState("");

    const[metodoPago, setMetodoPago] = useState("");

    const handleEfectivo = () => {
        setMetodoPago(add_to_metodo_pago("PAGO CON EFECTIVO"))
    }

    const handleTarjeta = () => {
        setMetodoPago(add_to_metodo_pago("PAGO CON TARJETA"))
    }

    const handleWebpay = () => {
        setMetodoPago(add_to_metodo_pago("PAGO CON WEBPAY"))
    }

    const handleBoleta = () => {
        setBoletaFactura(add_to_boleta_factura("BOLETA"));
    }

    const handleFactura = () => {
        setBoletaFactura(add_to_boleta_factura("FACTURA"));
    }



    const handleChange1 = () => {
        setPropina("5");
    }

    const handleChange2 = () => {
        setPropina("10");
    }

    const handleChange3 = () => {
        setPropina("0");
    }

    const pagarCompra = () =>{
        swal({
            title: "¿Está seguro que quiere pagar su pedido",
            text: "¡No podrá deshacer esta acción!",
            icon: "warning",
            buttons: ["Cancelar", "Confirmar"],
            dangerMode: true
        }).then(respuesta => {
            if(respuesta){
                swal("¡Su pedido ha sido pagado!",  {icon: "success"})
                setCart(remove_cart());
                setPrice(remove_price());
                localStorage.removeItem("propina");
                window.location.href = "/pedido-confirmado";
            }
            else{
                swal("¡Su pedido no ha sido pagado!",  {icon: "error"})
            }
        })
    }
    return(
        <div>
        <NavbarComponent3></NavbarComponent3>
        <GlobalStyle/>
        <Styles>

<div className="mainclass">
        <div className="form1">
                            <h1 className="text-center"><b><u>¡Ya casi está listo!</u></b></h1>
                            <div className="formcontainer">
                                <div className="container">
                                    <Form>
                                        <img src = "https://dplnews.com/wp-content/uploads/2019/04/dplnews_efectivo_jb190419.jpg"  height = "20px" width = "30px"></img>
                                    <Form.Group className="mb-3" controlId="fecha">
                                    <Form.Label>Si quiere dar una propina, seleccione el porcentaje:</Form.Label> <br></br>
                                            <Form.Check type="radio" label="Sin propina (0%)" name="formHorizontalRadios" id="formHorizontalRadios1" onChange = {handleChange3}/>
                                            <Form.Check type="radio" label="Propina del 5%" name="formHorizontalRadios" id="formHorizontalRadios2" onChange = {handleChange1}/>
                                            <Form.Check type="radio" label="Propina del 10%" name="formHorizontalRadios" id="formHorizontalRadios3" onChange = {handleChange2}/>
                                        </Form.Group>
                                        <img src = "https://cdn-icons-png.flaticon.com/512/2331/2331876.png" height = "20px" width = "30px"></img>
                                        <img src = "https://static.vecteezy.com/system/resources/previews/004/595/811/non_2x/hand-swipe-credit-card-on-payment-device-mobile-banking-and-shopping-symbol-concept-cartoon-illustration-vector.jpg" height = "20px" width = "30px"></img>
                                        <img src = "https://www.thedreamauctions.com/wp-content/uploads/2022/02/webpay-logo.png" height = "20px" width = "30px"></img>
                                        <Form.Group className="mb-3" controlId="fecha">
                                    <Form.Label>Seleccione su método de pago:</Form.Label> <br></br>
                                            <Form.Check type="radio" label="Pago con efectivo" name="formHorizontalRadis" id="formHorizontalRadios1" onChange = {handleEfectivo}/>
                                            <Form.Check type="radio" label="Pago con tarjeta" name="formHorizontalRadis" id="formHorizontalRadios2" onChange = {handleTarjeta}/>
                                            <Form.Check type="radio" label="Pago con WEBPAY" name="formHorizontalRadis" id="formHorizontalRadios3" onChange = {handleWebpay}/>
                                        </Form.Group>
                                        <Form.Group className = "mb-3" controlId = "fecha">
                                            <Form.Label>¿Desea recibir boleta o factura en su correo?</Form.Label> <br></br>
                                            <Form.Check type="radio" label="Boleta" name="formHorizontalRadi" id="formHorizontalRadios1" onChange = {handleBoleta}/>
                                            <Form.Check type="radio" label="Factura" name="formHorizontalRadi" id="formHorizontalRadios2" onChange = {handleFactura}/>
                                        </Form.Group>
                                    </Form>
                                </div>
                                <div className = "pagos-totales">
                                    <h6> Subtotal: ${price}</h6>
                                    {siPropina == "5" ? 
                                    <>
                                    <h6> Propina: ${Math.round(price*0.05)}</h6>
                                    <h6> <b>Total a pagar: ${Number(price) + Math.round(price * 0.05)}</b></h6>
                                    </>
                                    : siPropina == "10" ?
                                    <>
                                    <h6>Propina: ${Math.round(price*0.1)}</h6>
                                    <h6> <b>Total a pagar: ${Number(price) + Math.round(price * 0.1)}</b></h6>
                                    </>
                                    : <> <h6>Propina: ${price*0}</h6>
                                    <h6> <b>Total a pagar: ${price}</b></h6>
                                    </>
}
                                <Button className="boton" onClick = {pagarCompra}>Pagar la compra</Button>
                                </div>
                            </div>
                        </div>

        </div>
                        </Styles>
                        <Footer></Footer>
                        </div>
                        
    )
}

const GlobalStyle = createGlobalStyle`
    body { 
        background-color: #CD6155;
`

const Styles = styled.div`
.text-center {
    text-align: center;
    justify-content: center;
    padding-top: 20px;

}

.box-area{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

}
.mainclass{
    margin-top: 110px;
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