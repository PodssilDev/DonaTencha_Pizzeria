import React, { Component } from "react";
import Navbar from "./Navbar";
import pepperoni from "../img/pepperoni.jpg";

export default function Home(){
    return(
        <div>
        <Navbar></Navbar>
        <div class="container">
        <h1><b>Menú</b></h1>
        <div data-reflow-type="product-list" data-reflow-layout="cards" data-reflow-order="date_desc" data-reflow-product-link="/product.html?product={id}">
            <div class="reflow-product-list ref-cards">
                <div class="ref-products">
                        <div class="ref-product-data">
                            <div class="ref-product-info">
                        
                                <h4 class="ref-name">Pizza Americana</h4>
                                <img src={pepperoni} alt="" width="160px" height="69px" />
                                <p class="ref-excerpt">Pizza hecha con Jamón, Carne, Salchicha y Pepperoni.</p>
                            </div>
                            <p class="ref-price">$8.500</p>
                        </div>
                    <a class="ref-product" href="/product.html?product=2012025209"><img src={pepperoni} alt="" width="160px" height="69px" />
                        <div class="ref-product-data">
                            <div class="ref-product-info">
                                <h5 class="ref-name">Smart Watch</h5>
                                <p class="ref-excerpt">Velit omnis dicta consequatur vel aut fugiat pariatur.</p>
                            </div>
                            <p class="ref-price">$31.77</p>
                        </div>
                    </a><a class="ref-product" href="/product.html?product=1799137284">
                        <div class="ref-product-data">
                            <div class="ref-product-info">
                                <h5 class="ref-name">Sneakers</h5>
                                <p class="ref-excerpt">Autem sed facilis accusantium dolor.</p>
                            </div>
                            <p class="ref-price">$6.45</p>
                        </div>
                    </a><a class="ref-product" href="/product.html?product=1611547343">
                        <div class="ref-product-data">
                            <div class="ref-product-info">
                                <h5 class="ref-name">Vintage Camera</h5>
                                <p class="ref-excerpt">Eveniet omnis et et hic.</p>
                            </div>
                            <p class="ref-price">$36.73</p>
                        </div>
                    </a><a class="ref-product" href="/product.html?product=1431952778">
                        <div class="ref-product-data">
                            <div class="ref-product-info">
                                <h5 class="ref-name">Tea Cup</h5>
                                <p class="ref-excerpt">Quas eveniet fugiat repellendus.</p>
                            </div>
                            <p class="ref-price">$49.72</p>
                        </div>
                    </a><a class="ref-product" href="/product.html?product=1252750421">
                        <div class="ref-product-data">
                            <div class="ref-product-info">
                                <h5 class="ref-name">Game Boy</h5>
                                <p class="ref-excerpt">Magni et fuga ipsam minima et.</p>
                            </div>
                            <p class="ref-price">$37.63</p>
                        </div>
                    </a><a class="ref-product" href="/product.html?product=1065684752">
                        <div class="ref-product-data">
                            <div class="ref-product-info">
                                <h5 class="ref-name">Cruiser</h5>
                                <p class="ref-excerpt">Ut voluptatem harum dolores sed molestiae dolorum.</p>
                            </div>
                            <p class="ref-price">$12.30</p>
                        </div>
                    </a><a class="ref-product" href="/product.html?product=886352347">
                        <div class="ref-product-data">
                            <div class="ref-product-info">
                                <h5 class="ref-name">Controller</h5>
                                <p class="ref-excerpt">Id odio sit excepturi temporibus necessitatibus est qui.</p>
                            </div>
                            <p class="ref-price">$36.37</p>
                        </div>
                    </a><a class="ref-product" href="/product.html?product=673595622">
                        <div class="ref-product-data">
                            <div class="ref-product-info">
                                <h5 class="ref-name">Vintage Phone</h5>
                                <p class="ref-excerpt">Et est vel illum iure suscipit aspernatur corrupti.</p>
                            </div>
                            <p class="ref-price">$28.49</p>
                        </div>
                    </a><a class="ref-product" href="/product.html?product=494001057">
                        <div class="ref-product-data">
                            <div class="ref-product-info">
                                <h5 class="ref-name">Vintage Clock</h5>
                                <p class="ref-excerpt">Rem nobis id dolor voluptatum eius facere incidunt.</p>
                            </div>
                            <p class="ref-price">$20.41</p>
                        </div>
                    </a><a class="ref-product" href="/product.html?product=306410092">
                        <div class="ref-product-data">
                            <div class="ref-product-info">
                                <h5 class="ref-name">Notepad</h5>
                                <p class="ref-excerpt">Ut quia totam harum sequi.</p>
                            </div>
                            <p class="ref-price">$41.11</p>
                        </div>
                    </a><a class="ref-product" href="/product.html?product=127733047">
                        <div class="ref-product-data">
                            <div class="ref-product-info">
                                <h5 class="ref-name">Cup</h5>
                                <p class="ref-excerpt">Asperiores voluptatem qui consequatur quidem quo dolor.</p>
                            </div>
                            <p class="ref-price">$31.53</p>
                        </div>
                    </a><a class="ref-product" href="/product.html?product=2095884274">
                        <div class="ref-product-data">
                            <div class="ref-product-info">
                                <h5 class="ref-name">Reusable Cup</h5>
                                <p class="ref-excerpt">Dolor ex non sunt voluptas.</p>
                            </div>
                            <p class="ref-price">$46.03</p>
                        </div>
                    </a><a class="ref-product" href="/product.html?product=1883127485">
                        <div class="ref-product-data">
                            <div class="ref-product-info">
                                <h5 class="ref-name">Ambulance Toy</h5>
                                <p class="ref-excerpt">Vel neque eligendi non dolorum ea qui.</p>
                            </div>
                            <p class="ref-price">$22.75</p>
                        </div>
                    </a><a class="ref-product" href="/product.html?product=1695144312">
                        <div class="ref-product-data">
                            <div class="ref-product-info">
                                <h5 class="ref-name">Sunglasses</h5>
                                <p class="ref-excerpt">Consequatur sit quo temporibus repellendus perspiciatis non neque vero.</p>
                            </div>
                            <p class="ref-price">$16.23</p>
                        </div>
                    </a><a class="ref-product" href="/product.html?product=1515941891">
                        <div class="ref-product-data">
                            <div class="ref-product-info">
                                <h5 class="ref-name">Radio</h5>
                                <p class="ref-excerpt">Quis qui in ducimus in est iusto.</p>
                            </div>
                            <p class="ref-price">$11.35</p>
                        </div>
                    </a><a class="ref-product" href="/product.html?product=1337264846">
                        <div class="ref-product-data">
                            <div class="ref-product-info">
                                <h5 class="ref-name">Oxford Shoes</h5>
                                <p class="ref-excerpt">Rerum qui veritatis rerum velit quia corrupti.</p>
                            </div>
                            <p class="ref-price">$21.85</p>
                        </div>
                    </a><a class="ref-product" href="/product.html?product=1149543817">
                        <div class="ref-product-data">
                            <div class="ref-product-info">
                                <h5 class="ref-name">Clock</h5>
                                <p class="ref-excerpt">Quis est aut accusamus nobis fugiat quo et.</p>
                            </div>
                            <p class="ref-price">$20.11</p>
                        </div>
                    </a><a class="ref-product" href="/product.html?product=970341460">
                        <div class="ref-product-data">
                            <div class="ref-product-info">
                                <h5 class="ref-name">Headphones</h5>
                                <p class="ref-excerpt">Veritatis omnis similique ipsa explicabo molestiae rerum.</p>
                            </div>
                            <p class="ref-price">$22.15</p>
                        </div>
                    </a><a class="ref-product" href="/product.html?product=757192479">
                        <div class="ref-product-data">
                            <div class="ref-product-info">
                                <h5 class="ref-name">Earrings</h5>
                                <p class="ref-excerpt">Eaque alias repellendus voluptas.</p>
                            </div>
                            <p class="ref-price">$35.46</p>
                        </div>
                    </a></div>
            </div>
        </div>
    </div>

        </div>
    )
}