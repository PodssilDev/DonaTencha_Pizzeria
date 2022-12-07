import React from "react";
import styled from "styled-components";
import logo from "../imgs/logo.png"
import {useState, useEffect} from "react";

export default function NavbarComponent3(){
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 400);
      console.log(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
    return(
      <NavStyle>
        <nav className={`${sticky ? "sticky" : ""}`}>
            <header class="header">
                <div class="logo">
                    <h1>Doña Tencha</h1>
                </div>
                <a class="btn" href="/"><button>Homepage</button></a>
                <a class="btn" href="/menu"><button>Menú</button></a>
                <a class="btn" href="/"><button>Arma tu Pizza</button></a>
                <a class="btn" href="/"><button>Mi carrito</button></a>
            </header>
            </nav>
            </NavStyle>
        
    )
}



const NavStyle = styled.nav`

nav {
  position: fixed;
  top: 0;
  z-index: 99999;
  width: 100%;
  
}
nav.sticky {
  position: fixed;
  top: 0;
  z-index: 99999;
  width: 100%;
}
.header{
    background-color: #DC7633;
    display: flex;
    justify-content: flex-end;

    align-items: center;
    height: 85px;
    padding: 5px 10%;
  }
.header .logo{
    margin-right: auto;
    color: white;
    font-family: 'Pacifico',serif;
  }
.header .imageLogo{
  margin-right: auto;
}
.header .btn button{
    margin-left: 20px;
    font-weight: 700;
    color: #1b3039;
    padding: 9px 25px;
    background: #eceff1;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
  }
.header .btn button:hover{
    background-color: #e2f1f8;
    color: #ffbc0e;
    transform: scale(1.1);
  }

`