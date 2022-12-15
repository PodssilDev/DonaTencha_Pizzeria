import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'
import NavbarComponent3 from "./NavbarComponent3";
import Button from 'react-bootstrap/Button';
import Footer from "../components/Footer";

export default function Confirmacion(){
    const[boletaFactura, setBoletaFactura] = useState(localStorage.getItem("boleta_factura") ? (localStorage.getItem("boleta_factura")) : "");

    const[metodoPago, setMetodoPago] = useState(localStorage.getItem("metodo_pago") ? (localStorage.getItem("metodo_pago")) : "");

    return(
        <div>
            <NavbarComponent3></NavbarComponent3>
            <GlobalStyle/>
            <HomeStyle>
              {metodoPago == "PAGO CON WEBPAY" ? 
              <>
              <div className="mainclass">
                        <div className="form1">
                            <h1 className="text-center"><b>¡Lo estamos esperando!</b></h1>
                            <div className="formcontainer">
                                <hr></hr>
                                <div className="container">
                                    <h4 className = "text-center">Solo debe terminar el proceso de pago en la <b>página de Webpay</b> y su pedido estará confirmado.</h4>
                                    <br></br>
                                    <div className = "button">
                                    <a href = "/"><Button>Continuar a WEBPAY</Button></a>
                                    </div>
                                    <br></br>
                                    <h4 className = "text-center">Una vez que realice el pago en Webpay, se enviará a su correo electronico una <b>{boletaFactura}</b> del pedido.</h4>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                    </div>
              
              </>:
              <>
                            <div className="mainclass">
                        <div className="form1">
                            <h1 className="text-center"><b>¡Pedido confirmado y pagado!</b></h1>
                            <div className="formcontainer">
                                <hr></hr>
                                <div className="container">
                                    <h4 className = "text-center">Su pedido ha sido confirmado. Usted ha pagado con: <b>{metodoPago}. </b></h4>
                                    <br></br>
                                    <h4 className = "text-center">Se ha enviado una <b>{boletaFactura}</b> a su correo electronico.</h4>
                                    <br></br>
                                    <h4 className = "text-center"> Su pedido estará listo en: {Math.round(Math.random()*100)} minutos</h4>
                                    <br></br>
                                    <div className="button">
                                    <a href = "/"><Button> Volver al menú principal</Button></a>
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                    </div>
              </>}
              </HomeStyle>
              <br></br>
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
    padding-top: 20px;
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
`