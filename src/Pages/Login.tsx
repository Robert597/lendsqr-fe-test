import React from 'react';
import Banner from "../Assets/signin.png";
import Logo from "../Assets/logo.svg";
import "../Styles/Pages/auth.scss";

const Login = () => (

    <section className='authContainer'>
        <header className='authHeader'>
            <img src={Logo} alt={"LoginLogo"}/>
        </header>
    <main className='authBody'>
        <div className='authImageContainer'>
            <img src={Banner} alt="Lendsqr welcome screen Image"/>
        </div>
        
        <div className='authFormContainer'>
            <h1>Welcome</h1>
            <p>Enter details to login</p>

            <form>
                <input type="text" placeholder="Email"/>
                <div className="inputPassword">
                <input type="password" placeholder="Password"/>
                <button>Show</button>
                </div>
                <button className="forgotpwd">FORGOT PASSWORD?</button>
                <button type='submit' className="authSubmitBtn">LOG IN</button>
            </form>
        </div>
        </main>
    </section>
)

export default Login;