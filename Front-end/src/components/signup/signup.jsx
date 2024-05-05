import React from 'react'

export default function Sign(){
  return (
    <div className='main-container'>
    <form className='form'>
            <div className="container">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <hr/>

                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required/>

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>

                <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
                
                <label>
                    <input type="checkbox" defaultChecked={true} name="remember" style={checkboxStyle}/> Remember me
                </label>
                
                <p>By creating an account you agree to our <a href="#" style={linkStyle}>Terms & Privacy</a>.</p>

                <div className="clearfix">
                    <button type="button" className="cancelbtn">Cancel</button>
                    <button type="submit" className="signupbtn">Sign Up</button>
                </div>
            </div>
        </form>
    </div>
  )
}

const formStyle = {
    border: '1px solid #ccc',
};

const checkboxStyle = {
    marginBottom: '15px',
};

const linkStyle = {
    color: 'dodgerblue',
};
