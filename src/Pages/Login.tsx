import React from 'react';
import Banner from "../Assets/signin.png";
import Logo from "../Assets/logo.svg";
import "../Styles/Pages/auth.scss";
import { useDataProvider } from '../Context/UserContext';
import { useNavigate } from 'react-router';

const Login = () => { 
    const navigate = useNavigate();
    React.useEffect(() => {

        setTimeout(() => {
            alert("You can login with mock data, authentication isn't connected to a backend server.");
        }, 1500);
       
    }, []);

const {auth, setAuth} = useDataProvider();
//state to show and hide input password
const[password, setPassword] = React.useState(true);

//function to handle submit
const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //navigate to users page
    navigate("/users");
}

    return (
<section className='authContainer'>
        <header className='authHeader'>
            <img src={Logo} alt={"LoginLogo"}/>
        </header>
    <main className='authBody'>
        <div className='authImageContainer'>
            <img src={Banner} alt="Lendsqr welcome screen visual"/>
        </div>
        
        <div className='authFormContainer'>
            <h1>Welcome</h1>
            <p>Enter details to login</p>

            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder="Username"
                value={auth?.username}
                required
                onChange={(e) => {
                    setAuth?.({password: auth?.password as string, username: e.target.value });
                }}/>
                <div className="inputPassword">
                <input type={password ? "password" : "text"} placeholder="Password"
                required
                  value={auth?.password}
                  onChange={(e) => {
                      setAuth?.({username: auth?.username as string, password: e.target.value });
                  }}/>
                <button type='button' onClick={() => setPassword(prev => !prev)}>{password ? "show" : "hide"}</button>
                </div>
                <button className="forgotpwd">FORGOT PASSWORD?</button>
                <button type='submit' className="authSubmitBtn">LOG IN</button>
            </form>
        </div>
        </main>
    </section>
)}

export default Login;