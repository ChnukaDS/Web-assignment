import React from "react";
import "./login.css";
import login_avatar from "../../assets/login_avatar.jpg";


export default function Login() {
    return (
        <div className="main-container">
            <form className="form">
                <div className="imgcontainer">
                    <img src={login_avatar} alt="Avatar" className="avatar"/>
                </div>

                <div className="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required/>

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>
                        
                    <button type="submit">Login</button>
                    <label>
                    <input type="checkbox" defaultChecked={true} name="remember"/> Remember me
                    </label>
                </div>

                <div className="forget" style={{backgroundColor: "#f1f1f1"}}>
                    <button type="button" className="cancelbtn">Cancel</button>
                    <span className="psw">Forgot <a href="#">password?</a></span>
                </div>
            </form>
        </div>
    );
}
