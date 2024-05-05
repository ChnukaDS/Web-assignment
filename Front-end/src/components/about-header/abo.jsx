import React from "react";
import About_img from '../../assets/image 5.png';
import Col_1 from '../../assets/image 6.png';
import Pastry1 from '../../assets/Image7.png';
import Pastry2 from '../../assets/image8.png';
import Vec from '../../assets/Vector.png';
import Photo_3 from '../../assets/image 3.png';
import './abo.css'
import Footer from "../footer/Footer";

export default function Abo(){
    return(
        <div className="main-container">
            <div className="row1">
                <div className="div11">
                    <img src={About_img} alt="About image" className="about-image1" />
                    <h1 className="heading1">Why Dine Dish  ?</h1>
                </div>    
            </div>
            <div className="row2">
                <div className="col1">
                    <img src={Col_1} alt="Pizza-photo" className="col1-photo" />
                </div>
                <div className="col1 middle">
                    <p className="p1">Every meal at Dine Dish transcends the conventional because we
                         create eating experiences that are memorable long after the 
                         flavours fade, rather than just meals. A perfect supper, in 
                         our opinion, is about more than simply the cuisine. <br /><br />
                        It is all about the surround, the conversation, and the 
                        emotional bond that arises from time spent together. Our
                         staff places a strong emphasis on paying close attention
                          to every little detail, from selecting local, fresh 
                          ingredients to carefully balancing flavours and textures.
                           Every meal is an occasion meant to satiate the soul, 
                           spark discussion, and stimulate the senses.</p>
                </div>
                <div className="col1">
                    <img src={Pastry1} alt="Photo-of-pastry" className="pastry1" />
                    <img src={Pastry2} alt="Photo-of-pastry" className="pastry2" />
                </div>
            </div>
            <div className="row3">
                <div className="box">
                    <div className="box-content">
                        <img src={Vec} alt="Location-Tag" className="locate" />
                        <p className="vec-p">SERVICING 1000+ <br/>
                        RESTAURANTS AND <br /> FOOD <br /> SERVICE INSTITUTIONS
                        </p>
                    </div>    
                </div>
                <div className="box">
                    <div className="box-content">
                            <img src={Vec} alt="Location-Tag" className="locate" />
                            <p className="vec-p">SERVICING 1000+ <br/>
                            RESTAURANTS AND <br /> FOOD <br /> SERVICE INSTITUTIONS
                            </p>
                    </div>
                    </div>
                <div className="box">
                    <div className="box-content">
                            <img src={Vec} alt="Location-Tag" className="locate" />
                            <p className="vec-p">SERVICING 1000+ <br/>
                            RESTAURANTS AND <br /> FOOD <br /> SERVICE INSTITUTIONS
                            </p>
                    </div>
                </div>
            </div>
            <div className="row4">
                <img src={Photo_3} alt="A photo" className="photo-3" />
                <div className="row4-content">
                    <h1 className="row4-heading">Our Mission</h1>
                    <p className="row4-p">Jim Martin, president and son of the company’s
                    founders says his father Lloyd used to say this about our potato roll
                    business. “Of course, Dad would say it with a chuckle, since at that
                    time we were just a local brand. <br />
                    Yet now that people <br />
                    recognize our brand in places like Dubai and around the world, and we 
                    see how excited folks are about our products, we feel 
                    very honored and humbled that our rolls are indeed ‘famous.’ We’re 
                    blessed to be able to provide bread and rolls 
                    that give people such enjoyment.” From selling products in local farmer’s 
                    markets in Central Pennsylvania to having regional, national, and 
                    international distribution models, Martin’s Famous Potato Rolls and
                    Bread has indeed become “famous.”</p>
                </div>
                
            </div>
            <Footer />
        </div>
    )
}