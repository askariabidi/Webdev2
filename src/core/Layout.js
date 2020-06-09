import React from "react";
import Menu from "./Menu";
import "../styles.css";
import Pic1 from "../images/Pic1.jpg";
import Pic2 from "../images/Pic2.jpg";
import Pic3 from "../images/Pic3.jpeg";

const Layout = ({
    className,
    children
}) => (
    <div>
        <div>
            <Menu />
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel" data-interval="3000">
            <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
 
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Pic1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Pic2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Pic3} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
        <br/> <br/>
        <div className={className}>{children}</div>
    </div>
);

export default Layout;
