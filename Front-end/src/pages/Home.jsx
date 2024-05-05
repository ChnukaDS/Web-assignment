import React from "react";
import Header from "../components/header/header";
import OurProduct from "../components/our-products/OurProduct";
import AfterProduct from "../components/afterproduct/AfterProduct";
import PizzaBurger from "../components/pizzaburger/PizzaBurger";
import Footer from "../components/footer/Footer";


export default function Home(){
    return(
        <>
            <Header/>
            <OurProduct />
            <AfterProduct />
            <PizzaBurger />
            <Footer />
        </>
    )
}