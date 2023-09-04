import React from "react";
import { Link,useLocation,useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import "./header.css";
import axios from "axios";
import { Slide } from "react-awesome-reveal";


function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  const handleLogout = async () =>{
    try{
      await axios.post("http://127.0.0.1:8000/api/logout/");
      localStorage.removeItem('isAuthenticated');
      window.location.reload();
    } catch (error){

    }
  }; 

  const handleloginRedirect = () => {
    navigate ("/login")
  }

  return (
    <div>
      <Slide duration={3000} direction="down" >

      <nav className="navbar navbar-expand-lg arief navbar-primary">
        <div className="container-fluid">
          <Link className="navbar-brand arief-font font-effect-fire" to="/home">
            VoteTD
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navbarcp" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link arief-a" to="/">
                  Home
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link arief-a" to="/candidatelist">
                  Candidatelist
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link arief-a" to="/result">
                  Result
                </Link>
              </li>

              <li className="nav-item">
                    {isAuthenticated ? (
                      <Link className="nav-link arief-a" onClick={handleLogout}>Logout</Link>
                      ) : (
                        <Link className="nav-link arief-a" to="/login">
                            Login
                        </Link>
                    )}
                </li>
            </ul>
          </div>
        </div>
      </nav>
                    </Slide>
    </div>
  );
}

export default Header;
