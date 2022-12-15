//Create a new component called Carrousel with bootstrap
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../imgs/logo.png";
import publicidad1 from "../imgs/publicidad1.png";
import publicidad2 from "../imgs/publicidad2.jpg";
import publicidad3 from "../imgs/publicidad3.jpg";


function MyCarrousel(){
    return (<>
    <HomeStyle>
            <Container>
                <div className="carrousel">
                <Row>
                    <Col>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={logo}
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={publicidad1}
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={publicidad2}
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={publicidad3}
                                    alt=""
                                />
                            </Carousel.Item>

                        </Carousel>
                    </Col>
                </Row>
                </div>
            </Container>
            </HomeStyle>
        </>
        
    );
}

export default function Carrousel(){
    return(
            <MyCarrousel/>
    );
}

const HomeStyle = styled.nav`

.carousel-item img {
    height: 100% !important;
    width: 100% !important;
  }
  
  .carousel-item {
    height: 500px;
    width: 500px
    overflow: hidden;
  }
  `