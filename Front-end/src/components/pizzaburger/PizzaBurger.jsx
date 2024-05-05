import React from "react";
import './PizzaBurger.css';
import Pizza_burger_logo from '../../assets/pizza-burger-image.webp';

export default function PizzaBurger(){
    return(
        <div className="pizza-container">
            <div className="img-section"><img src={Pizza_burger_logo} alt="home-pizza-burger-logo" className="pizza-burger" /></div>
            <div className="text-section">
                <h1 className="pizza-topic">Try out our newest product <br /> The Pizza Burger!</h1>
                <div className="text">Our brand new Pizza Burger combines the hearty, satisfying feel of a classic burger with the irresistible flavors of a freshly baked pizza. Each bite is a burst of flavors, featuring a juicy, perfectly seasoned beef patty, layered with our signature pizza sauce, melted mozzarella cheese, all enclosed in a soft, pizza dough bun. Finished with a touch of basil, 
                this innovative creation will satisfy your pizza cravings and burger fantasies all at once! <br /> <br />
                Experience the Pizza Burger today – where pizza meets burger in the most delicious way possible!
                </div>
                <div className="btn-container"><div className="order-btn"><a href="/">Order Now</a></div></div>
            </div>
        </div>
    )
}