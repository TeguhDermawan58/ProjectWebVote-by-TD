import React, { Component } from "react";
import './login.css';

export default class Login2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://127.0.0.1:8000/api/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password,
                }),
            });

            if (response.status === 200) {
                const data = await response.json();
                console.log(data);
            } else {
                console.error("Login failed!");
            }
        } catch (error) {
            console.error("An error occurred while logging in.", error);
        }
    }

    render() {
        return (
            <>
            <div className="form-container sign-in-container">
                <form>
                    <h1>Sign in</h1>
                    <span>or use your account</span>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        />
                    <a href="/#">Forgot your password?</a>
                    <button onClick={this.handleLogin} type="submit">Sign In</button>
                </form>
            </div>
            {/* overlay */}
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us, please sign in with your personal info</p>
                        <button className="ghost" id="signIn">Sign In</button>
                    </div>
                </div>
            </div>
            </>
        );
    }
}
