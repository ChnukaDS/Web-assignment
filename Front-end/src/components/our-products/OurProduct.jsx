import React from 'react';
import './OurProduct.css';
import Fried_rice_image from '../../assets/Untitled.png';
import Burger_image from '../../assets/burger-image.png';
import Pizza_image from '../../assets/pizza-image.png';
import Desserts_image from '../../assets/desserts-image.png';
import Beverages_image from '../../assets/beverage-image.png';

export default function OurProduct() {
    return(
        <div className="food-container">

            <div className="first-row">
                <div><a href="/"><img src={Fried_rice_image} alt="home-fried-rice-logo" className='fried-rice-image'/><p>fride rice</p></a></div>
                <div><a href="/"><img src={Burger_image} alt="home-burger-logo" className='burger-image'/><p>burger</p></a></div>
                <div><a href="/"><img src={Pizza_image} alt="home-pizza-logo" className='pizza-image'/><p>pizza</p></a></div>
            </div>

            <div className="second-row">
                <div><a href="/"><img src={Desserts_image} alt="home-dessert-logo" className='dessert-image'/><p>dessert</p></a></div>
                <div><a href="/"><img src={Beverages_image} alt="home-beverage-logo" className='beverage-image'/><p>beverages</p></a></div>
            </div>
            
        </div>
    )
}