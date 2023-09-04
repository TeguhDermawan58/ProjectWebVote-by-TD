import React, { useEffect,useState } from "react";
import "./login.css";
import SocialMedia from "../socialmedia/socialmedia";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useNavigate} from "react-router-dom"

function Login() {
    const navigate = useNavigate();

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [isAuthenticated,setIsAuthenticated] = useState(Boolean(localStorage.getItem('isAuthenticated')));
    
    useEffect(() => {
        const isAuthenticatedFromLocalStorage = Boolean(localStorage.getItem('isAuthenticated'));
        setIsAuthenticated(isAuthenticatedFromLocalStorage);
    }, []);


    const handlelogin = async (event) => {
        event.preventDefault();
        try{
            const response = await axios.post("http://127.0.0.1:8000/api/login/",{
                username,
                password,
            });

            if (response.status === 200){
                localStorage.setItem('isAuthenticated',true)
                setIsAuthenticated(true); // Update the state here
                toast.success("Login successful!"); 
                navigate("/");
            } else {
                toast.error("Login failed!"); 
            }
        } catch (error){
            toast.error("An error occurred while logging in.");
        }
    };

const handleRegister = async (event) => {
    event.preventDefault();
    try{
        const response = await axios.post("http://127.0.0.1:8000/api/register/",{
                username,
                email,
                password
               
            });
        if (response.status === 201){
            toast.success("Registration successful!");
        }else{
            toast.error("Registration failed!");
        }
    } catch(error){
        toast.error("An error occurred while registering.");
    }
};


    useEffect(() => {
        const isAuthenticatedFromLocalStorage = Boolean(
            localStorage.getItem("isAuthenticated")
        );
        setIsAuthenticated(isAuthenticatedFromLocalStorage);



        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container3 = document.getElementById('container3');
      

        const handleSignUpClick = () => {
            container3.classList.add("right-panel-active");
        };

        const handleSignInClick = () => {
            container3.classList.remove("right-panel-active");
        };

        signUpButton.addEventListener('click', handleSignUpClick);
        signInButton.addEventListener('click', handleSignInClick);

        // Clean up event listeners when component unmounts
        return () => {
            signUpButton.removeEventListener('click', handleSignUpClick);
            signInButton.removeEventListener('click', handleSignInClick);
        };
    }, []);

    return (
        <div>
            {/* regis form */}
            <div className="container3" id="container3">
                <div className="form-container sign-up-container">
                    <form action="/#" onSubmit={handleRegister}>
                        <h1>Create Account</h1>
                       <SocialMedia/>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
                {/* login form */}
                {isAuthenticated ? (
                    navigate ("/")
                  ) : (
                    <div className="form-container  sign-in-container">
                    <form action="/#" onSubmit={handlelogin}>
                        <h1>Sign in</h1>
                       <SocialMedia/>
                        <span>or use your account</span>
                        <input type="username" placeholder="username" name="username" value={username} onChange={(e) => setUsername (e.target.value)} />
                        <input type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <a href="/#">Forgot your password?</a>
                        <button type="submit">Sign In</button>
                    </form>
                </div>
                    )}
                {/* overlay */}
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}


export default Login;
