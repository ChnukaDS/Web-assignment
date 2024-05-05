import React from "react";
import Chef_logo from '../../assets/chef-team.jpeg';
import Dinner_logo from  '../../assets/dinner-couple.webp';
import './AfterProduct.css';

export default function AfterProduct() {
    return(
        <div className="p-container">
            <div className="paragraph">
                <h1 className="topic">Creating a Memorable Dining Experience: Beyond the Food !</h1>
                <p className="par-text">
                    Every meal at Dine Dish transcends the conventional because we create eating experiences that are memorable long after the flavours fade, rather than just meals. A perfect supper, in our opinion, is about more than simply the cuisine.
                    <br /><br/>It is all about the surround, the conversation, and the emotional bond that arises from time spent together. Our staff places a strong emphasis on paying close attention to every little detail, from selecting local, fresh ingredients to 
                    carefully balancing flavours and textures. Every meal is an occasion meant to satiate the soul, spark discussion, and stimulate the senses.
                </p>
                <div className="btn-learn"><a href="/">Learn More</a></div>
            </div>
            <div className="image-container">
                <img src={Chef_logo} alt="chef-team-logo" className="img-1" />
                <img src={Dinner_logo} alt="dinner-couple-logo" className="img-2" />
            </div>
        </div>
    )
}