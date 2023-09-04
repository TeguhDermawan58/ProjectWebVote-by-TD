import React, {useEffect} from "react";
import "./login.css"
import SocialMedia from "../socialmedia/socialmedia";


function Registration (){
    useEffect(() => {
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

    return(
        <div>
          {/* regis form */}
          <div className="container3 right-panel-active" id="container3">
                <div className="form-container sign-up-container">
                    <form action="/#">
                        <h1>Create Account</h1>
                       <SocialMedia/>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>
                {/* login form */}
                <div className="form-container  sign-in-container">
                    <form action="/#">
                        <h1>Sign in</h1>
                       <SocialMedia/>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="/#">Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
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
        </div>
    )
}

export default Registration;