import React from "react";
import "./Homepage.css"
import Heading from "../Heading/Heading.jsx";
import ImageCart1 from "../ImageCarts/ImageCart1.jsx";

import Image1 from "../../assets/imageCart1.png"
import Image2 from "../../assets/imageCart2.png"
import Image3 from "../../assets/imageCart3.png"

import ImageCart2 from "../ImageCarts/ImageCart2.jsx";

import item1 from "../../assets/item1.png"
import item2 from "../../assets/item2.png"
import item4 from "../../assets/item4.png"
import item5 from "../../assets/item5.png"
import item6 from "../../assets/item6.png"

import item7 from "../../assets/item7.png"
import item8 from "../../assets/item8.png"

import item9 from "../../assets/item9.png"


const Homepage = () => {
    return <>
        <div className="homepage-img">

            <div className="texts">
                <div className="contents">
                    <p className="text1">New Arrival</p>
                    <p className="text2">Discover Our <br />New Collection</p>
                    <p className="text3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam officiis facilis esse, </p>
                    <button className="btn">
                        BUY NOW
                    </button>
                </div>
            </div>
        </div>

        <div>
            <Heading text={"Browse The Range"} />
            <p style={{ textAlign: "center" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="Images">


                <ImageCart1 src={Image1} text={"Dining"} />

                <ImageCart1 src={Image2} text={"Living"} />

                <ImageCart1 src={Image3} text={"Bedroom"} />



            </div>

        </div>

        <div className="ourProducts">
            <Heading text={"Our Products"} />
            <div className="cartsItems">
                <div className="carts">
                    <ImageCart2 src={item1} heading={"Syltherine"} subheading={"Stylish cafe chair"} price={2500} />
                    <ImageCart2 src={item2} heading={"Lolito"} subheading={"Stylish cafe chair"} price={500} />
                    <ImageCart2 src={item4} heading={"Respira"} subheading={"Stylish cafe chair"} price={2200} />
                    <ImageCart2 src={item5} heading={"Grifo"} subheading={"Stylish cafe chair"} price={2700} />
                    <ImageCart2 src={item6} heading={"Muggo"} subheading={"Stylish cafe chair"} price={200} />
                    <ImageCart2 src={item7} heading={"Grifo"} subheading={"Stylish cafe chair"} price={2700} />
                    <ImageCart2 src={item8} heading={"Pingky"} subheading={"Stylish cafe chair"} price={2300} />
                    <ImageCart2 src={item9} heading={"Potty"} subheading={"Stylish cafe chair"} price={2400} />


                </div>
            </div>

            <div className="center">
                <button className="btn2">Show More</button>
            </div>
        </div>

        <div className="rooms">
            <div className="content">
                <p className="text2">50+ Beautiful rooms <br /> inspiration</p>
                <p>Our designer already made a lot of Beautiful <br />prototype of room that inspire you</p>
                <button className="btn">Explore More</button>
            </div>

            <div className="images">
                <div className="contents2">
                    <p className="text1">
                        01 -- Bed Room
                    </p>
                    <p className="text">
                        Inner Peace
                    </p>
                </div>
                <button className="btn btn-end">{"->"}</button>
            </div>
        </div>
        <hr className="hr" />


        <div class="parent">
            <div class="div1 flex2">
                <p className="text1">Furniro</p>
                <p> Coral Gables,
                    FL 33134 USA</p>
            </div>
            <div class="div2 flex2">
                <p>Links</p>
                <p>Home</p>
                <p>Shop</p>
                <p>About</p>
                <p>Contact</p>
            </div>
            <div class="div3 flex2">

                <p>Help</p>
                <p>Payment Options</p>
                <p>Returns</p>
                <p>Privacy Policy</p>
            </div>
            <div class="div4 flex2">
                <p>Newsletter</p>
                <input type="text" className="input" placeholder="Enter your Email" />
                <button className="btn">Suscribe</button>
            </div>

        </div>
        <hr className="hr" />
        <p style={{ textAlign: "center" }}>2023 furino. All rights reverved. Website Made with ❤ <a href="https://www.linkedin.com/in/piyush-kumar-jha-a29619239/">Piyush</a> and designed by <a href="https://uiuxexperts.github.io/portfolio/">Aashifa sheikh</a></p>




    </>;
};

export default Homepage;
